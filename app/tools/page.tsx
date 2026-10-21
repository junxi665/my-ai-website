"use client";

import { useMemo, useState } from "react";
import { toolsData } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

const categories = [
  { label: "全部", slug: "" },
  { label: "文字", slug: "Text" },
  { label: "圖像", slug: "Image" },
  { label: "程式開發", slug: "Coding" },
  { label: "影片", slug: "Video" },
  { label: "音訊", slug: "Audio" },
];

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const tools = useMemo(() => {
    const term = search.toLowerCase().trim();
    return toolsData.filter((tool) =>
      (!category || tool.category === category) &&
      (!term || (tool.name + " " + tool.description + " " + tool.category).toLowerCase().includes(term))
    );
  }, [search, category]);

  return <section className="mx-auto max-w-7xl px-4 py-12">
    <h1 className="text-3xl font-black">所有 AI 工具</h1>
    <p className="mt-2 text-slate-600">使用搜尋欄或分類，快速找到需要的 AI 工具。</p>
    <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜尋 AI 工具，例如 ChatGPT" aria-label="搜尋 AI 工具" className="mt-6 w-full max-w-xl rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500" />
    <div className="my-6 flex flex-wrap gap-2">{categories.map((item) => <button key={item.slug} onClick={() => setCategory(item.slug)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${category === item.slug ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-700"}`}>{item.label}</button>)}</div>
    <p className="mb-4 text-sm text-slate-500">找到 {tools.length} 個工具</p>
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{tools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}</div>
    {tools.length === 0 && <p className="rounded-xl bg-white p-8 text-slate-600">找不到符合條件的工具，請更換搜尋詞或分類。</p>}
  </section>;
}
