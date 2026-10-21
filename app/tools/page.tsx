import { toolsData } from "@/data/tools";
import ToolCard from "@/components/ToolCard";
import Link from "next/link";

export default function ToolsPage({ searchParams }: { searchParams?: { search?: string; category?: string } }) {
  const search = (searchParams?.search ?? "").toLowerCase().trim();
  const category = searchParams?.category ?? "";
  const tools = toolsData.filter(t => (!category || t.category === category) && (!search || (t.name + " " + t.description + " " + t.category).toLowerCase().includes(search)));
  const categories = [{label:"全部",slug:""},{label:"文字",slug:"Text"},{label:"圖像",slug:"Image"},{label:"程式開發",slug:"Coding"},{label:"影片",slug:"Video"},{label:"音訊",slug:"Audio"}];
  return <section className="mx-auto max-w-7xl px-4 py-12"><h1 className="text-3xl font-black">所有 AI 工具</h1><p className="mt-2 text-slate-600">依分類瀏覽，或使用首頁搜尋工具名稱。</p><div className="my-6 flex flex-wrap gap-2">{categories.map(c=><Link key={c.slug} href={c.slug ? `/tools/?category=${c.slug}` : "/tools/"} className={`rounded-full border px-4 py-2 text-sm font-semibold ${category===c.slug ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-700"}`}>{c.label}</Link>)}</div>{search && <p className="mb-4 text-sm text-slate-500">搜尋：{search}</p>}<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tools.map(t=><ToolCard key={t.id} tool={t}/>)}</div>{tools.length===0 && <p className="rounded-xl bg-white p-8 text-slate-600">找不到符合條件的工具。<Link href="/tools/" className="ml-2 text-blue-600 underline">查看全部</Link></p>}</section>;
}
