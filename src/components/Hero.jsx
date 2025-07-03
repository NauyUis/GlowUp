// Hero section for GlowUp landing page
export default function Hero() {
  const handleClick = () => {
    const formSection = document.querySelector('.newsletter')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <section className="hero">
      <h1>Level Up Your Habits with GlowUp</h1>
      <p>Track habits, set daily goals, and boost your productivity.</p>
      <button className="cta" onClick={handleClick}>Get Started</button>
    </section>
  )
}
