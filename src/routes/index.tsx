import { createFileRoute, Link } from "@tanstack/react-router";
import { topics, cards, questions } from "@/lib/content";
import { loadProgress } from "@/lib/progress";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [p, setP] = useState({ readTopics: [] as string[], knownCards: [] as string[], quizBest: 0 });
  useEffect(() => setP(loadProgress()), []);
  const read = p.readTopics.length;
  const known = p.knownCards.length;

  return (
    <main>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Written exam reviewer</p>
      <h1 className="mt-2 max-w-2xl font-display text-4xl leading-[1.1] text-fg sm:text-5xl">
        Everything from your C# OOP lectures, taught so you can answer any question.
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
        Definitions, why each idea exists, code from the slides, and drills. Instructor: Marvin C. Santos, MSIT.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3">
        <Stat label="Lessons read" value={`${read}/${topics.length}`} />
        <Stat label="Terms marked known" value={`${known}/${cards.length}`} />
        <Stat label="Quiz best" value={`${p.quizBest}/${questions.length}`} />
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {topics.map((t) => {
          const done = p.readTopics.includes(t.id);
          return (
            <Link
              key={t.id}
              to="/learn/$topicId"
              params={{ topicId: t.id }}
              className="group rounded-xl border border-border bg-elevated p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-mono text-xs text-subtle-fg">{t.number}</span>
                {done && <span className="text-xs font-medium text-ok">Read</span>}
              </div>
              <h2 className="mt-2 font-display text-2xl text-fg">{t.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Open lesson <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/flashcards" className="rounded-md bg-accent px-4 py-3 text-sm font-medium text-accent-fg">
          Drill all terms
        </Link>
        <Link to="/quiz" className="rounded-md border border-border bg-elevated px-4 py-3 text-sm font-medium">
          Take the 40-question quiz
        </Link>
        <Link to="/print" className="rounded-md border border-border bg-elevated px-4 py-3 text-sm font-medium">
          Print / save as PDF
        </Link>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-elevated px-3 py-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="mt-1 font-mono text-xl tabular-nums text-fg">{value}</p>
    </div>
  );
}
