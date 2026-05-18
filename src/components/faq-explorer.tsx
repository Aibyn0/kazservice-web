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
};

export function FaqExplorer({ sections, allLabel }: FaqExplorerProps) {
  const [activeTopic, setActiveTopic] = useState("all");
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
    return activeTopic === "all" ? sections : sections.filter((section) => section.id === activeTopic);
  }, [activeTopic, sections]);

  function toggleQuestion(key: string) {
    setOpenQuestions((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTopic("all")}
          className={`faq-chip${activeTopic === "all" ? " faq-chip--active" : ""}`}
        >
          {allLabel}
        </button>
        {sections.map((section) => (
          <button
            key={section.id}
            type="button"
            onClick={() => setActiveTopic(section.id)}
            className={`faq-chip${activeTopic === section.id ? " faq-chip--active" : ""}`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {visibleSections.map((section) => (
        <section key={section.id}>
          <h2 className="text-2xl font-bold text-brand-primary">{section.title}</h2>
          {section.description && <p className="section-desc mt-2">{section.description}</p>}
          <div className="mt-4 space-y-3">
            {section.items.map((item) => {
              const key = `${section.id}:${item.question}`;
              const opened = !!openQuestions[key];
              return (
                <article key={key} className="faq-item">
                  <button
                    type="button"
                    onClick={() => toggleQuestion(key)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <h3 className="text-base font-semibold">{item.question}</h3>
                    <span className="faq-item__toggle">{opened ? "−" : "+"}</span>
                  </button>
                  {opened && <p className="faq-item__answer">{item.answer}</p>}
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
