const STORAGE_KEY = 'kidwind-progress';

function getProgress() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : getDefaultProgress();
    } catch { return getDefaultProgress(); }
}

function getDefaultProgress() {
    return { answered: {}, flashcardsMastered: [], quizScores: [], lastActive: null };
}

function saveProgress(progress) {
    progress.lastActive = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function recordAnswer(questionId, category, correct) {
    const p = getProgress();
    if (!p.answered[questionId]) p.answered[questionId] = { correct: 0, incorrect: 0, category };
    if (correct) p.answered[questionId].correct++;
    else p.answered[questionId].incorrect++;
    saveProgress(p);
}

export function markFlashcardMastered(questionId) {
    const p = getProgress();
    if (!p.flashcardsMastered.includes(questionId)) p.flashcardsMastered.push(questionId);
    saveProgress(p);
}

export function unmarkFlashcardMastered(questionId) {
    const p = getProgress();
    p.flashcardsMastered = p.flashcardsMastered.filter(id => id !== questionId);
    saveProgress(p);
}

export function recordQuizScore(mode, score, total, difficulty) {
    const p = getProgress();
    p.quizScores.push({ mode, score, total, difficulty, date: new Date().toISOString() });
    if (p.quizScores.length > 50) p.quizScores = p.quizScores.slice(-50);
    saveProgress(p);
}

export function getStats() {
    const p = getProgress();
    const entries = Object.values(p.answered);
    const totalAnswered = entries.reduce((s, e) => s + e.correct + e.incorrect, 0);
    const totalCorrect = entries.reduce((s, e) => s + e.correct, 0);
    const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

    const byCategory = {};
    entries.forEach(e => {
        if (!byCategory[e.category]) byCategory[e.category] = { correct: 0, total: 0 };
        byCategory[e.category].correct += e.correct;
        byCategory[e.category].total += e.correct + e.incorrect;
    });

    return {
        totalAnswered, totalCorrect, accuracy,
        flashcardsMastered: p.flashcardsMastered.length,
        byCategory, quizScores: p.quizScores, lastActive: p.lastActive
    };
}

export function getCategoryAccuracy(category) {
    const stats = getStats();
    const cat = stats.byCategory[category];
    if (!cat || cat.total === 0) return 0;
    return Math.round((cat.correct / cat.total) * 100);
}

export function isFlashcardMastered(questionId) {
    const p = getProgress();
    return p.flashcardsMastered.includes(questionId);
}

export function exportProgress() {
    return JSON.stringify(getProgress(), null, 2);
}

export function importProgress(jsonStr) {
    try {
        const data = JSON.parse(jsonStr);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        return true;
    } catch { return false; }
}

export function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
}
