import { i as __toESM } from "../_runtime.mjs";
import { i as topics, r as topicById } from "./content-CFtD27aL.mjs";
import { n as markTopicRead } from "./progress-B1XLjy9W.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./router-HbtFxXwB.mjs";
import { t as Blocks } from "./blocks-ie41SlX3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/learn._topicId-ceTM0s25.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lesson() {
	const { topicId } = Route.useParams();
	const topic = topicById(topicId);
	const idx = topics.findIndex((t) => t.id === topicId);
	const prev = idx > 0 ? topics[idx - 1] : null;
	const next = idx >= 0 && idx < topics.length - 1 ? topics[idx + 1] : null;
	(0, import_react.useEffect)(() => {
		if (topic) markTopicRead(topic.id);
	}, [topic]);
	if (!topic) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lesson not found." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "text-accent",
		children: "Back"
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs text-subtle-fg",
			children: ["Lesson ", topic.number]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-1 font-display text-4xl text-fg",
			children: topic.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-lg text-muted",
			children: topic.summary
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, { blocks: topic.blocks })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "no-print mt-12 flex items-center justify-between border-t border-border pt-6",
			children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/learn/$topicId",
				params: { topicId: prev.id },
				className: "text-sm text-accent",
				children: ["← ", prev.title]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/learn/$topicId",
				params: { topicId: next.id },
				className: "text-sm text-accent",
				children: [next.title, " →"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/flashcards",
				className: "text-sm text-accent",
				children: "Drill terms →"
			})]
		})
	] });
}
//#endregion
export { Lesson as component };
