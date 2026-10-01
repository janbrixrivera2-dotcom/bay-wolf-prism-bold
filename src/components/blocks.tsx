import type { Block } from "@/lib/content";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        if (b.kind === "h") {
          return (
            <h3 key={i} className="font-display text-xl text-accent pt-2">
              {b.text}
            </h3>
          );
        }
        if (b.kind === "p") {
          return (
            <p key={i} className="text-[1.05rem] leading-relaxed text-fg">
              {b.text}
            </p>
          );
        }
        if (b.kind === "def") {
          return (
            <div key={i} className="rounded-lg border border-border bg-elevated p-4 pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">Definition</p>
              <p className="mt-1 font-display text-lg text-fg">{b.term}</p>
              <p className="mt-1 leading-relaxed text-muted">{b.text}</p>
            </div>
          );
        }
        if (b.kind === "ul") {
          return (
            <ul key={i} className="space-y-1.5 pl-1">
              {b.items.map((item) => (
                <li key={item} className="flex gap-3 text-[1.02rem] leading-relaxed">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (b.kind === "code") {
          return (
            <pre
              key={i}
              className="overflow-x-auto rounded-lg bg-code p-4 font-mono text-[0.8rem] leading-relaxed text-code-fg"
            >
              {b.code}
            </pre>
          );
        }
        if (b.kind === "table") {
          return (
            <div key={i} className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full min-w-[28rem] text-left text-sm">
                <thead className="bg-accent text-accent-fg">
                  <tr>
                    {b.headers.map((h) => (
                      <th key={h} className="px-3 py-2 font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((row, ri) => (
                    <tr key={ri} className={ri % 2 ? "bg-subtle/60" : "bg-elevated"}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-3 py-2 align-top">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p
            key={i}
            className="rounded-md border border-border bg-subtle px-4 py-3 text-sm leading-relaxed text-fg"
          >
            <span className="font-semibold text-accent">Exam tip. </span>
            {b.text}
          </p>
        );
      })}
    </div>
  );
}
