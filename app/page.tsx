export default function Home() {
  return (
    <main className="site-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">OpenAI Build Week · Education</p>
          <h1>LearnBridge</h1>
          <p className="tagline">
            A learning operating system that turns any question, book, file, or
            goal into a workspace to understand, prove, practice, save, and
            teach it.
          </p>
          <div className="actions">
            <a href="/learnbridge/" className="primary">
              Open full demo
            </a>
            <a href="#embedded-demo" className="secondary">
              Preview below
            </a>
          </div>
        </div>
        <aside className="proof-card">
          <span>Jury focus</span>
          <strong>Reusable, verifiable, teachable learning</strong>
          <p>
            Three complex demos: energy transition, election misinformation,
            and AI in healthcare.
          </p>
        </aside>
      </section>

      <section className="edge-grid" aria-label="LearnBridge differentiators">
        {[
          ["Comprehension first", "The learner explains back before moving forward."],
          ["ProofTutor", "Claims, evidence, uncertainty, sources, myths, and fake news are separated."],
          ["Role-adaptive", "Child, teacher, academic, technical, business, and home modes behave differently."],
          ["Multimodal workspace", "Voice, chat, visuals, notes, sketching, calculators, planner, and export."]
        ].map(([title, body]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </section>

      <section id="embedded-demo" className="demo-frame">
        <div className="frame-head">
          <div>
            <p className="eyebrow">Runnable prototype</p>
            <h2>Try LearnBridge</h2>
          </div>
          <a href="/learnbridge/" className="secondary">
            Open in full page
          </a>
        </div>
        <iframe
          title="LearnBridge prototype"
          src="/learnbridge/"
          loading="lazy"
        />
      </section>
    </main>
  );
}
