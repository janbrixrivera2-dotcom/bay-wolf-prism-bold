import { S as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blocks-ie41SlX3.js
var import_jsx_runtime = require_jsx_runtime();
function Blocks({ blocks }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-5",
		children: blocks.map((b, i) => {
			if (b.kind === "h") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-accent pt-2",
				children: b.text
			}, i);
			if (b.kind === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[1.05rem] leading-relaxed text-fg",
				children: b.text
			}, i);
			if (b.kind === "def") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg border border-border bg-elevated p-4 pl-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold uppercase tracking-[0.14em] text-accent",
						children: "Definition"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-lg text-fg",
						children: b.term
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 leading-relaxed text-muted",
						children: b.text
					})
				]
			}, i);
			if (b.kind === "ul") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-1.5 pl-1",
				children: b.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 text-[1.02rem] leading-relaxed",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
				}, item))
			}, i);
			if (b.kind === "code") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "overflow-x-auto rounded-lg bg-code p-4 font-mono text-[0.8rem] leading-relaxed text-code-fg",
				children: b.code
			}, i);
			if (b.kind === "table") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-lg border border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[28rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "bg-accent text-accent-fg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: b.headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2 font-medium",
							children: h
						}, h)) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: b.rows.map((row, ri) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
						className: ri % 2 ? "bg-subtle/60" : "bg-elevated",
						children: row.map((cell, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2 align-top",
							children: cell
						}, ci))
					}, ri)) })]
				})
			}, i);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-md border border-border bg-subtle px-4 py-3 text-sm leading-relaxed text-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-semibold text-accent",
					children: "Exam tip. "
				}), b.text]
			}, i);
		})
	});
}
//#endregion
export { Blocks as t };
