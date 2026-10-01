import { i as __toESM } from "../_runtime.mjs";
import { i as topics, n as questions, t as cards } from "./content-CFtD27aL.mjs";
import { t as loadProgress } from "./progress-B1XLjy9W.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CkaHKmdU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [p, setP] = (0, import_react.useState)({
		readTopics: [],
		knownCards: [],
		quizBest: 0
	});
	(0, import_react.useEffect)(() => setP(loadProgress()), []);
	const read = p.readTopics.length;
	const known = p.knownCards.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent",
			children: "Written exam reviewer"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 max-w-2xl font-display text-4xl leading-[1.1] text-fg sm:text-5xl",
			children: "Everything from your C# OOP lectures, taught so you can answer any question."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-lg leading-relaxed text-muted",
			children: "Definitions, why each idea exists, code from the slides, and drills. Instructor: Marvin C. Santos, MSIT."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid grid-cols-3 gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Lessons read",
					value: `${read}/${topics.length}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Terms marked known",
					value: `${known}/${cards.length}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					label: "Quiz best",
					value: `${p.quizBest}/${questions.length}`
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 grid gap-3 sm:grid-cols-2",
			children: topics.map((t) => {
				const done = p.readTopics.includes(t.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/learn/$topicId",
					params: { topicId: t.id },
					className: "group rounded-xl border border-border bg-elevated p-5 transition-colors hover:border-accent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-subtle-fg",
								children: t.number
							}), done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-medium text-ok",
								children: "Read"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-2xl text-fg",
							children: t.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted",
							children: t.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent",
							children: ["Open lesson ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })]
						})
					]
				}, t.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/flashcards",
					className: "rounded-md bg-accent px-4 py-3 text-sm font-medium text-accent-fg",
					children: "Drill all terms"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/quiz",
					className: "rounded-md border border-border bg-elevated px-4 py-3 text-sm font-medium",
					children: "Take the 40-question quiz"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/print",
					className: "rounded-md border border-border bg-elevated px-4 py-3 text-sm font-medium",
					children: "Print / save as PDF"
				})
			]
		})
	] });
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-elevated px-3 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-mono text-xl tabular-nums text-fg",
			children: value
		})]
	});
}
//#endregion
export { Home as component };
