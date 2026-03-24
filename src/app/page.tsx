'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { ArrowRight, BeforeAfterCard, BulletList, CTASection, Sparkles } from '@/components'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.scroll-fade').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero - Visually striking with mesh gradient */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-surface-950">
          {/* Mesh gradient */}
          <div className="absolute inset-0 bg-mesh" />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-30" />

          {/* Animated glow orbs */}
          <div className="glow-orb w-[600px] h-[600px] bg-accent-500/20 -top-48 -left-48" style={{ animationDelay: '0s' }} />
          <div className="glow-orb w-[500px] h-[500px] bg-secondary-500/15 top-1/4 -right-32" style={{ animationDelay: '2s' }} />
          <div className="glow-orb w-[400px] h-[400px] bg-accent-500/10 bottom-0 left-1/3" style={{ animationDelay: '4s' }} />

          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10 py-20 md:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="animate-initial animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-surface-800/60 border border-surface-700/50 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-content-300">AI Systems for Manual Operations</span>
            </div>

            <h1 className="animate-initial animate-fade-up animate-delay-100 text-balance">
              Replace Manual Operations <br />
              <span className="gradient-text">With AI Systems.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-content-400 max-w-2xl leading-relaxed animate-initial animate-fade-up animate-delay-200">
              We help growing businesses remove repetitive admin work across follow-up, reporting, inbox management, CRM updates, and internal coordination so they can scale without adding headcount.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-initial animate-fade-up animate-delay-300">
              <Link href="/request-audit" className="btn-primary">
                Request Automation Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>

            <p className="mt-8 text-sm text-content-500 animate-initial animate-fade-up animate-delay-400">
              Built by AI-first operators for founder-led, operator-led, and growth-stage businesses.
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent" />
      </section>

      {/* The Cost of Manual Work */}
      <section className="section relative">
        <div className="absolute inset-0 bg-glow-teal opacity-30" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 scroll-fade">
              <span className="label">The Problem</span>
              <h2 className="mt-4 text-content-100">
                Manual Work Slows Growth <span className="gradient-text">And Kills Margin.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="scroll-fade">
                <BulletList items={[
                  'Recurring reports built manually in spreadsheets',
                  'Data copied between tools and systems',
                  'Leads, follow-ups, and important emails falling through the cracks',
                  'Month-end close, reconciliation, and approvals handled by hand'
                ]} />
              </div>
              <p className="mt-8 text-content-400 scroll-fade">
                Most growing businesses do not need more software or more admin headcount. They need fewer manual steps, fewer handoffs, and fewer places for delays, errors, and missed follow-up to hide.
              </p>
              <div className="mt-8 scroll-fade">
                <Link href="/request-audit" className="btn-text group">
                  Find what to automate first
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replace, Don't Assist */}
      <section className="section relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-surface-900/50" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-700 to-transparent" />

        <div className="container-wide relative">
          <div className="text-center mb-16 scroll-fade">
            <span className="label">Our Approach</span>
            <h2 className="mt-4 text-content-100">
              We Don’t Add AI To Busywork. <span className="gradient-text">We Remove The Busywork.</span>
            </h2>
            <p className="mt-4 text-content-400 max-w-2xl mx-auto">
              We identify the workflows creating drag in your business, replace the manual layer with structured automation, and track the operational impact over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="scroll-fade" style={{ transitionDelay: '0ms' }}>
              <BeforeAfterCard
                title="Recurring Reporting"
                before="Monthly reports compiled manually across spreadsheets and exports"
                after="Reporting generated automatically with review steps and audit visibility"
              />
            </div>
            <div className="scroll-fade" style={{ transitionDelay: '100ms' }}>
              <BeforeAfterCard
                title="Lead Follow-Up"
                before="Leads sit in inboxes and follow-up depends on someone remembering"
                after="Leads are routed, logged, and followed up automatically with clear next steps"
              />
            </div>
            <div className="scroll-fade" style={{ transitionDelay: '200ms' }}>
              <BeforeAfterCard
                title="Internal Coordination"
                before="Task handoffs are buried in email threads and manual status updates"
                after="Intake, routing, task creation, and status tracking happen automatically"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built for Operators */}
      <section className="section relative">
        <div className="absolute inset-0 bg-glow-purple opacity-20" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 scroll-fade">
              <span className="label">Implementation</span>
              <h2 className="mt-4 text-content-100">
                Built For Operators Who Need <br />
                <span className="gradient-text">Real Outcomes.</span>
              </h2>
              <p className="mt-4 text-content-400">
                We design practical automation systems that fit how your business actually runs, with the right controls, clear oversight, and a focus on time savings, speed, and margin improvement.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Workflow Audit', desc: 'We map the process and identify the highest-ROI automation opportunities first.' },
                  { title: 'Structured Deployment', desc: 'We roll out in phases and validate against real workflow conditions.' },
                  { title: 'Human Oversight', desc: 'Automation where it makes sense. Human review where it matters.' },
                  { title: 'Measured ROI', desc: 'We track time saved, bottlenecks removed, and execution improvements.' },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="card-glow scroll-fade group"
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    <div className="relative z-10">
                      <h4 className="text-content-100 font-medium group-hover:text-accent-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-content-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="section-sm relative overflow-hidden border-y border-surface-800">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 via-surface-900 to-secondary-500/5" />
        <div className="container-wide relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '10–40 hrs/mo', label: 'Typical Time Recovered' },
              { value: '2–6 Weeks', label: 'Typical Deployment Window' },
              { value: 'Clear Oversight', label: 'Human Review Where Needed' },
              { value: 'Ops + Finance', label: 'Focused on High-ROI Workflows' },
            ].map((stat, index) => (
              <div key={stat.label} className="scroll-fade" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-2 text-sm text-content-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to remove the manual work slowing your business down?"
        description="Tell us what’s manual today. We’ll map what can be automated, what should stay human, and what the ROI looks like before you commit to anything."
      />
    </>
  )
}