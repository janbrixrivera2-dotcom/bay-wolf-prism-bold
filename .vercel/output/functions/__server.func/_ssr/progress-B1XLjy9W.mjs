//#region node_modules/.nitro/vite/services/ssr/assets/progress-B1XLjy9W.js
var KEY = "oop-reviewer-progress-v1";
var empty = {
	readTopics: [],
	knownCards: [],
	quizBest: 0
};
function loadProgress() {
	if (typeof localStorage === "undefined") return empty;
	try {
		const raw = localStorage.getItem(KEY);
		if (!raw) return empty;
		return {
			...empty,
			...JSON.parse(raw)
		};
	} catch {
		return empty;
	}
}
function saveProgress(p) {
	localStorage.setItem(KEY, JSON.stringify(p));
}
function markTopicRead(id) {
	const p = loadProgress();
	if (!p.readTopics.includes(id)) p.readTopics.push(id);
	saveProgress(p);
	return p;
}
function toggleKnownCard(id) {
	const p = loadProgress();
	p.knownCards = p.knownCards.includes(id) ? p.knownCards.filter((x) => x !== id) : [...p.knownCards, id];
	saveProgress(p);
	return p;
}
function setQuizBest(score) {
	const p = loadProgress();
	p.quizBest = Math.max(p.quizBest, score);
	saveProgress(p);
	return p;
}
//#endregion
export { toggleKnownCard as i, markTopicRead as n, setQuizBest as r, loadProgress as t };
