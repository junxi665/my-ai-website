import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "FindBestAI｜AI 工具目錄與評測",
  description: "探索 AI 寫作、圖像、影片、音訊與程式開發工具。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="zh-Hant"><body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-xl font-black tracking-tight">FindBest<span className="text-blue-600">AI</span></Link>
        <nav className="flex items-center gap-5 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-blue-600">首頁</Link><Link href="/tools" className="hover:text-blue-600">所有工具</Link>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">GitHub</a>
        </nav>
      </div>
    </header>
    <main className="min-h-[70vh]">{children}</main>
    <footer className="mt-16 border-t border-slate-200 bg-white"><div className="mx-auto max-w-7xl px-4 py-8 text-sm text-slate-500">© 2026 FindBestAI. 內容僅供參考，工具價格與功能請以官方網站為準。部分連結可能為推薦連結。</div></footer>
  </body></html>;
}
