# Law Firm AI Skill Platform

一个面向律所内部的 AI Skill 浏览、推荐、编辑、试跑和知识源管理原型。

## 功能概览

- Skill 库：浏览外部开源 Skill、示例内部 Skill、收藏 Skill，并查看完整 Markdown 内容。
- 任务匹配：粘贴待处理文本或预留上传文件入口，生成匹配 Skill 推荐。
- 效果测试：对比同一任务在使用 Skill / 不使用 Skill 时的大模型输出。
- 我的 Skill 编辑器：基于现有 Skill 另存编辑，或新建内部 Skill。
- 知识库：预留律所内部模板、法规、案例和审查清单的引用入口。
- 后台管理：预留管理员维护 Skill 源、知识源和发布流程。

## 本地运行

```bash
npm install
npm run dev
```

打开：

```text
http://localhost:3000/skills-platform
```

## 环境变量

复制 `.env.example` 为 `.env.local`，填入自己的模型中转站或 OpenAI 兼容接口配置。

```bash
cp .env.example .env.local
```

`.env.local` 会被 Git 忽略，不要提交真实 API Key。

## 本地模型（Ollama，可选）

不想走云端 API 时，可改用本机 Ollama 跑本地大模型推理。模型二进制**不入库**（GitHub 单文件 100MB 上限、LFS 免费额度仅 1GB），仓库只保存"配方"，clone 后一键拉到本机。

```bash
# 1. 安装 Ollama：https://ollama.com/download
# 2. 在仓库根目录执行（Windows PowerShell）：
powershell -ExecutionPolicy Bypass -File scripts/setup-ollama.ps1
```

脚本会拉取 `qwen2.5:3b` 并构建 `qwen2.5:3b-16k` 变体（16K 上下文，避免长文档被截断）。

然后在 `.env.local` 启用本地推理：

```bash
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5:3b-16k
```

- 本地推理对所有 7 个 LLM 路由（recommend / run / translate / effect-test / editor-ai / material-classify / discovery）同时生效。
- 硬件要求：`qwen2.5:3b` 纯 CPU（≥8GB 内存）可跑但较慢（长任务数分钟级）；`qwen3.8`（约 18GB）需 ≥32GB 内存或 ≥24GB 显存，仅适合强机器，在 `scripts/setup-ollama.ps1` 中取消注释即可解锁。

## 常用脚本

```bash
npm run lint
npm run build
```

## 数据说明

外部 Skill 数据来自公开 Skill 页面和本地导出的 Markdown 文件；内部 Skill 当前为产品原型中的示例数据。实际上线时建议将 Skill、知识源、试跑记录和权限策略放入后端数据库统一维护。
