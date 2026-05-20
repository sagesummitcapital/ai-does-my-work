import { Reveal } from "./Reveal";
import { HubSpotForm } from "./HubSpotForm";

export function CTA() {
  return (
    <section className="section" id="contact">
      <div className="container-x">
        <Reveal>
          <div className="cta">
            <div className="cta__grid">
              <div>
                <div className="eyebrow">
                  <span className="eyebrow__dot" /><span>Begin the transformation</span>
                </div>
                <h2 className="cta__title">
                  <span className="gradient-headline">Book your </span>
                  <span className="gradient-accent gradient-accent--underline">AI Audit</span>
                  <span className="gradient-headline">.</span>
                </h2>
                <p className="cta__lede">
                  Tell us about your operation. We&apos;ll walk through
                  modernization opportunities and map a path to AI-native
                  infrastructure — typically in two to four weeks.
                </p>

                <ul className="cta__points">
                  {[
                    "Discovery & current-state assessment",
                    "Quantified transformation plan",
                    "Prioritized implementation roadmap",
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

              <div className="cta__form-wrap">
                <div className="cta__form-head">
                  <span className="cta__form-pulse" />
                  <span className="cta__form-title">AI Infrastructure Audit · Intake</span>
                </div>
                <HubSpotForm />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
