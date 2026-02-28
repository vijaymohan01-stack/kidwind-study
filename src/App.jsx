import { useState } from 'react'
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Flashcards from './components/Flashcards'
import MultipleChoiceQuiz from './components/MultipleChoiceQuiz'
import TrueFalseQuiz from './components/TrueFalseQuiz'
import FillInBlank from './components/FillInBlank'
import MatchTerms from './components/MatchTerms'
import FormulaPractice from './components/FormulaPractice'
import TeamQuizBowl from './components/TeamQuizBowl'

function Sidebar({ isOpen, onClose }) {
    return (
        <>
            <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="sidebar-logo">
                        <div className="logo-icon">🌬️</div>
                        <div>
                            <h1>KidWind</h1>
                            <div className="subtitle">QuizBowl Study Tool</div>
                        </div>
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <div className="nav-section">
                        <div className="nav-section-title">Overview</div>
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} onClick={onClose} end>
                            <span className="nav-icon">📊</span> Dashboard
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

    return (
        <HashRouter>
            <div className="app-layout">
                <button className="mobile-hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>☰</button>
                <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
                <main className="main-content">
                    <div className="content-wrapper">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
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
