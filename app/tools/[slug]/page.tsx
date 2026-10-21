import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toolsData } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

export function generateStaticParams() { return toolsData.map(tool => ({ slug: tool.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = toolsData.find(t => t.slug === params.slug);
  return tool ? { title: `${tool.name} 評測與介紹 | FindBestAI`, description: tool.description } : { title: "找不到工具 | FindBestAI" };
}
export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = toolsData.find(t => t.slug === params.slug);
  if (!tool) notFound();
  const related = toolsData.filter(t => t.category === tool.category && t.slug !== tool.slug).slice(0,3);
  const actionLabel = tool.hasFreeTrial ? "Try for Free ↗" : "Visit Website ↗";
  return <div className="mx-auto max-w-5xl space-y-8 px-4 py-12">
    <Link href="/tools/" className="text-sm font-semibold text-blue-600">← 返回所有工具</Link>
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"><div className="flex flex-col gap-5 sm:flex-row sm:items-center"><img src={tool.logoUrl} alt="" className="h-20 w-20 rounded-xl object-cover"/><div className="flex-1"><div className="flex flex-wrap items-center gap-3"><h1 className="text-3xl font-black">{tool.name}</h1><span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">{tool.pricingType}</span></div><p className="mt-2 text-slate-600">{tool.description}</p><p className="mt-2 text-sm text-amber-600">★ {tool.rating.toFixed(1)} / 5 · 分類：{tool.category}</p></div><a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700">{actionLabel}</a></div></section>
    <section className="grid gap-4 sm:grid-cols-3"><div className="rounded-xl border bg-white p-5"><p className="text-sm text-slate-500">免費試用／方案</p><p className="mt-2 font-bold">{tool.hasFreeTrial ? "請查看官方免費方案與條件" : "請查看官方方案"}</p></div><div className="rounded-xl border bg-white p-5"><p className="text-sm text-slate-500">適合對象</p><p className="mt-2 font-bold">{tool.targetAudience}</p></div><div className="rounded-xl border bg-white p-5"><p className="text-sm text-slate-500">收費模式</p><p className="mt-2 font-bold">{tool.pricingType}</p></div></section>
    <section className="rounded-2xl border bg-white p-6 sm:p-8"><h2 className="text-xl font-black">工具介紹</h2><p className="mt-4 leading-7 text-slate-700">{tool.longDescription}</p></section>
    <section className="grid gap-5 sm:grid-cols-2"><div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6"><h2 className="text-lg font-black text-emerald-900">優點</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-emerald-950">{tool.pros.map(p=><li key={p}>{p}</li>)}</ul></div><div className="rounded-xl border border-rose-200 bg-rose-50 p-6"><h2 className="text-lg font-black text-rose-900">注意事項</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-rose-950">{tool.cons.map(c=><li key={c}>{c}</li>)}</ul></div></section>
    {related.length>0 && <section><h2 className="mb-5 text-xl font-black">相關工具</h2><div className="grid gap-5 sm:grid-cols-2">{related.map(t=><ToolCard key={t.id} tool={t}/>)}</div></section>}
  </div>;
}
