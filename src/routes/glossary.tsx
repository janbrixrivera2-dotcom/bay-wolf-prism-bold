import { createFileRoute } from "@tanstack/react-router";
import { cards } from "@/lib/content";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/glossary")({ component: Glossary });

function Glossary() {
  const [q, setQ] = useState("");
  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return cards.filter((c) => !s || c.term.toLowerCase().includes(s) || c.def.toLowerCase().includes(s));
  }, [q]);

  return (
    <main>
      <h1 className="font-display text-4xl">Glossary</h1>
      <p className="mt-2 text-muted">Every must-memorize term from the decks, in one list.</p>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Filter terms"
        className="mt-5 h-11 w-full max-w-md rounded-md border border-border bg-elevated px-3 text-sm"
      />
      <ul className="mt-8 space-y-6">
        {list.map((c) => (
          <li key={c.id} className="border-b border-border pb-5">
            <p className="font-display text-xl">{c.term}</p>
            <p className="mt-1 leading-relaxed text-muted">{c.def}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
