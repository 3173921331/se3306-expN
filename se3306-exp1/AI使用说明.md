# AI 使用声明
> 实验项目：se3306‑exp1 CSR/SSR/SSG渲染对比实验

## 一、AI辅助工具使用情况
本实验使用豆包AI作为辅助排错与资料整理工具，**所有核心代码均由本人阅读文档后手动运行验证，实验现象、性能数据、截图均来自本机实际操作，并非AI虚构生成**。AI仅用于下面几类辅助工作：

1. **概念理解**：协助理解 CSR、SSR、SSG、水合Hydration、Web Vitals 等理论概念；辅助梳理实验原理、思考题作答思路。
2. **命令与排错辅助**
    - Git操作：分析`src refspec main does not match any`、`Connection was reset`、无上游分支等Git报错，给出PowerShell操作指令；
    - 部署排错：帽子云静态部署报错`未知服务类型：检测到当前应用非 Some[static] 应用`故障定位；区分`pnpm run dev`开发命令与`pnpm run build`打包命令；
    - SSR部署方案选型：因腾讯云CloudBase存在实名扣费风险，AI协助提供Replit、Render等替代免费部署方案；
3. **文档整理**：协助整理实验操作步骤、故障记录，生成报告文本模板；所有步骤均经过本人复现确认有效。
4. **代码辅助**：对server.js监听`0.0.0.0`云平台适配、构建脚本给出参考片段；代码复制后本人在本地运行测试，修正问题。

## 二、未交由AI完成的内容（本人独立完成）
1. 完整搭建 se3306‑exp1 目录结构，编写 `lab1‑csr/main.js`、`lab1‑ssr/server.js`、`lab1‑ssg/build‑ssg.js` 核心业务代码；
2. 本地执行全部实验流程：安装依赖、运行开发服务、Lighthouse性能测量、采集FCP/LCP、网页源码截图；
3. Git仓库初始化、本地提交、推送远程仓库操作；
4. 帽子云平台页面手动配置，处理部署过程出现的各类平台异常；
5. 实验思考题结合课堂理论，结合自己实测现象组织文字回答；
6. 所有截图、性能指标数据均来自本机真实运行结果，没有使用AI生成虚拟数据。

## 三、AI输出内容校验说明
1. AI给出的Shell/Git/pnpm命令，全部在本地PowerShell实际执行，观察输出日志，确认执行成功；
2. 部署相关配置参数，核对实验文档要求，排除复制粘贴带来特殊字符等坑；
3. AI提供代码片段粘贴后，必须本地运行验证效果，观察页面行为是否符合CSR/SSR/SSG实验现象；
4. 报告文字模板仅作为参考，结合自己实验实际情况修改，不直接复制AI大段文本作为报告正文。

## 四、故障记录（AI协助定位的实际遇到问题）
1. Git推送报错：`src refspec main does not match any`，本地尚未生成main分支；
2. GitHub HTTPS推送 `Recv failure: Connection was reset` 网络连接重置；
3. `The current branch main has no upstream branch`，缺少上游追踪分支；
4. 帽子云部署报错：`ERROR: 未知服务类型：检测到当前应用非 Some[static] 应用`，帽子云构建设置未正确填写；
5. 混淆 `pnpm run dev`（本地开发）与`pnpm run build`（生产打包），误以为部署需要运行dev服务；
6. SSR 部署尝试：因腾讯云 CloudBase 存在实名扣费风险，未采用云托管；改用本地 `node server.js` 验证 SSR 效果，未提交云托管链接。

> 签名：_叶伊杰_
> 日期：2026‑09‑21