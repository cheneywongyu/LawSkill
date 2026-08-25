# LawSkill 本地模型一键安装脚本（Windows / PowerShell）
# 用法（在仓库根目录执行）：
#   powershell -ExecutionPolicy Bypass -File scripts/setup-ollama.ps1
#
# 说明：
#   - 模型二进制不入库（GitHub 单文件 100MB 上限、LFS 免费额度仅 1GB，放不下）。
#     本脚本只负责把模型从 Ollama 官方库拉取到【你本机】的 Ollama 运行时，
#     与仓库里 app/api/skills/*/route.ts 的 OLLAMA_BASE_URL 配置配合即可启用本地推理。
#   - 需要先安装 Ollama：https://ollama.com/download （安装后服务默认 http://localhost:11434）

$ErrorActionPreference = 'Stop'

function Ensure-Ollama {
  try {
    $null = Invoke-RestMethod -Uri 'http://localhost:11434/api/tags' -TimeoutSec 8
    Write-Host '[ok] Ollama 服务已运行' -ForegroundColor Green
  } catch {
    Write-Host '[!] 未检测到 Ollama 服务。请先到 https://ollama.com/download 安装并启动 Ollama。' -ForegroundColor Red
    exit 1
  }
}

Ensure-Ollama

# 1) 拉取基础模型（约 2GB，CPU 可跑；内存 >= 32GB 或独显可换更大模型）
Write-Host '>> 拉取 qwen2.5:3b ...' -ForegroundColor Cyan
ollama pull qwen2.5:3b

# 2) 用仓库内的 Modelfile 构建 16K 上下文变体
$modelfile = Resolve-Path 'ollama/Modelfile.16k'
Write-Host ">> 构建 qwen2.5:3b-16k（基于 $modelfile）..." -ForegroundColor Cyan
ollama create qwen2.5:3b-16k -f $modelfile

# 3) 可选：强机器（>= 32GB 内存或 >= 24GB 显存）可解锁更强的 qwen3.8（约 18GB）
#    取消下一行注释即可；8GB 内存的纯 CPU 机器请勿启用，会卡死。
# ollama pull qwen3.8

Write-Host ''
Write-Host '[完成] 本地模型已就绪。请在 .env.local 设置以下变量启用本地推理：' -ForegroundColor Green
Write-Host '  OLLAMA_BASE_URL=http://localhost:11434'
Write-Host '  OLLAMA_MODEL=qwen2.5:3b-16k'
