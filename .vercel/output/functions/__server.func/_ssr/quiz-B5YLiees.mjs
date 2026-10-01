import { i as __toESM } from "../_runtime.mjs";
import { n as questions } from "./content-CFtD27aL.mjs";
import { r as setQuizBest } from "./progress-B1XLjy9W.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Button } from "./button-DwNuHgFc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quiz-B5YLiees.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Quiz() {
	const [i, setI] = (0, import_react.useState)(0);
	const [picked, setPicked] = (0, import_react.useState)(null);
	const [score, setScore] = (0, import_react.useState)(0);
	const [done, setDone] = (0, import_react.useState)(false);
	const q = questions[i];
	const pct = (0, import_react.useMemo)(() => Math.round(score / questions.length * 100), [score]);
	function choose(n) {
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
	if (done) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl",
			children: "Quiz complete"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-3 text-2xl tabular-nums",
			children: [
				score,
				" / ",
				questions.length,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted",
					children: [
						"(",
						pct,
						"%)"
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 max-w-xl text-muted",
			children: pct >= 85 ? "You are in strong shape. Re-read any miss explanations once, then sleep." : "Open the lessons for anything you missed. Definitions first, then code patterns."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			className: "mt-6",
			onClick: () => {
				setI(0);
				setPicked(null);
				setScore(0);
				setDone(false);
			},
			children: "Retry"
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs text-subtle-fg",
			children: [
				"Question ",
				i + 1,
				" of ",
				questions.length
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 max-w-2xl font-display text-3xl leading-snug",
			children: q.q
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-2",
			children: q.choices.map((c, n) => {
				const selected = picked === n;
				const correct = n === q.answer;
				const show = picked !== null;
				let cls = "w-full rounded-lg border border-border bg-elevated px-4 py-3 text-left text-[1.02rem]";
				if (show && correct) cls += " border-ok bg-subtle";
				if (show && selected && !correct) cls += " border-warn";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: cls,
					onClick: () => choose(n),
					children: c
				}, c);
			})
		}),
		picked !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "leading-relaxed text-muted",
				children: q.why
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-4",
				onClick: next,
				children: i + 1 >= questions.length ? "See score" : "Next"
			})]
		})
	] });
}
//#endregion
export { Quiz as component };
