import { i as topics, t as cards } from "./content-CFtD27aL.mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DwNuHgFc.mjs";
import { t as Blocks } from "./blocks-ie41SlX3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/print-USsCx70w.js
var import_jsx_runtime = require_jsx_runtime();
function PrintPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-bg px-4 py-8 print:p-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "no-print mx-auto mb-8 flex max-w-3xl items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "/",
				className: "text-sm text-accent",
				children: "← Back to study"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => window.print(),
				children: "Print / Save as PDF"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent",
					children: "Exam reviewer"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-5xl leading-tight",
					children: "C# Object-Oriented Programming"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-lg text-muted",
					children: "Full notes from the lecture decks. Instructor Marvin C. Santos, MSIT. Understand the definition, then the logic, then the code."
				}),
				topics.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12 break-inside-avoid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl text-accent",
							children: [
								t.number,
								" ",
								t.title
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: t.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: t.blocks })
						})
					]
				}, t.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl text-accent",
						children: "Quick definitions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-semibold",
							children: [c.term, ". "]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: c.def
						})] }, c.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 font-display text-2xl",
					children: "Do. Decide. Repeat. Good luck."
				})
			]
		})]
	});
}
//#endregion
export { PrintPage as component };
