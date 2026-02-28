import { useState } from 'react'
import { getQuizQuestions, categories } from '../data/questions'
import { recordAnswer, recordQuizScore } from '../utils/progress'

export default function TrueFalseQuiz() {
    const [difficulty, setDifficulty] = useState('all')
    const [selectedCats, setSelectedCats] = useState([])
    const [started, setStarted] = useState(false)
    const [questions, setQuestions] = useState([])
    const [current, setCurrent] = useState(0)
    const [answered, setAnswered] = useState(false)
    const [userAnswer, setUserAnswer] = useState(null)
    const [results, setResults] = useState([])
    const [finished, setFinished] = useState(false)

    const startQuiz = () => {
        const qs = getQuizQuestions('true-false', difficulty, selectedCats, 10)
        if (qs.length === 0) return
        setQuestions(qs); setCurrent(0); setAnswered(false); setUserAnswer(null)
        setResults([]); setFinished(false); setStarted(true)
    }

    const q = questions[current]
    const handleAnswer = (ans) => {
        if (answered) return
        setUserAnswer(ans); setAnswered(true)
        const correct = ans === q.answer
        recordAnswer(q.id, q.category, correct)
        setResults(prev => [...prev, { question: q, userAnswer: ans, correct }])
    }

    const handleNext = () => {
        if (current + 1 >= questions.length) {
            const score = results.filter(r => r.correct).length
            recordQuizScore('true-false', score, questions.length, difficulty)
            setFinished(true)
        } else { setCurrent(c => c + 1); setAnswered(false); setUserAnswer(null) }
    }

    const score = results.filter(r => r.correct).length
    const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0
    const scoreClass = pct >= 80 ? 'great' : pct >= 50 ? 'good' : 'needs-work'
    const toggleCat = (name) => setSelectedCats(p => p.includes(name) ? p.filter(c => c !== name) : [...p, name])

    if (!started) return (
        <div className="animate-in">
            <div className="page-header"><h2>⚖️ True / False</h2><p>Decide if each statement is true or false</p></div>
            <div className="mb-6">
                <div className="difficulty-selector mb-4">
                    {['all', 1, 2, 3].map(d => (
                        <button key={d} className={`difficulty-option ${difficulty == d ? (d === 'all' ? 'active-all' : d === 1 ? 'active-beginner' : d === 2 ? 'active-intermediate' : 'active-advanced') : ''}`}
                            onClick={() => setDifficulty(d)}>
                            {d === 'all' ? '🌐 All' : d === 1 ? '🟢 Beginner' : d === 2 ? '🟡 Intermediate' : '🔴 Advanced'}
                        </button>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map(c => <button key={c.name} className={`chip ${selectedCats.includes(c.name) ? 'active' : ''}`} onClick={() => toggleCat(c.name)}>{c.icon} {c.name}</button>)}
                </div>
            </div>
            <button className="btn btn-primary btn-lg" onClick={startQuiz}>Start Quiz →</button>
        </div>
    )

    if (finished) return (
        <div className="animate-in">
            <div className="quiz-score-card card-glass">
                <div className={`score-circle ${scoreClass}`}>{pct}%</div>
                <h2 style={{ marginBottom: 'var(--space-2)' }}>{pct >= 80 ? '🎉 Great Job!' : pct >= 50 ? '👍 Good Effort!' : '💪 Keep Studying!'}</h2>
                <p className="text-muted mb-6">You got {score} out of {questions.length} correct</p>
                <div className="flex justify-center gap-4">
                    <button className="btn btn-primary" onClick={startQuiz}>Try Again</button>
                    <button className="btn btn-secondary" onClick={() => setStarted(false)}>Change Settings</button>
                </div>
            </div>
            <h3 className="mt-8 mb-4" style={{ fontWeight: 700 }}>Review</h3>
            {results.map((r, i) => (
                <div key={i} className="card mb-4" style={{ borderColor: r.correct ? 'var(--color-success)' : 'var(--color-danger)' }}>
                    <div style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>{i + 1}. {r.question.question}</div>
                    <div style={{ color: r.correct ? 'var(--color-success)' : 'var(--color-danger)', fontWeight: 500, marginBottom: 'var(--space-2)' }}>
                        Your answer: {r.userAnswer ? 'True' : 'False'} {r.correct ? '✓' : '✗'} — Correct answer: {r.question.answer ? 'True' : 'False'}
                    </div>
                    <div className="quiz-explanation">{r.question.explanation}</div>
                </div>
            ))}
        </div>
    )

    return (
        <div className="animate-in">
            <div className="quiz-container">
                <div className="quiz-progress-bar mb-6">
                    {questions.map((_, i) => (
                        <div key={i} className={`quiz-progress-dot ${i < current ? (results[i]?.correct ? 'correct' : 'incorrect') : i === current ? 'current' : ''}`} />
                    ))}
                </div>
                <div className="quiz-question">
                    <div className="question-number">Question {current + 1} of {questions.length}</div>
                    <h3>{q.question}</h3>
                </div>
                <div className="flex gap-4 justify-center mt-6">
                    <button className={`btn btn-lg ${answered ? (userAnswer === true ? (q.answer === true ? 'btn-success' : 'btn-danger') : 'btn-secondary') : 'btn-secondary'}`}
                        onClick={() => handleAnswer(true)} disabled={answered} style={{ minWidth: 140 }}>
                        👍 True
                    </button>
                    <button className={`btn btn-lg ${answered ? (userAnswer === false ? (q.answer === false ? 'btn-success' : 'btn-danger') : 'btn-secondary') : 'btn-secondary'}`}
                        onClick={() => handleAnswer(false)} disabled={answered} style={{ minWidth: 140 }}>
                        👎 False
                    </button>
                </div>
                {answered && <div className="quiz-explanation mt-4">💡 {q.explanation}</div>}
                {answered && <div className="mt-4 text-center"><button className="btn btn-primary" onClick={handleNext}>{current + 1 >= questions.length ? 'See Results' : 'Next →'}</button></div>}
            </div>
        </div>
    )
}
