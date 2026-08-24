// 同源生成静态聚合页：从 data/legalSkillEcosystem.json 生成 public/deepseek-harness-legal-skills-hub.html
// 与 App 内 ecosystem 视图共享同一份 JSON，保证内容同步。
// 用法：node scripts/build-ecosystem-html.mjs
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const JSON_PATH = resolve(root, 'data/legalSkillEcosystem.json')
const OUT_PATH = resolve(root, 'public/deepseek-harness-legal-skills-hub.html')

const data = JSON.parse(readFileSync(JSON_PATH, 'utf8'))

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

// badge 文案 -> 强调色类（与现有静态页配色一致）
function badgeClass(badge) {
  const b = String(badge ?? '')
  if (b.includes('MCP')) return 'c-purple'
  if (b.includes('开源')) return 'c-cyan'
  if (b.includes('平台')) return 'c-amber'
  if (b.includes('合规')) return 'c-yellow'
  return ''
}

function renderStats() {
  return data.hero.stats
    .map(
      (s) =>
        `<div class="stat-box"><div class="stat-num">${esc(s.num)}</div><div class="stat-label">${esc(
          s.label
        )}</div></div>`
    )
    .join('\n    ')
}

function renderNav() {
  const items = [{ id: 'platforms', label: '平台入口' }, ...data.sections.map((s) => ({ id: s.id, label: s.title.split('—')[0].trim() }))]
  return items
    .map(
      (it, i) =>
        `<button class="nav-btn${i === 0 ? ' active' : ''}" onclick="go('#${it.id}')">${esc(it.label)}</button>`
    )
    .join('\n  ')
}

function renderPlatforms() {
  return data.platforms
    .map(
      (p) => `<a class="platform-card" href="${esc(p.href)}" target="_blank">
      <h3>${esc(p.name)}</h3>
      <p>${esc(p.desc)}</p>
      <div class="meta-row">${p.meta.map((m) => `<span>${esc(m)}</span>`).join('')}</div>
    </a>`
    )
    .join('\n    ')
}

function renderSection(s) {
  const cats = [...new Set(s.cards.map((c) => c.category).filter(Boolean))]
  const tabs =
    cats.length > 1
      ? `<div class="cat-tabs" id="${s.id}-tabs">
        <button class="cat-tab active" onclick="cat('${s.id}','all',this)">全部</button>
        ${cats.map((c) => `<button class="cat-tab" onclick="cat('${s.id}','${esc(c)}',this)">${esc(c)}</button>`).join('\n        ')}
      </div>`
      : ''
  const cards = s.cards
    .map((c) => {
      const bc = badgeClass(c.badge)
      return `<div class="card" data-c="${esc(c.category)}">
      <div class="card-head">
        <div class="card-name"><a href="${esc(c.href)}" target="_blank">${esc(c.name)}</a></div>
        ${c.badge ? `<span class="card-badge ${bc}">${esc(c.badge)}</span>` : ''}
      </div>
      <div class="card-desc">${esc(c.desc)}</div>
      ${c.meta && c.meta.length ? `<div class="card-meta">${c.meta.map((m) => `<span>${esc(m)}</span>`).join('')}</div>` : ''}
      ${c.tags && c.tags.length ? `<div class="card-tags">${c.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
    </div>`
    })
    .join('\n      ')
  const icon = s.icon ? `<span class="section-icon">${esc(s.icon)}</span>` : ''
  return `<div class="section" id="${s.id}">
    <div class="section-header">${icon}<div><div class="section-title">${esc(s.title)}</div><div class="section-desc">${s.desc}</div></div></div>
    ${tabs}
    <div class="card-grid" id="${s.id}-c">
      ${cards}
    </div>
  </div>`
}

function renderFooter() {
  const sources = data.footer.sources
    .map((f) => `<a href="${esc(f.href)}" target="_blank">${esc(f.name)}</a>`)
    .join(' · ')
  return `<div class="footer">
    <p>数据来源：${sources}</p>
    <p style="margin-top:6px">${esc(data.footer.note)}</p>
    <p style="margin-top:10px"><a href="/skills-platform" target="_blank">返回应用内「法律技能生态」视图 →</a></p>
  </div>`
}

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(data.title)}</title>
<style>
:root{
  --bg:#f5f7fa;--surface:#ffffff;--border:#e2e8f0;
  --accent:#2563eb;--accent2:#0ea5e9;--accent3:#f59e0b;--accent4:#eab308;--accent5:#8b5cf6;
  --text:#1e293b;--text2:#475569;--text3:#94a3b8;
}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;background:var(--bg);color:var(--text);line-height:1.6}
.hero{background:linear-gradient(180deg,#2563eb 0%,#1e40af 100%);padding:40px 20px;text-align:center;color:#fff}
.hero h1{font-size:clamp(22px,3vw,32px);font-weight:700;margin-bottom:12px}
.hero p{color:#dbeafe;font-size:16px;max-width:720px;margin:0 auto 20px}
.stats-row{display:flex;justify-content:center;gap:14px;flex-wrap:wrap}
.stat-box{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.3);border-radius:10px;padding:14px 20px;min-width:140px}
.stat-num{font-size:22px;font-weight:700;color:#fff}
.stat-label{color:#bfdbfe;font-size:13px;margin-top:4px}
.nav-bar{background:#fff;border-bottom:1px solid var(--border);padding:10px;display:flex;flex-wrap:wrap;gap:8px;position:sticky;top:0;z-index:100;box-shadow:0 1px 3px rgba(0,0,0,.05)}
.nav-btn{flex-shrink:0;padding:6px 14px;background:#f1f5f9;border:1px solid var(--border);border-radius:8px;color:var(--text2);font-size:14px;cursor:pointer;transition:all .15s}
.nav-btn:hover,.nav-btn.active{background:var(--accent);color:#fff;border-color:var(--accent)}
.section{max-width:1200px;margin:0 auto;padding:28px 16px}
.section-header{display:flex;align-items:center;gap:10px;margin-bottom:18px;border-left:4px solid var(--accent);padding:10px 14px;background:#fff;border-radius:8px}
.section-icon{font-size:13px;color:var(--accent);font-weight:600}
.section-title{font-size:18px;font-weight:700;color:var(--text)}
.section-desc{color:var(--text2);font-size:14px;margin-top:2px}
.card-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:14px}
.card{background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:14px;transition:all .15s}
.card:hover{border-color:var(--accent);box-shadow:0 4px 12px rgba(37,99,235,.12)}
.card-head{display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:8px;gap:8px}
.card-name{font-size:15px;font-weight:600;color:var(--accent);word-break:break-all}
.card-name a{color:inherit;text-decoration:none}
.card-name a:hover{text-decoration:underline}
.card-badge{flex-shrink:0;padding:2px 8px;font-size:11px;border-radius:6px;border:1px solid var(--accent);color:var(--accent);background:rgba(37,99,235,.06)}
.card-desc{color:var(--text2);font-size:14px;line-height:1.5}
.card-meta{display:flex;gap:10px;margin-top:10px;font-size:12px;color:var(--text3);flex-wrap:wrap}
.card-tags{display:flex;gap:6px;flex-wrap:wrap;margin-top:10px}
.tag{padding:2px 8px;font-size:11px;border-radius:6px;border:1px dashed var(--text3);color:var(--text3)}
.platform-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:14px;margin-bottom:24px}
.platform-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:16px;text-decoration:none;color:inherit;display:block;transition:all .15s}
.platform-card:hover{border-color:var(--accent);box-shadow:0 4px 14px rgba(37,99,235,.12);transform:translateY(-2px)}
.platform-card h3{font-size:16px;font-weight:700;color:var(--accent);margin-bottom:8px}
.platform-card p{color:var(--text2);font-size:14px;margin-bottom:10px}
.platform-card .meta-row{display:flex;gap:6px;font-size:12px;color:var(--text3);flex-wrap:wrap}
.platform-card .meta-row span{background:#f1f5f9;padding:3px 8px;border-radius:6px}
.cat-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px}
.cat-tab{padding:5px 12px;border:1px solid var(--border);border-radius:8px;background:#f1f5f9;color:var(--text2);font-size:13px;cursor:pointer}
.cat-tab:hover,.cat-tab.active{background:var(--accent);color:#fff;border-color:var(--accent)}
.footer{text-align:center;padding:24px;color:var(--text3);font-size:13px;border-top:1px solid var(--border);margin-top:30px}
.footer a{color:var(--accent);text-decoration:none}
.footer a:hover{text-decoration:underline}
.c-purple{color:var(--accent5)!important;border-color:var(--accent5)!important}
.c-cyan{color:var(--accent2)!important;border-color:var(--accent2)!important}
.c-amber{color:var(--accent3)!important;border-color:var(--accent3)!important}
.c-yellow{color:var(--accent4)!important;border-color:var(--accent4)!important}
@media(max-width:768px){.card-grid{grid-template-columns:1fr}.stats-row{gap:8px}.stat-box{min-width:110px;padding:10px 14px}}
</style>
</head>
<body>
<div class="hero">
  <h1>${esc(data.title)}</h1>
  <p>${esc(data.hero.subtitle).replace(/\n/g, '<br>')}</p>
  <div class="stats-row">
    ${renderStats()}
  </div>
</div>
<div class="nav-bar">
  ${renderNav()}
</div>
<div class="section" id="platforms">
  <div class="section-header"><div><div class="section-title">法律技能平台入口</div><div class="section-desc">一键直达各聚合平台的官方仓库与门户</div></div></div>
  <div class="platform-grid">
    ${renderPlatforms()}
  </div>
</div>
${data.sections.map(renderSection).join('\n')}
${renderFooter()}
<script>
function go(s){document.querySelector(s)?.scrollIntoView({behavior:'smooth',block:'start'});document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('active'));event.target.classList.add('active')}
function filter(i,cls){const q=i.value.toLowerCase();document.querySelectorAll('.'+cls+' .card').forEach(c=>c.style.display=c.textContent.toLowerCase().includes(q)?'':'none')}
function cat(prefix,tag,btn){document.querySelectorAll('#'+prefix+'-tabs .cat-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.querySelectorAll('#'+prefix+'-c .card').forEach(c=>{c.style.display=(tag==='all'||c.dataset.c===tag)?'':'none'})}
const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting){const id=x.target.id;document.querySelectorAll('.nav-btn').forEach(b=>{b.classList.toggle('active',b.getAttribute('onclick')?.includes('#'+id))})}})},{rootMargin:'-80px 0px -60% 0px'});
document.querySelectorAll('.section[id]').forEach(s=>obs.observe(s));
</script>
</body>
</html>
`

writeFileSync(OUT_PATH, html, 'utf8')
console.log(`wrote ${OUT_PATH} (${html.length} bytes, ${data.sections.reduce((n, s) => n + s.cards.length, 0)} cards)`)
