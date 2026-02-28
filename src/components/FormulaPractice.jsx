import { useState } from 'react'
import { getQuizQuestions, categories } from '../data/questions'
import { recordAnswer, recordQuizScore } from '../utils/progress'

export default function FormulaPractice() {
    const [difficulty, setDifficulty] = useState('all')
    const [selectedCats, setSelectedCats] = useState([])
    const [started, setStarted] = useState(false)
    const [questions, setQuestions] = useState([])
    const [current, setCurrent] = useState(0)
    const [input, setInput] = useState('')
    const [answered, setAnswered] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const [showHint, setShowHint] = useState(false)
    const [results, setResults] = useState([])
    const [finished, setFinished] = useState(false)

    const startQuiz = () => {
        const qs = getQuizQuestions('formula', difficulty, selectedCats, 10)
        if (qs.length === 0) return
        setQuestions(qs); setCurrent(0); setInput(''); setAnswered(false)
        setShowHint(false); setResults([]); setFinished(false); setStarted(true)
    }

    const q = questions[current]

    const checkAnswer = (e) => {
        e.preventDefault()
        if (answered || !input.trim()) return
        const userNum = parseFloat(input.replace(/,/g, ''))
        const correctNum = parseFloat(q.answer.replace(/,/g, ''))
        const correct = !isNaN(userNum) && Math.abs(userNum - correctNum) / Math.max(Math.abs(correctNum), 1) < 0.05
        setIsCorrect(correct); setAnswered(true)
        recordAnswer(q.id, q.category, correct)
        setResults(prev => [...prev, { question: q, userInput: input, correct }])
    }

    const handleNext = () => {
        if (current + 1 >= questions.length) {
            const sc = results.filter(r => r.correct).length
            recordQuizScore('formula', sc, questions.length, difficulty)
            setFinished(true)
        } else {
            setCurrent(c => c + 1); setInput(''); setAnswered(false); setShowHint(false); setIsCorrect(false)
        }
    }

    const score = results.filter(r => r.correct).length
    const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0
    const scoreClass = pct >= 80 ? 'great' : pct >= 50 ? 'good' : 'needs-work'
    const toggleCat = (name) => setSelectedCats(p => p.includes(name) ? p.filter(c => c !== name) : [...p, name])

    if (!started) return (
        <div className="animate-in">
            <div className="page-header"><h2>🧮 Formula Practice</h2><p>Solve calculations for Reynolds number, power, gear ratios, and more</p></div>
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
            <button className="btn btn-primary btn-lg" onClick={startQuiz}>Start Practice →</button>
        </div>
    )

    if (finished) return (
        <div className="animate-in">
            <div className="quiz-score-card card-glass">
                <div className={`score-circle ${scoreClass}`}>{pct}%</div>
                <h2 className="mb-2">{pct >= 80 ? '🎉 Great Job!' : pct >= 50 ? '👍 Good Effort!' : '💪 Keep Practicing!'}</h2>
                <p className="text-muted mb-6">{score} of {questions.length} correct</p>
                <div className="flex justify-center gap-4">
                    <button className="btn btn-primary" onClick={startQuiz}>Try Again</button>
                    <button className="btn btn-secondary" onClick={() => setStarted(false)}>Settings</button>
                </div>
            </div>
            <h3 className="mt-8 mb-4" style={{ fontWeight: 700 }}>Review</h3>
            {results.map((r, i) => (
                <div key={i} className="card mb-4" style={{ borderColor: r.correct ? 'var(--color-success)' : 'var(--color-danger)' }}>
                    <div style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>{i + 1}. {r.question.question}</div>
                    {r.question.formula && <div className="formula-display" style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-3)' }}>{r.question.formula}</div>}
                    <div style={{ color: r.correct ? 'var(--color-success)' : 'var(--color-danger)', fontWeight: 500 }}>
                        Your answer: {r.userInput} {r.correct ? '✓' : `✗ — Correct: ${r.question.answer} ${r.question.units || ''}`}
                    </div>
                    <div className="quiz-explanation mt-2">{r.question.explanation}</div>
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
                    <div className="question-number">Problem {current + 1} of {questions.length}</div>
                    <h3>{q.question}</h3>
                </div>
                {showHint && q.formula && (
                    <div className="formula-display mt-4">
                        💡 Formula: {q.formula}
                    </div>
                )}
                <form onSubmit={checkAnswer} className="flex gap-4 items-center justify-center mt-6">
                    <input type="text" className={`fill-blank-input ${answered ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
                        value={input} onChange={e => setInput(e.target.value)}
                        placeholder={q.units ? `Answer (${q.units})` : 'Your answer...'} disabled={answered} autoFocus />
                    {!answered && <button type="submit" className="btn btn-primary">Submit</button>}
                </form>
                {!answered && !showHint && q.formula && <div className="text-center mt-4"><button className="btn btn-sm btn-secondary" onClick={() => setShowHint(true)}>Show formula hint</button></div>}
                {answered && (
                    <>
                        <div className="text-center mt-4" style={{ color: isCorrect ? 'var(--color-success)' : 'var(--color-danger)', fontWeight: 600, fontSize: 'var(--font-size-lg)' }}>
                            {isCorrect ? '✓ Correct!' : `✗ Answer: ${q.answer} ${q.units || ''}`}
                        </div>
                        {q.formula && <div className="formula-display mt-4">{q.formula}</div>}
                        <div className="quiz-explanation mt-4">💡 {q.explanation}</div>
                        <div className="text-center mt-4"><button className="btn btn-primary" onClick={handleNext}>{current + 1 >= questions.length ? 'See Results' : 'Next →'}</button></div>
                    </>
                )}
            </div>
        </div>
    )
}
