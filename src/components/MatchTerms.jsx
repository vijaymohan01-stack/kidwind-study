import { useState, useMemo } from 'react'
import { allQuestions, shuffleArray, categories } from '../data/questions'
import { recordAnswer } from '../utils/progress'

export default function MatchTerms() {
    const [difficulty, setDifficulty] = useState('all')
    const [selectedCats, setSelectedCats] = useState([])
    const [started, setStarted] = useState(false)
    const [pairs, setPairs] = useState([])
    const [shuffledTerms, setShuffledTerms] = useState([])
    const [shuffledDefs, setShuffledDefs] = useState([])
    const [selectedTerm, setSelectedTerm] = useState(null)
    const [selectedDef, setSelectedDef] = useState(null)
    const [matched, setMatched] = useState(new Set())
    const [wrongPair, setWrongPair] = useState(null)
    const [score, setScore] = useState(0)
    const [attempts, setAttempts] = useState(0)

    const startGame = () => {
        let pool = allQuestions.filter(q => {
            if (difficulty !== 'all' && q.difficulty !== Number(difficulty)) return false
            if (selectedCats.length > 0 && !selectedCats.includes(q.category)) return false
            return true
        })
        const selected = shuffleArray(pool).slice(0, 6)
        const p = selected.map(q => ({ id: q.id, term: q.question.replace(/\?$/, '').slice(0, 60), def: q.answer.slice(0, 80), category: q.category }))
        setPairs(p); setShuffledTerms(shuffleArray(p)); setShuffledDefs(shuffleArray(p))
        setSelectedTerm(null); setSelectedDef(null); setMatched(new Set())
        setWrongPair(null); setScore(0); setAttempts(0); setStarted(true)
    }

    const handleTermClick = (id) => {
        if (matched.has(id)) return
        setSelectedTerm(id); setWrongPair(null)
        if (selectedDef !== null) tryMatch(id, selectedDef)
    }

    const handleDefClick = (id) => {
        if (matched.has(id)) return
        setSelectedDef(id); setWrongPair(null)
        if (selectedTerm !== null) tryMatch(selectedTerm, id)
    }

    const tryMatch = (termId, defId) => {
        setAttempts(a => a + 1)
        if (termId === defId) {
            setMatched(prev => new Set([...prev, termId]))
            setScore(s => s + 1)
            const pair = pairs.find(p => p.id === termId)
            if (pair) recordAnswer(pair.id, pair.category, true)
        } else {
            setWrongPair({ term: termId, def: defId })
            const pair = pairs.find(p => p.id === termId)
            if (pair) recordAnswer(pair.id, pair.category, false)
            setTimeout(() => setWrongPair(null), 600)
        }
        setSelectedTerm(null); setSelectedDef(null)
    }

    const allMatched = matched.size === pairs.length && pairs.length > 0
    const toggleCat = (name) => setSelectedCats(p => p.includes(name) ? p.filter(c => c !== name) : [...p, name])

    if (!started) return (
        <div className="animate-in">
            <div className="page-header"><h2>🔗 Match Terms</h2><p>Match each term with its correct definition</p></div>
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
            <button className="btn btn-primary btn-lg" onClick={startGame}>Start Matching →</button>
        </div>
    )

    if (allMatched) return (
        <div className="animate-in">
            <div className="quiz-score-card card-glass">
                <div className={`score-circle ${attempts <= pairs.length + 1 ? 'great' : attempts <= pairs.length * 2 ? 'good' : 'needs-work'}`}>🎯</div>
                <h2 className="mb-2">All Matched!</h2>
                <p className="text-muted mb-6">Completed in {attempts} attempts ({pairs.length} pairs)</p>
                <div className="flex justify-center gap-4">
                    <button className="btn btn-primary" onClick={startGame}>Play Again</button>
                    <button className="btn btn-secondary" onClick={() => setStarted(false)}>Settings</button>
                </div>
            </div>
        </div>
    )

    return (
        <div className="animate-in">
            <div className="flex justify-between items-center mb-6">
                <h3 style={{ fontWeight: 700 }}>Match the pairs</h3>
                <span className="text-muted">{matched.size} / {pairs.length} matched</span>
            </div>
            <div className="match-container">
                <div className="match-column">
                    <h4>Terms</h4>
                    {shuffledTerms.map(p => (
                        <div key={'t' + p.id}
                            className={`match-item ${matched.has(p.id) ? 'matched' : ''} ${selectedTerm === p.id ? 'selected' : ''} ${wrongPair?.term === p.id ? 'wrong' : ''}`}
                            onClick={() => handleTermClick(p.id)}>
                            {p.term}
                        </div>
                    ))}
                </div>
                <div className="match-column">
                    <h4>Definitions</h4>
                    {shuffledDefs.map(p => (
                        <div key={'d' + p.id}
                            className={`match-item ${matched.has(p.id) ? 'matched' : ''} ${selectedDef === p.id ? 'selected' : ''} ${wrongPair?.def === p.id ? 'wrong' : ''}`}
                            onClick={() => handleDefClick(p.id)}>
                            {p.def}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
