import JSZip from 'jszip'
import { readFile, realpath, stat } from 'node:fs/promises'
import path from 'node:path'

export const dynamic = 'force-dynamic'

type DownloadPayload = {
  name?: string
  skillMdPath?: string
  resourcePaths?: string[]
  fallbackMarkdown?: string
  redistribution?: 'allowed' | 'review-required' | 'metadata-only'
}

function resolveProjectPath(filePath: string) {
  const projectRoot = process.cwd()
  const portablePath = filePath.replace(/\\/g, '/')
  const projectRelativeMatch = portablePath.match(/(?:^|\/)((?:outputs|data)\/.+)$/)
  if (projectRelativeMatch) return path.resolve(projectRoot, projectRelativeMatch[1])
  return path.resolve(projectRoot, portablePath)
}

function isWithin(parent: string, candidate: string) {
  return candidate === parent || candidate.startsWith(`${parent}${path.sep}`)
}

function isAllowedSkillPath(filePath: string) {
  const projectRoot = process.cwd()
  const resolved = resolveProjectPath(filePath)
  return ['outputs', 'data'].some((directory) => isWithin(path.join(projectRoot, directory), resolved))
}

function safeArchiveName(value: string) {
  const normalized = value.trim().replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/^-+|-+$/g, '')
  return normalized || 'lawskill'
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as DownloadPayload
    if (payload.redistribution === 'metadata-only') {
      return Response.json({ error: '该 Skill 未获得正文再分发授权，不能下载资源包。' }, { status: 403 })
    }

    const zip = new JSZip()
    const skillPath = payload.skillMdPath?.trim()
    let skillDirectory = ''

    if (skillPath) {
      if (!isAllowedSkillPath(skillPath)) {
        return Response.json({ error: 'SKILL.md 路径不在允许下载范围内。' }, { status: 400 })
      }
      const resolvedSkillPath = resolveProjectPath(skillPath)
      skillDirectory = await realpath(path.dirname(resolvedSkillPath))
      const realSkillPath = await realpath(resolvedSkillPath)
      if (!isWithin(skillDirectory, realSkillPath)) {
        return Response.json({ error: 'SKILL.md 路径超出 Skill 目录。' }, { status: 400 })
      }
      zip.file('SKILL.md', await readFile(realSkillPath))
    } else if (payload.fallbackMarkdown?.trim()) {
      zip.file('SKILL.md', payload.fallbackMarkdown.trim())
    } else {
      return Response.json({ error: '该 Skill 没有可下载的 SKILL.md。' }, { status: 404 })
    }

    const resourcePaths = Array.from(new Set(payload.resourcePaths || [])).slice(0, 5000)
    if (resourcePaths.length && !skillDirectory) {
      return Response.json({ error: '缺少资源包的基准目录。' }, { status: 400 })
    }

    for (const resourcePath of resourcePaths) {
      const portablePath = resourcePath.replace(/\\/g, '/')
      if (!portablePath || path.isAbsolute(portablePath) || portablePath.split('/').includes('..')) {
        return Response.json({ error: `配套资源路径不安全：${resourcePath}` }, { status: 400 })
      }
      const candidate = path.resolve(skillDirectory, portablePath)
      const realCandidate = await realpath(candidate)
      if (!isWithin(skillDirectory, realCandidate)) {
        return Response.json({ error: `配套资源超出 Skill 目录：${resourcePath}` }, { status: 400 })
      }
      const fileStat = await stat(realCandidate)
      if (!fileStat.isFile()) continue
      zip.file(portablePath, await readFile(realCandidate))
    }

    const archive = await zip.generateAsync({ type: 'uint8array', compression: 'DEFLATE', compressionOptions: { level: 6 } })
    const fileName = `${safeArchiveName(payload.name || 'lawskill')}.zip`
    return new Response(archive, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'X-Skill-Filename': fileName,
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : '生成 Skill 下载包失败' }, { status: 500 })
  }
}
