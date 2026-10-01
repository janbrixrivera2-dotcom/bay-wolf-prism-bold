const KEY = "oop-reviewer-progress-v1";

export type Progress = {
  readTopics: string[];
  knownCards: string[];
  quizBest: number;
};

const empty: Progress = { readTopics: [], knownCards: [], quizBest: 0 };

export function loadProgress(): Progress {
  if (typeof localStorage === "undefined") return empty;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty;
    return { ...empty, ...JSON.parse(raw) };
  } catch {
    return empty;
  }
}

export function saveProgress(p: Progress) {
  localStorage.setItem(KEY, JSON.stringify(p));
}

export function markTopicRead(id: string) {
  const p = loadProgress();
  if (!p.readTopics.includes(id)) p.readTopics.push(id);
  saveProgress(p);
  return p;
}

export function toggleKnownCard(id: string) {
  const p = loadProgress();
  p.knownCards = p.knownCards.includes(id)
    ? p.knownCards.filter((x) => x !== id)
    : [...p.knownCards, id];
  saveProgress(p);
  return p;
}

export function setQuizBest(score: number) {
  const p = loadProgress();
  p.quizBest = Math.max(p.quizBest, score);
  saveProgress(p);
  return p;
}
