// 法律 AI 技能聚合中心 —— 共享数据模块
// 单一数据源：data/legalSkillEcosystem.json
// 由 scripts/build-ecosystem-html.mjs 解析 public/deepseek-harness-legal-skills-hub.html 生成。
// App（/skills-platform 的 ecosystem 视图）与静态 hub.html 均消费同一份 JSON，保证内容同步。

import data from './legalSkillEcosystem.json'

export { data as legalSkillEcosystem }

/** Hero 区统计指标（如 265 / Lawve AI）。 */
export type EcosystemStat = {
  num: string
  label: string
}

/** 顶部平台入口卡片（Lawve AI / 元力 / AgentSkills / Legal SkillHub）。 */
export type EcosystemPlatform = {
  name: string
  href: string
  desc: string
  meta: string[]
}

/** 单个技能卡片。 */
export type EcosystemCard = {
  name: string
  href: string
  badge: string
  category: string
  desc: string
  meta: string[]
  tags: string[]
}

/** 一个技能来源版块（lawve / as / lsh / lsh-mcp）。 */
export type EcosystemSection = {
  id: string
  icon?: string
  title: string
  desc: string
  cards: EcosystemCard[]
}

/** 页脚来源链接。 */
export type EcosystemFooterSource = {
  name: string
  href: string
}

export type EcosystemFooter = {
  sources: EcosystemFooterSource[]
  note: string
}

export type LegalSkillEcosystem = {
  title: string
  hero: {
    subtitle: string
    stats: EcosystemStat[]
  }
  platforms: EcosystemPlatform[]
  sections: EcosystemSection[]
  footer: EcosystemFooter
}

/** 类型化访问器，便于组件直接解构使用。 */
export const ecosystem: LegalSkillEcosystem = data

/** 便捷派生：按版块 id 取版块。 */
export function getSection(id: string): EcosystemSection | undefined {
  return data.sections.find((s) => s.id === id)
}

/** 便捷派生：全部技能卡片计数。 */
export function totalCards(): number {
  return data.sections.reduce((n, s) => n + s.cards.length, 0)
}
