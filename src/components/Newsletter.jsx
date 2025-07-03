// Newsletter/contact section for GlowUp landing page
export default function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Join Our Newsletter</h2>
      <form className="newsletter-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone Number" required />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}
