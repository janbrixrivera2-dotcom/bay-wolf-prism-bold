import { createFileRoute, Link } from "@tanstack/react-router";
import { topics, topicById } from "@/lib/content";
import { markTopicRead } from "@/lib/progress";
import { Blocks } from "@/components/blocks";
import { useEffect } from "react";

export const Route = createFileRoute("/learn/$topicId")({ component: Lesson });

function Lesson() {
  const { topicId } = Route.useParams();
  const topic = topicById(topicId);
  const idx = topics.findIndex((t) => t.id === topicId);
  const prev = idx > 0 ? topics[idx - 1] : null;
  const next = idx >= 0 && idx < topics.length - 1 ? topics[idx + 1] : null;

  useEffect(() => {
    if (topic) markTopicRead(topic.id);
  }, [topic]);

  if (!topic) {
    return (
      <main>
        <p>Lesson not found.</p>
        <Link to="/" className="text-accent">
          Back
        </Link>
      </main>
    );
  }

  return (
    <article>
      <p className="font-mono text-xs text-subtle-fg">Lesson {topic.number}</p>
      <h1 className="mt-1 font-display text-4xl text-fg">{topic.title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-muted">{topic.summary}</p>
      <div className="mt-8">
        <Blocks blocks={topic.blocks} />
      </div>
      <nav className="no-print mt-12 flex items-center justify-between border-t border-border pt-6">
        {prev ? (
          <Link to="/learn/$topicId" params={{ topicId: prev.id }} className="text-sm text-accent">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to="/learn/$topicId" params={{ topicId: next.id }} className="text-sm text-accent">
            {next.title} →
          </Link>
        ) : (
          <Link to="/flashcards" className="text-sm text-accent">
            Drill terms →
          </Link>
        )}
      </nav>
    </article>
  );
}
