import { useState, useMemo } from 'react'
import { getFlashcards, categories } from '../data/questions'
import { markFlashcardMastered, unmarkFlashcardMastered, isFlashcardMastered } from '../utils/progress'

export default function Flashcards() {
    const [difficulty, setDifficulty] = useState('all')
    const [selectedCats, setSelectedCats] = useState([])
    const [index, setIndex] = useState(0)
    const [flipped, setFlipped] = useState(false)
    const [mastered, setMastered] = useState({})

    const cards = useMemo(() => {
        setIndex(0); setFlipped(false)
        return getFlashcards(difficulty, selectedCats)
    }, [difficulty, selectedCats])

    const card = cards[index]
    const toggleCat = (name) => {
        setSelectedCats(prev => prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name])
    }

    const handleMaster = () => {
        if (!card) return
        if (mastered[card.id]) { unmarkFlashcardMastered(card.id); setMastered(p => ({ ...p, [card.id]: false })) }
        else { markFlashcardMastered(card.id); setMastered(p => ({ ...p, [card.id]: true })) }
    }

    const next = () => { setFlipped(false); setTimeout(() => setIndex(i => Math.min(i + 1, cards.length - 1)), 200) }
    const prev = () => { setFlipped(false); setTimeout(() => setIndex(i => Math.max(i - 1, 0)), 200) }

    const diffLabel = (d) => d === 1 ? 'Beginner' : d === 2 ? 'Intermediate' : 'Advanced'
    const diffClass = (d) => d === 1 ? 'badge-beginner' : d === 2 ? 'badge-intermediate' : 'badge-advanced'

    return (
        <div className="animate-in">
            <div className="page-header">
                <h2>🃏 Flashcards</h2>
                <p>Click the card to flip it. Master terms one by one.</p>
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
                <div className="flex flex-wrap gap-2">
                    {categories.map(c => (
                        <button key={c.name} className={`chip ${selectedCats.includes(c.name) ? 'active' : ''}`} onClick={() => toggleCat(c.name)}>
                            {c.icon} {c.name}
                        </button>
                    ))}
                </div>
            </div>

            {cards.length === 0 ? (
                <div className="card text-center" style={{ padding: 'var(--space-10)' }}>
                    <p style={{ fontSize: 'var(--font-size-lg)' }}>No flashcards match your filters. Try different settings!</p>
                </div>
            ) : (
                <>
                    <div className="flashcard-progress">{index + 1} of {cards.length}</div>
                    <div className="flashcard-container">
                        <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
                            <div className="flashcard-face flashcard-front">
                                <div className="card-label">Question</div>
                                <div className="card-category"><span className={`badge ${diffClass(card.difficulty)}`}>{diffLabel(card.difficulty)}</span></div>
                                <div className="question-text">{card.question}</div>
                                <div style={{ position: 'absolute', bottom: 'var(--space-4)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                                    {card.category} · Click to flip
                                </div>
                            </div>
                            <div className="flashcard-face flashcard-back">
                                <div className="answer-text">{card.answer}</div>
                                <div className="explanation-text">{card.explanation}</div>
                            </div>
                        </div>
                    </div>
                    <div className="flashcard-controls">
                        <button className="btn btn-secondary" onClick={prev} disabled={index === 0}>← Previous</button>
                        <button className={`btn ${mastered[card.id] || isFlashcardMastered(card.id) ? 'btn-success' : 'btn-secondary'}`} onClick={handleMaster}>
                            {mastered[card.id] || isFlashcardMastered(card.id) ? '✓ Mastered' : 'Mark Mastered'}
                        </button>
                        <button className="btn btn-primary" onClick={next} disabled={index === cards.length - 1}>Next →</button>
                    </div>
                </>
            )}
        </div>
    )
}
