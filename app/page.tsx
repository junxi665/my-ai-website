import Link from "next/link";
import { Search, Sparkles, ArrowRight } from "lucide-react";
import { toolsData } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

export default function HomePage() {
  const featured = toolsData.filter((tool) => tool.featured);
  const categories = [{label:"文字生成",slug:"Text"},{label:"圖像生成",slug:"Image"},{label:"程式開發",slug:"Coding"},{label:"影片生成",slug:"Video"},{label:"語音音訊",slug:"Audio"}];
  return <div className="space-y-16 pb-10">
    <section className="bg-gradient-to-br from-blue-50 via-white to-violet-50 px-4 py-20 text-center sm:py-28">
      <div className="mx-auto max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-blue-700"><Sparkles size={15}/> AI 工具探索指南</span>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">找到適合你的<br/><span className="text-blue-600">AI 工具</span></h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">比較文字、圖像、影片、音訊與程式開發工具，快速查看用途、優缺點和官方網站。</p>
        <form action="/tools/" method="get" className="mx-auto mt-8 flex max-w-xl gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"><Search className="ml-2 mt-3 text-slate-400"/><input name="search" placeholder="搜尋 AI 工具，例如 ChatGPT" className="min-w-0 flex-1 px-2 outline-none"/><button className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700">搜尋</button></form>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4"><h2 className="mb-5 text-2xl font-black">按分類瀏覽</h2><div className="grid grid-cols-2 gap-3 sm:grid-cols-5">{categories.map((cat)=><Link key={cat.slug} href={`/tools/?category=${cat.slug}`} className="rounded-xl border border-slate-200 bg-white p-5 text-center font-bold hover:border-blue-400 hover:text-blue-600">{cat.label}<span className="mt-2 block text-xs font-normal text-slate-400">{toolsData.filter(t=>t.category===cat.slug).length} 個工具</span></Link>)}</div></section>
    <section className="mx-auto max-w-7xl px-4"><div className="mb-6 flex items-end justify-between"><div><h2 className="text-2xl font-black">熱門推薦工具</h2><p className="mt-1 text-sm text-slate-500">查看工具介紹、優缺點與官方連結</p></div><Link href="/tools/" className="flex items-center gap-1 text-sm font-bold text-blue-600">全部工具 <ArrowRight size={16}/></Link></div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{featured.map(tool=><ToolCard key={tool.id} tool={tool}/>)}</div></section>
  </div>;
}
