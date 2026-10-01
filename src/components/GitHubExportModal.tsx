import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  Terminal,
  Check,
  Copy,
  ExternalLink,
  Github,
  FolderArchive,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface GitHubExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GitHubExportModal({ isOpen, onClose }: GitHubExportModalProps) {
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const gitPushCommand = `# 1. 在 GitHub (https://github.com/new) 新建一个仓库（例：studylah）
# 2. 在本地项目根目录运行以下命令推送到 GitHub：
git remote add origin https://github.com/<YOUR-USERNAME>/studylah.git
git branch -M main
git push -u origin main`;

  const localRunCommand = `# 解压后在文件夹中运行：
npm install
cp .env.example .env
# 在 .env 中填入你的 GEMINI_API_KEY
npm run dev`;

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-2xl bg-[#030712] border border-[#D9AA90]/30 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#D9AA90]/20 bg-[#07203F]/40">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#D9AA90]/10 rounded-xl border border-[#D9AA90]/20 text-[#D9AA90]">
                  <Github size={24} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[#EBDED4] flex items-center gap-2">
                    发布到 GitHub / 源代码打包
                    <span className="text-[10px] bg-[#A65E46]/30 text-[#D9AA90] border border-[#A65E46]/50 px-2 py-0.5 rounded-full font-mono">
                      v1.0.0
                    </span>
                  </h2>
                  <p className="text-xs text-[#EBDED4]/60">
                    一键下载完整代码压缩包，或按指引快速推送到你的 GitHub 仓库
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-[#EBDED4]/60 hover:text-[#EBDED4] hover:bg-[#07203F] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-[#EBDED4]">
              {/* Primary Action Card: Download ZIP */}
              <div className="bg-gradient-to-br from-[#07203F]/80 to-[#02000D]/90 border-2 border-[#D9AA90]/40 rounded-xl p-5 shadow-lg relative overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#D9AA90] font-semibold text-sm">
                      <FolderArchive size={18} />
                      <span>已打包源代码 ZIP 文件</span>
                    </div>
                    <h3 className="text-base font-bold text-white">
                      studylah-source-code.zip
                    </h3>
                    <p className="text-xs text-[#EBDED4]/70">
                      包含全套前端 React 19、后端 Express、122 单元 KSSM 大纲与所有预设素材（约 188 KB，已排除 node_modules）
                    </p>
                  </div>

                  <a
                    href="/studylah-source-code.zip"
                    download="studylah-source-code.zip"
                    className="inline-flex items-center gap-2 bg-[#A65E46] hover:bg-[#8e4f3a] text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md shadow-[#A65E46]/20 hover:scale-105 active:scale-95 shrink-0"
                  >
                    <Download size={16} />
                    <span>立即下载代码包</span>
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D9AA90]/15 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-[#EBDED4]/60">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>干净无冗余缓存</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>含 MIT License</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    <span>完整 README.md</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-[#D9AA90]" />
                    <span>自动安全隔离密钥</span>
                  </div>
                </div>
              </div>

              {/* Step 1: Push to GitHub */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#D9AA90]">
                    <span className="w-5 h-5 rounded-full bg-[#D9AA90]/20 text-[#D9AA90] flex items-center justify-center text-xs">1</span>
                    <span>推送到你的 GitHub 仓库</span>
                  </div>
                  <a
                    href="https://github.com/new"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#D9AA90] hover:underline flex items-center gap-1"
                  >
                    前往创建 GitHub 仓库 <ExternalLink size={12} />
                  </a>
                </div>

                <div className="relative bg-[#02000D] border border-white/10 rounded-xl p-3 font-mono text-xs text-[#EBDED4]/90 group">
                  <button
                    onClick={() => copyToClipboard(gitPushCommand, 'push')}
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                  >
                    {copiedSection === 'push' ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400 font-sans">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span className="font-sans">复制代码</span>
                      </>
                    )}
                  </button>
                  <pre className="overflow-x-auto pr-16 leading-relaxed select-all">
                    {gitPushCommand}
                  </pre>
                </div>
              </div>

              {/* Step 2: Run locally */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#D9AA90]">
                    <span className="w-5 h-5 rounded-full bg-[#D9AA90]/20 text-[#D9AA90] flex items-center justify-center text-xs">2</span>
                    <span>本地启动与环境配置</span>
                  </div>
                </div>

                <div className="relative bg-[#02000D] border border-white/10 rounded-xl p-3 font-mono text-xs text-[#EBDED4]/90">
                  <button
                    onClick={() => copyToClipboard(localRunCommand, 'run')}
                    className="absolute top-2 right-2 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
                  >
                    {copiedSection === 'run' ? (
                      <>
                        <Check size={13} className="text-emerald-400" />
                        <span className="text-emerald-400 font-sans">已复制</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span className="font-sans">复制代码</span>
                      </>
                    )}
                  </button>
                  <pre className="overflow-x-auto pr-16 leading-relaxed select-all">
                    {localRunCommand}
                  </pre>
                </div>
              </div>

              {/* Key Features included */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs space-y-2">
                <div className="font-semibold text-[#D9AA90] flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>项目包含特性</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[#EBDED4]/75">
                  <div>• KSSM Tingkatan 1–6 完整 11 科 122+ 单元教学大纲</div>
                  <div>• AI 思维导图、UASA 格式测验、记忆抽认卡、课文精简</div>
                  <div>• 完整三语支持（国语、英语、华文）</div>
                  <div>• Firebase 缓存云同步 & 极速本地优先预设数据</div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-[#D9AA90]/20 bg-[#07203F]/20 flex items-center justify-between text-xs text-[#EBDED4]/50">
              <span>Git 本地仓库已自动初始化完毕 (main 分支已就绪)</span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-[#EBDED4] transition-colors"
              >
                关闭
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
