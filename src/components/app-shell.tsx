import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, Layers, ListChecks, Printer, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Study", icon: BookOpen },
  { to: "/flashcards", label: "Terms", icon: Layers },
  { to: "/quiz", label: "Quiz", icon: ListChecks },
  { to: "/glossary", label: "Glossary", icon: Sparkles },
  { to: "/print", label: "Print", icon: Printer },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const hideNav = pathname.startsWith("/print");

  return (
    <div className="min-h-dvh bg-bg text-fg">
      {!hideNav && (
        <header className="no-print sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
            <Link to="/" className="font-display text-lg tracking-tight text-accent">
              C# OOP Reviewer
            </Link>
            <nav className="flex items-center gap-1 overflow-x-auto">
              {links.map((l) => {
                const active = l.to === "/" ? pathname === "/" : pathname.startsWith(l.to);
                const Icon = l.icon;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    className={cn(
                      "flex h-11 items-center gap-1.5 rounded-md px-3 text-sm font-medium",
                      active ? "bg-accent text-accent-fg" : "text-muted hover:bg-subtle hover:text-fg",
                    )}
                  >
                    <Icon className="size-4" />
                    <span className="hidden sm:inline">{l.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>
      )}
      <div className={hideNav ? "" : "mx-auto max-w-5xl px-4 py-8"}>{children}</div>
    </div>
  );
}
