import { i as __toESM } from "../_runtime.mjs";
import { t as cards } from "./content-CFtD27aL.mjs";
import { i as toggleKnownCard, t as loadProgress } from "./progress-B1XLjy9W.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DwNuHgFc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/flashcards-B2DaP790.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Flash() {
	const [i, setI] = (0, import_react.useState)(0);
	const [show, setShow] = (0, import_react.useState)(false);
	const [hideKnown, setHideKnown] = (0, import_react.useState)(false);
	const [known, setKnown] = (0, import_react.useState)(() => typeof window === "undefined" ? [] : loadProgress().knownCards);
	const deck = (0, import_react.useMemo)(() => hideKnown ? cards.filter((c) => !known.includes(c.id)) : cards, [hideKnown, known]);
	const card = deck[i] ?? deck[0];
	function go(dir) {
		if (!deck.length) return;
		setShow(false);
		setI((n) => (n + dir + deck.length) % deck.length);
	}
	function mark() {
		if (!card) return;
		const p = toggleKnownCard(card.id);
		setKnown(p.knownCards);
	}
	if (!card) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-4xl",
		children: "All terms marked known"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		className: "mt-6",
		onClick: () => setHideKnown(false),
		children: "Show full deck"
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-semibold uppercase tracking-[0.18em] text-accent",
			children: "Memorize"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-4xl",
			children: "Term cards"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-muted",
			children: [
				known.length,
				" of ",
				cards.length,
				" marked known. Flip, then mark it when you can say the definition cold."
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-4 flex h-11 items-center gap-2 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "checkbox",
				checked: hideKnown,
				onChange: (e) => {
					setHideKnown(e.target.checked);
					setI(0);
					setShow(false);
				}
			}), "Hide known"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setShow((s) => !s),
			className: "mt-6 w-full rounded-xl border border-border bg-elevated px-6 py-10 text-left min-h-[220px]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-[0.14em] text-subtle-fg",
					children: card.topic
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-3xl",
					children: card.term
				}),
				show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-lg leading-relaxed text-muted",
					children: card.def
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-subtle-fg",
					children: "Tap to reveal definition"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5 flex flex-wrap gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => go(-1),
					children: "Previous"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "secondary",
					onClick: () => go(1),
					children: "Next"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: mark,
					children: known.includes(card.id) ? "Unmark known" : "I know this"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 font-mono text-sm tabular-nums text-muted",
			children: [
				Math.min(i + 1, deck.length),
				" / ",
				deck.length
			]
		})
	] });
}
//#endregion
export { Flash as component };
