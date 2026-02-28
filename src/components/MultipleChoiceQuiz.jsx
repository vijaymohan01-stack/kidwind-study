import { useState, useMemo } from 'react'
import { getQuizQuestions, shuffleArray, categories } from '../data/questions'
import { recordAnswer, recordQuizScore } from '../utils/progress'

export default function MultipleChoiceQuiz() {
    const [difficulty, setDifficulty] = useState('all')
    const [selectedCats, setSelectedCats] = useState([])
    const [started, setStarted] = useState(false)
    const [questions, setQuestions] = useState([])
    const [current, setCurrent] = useState(0)
    const [selected, setSelected] = useState(null)
    const [answered, setAnswered] = useState(false)
    const [results, setResults] = useState([])
    const [finished, setFinished] = useState(false)

    const startQuiz = () => {
        const qs = getQuizQuestions('multiple-choice', difficulty, selectedCats, 10)
        if (qs.length === 0) return
        setQuestions(qs); setCurrent(0); setSelected(null); setAnswered(false)
        setResults([]); setFinished(false); setStarted(true)
    }

    const q = questions[current]
    const choices = useMemo(() => q ? shuffleArray(q.choices) : [], [q])

    const handleSelect = (choice) => {
        if (answered) return
        setSelected(choice); setAnswered(true)
        const correct = choice === q.answer
        recordAnswer(q.id, q.category, correct)
        setResults(prev => [...prev, { question: q, selected: choice, correct }])
    }

    const handleNext = () => {
        if (current + 1 >= questions.length) {
            const score = results.filter(r => r.correct).length
            recordQuizScore('multiple-choice', score, questions.length, difficulty)
            setFinished(true)
        } else {
            setCurrent(c => c + 1); setSelected(null); setAnswered(false)
        }
    }

    const score = results.filter(r => r.correct).length
    const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0
    const scoreClass = pct >= 80 ? 'great' : pct >= 50 ? 'good' : 'needs-work'
    const toggleCat = (name) => setSelectedCats(p => p.includes(name) ? p.filter(c => c !== name) : [...p, name])
    const letters = ['A', 'B', 'C', 'D']

    if (!started) return (
        <div className="animate-in">
            <div className="page-header"><h2>✅ Multiple Choice Quiz</h2><p>Test your knowledge with 10 questions</p></div>
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
                    <div style={{ color: r.correct ? 'var(--color-success)' : 'var(--color-danger)', fontWeight: 500, marginBottom: 'var(--space-1)' }}>
                        Your answer: {r.selected} {r.correct ? '✓' : '✗'}
                    </div>
                    {!r.correct && <div style={{ color: 'var(--color-success)', fontWeight: 500, marginBottom: 'var(--space-2)' }}>Correct: {r.question.answer}</div>}
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
                <div className="quiz-choices">
                    {choices.map((c, i) => (
                        <button key={i} className={`quiz-choice ${selected === c ? (c === q.answer ? 'correct' : 'incorrect') : ''} ${answered && c === q.answer ? 'correct' : ''} ${answered ? 'disabled' : ''}`}
                            onClick={() => handleSelect(c)} disabled={answered}>
                            <span className="choice-letter">{letters[i]}</span>
                            <span>{c}</span>
                        </button>
                    ))}
                </div>
                {answered && <div className="quiz-explanation">💡 {q.explanation}</div>}
                {answered && <div className="mt-4 text-center"><button className="btn btn-primary" onClick={handleNext}>{current + 1 >= questions.length ? 'See Results' : 'Next Question →'}</button></div>}
            </div>
        </div>
    )
}
