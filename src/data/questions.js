import { aerodynamicsQuestions, angleOfAttackQuestions, reynoldsNumberQuestions, electricalQuestions } from './questionsPart1';
import { acdcQuestions, gearRatioQuestions, betzLimitQuestions, turbineDesignQuestions, environmentQuestions, competitionQuestions } from './questionsPart2';

export const allQuestions = [
    ...aerodynamicsQuestions, ...angleOfAttackQuestions, ...reynoldsNumberQuestions,
    ...electricalQuestions, ...acdcQuestions, ...gearRatioQuestions,
    ...betzLimitQuestions, ...turbineDesignQuestions, ...environmentQuestions, ...competitionQuestions
];

export const categories = [
    { name: 'Aerodynamics', icon: '✈️', color: '#38bdf8' },
    { name: 'Angle of Attack', icon: '📐', color: '#818cf8' },
    { name: 'Reynolds Number', icon: '🌊', color: '#06d6a0' },
    { name: 'Electrical Fundamentals', icon: '⚡', color: '#fbbf24' },
    { name: 'AC/DC & Rectifiers', icon: '🔌', color: '#f87171' },
    { name: 'Gear Ratios', icon: '⚙️', color: '#a78bfa' },
    { name: 'Betz Limit & Efficiency', icon: '📊', color: '#34d399' },
    { name: 'Turbine Design', icon: '🌀', color: '#fb923c' },
    { name: 'Energy & Environment', icon: '🌍', color: '#4ade80' },
    { name: 'KidWind Competition', icon: '🏆', color: '#f472b6' },
];

export function getQuestionsByType(type, difficulty = null, categoryFilter = null) {
    return allQuestions.filter(q => {
        if (q.type !== type && type !== 'all') return false;
        if (difficulty && difficulty !== 'all' && q.difficulty !== difficulty) return false;
        if (categoryFilter && categoryFilter.length > 0 && !categoryFilter.includes(q.category)) return false;
        return true;
    });
}

export function getFlashcards(difficulty, categoryFilter) {
    return allQuestions.filter(q => {
        if (difficulty && difficulty !== 'all' && q.difficulty !== Number(difficulty)) return false;
        if (categoryFilter && categoryFilter.length > 0 && !categoryFilter.includes(q.category)) return false;
        return true;
    });
}

export function getQuizQuestions(type, difficulty, categoryFilter, count = 10) {
    let pool = allQuestions.filter(q => {
        if (type !== 'all' && q.type !== type) return false;
        if (difficulty && difficulty !== 'all' && q.difficulty !== Number(difficulty)) return false;
        if (categoryFilter && categoryFilter.length > 0 && !categoryFilter.includes(q.category)) return false;
        return true;
    });
    return shuffleArray(pool).slice(0, count);
}

export function shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
