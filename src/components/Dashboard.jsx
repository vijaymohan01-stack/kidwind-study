import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getStats, getCategoryAccuracy } from '../utils/progress'
import { allQuestions, categories } from '../data/questions'

export default function Dashboard({ userName }) {
    const [stats, setStats] = useState(null)

    useEffect(() => { setStats(getStats()) }, [])

    const s = stats || { totalAnswered: 0, totalCorrect: 0, accuracy: 0, flashcardsMastered: 0, quizScores: [], byCategory: {} }

    return (
        <div className="animate-in">
            <div className="page-header">
                <h2>👋 Hey {userName}!</h2>
                <p>Track your progress toward KidWind Worlds 2026</p>
            </div>

            <div className="stats-grid">
                <div className="stat-card">
                    <div className="stat-label">Questions Answered</div>
                    <div className="stat-value primary">{s.totalAnswered}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Accuracy</div>
                    <div className="stat-value secondary">{s.accuracy}%</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Flashcards Mastered</div>
                    <div className="stat-value accent">{s.flashcardsMastered}</div>
                </div>
                <div className="stat-card">
                    <div className="stat-label">Total Questions</div>
                    <div className="stat-value warning">{allQuestions.length}</div>
                </div>
            </div>

            <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-xl)', fontWeight: 700 }}>Topic Progress</h3>
            <div className="topic-progress-list mb-8">
                {categories.map(cat => {
                    const catQuestions = allQuestions.filter(q => q.category === cat.name)
                    const pct = getCategoryAccuracy(cat.name)
                    const answered = s.byCategory[cat.name]?.total || 0
                    return (
                        <div className="topic-progress-item" key={cat.name}>
                            <div className="topic-icon" style={{ background: cat.color + '22', color: cat.color }}>{cat.icon}</div>
                            <div className="topic-info">
                                <div className="topic-name">{cat.name}</div>
                                <div className="topic-stats">{catQuestions.length} questions · {answered} answered</div>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${pct}%` }} />
                            </div>
                            <div className="topic-pct" style={{ color: pct >= 70 ? 'var(--color-success)' : pct >= 40 ? 'var(--color-warning)' : 'var(--color-text-muted)' }}>{pct}%</div>
                        </div>
                    )
                })}
            </div>

            <h3 style={{ marginBottom: 'var(--space-4)', fontSize: 'var(--font-size-xl)', fontWeight: 700 }}>Quick Start</h3>
            <div className="stats-grid">
                {[
                    { to: '/guide', icon: '📖', title: 'Study Guide', desc: 'Diagrams & key concepts' },
                    { to: '/flashcards', icon: '🃏', title: 'Flashcards', desc: 'Flip through terms and concepts' },
                    { to: '/quiz', icon: '✅', title: 'Multiple Choice', desc: 'Test your knowledge' },
                    { to: '/truefalse', icon: '⚖️', title: 'True / False', desc: 'Quick concept checks' },
                    { to: '/fillblank', icon: '✏️', title: 'Fill in the Blank', desc: 'Recall key terms' },
                    { to: '/match', icon: '🔗', title: 'Match Terms', desc: 'Connect terms to definitions' },
                    { to: '/formula', icon: '🧮', title: 'Formula Practice', desc: 'Solve calculations' },
                    { to: '/quizbowl', icon: '🏆', title: 'Quiz Bowl', desc: 'Team practice mode' },
                ].map(item => (
                    <Link to={item.to} key={item.to} style={{ textDecoration: 'none' }}>
                        <div className="card" style={{ cursor: 'pointer' }}>
                            <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>{item.icon}</div>
                            <div style={{ fontWeight: 600, marginBottom: 'var(--space-1)' }}>{item.title}</div>
                            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-secondary)' }}>{item.desc}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
