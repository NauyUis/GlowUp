import { useEffect, useRef } from 'react';

// Features section for GlowUp landing page
export default function Features() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          card.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="features">
      <h2>Features</h2>
      <div className="features-grid">
        <div className="feature-card" ref={(el) => (cardsRef.current[0] = el)}>
          <div className="icon">📅</div>
          <h3>Daily Goal Setting</h3>
          <p>Set and achieve your daily goals with ease.</p>
        </div>
        <div className="feature-card" ref={(el) => (cardsRef.current[1] = el)}>
          <div className="icon">✅</div>
          <h3>Habit Tracker</h3>
          <p>Track your habits and build consistency.</p>
        </div>
        <div className="feature-card" ref={(el) => (cardsRef.current[2] = el)}>
          <div className="icon">📈</div>
          <h3>Progress Reports</h3>
          <p>Visualize your progress and stay motivated.</p>
        </div>
      </div>
    </section>
  );
}
