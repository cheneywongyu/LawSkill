import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

type InternalSkillPayload = {
  sourceSkill: {
    id: string
    name: string
    chineseName: string
    owner: string
    practice: string
    jurisdiction: string
    risk: 'low' | 'medium' | 'high'
    sourceName: string
    sourceUrl?: string
    mdPath?: string
    skillMdPath?: string
    hasSkillMd?: boolean
  }
  status?: 'draft' | 'published'
  draft: {
    name?: string
    chineseName?: string
    practice?: string
    description: string
    owner: string
    jurisdiction: string
    risk: 'low' | 'medium' | 'high'
    inputMaterials: string
    checklist: string
    prohibited: string
    deliverableTemplate: string
    outputFormat: string
    qaTask: string
    versionNote: string
    approvalNote: string
    customSkillMd?: string
    uploadNames?: string[]
  }
}

const workspaceRoot = process.cwd()
const outputDir = path.join(workspaceRoot, 'outputs/internal-skills-md')
const mdDir = path.join(outputDir, 'md')
const indexPath = path.join(outputDir, 'index.json')

function safeSegment(value: string) {
  return String(value || 'internal-skill')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .toLowerCase() || 'internal-skill'
}

async function readIndex() {
  try {
    return JSON.parse(await readFile(indexPath, 'utf8')) as { skills: unknown[] }
  } catch {
    return { source: 'internal-edited-skills', skills: [] }
  }
}

function buildMarkdown(payload: InternalSkillPayload, savedAt: string) {
  const { sourceSkill, draft } = payload
  const displayName = draft.chineseName?.trim() || `${sourceSkill.chineseName}（我的 Skill）`
  if (draft.customSkillMd?.trim()) return `${draft.customSkillMd.trim()}\n`
  return [
    '---',
    `source_skill_id: ${JSON.stringify(sourceSkill.id)}`,
    `source_skill_name: ${JSON.stringify(sourceSkill.name)}`,
    `source_url: ${JSON.stringify(sourceSkill.sourceUrl || '')}`,
    `source_markdown: ${JSON.stringify(sourceSkill.mdPath || '')}`,
    `source_skill_md: ${JSON.stringify(sourceSkill.skillMdPath || '')}`,
    `saved_at: ${JSON.stringify(savedAt)}`,
    `origin: "my-skill"`,
    `status: ${JSON.stringify(payload.status || 'draft')}`,
    '---',
    '',
    `# ${displayName}`,
    '',
    '## 一、来源与保存策略',
    '',
    `- 来源：${sourceSkill.sourceName}`,
    `- 原始 Skill：${sourceSkill.name}`,
    `- 原始链接：${sourceSkill.sourceUrl || '内部来源'}`,
    `- 外部 SKILL.md：${sourceSkill.hasSkillMd ? sourceSkill.skillMdPath || '已抓取' : '未公开'}`,
    '- 保存位置：我的 Skill 库',
    `- 当前状态：${payload.status === 'published' ? '已发布' : '草稿'}`,
    '',
    '## 二、基础信息',
    '',
    `- Skill 名称：${displayName}`,
    `- 业务分类：${draft.practice?.trim() || sourceSkill.practice}`,
    `- 法域：${draft.jurisdiction || sourceSkill.jurisdiction}`,
    `- 风险等级：${draft.risk}`,
    '',
    '## 三、律师日常任务',
    '',
    draft.description,
    '',
    '## 四、输入材料要求',
    '',
    draft.inputMaterials,
    '',
    '## 五、审查清单',
    '',
    draft.checklist,
    '',
    '## 六、禁止自动判断的事项',
    '',
    draft.prohibited,
    '',
    '## 七、交付物模板',
    '',
    draft.deliverableTemplate,
    '',
    '## 八、输出格式要求',
    '',
    draft.outputFormat,
    '',
    '## 九、试跑任务',
    '',
    draft.qaTask,
    '',
    '## 十、上传附件',
    '',
    ...(draft.uploadNames?.length ? draft.uploadNames.map((name) => `- ${name}`) : ['- 暂无上传附件']),
    '',
    '## 十一、版本说明',
    '',
    draft.versionNote,
    '',
    '## 十二、发布前签核',
    '',
    draft.approvalNote,
    '',
  ].join('\n')
}

export async function GET() {
  const index = await readIndex()
  return Response.json(index)
}

export async function POST(req: NextRequest) {
  const payload = (await req.json()) as InternalSkillPayload
  const savedAt = new Date().toISOString()
  const stamp = savedAt.replace(/[-:.TZ]/g, '').slice(0, 14)
  const myName = payload.draft.name?.trim() || `${payload.sourceSkill.name}-my-skill`
  const myChineseName = payload.draft.chineseName?.trim() || `${payload.sourceSkill.chineseName}（我的 Skill）`
  const myPractice = payload.draft.practice?.trim() || payload.sourceSkill.practice
  const myStatus = payload.status || 'draft'
  const slug = `${safeSegment(myName)}-${stamp}`
  const filename = `${slug}.md`
  const absolutePath = path.join(mdDir, filename)
  const relativePath = path.relative(workspaceRoot, absolutePath)

  await mkdir(mdDir, { recursive: true })
  await writeFile(absolutePath, buildMarkdown(payload, savedAt), 'utf8')

  const savedSkill = {
    id: `internal-edited-${slug}`,
    name: myName,
    chineseName: myChineseName,
    owner: payload.draft.owner || payload.sourceSkill.owner,
    practice: myPractice,
    jurisdiction: payload.draft.jurisdiction || payload.sourceSkill.jurisdiction,
    status: myStatus,
    risk: payload.draft.risk,
    version: `internal-${stamp}`,
    updated: savedAt.slice(0, 10),
    usage: 0,
    rating: 4,
    reviewScore: myStatus === 'published' ? 82 : payload.draft.risk === 'high' ? 72 : 78,
    description: payload.draft.description,
    suitableFor: ['内部本地化改造', '脱敏样本试跑', '进入评审后发布'],
    notFor: payload.draft.prohibited.split('\n').map((item) => item.trim()).filter(Boolean).slice(0, 6),
    workflow: payload.draft.checklist.split('\n').map((item) => item.replace(/^\d+\.\s*/, '').trim()).filter(Boolean).slice(0, 8),
    outputFormat: payload.draft.outputFormat,
    sources: [
      '我的 Skill 库',
      `改造来源：${payload.sourceSkill.sourceName}`,
      payload.sourceSkill.sourceUrl || '内部创建',
    ],
    tags: ['我的 Skill', myPractice, payload.draft.risk],
    origin: 'internal',
    sourceName: '我的 Skill 库',
    sourceUrl: payload.sourceSkill.sourceUrl,
    mdPath: absolutePath,
    internalSavedPath: absolutePath,
    relativeMdPath: relativePath,
    sourceSkillId: payload.sourceSkill.id,
    sourceSkillName: payload.sourceSkill.name,
    sourceSkillMdPath: payload.sourceSkill.skillMdPath || '',
    savedAt,
    isMySkill: true,
    uploadNames: payload.draft.uploadNames || [],
  }

  const index = await readIndex()
  index.skills = [savedSkill, ...(index.skills || [])]
  await writeFile(indexPath, JSON.stringify({ ...index, updatedAt: savedAt }, null, 2), 'utf8')

  return Response.json({ skill: savedSkill, mdPath: absolutePath, relativeMdPath: relativePath })
}
