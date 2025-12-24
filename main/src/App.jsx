import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Archive from './pages/Archive'
import Trash from './pages/Trash'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-5xl mx-auto p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Notes App</h1>
          <nav className="space-x-3">
            <Link to="/" className="text-sm">Home</Link>
            <Link to="/archive" className="text-sm">Archive</Link>
            <Link to="/trash" className="text-sm">Trash</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </main>
    </div>
  )
}
