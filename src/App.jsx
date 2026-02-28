import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Flashcards from './components/Flashcards'
import MultipleChoiceQuiz from './components/MultipleChoiceQuiz'
import TrueFalseQuiz from './components/TrueFalseQuiz'
import FillInBlank from './components/FillInBlank'
import MatchTerms from './components/MatchTerms'
import FormulaPractice from './components/FormulaPractice'
import TeamQuizBowl from './components/TeamQuizBowl'
import StudyGuide from './components/StudyGuide'
import { getCurrentUser, setCurrentUser, clearCurrentUser } from './utils/progress'

function UserLogin({ onLogin }) {
    const [name, setName] = useState('')
    return (
        <div className="login-screen">
            <div className="login-card">
                <div className="login-logo">🌬️</div>
                <h1>KidWind QuizBowl</h1>
                <h2>Town School · Grade 7</h2>
                <p className="login-subtitle">Enter your name to track your progress</p>
                <form onSubmit={e => { e.preventDefault(); if (name.trim()) onLogin(name.trim()) }} className="login-form">
                    <input type="text" value={name} onChange={e => setName(e.target.value)}
                        placeholder="Your first name..." className="login-input" autoFocus maxLength={20} />
                    <button type="submit" className="btn btn-primary btn-lg login-btn" disabled={!name.trim()}>
                        Start Studying →
                    </button>
                </form>
            </div>
        </div>
    )
}

function Sidebar({ isOpen, onClose, userName, onLogout }) {
    return (
        <>
            <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <div className="logo-icon">🌬️</div>
                        <div>
                            <h1>KidWind</h1>
                            <div className="subtitle">Town School · Grade 7</div>
                        </div>
                    </div>
                </div>

                {userName && (
                    <div className="sidebar-user">
                        <div className="user-avatar">{userName[0].toUpperCase()}</div>
                        <div className="user-info">
                            <div className="user-name">{userName}</div>
                            <button className="user-logout" onClick={onLogout}>Switch User</button>
                        </div>
                    </div>
                )}

                <nav className="sidebar-nav">
                    <div className="nav-section">
                        <div className="nav-section-title">Overview</div>
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose} end>
                            <span className="nav-icon">📊</span> Dashboard
                        </NavLink>
                        <NavLink to="/guide" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                            <span className="nav-icon">📖</span> Study Guide
                        </NavLink>
                    </div>
                    <div className="nav-section">
                        <div className="nav-section-title">Study Modes</div>
                        <NavLink to="/flashcards" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                            <span className="nav-icon">🃏</span> Flashcards
                        </NavLink>
                        <NavLink to="/quiz" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                            <span className="nav-icon">✅</span> Multiple Choice
                        </NavLink>
                        <NavLink to="/truefalse" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                            <span className="nav-icon">⚖️</span> True / False
                        </NavLink>
                        <NavLink to="/fillblank" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                            <span className="nav-icon">✏️</span> Fill in the Blank
                        </NavLink>
                        <NavLink to="/match" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                            <span className="nav-icon">🔗</span> Match Terms
                        </NavLink>
                        <NavLink to="/formula" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                            <span className="nav-icon">🧮</span> Formula Practice
                        </NavLink>
                    </div>
                    <div className="nav-section">
                        <div className="nav-section-title">Team</div>
                        <NavLink to="/quizbowl" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose}>
                            <span className="nav-icon">🏆</span> Quiz Bowl
                        </NavLink>
                    </div>
                </nav>
                <div style={{ padding: 'var(--space-4) var(--space-6)', borderTop: '1px solid var(--color-border)', fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
                    KidWind Worlds 2026 · Madison, WI
                </div>
            </aside>
        </>
    )
}

export default function App() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [user, setUser] = useState(getCurrentUser())

    const handleLogin = (name) => {
        setCurrentUser(name)
        setUser(name)
    }

    const handleLogout = () => {
        clearCurrentUser()
        setUser(null)
    }

    if (!user) return <UserLogin onLogin={handleLogin} />

    return (
        <HashRouter>
            <div className="app-layout">
                <button className="mobile-hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} userName={user} onLogout={handleLogout} />
                <main className="main-content">
                    <div className="content-wrapper">
                        <Routes>
                            <Route path="/" element={<Dashboard userName={user} />} />
                            <Route path="/guide" element={<StudyGuide />} />
                            <Route path="/flashcards" element={<Flashcards />} />
                            <Route path="/quiz" element={<MultipleChoiceQuiz />} />
                            <Route path="/truefalse" element={<TrueFalseQuiz />} />
                            <Route path="/fillblank" element={<FillInBlank />} />
                            <Route path="/match" element={<MatchTerms />} />
                            <Route path="/formula" element={<FormulaPractice />} />
                            <Route path="/quizbowl" element={<TeamQuizBowl />} />
                        </Routes>
                    </div>
                </main>
            </div>
        </HashRouter>
    )
}
