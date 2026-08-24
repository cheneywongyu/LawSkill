import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const projectRoot = process.cwd()
const crawlRoot = path.join(projectRoot, 'outputs/public-agent-crawl')
const fullPaths = (await readFile(path.join(crawlRoot, 'importable_full_paths.txt'), 'utf8'))
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter(Boolean)

const allowedIds = new Set(fullPaths.map((filePath) => path.basename(path.dirname(filePath))))
const manifestRows = (await readFile(path.join(crawlRoot, 'manifests/items.jsonl'), 'utf8'))
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line) => JSON.parse(line))

const resourcesById = new Map(
  (await readFile(path.join(crawlRoot, 'importable_resource_manifest.jsonl'), 'utf8'))
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => JSON.parse(line))
    .map((row) => [row.id, row]),
)

const metadataById = new Map()
for (const row of manifestRows) {
  if (!allowedIds.has(row.id) || row.redistribution === 'metadata-only') continue
  if (!metadataById.has(row.id)) metadataById.set(row.id, row)
}

const sourceLabels = {
  'lawve-ai/awesome-legal-skills': 'Lawve Awesome Legal Skills',
  'CaseMark/skills': 'CaseMark Legal Skills',
  'CSlawyer1985/legal-skillhub': 'Legal SkillHub',
}

const supportedPractices = new Set([
  '数据保护', '监管合规', '商业合同', '法律文书', '争议解决', '公司并购', '劳动雇佣', '知识产权',
  '法律研究', '法律运营', '办公自动化', '金融业务', '法律培训', 'Skill 构建', '技术实验', '传媒娱乐',
  '域外法与跨境业务', '综合法律业务',
])

const fallbackPracticeRules = [
  ['域外法与跨境业务', /\b(immigration|international law|international trade|cross-border|foreign law|eur-lex|eu legislation|comparative law|customs|tariff)\b|移民|国际法|国际贸易|跨境|域外法|欧盟法律|比较法|海关|关税/i],
  ['Skill 构建', /\b(skill (?:creator|generator|builder|authoring|optimizer|improvement)|prompt engineering|agent builder)\b|技能构建|提示词工程/i],
  ['劳动雇佣', /\b(employment|employee|employer|workplace|labor|labour|dismissal|termination|eeoc|harassment)\b|劳动|雇佣|解雇|工伤/i],
  ['知识产权', /\b(trademark|patent|copyright|trade secret|intellectual property|licensing)\b|商标|专利|著作权|版权|知识产权|商业秘密/i],
  ['数据保护', /\b(gdpr|privacy|personal data|data protection|dpa|cybersecurity|cyber security|data breach|ai act)\b|隐私|个人信息|数据保护|网络安全|数据泄露|人工智能法案/i],
  ['金融业务', /\b(securities|banking|finance|fintech|investment|fund|capital market|loan|mortgage|insolvency|bankruptcy)\b|证券|银行|金融|基金|投融资|贷款|破产/i],
  ['公司并购', /\b(merger|acquisition|m&a|corporate governance|shareholder|board resolution|company formation|due diligence)\b|并购|公司治理|股东|董事会|公司设立|尽职调查/i],
  ['争议解决', /\b(litigation|lawsuit|court|complaint|motion|pleading|deposition|discovery|arbitration|mediation|settlement|trial|appeal|subpoena|tribunal)\b|诉讼|起诉|答辩|法院|仲裁|调解|和解|庭审|上诉|争议解决|法庭/i],
  ['商业合同', /\b(contract|agreement|nda|clause|terms and conditions|procurement|lease|saas)\b|合同|协议|条款|采购|租赁/i],
  ['监管合规', /\b(compliance|regulatory|regulation|sanctions|aml|anti-money laundering|export control|antitrust|competition law|licensing requirement|risk assessment)\b|监管|合规|制裁|反洗钱|出口管制|反垄断|风险评估/i],
  ['传媒娱乐', /\b(media|entertainment|sports law|film|music|gaming|advertising)\b|传媒|娱乐|体育法|影视|音乐|游戏|广告/i],
  ['法律培训', /\b(education|training|exam|quiz|mcq|curriculum|course|teaching|law school|bar exam|crfpa)\b|培训|考试|题库|课程|教学|法学院/i],
  ['法律研究', /\b(legal research|case law research|legislation search|citation|jurisprudence|thesis|academic research)\b|法律研究|案例检索|法规检索|引证|论文|学术研究/i],
  ['法律运营', /\b(legal operations|matter management|knowledge management|project management|stakeholder|workflow|intake|billing|outside counsel)\b|法律运营|案件管理|知识管理|项目管理|利益相关方|工作流|计费/i],
  ['办公自动化', /\b(excel|spreadsheet|powerpoint|word document|pdf|document automation|ocr|file conversion)\b|表格|电子表格|幻灯片|文档自动化|文件转换/i],
  ['法律文书', /\b(legal drafting|drafting|memorandum|legal memo|legal opinion|demand letter|policy drafting|document review)\b|法律文书|文书起草|备忘录|法律意见|律师函/i],
  ['技术实验', /\b(python|javascript|typescript|software development|coding|api integration|database|developer tool)\b|编程|软件开发|接口集成|数据库|开发工具/i],
]

function classifyPractice(row) {
  const originalPractice = String(row.practiceArea || row.categories?.[0] || '').trim()
  if (supportedPractices.has(originalPractice) && originalPractice !== '国际法与人权') return originalPractice
  const haystack = [row.name, row.chineseName, row.description, ...strings(row.categories), ...strings(row.tags)]
    .filter(Boolean)
    .join('\n')
  return fallbackPracticeRules.find(([, pattern]) => pattern.test(haystack))?.[0] || '综合法律业务'
}

function strings(value, fallback = []) {
  if (!Array.isArray(value)) return fallback
  const normalized = value.map(String).map((item) => item.trim()).filter(Boolean)
  return normalized.length ? normalized : fallback
}

function shortDescription(value) {
  const normalized = String(value || '').replace(/\s+/g, ' ').trim()
  return normalized.length > 420 ? `${normalized.slice(0, 417)}...` : normalized
}

function cleanExtractedItem(value) {
  return String(value || '')
    .replace(/^[-*+]\s+/, '')
    .replace(/^\d+[.)]\s+/, '')
    .replace(/^\*\*(.*?)\**[:：]?\s*/, '$1：')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 140)
}

function uniqueExtracted(items, limit = 6) {
  return Array.from(new Set(items.map(cleanExtractedItem).filter((item) => item.length >= 3))).slice(0, limit)
}

function extractSectionItems(markdown, headingPattern) {
  const lines = String(markdown || '').split(/\r?\n/)
  const items = []
  let collecting = false
  for (const line of lines) {
    const heading = line.match(/^#{1,4}\s+(.+?)\s*$/)
    if (heading) {
      if (collecting) break
      collecting = headingPattern.test(heading[1].replace(/[*_`]/g, '').trim())
      continue
    }
    if (!collecting || !line.trim()) continue
    if (/^\s*(?:[-*+]|\d+[.)])\s+/.test(line)) items.push(line)
    else if (!line.trim().startsWith('|') && items.length === 0) items.push(line)
  }
  return uniqueExtracted(items)
}

function extractDescriptionTriggers(description) {
  const text = String(description || '').replace(/\s+/g, ' ').trim()
  const marker = text.match(/(?:use\s+(?:this\s+skill\s+)?(?:when|for)|triggers?(?:\s+on|\s+when)?|适用于|当.+?时使用|触发(?:条件|场景)?)[\s:：—-]+(.+)$/i)
  if (!marker?.[1]) return []
  return uniqueExtracted(marker[1].split(/\s*[;；]\s*|(?<=[.!?。！？])\s+/), 6)
}

const scenarioStopWords = new Set([
  'a', 'an', 'the', 'and', 'or', 'for', 'to', 'of', 'in', 'on', 'with', 'when', 'use', 'using', 'needs', 'need',
  'skill', 'legal', 'law', 'task', 'work', 'document', 'documents', 'analysis', 'review', 'draft', 'drafting',
])

function scenarioKeywords(row, triggerConditions, sectionUseCases, practice) {
  const explicit = strings(row.useCases)
  const sectionKeywords = sectionUseCases.flatMap((item) => item.split(/[,，;；/]|\s+or\s+|\s+and\s+/i))
  const triggerKeywords = triggerConditions.flatMap((item) => item
    .replace(/^(?:when|while|if|for|use when|trigger(?:s|ed)? when)\s+/i, '')
    .split(/[,，;；/]|\s+or\s+|\s+and\s+/i))
  const nameKeywords = String(row.name || '')
    .split(/[-_/]+/)
    .filter((item) => item.length > 2 && !scenarioStopWords.has(item.toLowerCase()))
  const metadataKeywords = [...strings(row.categories), ...strings(row.tags)]
    .filter((item) => !['其他法律业务', '国际法与人权'].includes(item))
    .filter((item) => !/^(?:en|zh|cn|legal|skill|Apache|MIT|AGPL|CC-|GPL|Proprietary)/i.test(item))
  const primaryCandidates = [
    ...explicit,
    ...sectionKeywords,
    ...triggerKeywords,
  ]
  const clean = (items) => uniqueExtracted(items
    .map((item) => item.replace(/^(?:forming|preparing|creating|drafting|reviewing|analyzing|seeking|handling)\s+/i, ''))
    .filter((item) => item.length >= 2 && item.length <= 56 && !scenarioStopWords.has(item.toLowerCase())), 8)
  const primary = clean(primaryCandidates)
  if (primary.length >= 3) return primary.slice(0, 6)
  return clean([...primary, ...nameKeywords, ...metadataKeywords, practice]).slice(0, 6)
}

const skills = await Promise.all([...allowedIds].sort().map(async (id) => {
  const row = metadataById.get(id)
  if (!row) throw new Error(`Missing authorized metadata for ${id}`)
  const skillMarkdownPath = path.join(crawlRoot, 'importable', id, 'SKILL.md')
  const skillMarkdown = await readFile(skillMarkdownPath, 'utf8')
  const resource = resourcesById.get(id)
  const resources = strings(resource?.resources)
  const readme = resources.find((item) => /(^|\/)readme\.md$/i.test(item))
  const hasScripts = resources.some((item) => item.split('/').includes('scripts'))
  const securityNotes = strings(row.securityNotes)
  const requiresReview = row.redistribution === 'review-required' || securityNotes.length > 0 || hasScripts
  const practice = classifyPractice(row)
  const workflow = strings(row.workflow, [
    '确认任务目标、适用法域和输入材料',
    '按 SKILL.md 的步骤处理材料',
    '核对引用、事实和缺失信息',
    '由律师复核后形成最终成果',
  ])
  const outputs = strings(row.outputs)
  const jurisdiction = strings(row.jurisdiction)
  const relativeRoot = `outputs/public-agent-crawl/importable/${id}`
  const license = row.license || '未标明'
  const sourceName = sourceLabels[row.sourceRepository] || row.sourceRepository
  const sectionTriggers = extractSectionItems(skillMarkdown, /^(?:when to use|when should|triggers?|trigger conditions?|何时使用|触发条件|触发场景)/i)
  const sectionUseCases = extractSectionItems(skillMarkdown, /^(?:use cases?|best for|suitable for|适用场景|适用范围|典型场景)/i)
  const descriptionTriggers = extractDescriptionTriggers(row.description)
  const triggerConditions = strings(row.triggerConditions, sectionTriggers.length ? sectionTriggers : descriptionTriggers)
  const suitableFor = scenarioKeywords(row, triggerConditions, sectionUseCases, practice)

  return {
    id,
    name: row.name || id,
    chineseName: row.chineseName || row.name || id,
    owner: `${sourceName} / ${row.author || '开源贡献者'}`,
    practice,
    jurisdiction: jurisdiction.length ? jurisdiction.join('、') : '以原 Skill 为准',
    status: requiresReview ? 'review' : 'published',
    risk: securityNotes.length || hasScripts ? 'high' : row.redistribution === 'review-required' ? 'medium' : 'low',
    version: row.repositoryCommit ? String(row.repositoryCommit).slice(0, 8) : 'open-source',
    updated: String(row.collectedAt || '').slice(0, 10) || '2026-08-22',
    usage: 0,
    rating: 0,
    reviewScore: requiresReview ? 60 : 80,
    description: shortDescription(row.description) || '外部开源 Skill，详情请查看 SKILL.md。',
    suitableFor,
    triggerConditions: triggerConditions.length
      ? triggerConditions
      : [`用户提出与 ${row.name || id} 相符的明确任务时`, '已确认适用法域、工作立场和预期输出时'],
    notFor: ['未经律师复核直接对外出具', '未核验法域与时效的正式法律意见'],
    workflow,
    outputFormat: outputs.length ? outputs.join('；') : '按 SKILL.md 定义的结构输出',
    sources: [
      `来源仓库：${row.sourceRepository}`,
      `许可证：${license}`,
      `再分发状态：${row.redistribution}`,
      resource ? `配套资源：${resource.resourceCount} 个（只读，不执行脚本）` : '配套资源：仅 SKILL.md',
      ...securityNotes.map((note) => `安全复核：${note}`),
    ],
    tags: Array.from(new Set([
      practice,
      ...strings(row.categories).filter((item) => !['其他法律业务', '国际法与人权'].includes(item)),
      ...strings(row.tags).filter((item) => !['其他法律业务', '国际法与人权'].includes(item)),
      license,
      hasScripts ? '含脚本-禁止自动执行' : '',
    ])).filter(Boolean),
    origin: 'external-open-source',
    sourceName,
    sourceUrl: row.sourceUrl,
    mdPath: `${relativeRoot}/SKILL.md`,
    readmeMdPath: readme ? `${relativeRoot}/${readme}` : undefined,
    skillMdPath: `${relativeRoot}/SKILL.md`,
    hasReadmeMd: Boolean(readme),
    hasSkillMd: true,
    externalContentVersion: row.contentHash,
    relativeMdPath: `${relativeRoot}/SKILL.md`,
    externalCategory: practice,
    license,
    redistribution: row.redistribution,
    securityNotes,
    resourceCount: resource?.resourceCount || 0,
    resourcePaths: resources,
    scriptsRequireReview: hasScripts,
  }
}))

if (skills.length !== 1286) throw new Error(`Expected 1286 skills, got ${skills.length}`)

const output = `// 此文件由 scripts/import-public-agent-skills.mjs 生成，请勿手工编辑。\nimport type { FirmSkill } from './skillPlatform'\n\nexport const publicAgentSkills = ${JSON.stringify(skills, null, 2)} satisfies FirmSkill[]\n\n// 兼容现有页面变量名；实际来源已包含三个公开仓库。\nexport const lawveExternalSkills = publicAgentSkills\n`

await writeFile(path.join(projectRoot, 'data/publicAgentSkills.generated.ts'), output)
console.log(JSON.stringify({ imported: skills.length, withResources: skills.filter((item) => item.resourceCount > 0).length, securityFlagged: skills.filter((item) => item.securityNotes.length > 0).length, withScripts: skills.filter((item) => item.scriptsRequireReview).length, withTriggerConditions: skills.filter((item) => item.triggerConditions.length > 0).length, withSuitableFor: skills.filter((item) => item.suitableFor.length > 0).length }))
