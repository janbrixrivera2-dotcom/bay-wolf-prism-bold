import { createFileRoute } from "@tanstack/react-router";
import { topics, cards } from "@/lib/content";
import { Blocks } from "@/components/blocks";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/print")({ component: PrintPage });

function PrintPage() {
  return (
    <div className="bg-bg px-4 py-8 print:p-0">
      <div className="no-print mx-auto mb-8 flex max-w-3xl items-center justify-between">
        <a href="/" className="text-sm text-accent">
          ← Back to study
        </a>
        <Button onClick={() => window.print()}>Print / Save as PDF</Button>
      </div>
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Exam reviewer</p>
        <h1 className="mt-2 font-display text-5xl leading-tight">C# Object-Oriented Programming</h1>
        <p className="mt-3 text-lg text-muted">
          Full notes from the lecture decks. Instructor Marvin C. Santos, MSIT. Understand the definition, then the
          logic, then the code.
        </p>
        {topics.map((t) => (
          <section key={t.id} className="mt-12 break-inside-avoid">
            <h2 className="font-display text-3xl text-accent">
              {t.number} {t.title}
            </h2>
            <p className="mt-1 text-muted">{t.summary}</p>
            <div className="mt-6">
              <Blocks blocks={t.blocks} />
            </div>
          </section>
        ))}
        <section className="mt-12">
          <h2 className="font-display text-3xl text-accent">Quick definitions</h2>
          <ul className="mt-4 space-y-3">
            {cards.map((c) => (
              <li key={c.id}>
                <span className="font-semibold">{c.term}. </span>
                <span className="text-muted">{c.def}</span>
              </li>
            ))}
          </ul>
        </section>
        <p className="mt-12 font-display text-2xl">Do. Decide. Repeat. Good luck.</p>
      </article>
    </div>
  );
}
