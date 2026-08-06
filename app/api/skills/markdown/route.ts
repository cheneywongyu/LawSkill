import { NextRequest } from 'next/server'
import { readFile } from 'node:fs/promises'
import path from 'node:path'

export const dynamic = 'force-dynamic'

function isAllowedMarkdownPath(filePath: string) {
  const projectRoot = process.cwd()
  const normalized = path.resolve(filePath)
  const allowedRoots = [
    path.join(projectRoot, 'outputs'),
    path.join(projectRoot, 'data'),
  ]
  return normalized.endsWith('.md') && allowedRoots.some((root) => normalized.startsWith(root + path.sep))
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as { paths?: Record<string, string | undefined> }
    const entries = Object.entries(payload.paths || {})
    const files = await Promise.all(entries.map(async ([key, filePath]) => {
      if (!filePath) return [key, { path: '', content: '', error: '未提供路径' }]
      if (!isAllowedMarkdownPath(filePath)) return [key, { path: filePath, content: '', error: '路径不在允许读取范围内' }]
      try {
        const content = await readFile(path.resolve(filePath), 'utf8')
        return [key, { path: filePath, content }]
      } catch (error) {
        return [key, { path: filePath, content: '', error: error instanceof Error ? error.message : '读取失败' }]
      }
    }))
    return Response.json({ files: Object.fromEntries(files) })
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : '读取 Markdown 失败' }, { status: 500 })
  }
}
