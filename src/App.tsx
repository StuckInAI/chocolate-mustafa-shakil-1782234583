import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="flex items-center justify-center min-h-screen bg-[#fdf6ee]">
            <p className="text-[#6b3a2a] text-xl font-semibold">Chocolate Hub — loading…</p>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
