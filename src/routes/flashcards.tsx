import { createFileRoute } from "@tanstack/react-router";
import { cards } from "@/lib/content";
import { loadProgress, toggleKnownCard } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/flashcards")({ component: Flash });

function Flash() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(false);
  const [hideKnown, setHideKnown] = useState(false);
  const [known, setKnown] = useState<string[]>(() =>
    typeof window === "undefined" ? [] : loadProgress().knownCards,
  );

  const deck = useMemo(
    () => (hideKnown ? cards.filter((c) => !known.includes(c.id)) : cards),
    [hideKnown, known],
  );
  const card = deck[i] ?? deck[0];

  function go(dir: number) {
    if (!deck.length) return;
    setShow(false);
    setI((n) => (n + dir + deck.length) % deck.length);
  }

  function mark() {
    if (!card) return;
    const p = toggleKnownCard(card.id);
    setKnown(p.knownCards);
  }

  if (!card) {
    return (
      <main>
        <h1 className="font-display text-4xl">All terms marked known</h1>
        <Button className="mt-6" onClick={() => setHideKnown(false)}>
          Show full deck
        </Button>
      </main>
    );
  }

  return (
    <main>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Memorize</p>
      <h1 className="mt-1 font-display text-4xl">Term cards</h1>
      <p className="mt-2 text-muted">
        {known.length} of {cards.length} marked known. Flip, then mark it when you can say the definition cold.
      </p>
      <label className="mt-4 flex h-11 items-center gap-2 text-sm">
        <input
          type="checkbox"
          checked={hideKnown}
          onChange={(e) => {
            setHideKnown(e.target.checked);
            setI(0);
            setShow(false);
          }}
        />
        Hide known
      </label>

      <button
        type="button"
        onClick={() => setShow((s) => !s)}
        className="mt-6 w-full rounded-xl border border-border bg-elevated px-6 py-10 text-left min-h-[220px]"
      >
        <p className="text-xs uppercase tracking-[0.14em] text-subtle-fg">{card.topic}</p>
        <p className="mt-3 font-display text-3xl">{card.term}</p>
        {show ? (
          <p className="mt-4 text-lg leading-relaxed text-muted">{card.def}</p>
        ) : (
          <p className="mt-6 text-sm text-subtle-fg">Tap to reveal definition</p>
        )}
      </button>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button variant="secondary" onClick={() => go(-1)}>
          Previous
        </Button>
        <Button variant="secondary" onClick={() => go(1)}>
          Next
        </Button>
        <Button onClick={mark}>{known.includes(card.id) ? "Unmark known" : "I know this"}</Button>
      </div>
      <p className="mt-3 font-mono text-sm tabular-nums text-muted">
        {Math.min(i + 1, deck.length)} / {deck.length}
      </p>
    </main>
  );
}
