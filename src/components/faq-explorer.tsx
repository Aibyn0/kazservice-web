"use client";

import { useMemo, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSection = {
  id: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

type FaqExplorerProps = {
  sections: FaqSection[];
  allLabel: string;
  searchPlaceholder: string;
  noResultsLabel: string;
};

export function FaqExplorer({ sections, allLabel, searchPlaceholder, noResultsLabel }: FaqExplorerProps) {
  const [activeTopic, setActiveTopic] = useState("all");
  const [query, setQuery] = useState("");
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>(() => {
    const firstSection = sections[0];
    const firstQuestion = firstSection?.items[0];
    if (!firstSection || !firstQuestion) {
      return {};
    }
    return {
      [`${firstSection.id}:${firstQuestion.question}`]: true,
    };
  });

  const visibleSections = useMemo(() => {
    const topicFiltered = activeTopic === "all" ? sections : sections.filter((section) => section.id === activeTopic);
    if (!query.trim()) {
      return topicFiltered;
    }
    const keyword = query.trim().toLowerCase();
    return topicFiltered
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            item.question.toLowerCase().includes(keyword) || item.answer.toLowerCase().includes(keyword),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeTopic, query, sections]);

  function toggleQuestion(key: string) {
    setOpenQuestions((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm"
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveTopic("all")}
            className={`rounded-full px-3 py-1 text-sm ${
              activeTopic === "all" ? "bg-brand-primary text-white" : "border border-slate-200 bg-white text-slate-700"
            }`}
          >
            {allLabel}
          </button>
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveTopic(section.id)}
              className={`rounded-full px-3 py-1 text-sm ${
                activeTopic === section.id
                  ? "bg-brand-primary text-white"
                  : "border border-slate-200 bg-white text-slate-700"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {visibleSections.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">{noResultsLabel}</div>
      ) : (
        visibleSections.map((section) => (
          <section key={section.id}>
            <h2 className="text-2xl font-bold text-brand-primary">{section.title}</h2>
            {section.description && <p className="mt-2 text-slate-600">{section.description}</p>}
            <div className="mt-4 space-y-3">
              {section.items.map((item) => {
                const key = `${section.id}:${item.question}`;
                const opened = !!openQuestions[key];
                return (
                  <article key={key} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <button
                      type="button"
                      onClick={() => toggleQuestion(key)}
                      className="flex w-full items-start justify-between gap-4 text-left"
                    >
                      <h3 className="text-base font-semibold">{item.question}</h3>
                      <span className="text-brand-primary">{opened ? "−" : "+"}</span>
                    </button>
                    {opened && <p className="mt-3 text-sm text-slate-600">{item.answer}</p>}
                  </article>
                );
              })}
            </div>
          </section>
        ))
      )}
    </div>
  );
}
