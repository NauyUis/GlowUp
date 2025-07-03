import { useState, useEffect } from 'react';

// Header component for GlowUp landing page
export default function Header() {
  const [dark, setDark] = useState(() => {
    // Check system preference on first load
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="header">
      <div className="logo">GlowUp</div>
      <div className="tagline">Small habits. Big glow-up.</div>
      <button
        className="mode-toggle"
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark mode"
      >
        {dark ? '🌙' : '☀️'}
      </button>
    </header>
  );
}
