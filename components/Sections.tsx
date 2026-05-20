import { Reveal } from "./Reveal";

/* ============== 01 · THE SHIFT (Problem) ============== */
export function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container-x">
        <Reveal>
          <div className="section__head">
            <div className="eyebrow"><span className="eyebrow__dot" /><span>01 — The shift</span></div>
            <h2 className="section__title">
              Traditional businesses weren&apos;t built for the{" "}
              <span className="gradient-accent gradient-accent--underline">AI era</span>.
            </h2>
            <p className="section__lede">
              Most companies still run on manual workflows, fragmented systems,
              and labor-heavy processes. AI-native organizations operate
              fundamentally differently — and they&apos;re pulling away.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="compare">
            <div className="compare__col compare__col--old">
              <div className="compare__head">
                <span className="compare__tag">Traditional operations</span>
                <span className="compare__when">Yesterday</span>
              </div>
              <ul className="compare__list">
                {[
                  "Manual workflows & repetitive tasks",
                  "Fragmented systems and data",
                  "Reactive reporting cycles",
                  "Labor-heavy execution",
                  "Slow, siloed decision-making",
                ].map((t) => (
                  <li key={t}>
                    <span className="ic ic--x">
                      <svg viewBox="0 0 16 16">
                        <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="compare__arrow" aria-hidden="true">
              <svg viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="30" className="compare__arrow-ring" />
                <path d="M28 40 L48 40 M40 32 L52 40 L40 48" stroke="#1DBF73" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="compare__col compare__col--new">
              <div className="compare__head">
                <span className="compare__tag compare__tag--accent">AI-native operations</span>
                <span className="compare__when">Now</span>
              </div>
              <ul className="compare__list">
                {[
                  "Intelligent workflows that compound",
                  "Connected systems, unified data",
                  "Continuous, real-time insight",
                  "Leaner teams, higher leverage",
                  "Decisions in hours, not weeks",
                ].map((t) => (
                  <li key={t}>
                    <span className="ic ic--check">
                      <svg viewBox="0 0 16 16">
                        <path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== 02 · THE AUDIT ============== */
const AUDIT_ITEMS = [
  { num: "01", title: "Workflow mapping",       desc: "We map exactly how work gets done today — system by system, role by role." },
  { num: "02", title: "Labor analysis",          desc: "Quantify manual effort, cost-per-task, and roles trapped in repetitive execution." },
  { num: "03", title: "Replacement opportunities", desc: "Identify where AI can replace, augment, or accelerate — with confidence scores." },
  { num: "04", title: "Transformation roadmap", desc: "A sequenced 90/180/365-day plan, prioritized by value, complexity, and risk." },
  { num: "05", title: "ROI projections",         desc: "Hours saved, headcount avoided, revenue accelerated — quantified, not guessed." },
  { num: "06", title: "Implementation plan",     desc: "The system architecture and rollout sequence to get from audit to outcome." },
];

export function Audit() {
  return (
    <section className="section section--alt" id="audit">
      <div className="container-x">
        <Reveal>
          <div className="section__head section__head--center">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow__dot" /><span>02 — The audit</span>
            </div>
            <h2 className="section__title">
              The{" "}
              <span className="gradient-accent gradient-accent--underline">AI Infrastructure Audit</span>.
            </h2>
            <p className="section__lede">
              A two-to-four-week engagement that identifies inefficiencies,
              bottlenecks, and AI transformation opportunities across your
              organization — and delivers a prioritized roadmap with ROI.
            </p>
          </div>
        </Reveal>

        <div className="audit-grid">
          {AUDIT_ITEMS.map((it, i) => (
            <Reveal key={it.num} delay={i * 0.05}>
              <article className="audit-card">
                <div className="audit-card__num">{it.num}</div>
                <h3 className="audit-card__title">{it.title}</h3>
                <p className="audit-card__desc">{it.desc}</p>
                <div className="audit-card__line" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== 03 · FRAMEWORK ============== */
const STEPS = [
  { num: "1", title: "Analyze", desc: "Diagnose your operational state — workflows, systems, labor, and the drag on enterprise value." },
  { num: "2", title: "Identify", desc: "Surface the highest-impact AI opportunities and rank them by value, feasibility, and time-to-impact." },
  { num: "3", title: "Transform", desc: "Design and deploy AI-native workflows, intelligent systems, and the operating model to run them." },
  { num: "4", title: "Scale", desc: "Compound outcomes — expand automation across departments and replicate across portfolios." },
];

export function Framework() {
  return (
    <section className="section" id="framework">
      <div className="container-x">
        <Reveal>
          <div className="section__head section__head--center">
            <div className="eyebrow" style={{ justifyContent: "center" }}>
              <span className="eyebrow__dot" /><span>03 — Framework</span>
            </div>
            <h2 className="section__title">
              From labor-heavy operations to{" "}
              <span className="gradient-accent gradient-accent--underline">AI-native systems</span>.
            </h2>
          </div>
        </Reveal>

        <div className="framework">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.08}>
              <article className="fw-step">
                <div className="fw-step__num">{s.num}</div>
                <h3 className="fw-step__title">{s.title}</h3>
                <p className="fw-step__desc">{s.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
