import { useState, useEffect, useCallback, useRef } from 'react'
import { allQuestions, shuffleArray, categories } from '../data/questions'

export default function TeamQuizBowl() {
    const [difficulty, setDifficulty] = useState('all')
    const [selectedCats, setSelectedCats] = useState([])
    const [started, setStarted] = useState(false)
    const [questions, setQuestions] = useState([])
    const [current, setCurrent] = useState(0)
    const [phase, setPhase] = useState('waiting') // waiting, buzzed, revealed
    const [timer, setTimer] = useState(15)
    const [buzzedTeam, setBuzzedTeam] = useState('')
    const [scores, setScores] = useState({})
    const [teams, setTeams] = useState(['Team 1', 'Team 2'])
    const [teamInput, setTeamInput] = useState('')
    const [showAnswer, setShowAnswer] = useState(false)
    const timerRef = useRef(null)

    const startGame = () => {
        let pool = allQuestions.filter(q => {
            if (difficulty !== 'all' && q.difficulty !== Number(difficulty)) return false
            if (selectedCats.length > 0 && !selectedCats.includes(q.category)) return false
            return true
        })
        const qs = shuffleArray(pool).slice(0, 20)
        if (qs.length === 0) return
        setQuestions(qs); setCurrent(0); setPhase('waiting'); setTimer(15)
        setBuzzedTeam(''); setShowAnswer(false); setStarted(true)
        const initScores = {}
        teams.forEach(t => { initScores[t] = scores[t] || 0 })
        setScores(initScores)
        startTimer()
    }

    const startTimer = () => {
        clearInterval(timerRef.current)
        setTimer(15)
        timerRef.current = setInterval(() => {
            setTimer(prev => {
                if (prev <= 1) { clearInterval(timerRef.current); return 0 }
                return prev - 1
            })
        }, 1000)
    }

    useEffect(() => { return () => clearInterval(timerRef.current) }, [])

    const buzz = (team) => {
        if (phase !== 'waiting') return
        clearInterval(timerRef.current)
        setBuzzedTeam(team); setPhase('buzzed')
    }

    const handleCorrect = () => {
        setScores(prev => ({ ...prev, [buzzedTeam]: (prev[buzzedTeam] || 0) + 10 }))
        setShowAnswer(true); setPhase('revealed')
    }

    const handleIncorrect = () => {
        setScores(prev => ({ ...prev, [buzzedTeam]: (prev[buzzedTeam] || 0) - 5 }))
        // Let other teams try
        setBuzzedTeam(''); setPhase('waiting'); startTimer()
    }

    const nextQuestion = () => {
        if (current + 1 >= questions.length) {
            setStarted(false); return
        }
        setCurrent(c => c + 1); setPhase('waiting'); setBuzzedTeam('')
        setShowAnswer(false); startTimer()
    }

    const addTeam = () => {
        if (teamInput.trim() && !teams.includes(teamInput.trim())) {
            setTeams(prev => [...prev, teamInput.trim()])
            setTeamInput('')
        }
    }

    const removeTeam = (t) => { if (teams.length > 1) setTeams(prev => prev.filter(x => x !== t)) }
    const toggleCat = (name) => setSelectedCats(p => p.includes(name) ? p.filter(c => c !== name) : [...p, name])

    const q = questions[current]
    const timerClass = timer <= 3 ? 'danger' : timer <= 7 ? 'warning' : ''

    if (!started) return (
        <div className="animate-in">
            <div className="page-header"><h2>🏆 Team Quiz Bowl</h2><p>Practice quiz bowl format with your team. One person reads, teams buzz in!</p></div>
            <div className="card mb-6">
                <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-3)' }}>Teams</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                    {teams.map(t => (
                        <span key={t} className="chip active">{t} {teams.length > 1 && <span onClick={() => removeTeam(t)} style={{ cursor: 'pointer', marginLeft: 4 }}>✕</span>}</span>
                    ))}
                </div>
                <div className="flex gap-2">
                    <input type="text" value={teamInput} onChange={e => setTeamInput(e.target.value)}
                        placeholder="Add team name..." className="fill-blank-input" style={{ width: 200, fontSize: 'var(--font-size-sm)' }}
                        onKeyDown={e => e.key === 'Enter' && addTeam()} />
                    <button className="btn btn-sm btn-secondary" onClick={addTeam}>Add</button>
                </div>
            </div>
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
            <button className="btn btn-primary btn-lg" onClick={startGame}>Start Quiz Bowl →</button>
        </div>
    )

    return (
        <div className="animate-in">
            {/* Scoreboard */}
            <div className="stats-grid mb-6">
                {teams.map(t => (
                    <div key={t} className="stat-card" style={{ borderColor: buzzedTeam === t ? 'var(--color-primary)' : undefined }}>
                        <div className="stat-label">{t}</div>
                        <div className="stat-value primary">{scores[t] || 0}</div>
                    </div>
                ))}
            </div>

            {/* Question */}
            <div className="card mb-6">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-muted" style={{ fontSize: 'var(--font-size-sm)' }}>Question {current + 1} of {questions.length}</span>
                    <span className={`badge ${q.difficulty === 1 ? 'badge-beginner' : q.difficulty === 2 ? 'badge-intermediate' : 'badge-advanced'}`}>
                        {q.difficulty === 1 ? 'Beginner' : q.difficulty === 2 ? 'Intermediate' : 'Advanced'}
                    </span>
                </div>
                <h3 style={{ fontSize: 'var(--font-size-xl)', lineHeight: 1.6 }}>{q.question}</h3>
            </div>

            {/* Timer */}
            {phase === 'waiting' && <div className={`timer-display text-center ${timerClass}`}>{timer}s</div>}

            {/* Buzzer area */}
            {phase === 'waiting' && timer > 0 && (
                <div className="buzzer-area">
                    <p className="text-muted mb-4">Click your team's button to buzz in!</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {teams.map(t => (
                            <button key={t} className="buzzer-button" onClick={() => buzz(t)} style={{ fontSize: 'var(--font-size-base)', width: 120, height: 120 }}>
                                🔔<br />{t}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {timer === 0 && phase === 'waiting' && (
                <div className="text-center mt-6">
                    <p style={{ color: 'var(--color-danger)', fontWeight: 600, fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-4)' }}>⏰ Time's up!</p>
                    <button className="btn btn-secondary" onClick={() => { setShowAnswer(true); setPhase('revealed') }}>Reveal Answer</button>
                </div>
            )}

            {/* Buzzed state */}
            {phase === 'buzzed' && (
                <div className="text-center mt-6">
                    <p style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>
                        🔔 {buzzedTeam} buzzed in!
                    </p>
                    <p className="text-muted mb-4">Did they answer correctly?</p>
                    <div className="flex justify-center gap-4">
                        <button className="btn btn-success btn-lg" onClick={handleCorrect}>✓ Correct (+10)</button>
                        <button className="btn btn-danger btn-lg" onClick={handleIncorrect}>✗ Incorrect (-5)</button>
                    </div>
                </div>
            )}

            {/* Answer revealed */}
            {showAnswer && (
                <div className="mt-6">
                    <div className="card" style={{ borderColor: 'var(--color-primary)' }}>
                        <div style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>Answer:</div>
                        <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>{q.answer}</div>
                        <div className="quiz-explanation">{q.explanation}</div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary btn-lg" onClick={nextQuestion}>
                            {current + 1 >= questions.length ? 'End Game' : 'Next Question →'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
