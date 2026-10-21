import Link from "next/link";
import type { Tool } from "@/data/tools";

export default function ToolCard({ tool }: { tool: Tool }) {
  const badge = tool.pricingType === "Free" ? "bg-emerald-100 text-emerald-800" : tool.pricingType === "Freemium" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800";
  return <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <div className="flex items-start gap-3">
      <img src={tool.logoUrl} alt="" className="h-12 w-12 rounded-xl object-cover" />
      <div className="min-w-0 flex-1"><h3 className="font-bold text-slate-900">{tool.name}</h3><p className="mt-1 text-xs text-slate-500">{tool.category} · ★ {tool.rating.toFixed(1)}</p></div>
      <span className={`rounded-full px-2 py-1 text-xs font-semibold ${badge}`}>{tool.pricingType}</span>
    </div>
    <p className="my-4 flex-1 text-sm leading-6 text-slate-600">{tool.description}</p>
    <div className="flex gap-2 border-t border-slate-100 pt-4">
      <Link href={`/tools/${tool.slug}`} className="flex-1 rounded-lg bg-slate-100 px-3 py-2 text-center text-sm font-semibold text-slate-800 hover:bg-slate-200">查看介紹</Link>
      <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-700">官方網站 ↗</a>
    </div>
  </article>;
}
