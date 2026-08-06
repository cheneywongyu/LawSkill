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

## 常用脚本

```bash
npm run lint
npm run build
```

## 数据说明

外部 Skill 数据来自公开 Skill 页面和本地导出的 Markdown 文件；内部 Skill 当前为产品原型中的示例数据。实际上线时建议将 Skill、知识源、试跑记录和权限策略放入后端数据库统一维护。
