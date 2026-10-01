import { createFileRoute } from "@tanstack/react-router";
import { questions } from "@/lib/content";
import { setQuizBest } from "@/lib/progress";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/quiz")({ component: Quiz });

function Quiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = questions[i];
  const pct = useMemo(() => Math.round((score / questions.length) * 100), [score]);

  function choose(n: number) {
    if (picked !== null) return;
    setPicked(n);
    if (n === q.answer) setScore((s) => s + 1);
  }

  function next() {
    if (i + 1 >= questions.length) {
      const lastBonus = picked === q.answer ? 0 : 0;
      const total = score + lastBonus;
      setQuizBest(total);
      setDone(true);
      return;
    }
    setPicked(null);
    setI((n) => n + 1);
  }

  if (done) {
    return (
      <main>
        <h1 className="font-display text-4xl">Quiz complete</h1>
        <p className="mt-3 text-2xl tabular-nums">
          {score} / {questions.length} <span className="text-muted">({pct}%)</span>
        </p>
        <p className="mt-2 max-w-xl text-muted">
          {pct >= 85
            ? "You are in strong shape. Re-read any miss explanations once, then sleep."
            : "Open the lessons for anything you missed. Definitions first, then code patterns."}
        </p>
        <Button
          className="mt-6"
          onClick={() => {
            setI(0);
            setPicked(null);
            setScore(0);
            setDone(false);
          }}
        >
          Retry
        </Button>
      </main>
    );
  }

  return (
    <main>
      <p className="font-mono text-xs text-subtle-fg">
        Question {i + 1} of {questions.length}
      </p>
      <h1 className="mt-2 max-w-2xl font-display text-3xl leading-snug">{q.q}</h1>
      <div className="mt-6 space-y-2">
        {q.choices.map((c, n) => {
          const selected = picked === n;
          const correct = n === q.answer;
          const show = picked !== null;
          let cls = "w-full rounded-lg border border-border bg-elevated px-4 py-3 text-left text-[1.02rem]";
          if (show && correct) cls += " border-ok bg-subtle";
          if (show && selected && !correct) cls += " border-warn";
          return (
            <button key={c} type="button" className={cls} onClick={() => choose(n)}>
              {c}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-5">
          <p className="leading-relaxed text-muted">{q.why}</p>
          <Button className="mt-4" onClick={next}>
            {i + 1 >= questions.length ? "See score" : "Next"}
          </Button>
        </div>
      )}
    </main>
  );
}
