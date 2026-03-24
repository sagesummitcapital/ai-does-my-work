'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { ArrowRight, BeforeAfterCard, BulletList, CTASection } from '@/components'

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
      {/* Hero */}
      <section className="section">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="animate-initial animate-fade-up text-balance">
             Replace Manual Operations With AI Systems.
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-light-400 max-w-2xl animate-initial animate-fade-up animate-delay-100">
              We help growing service businesses remove repetitive admin work across client onboarding, follow-up, reporting, inbox management, and internal coordination so they can scale without adding headcount.
            </p>

            <div className="mt-10 animate-initial animate-fade-up animate-delay-200">
              <Link href="/request-audit" className="btn-primary">
                Request Automation Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <p className="mt-6 text-sm text-light-500 animate-initial animate-fade-up animate-delay-300">
              Built for founder-led, operator-led, and growth-stage businesses.
            </p>
          </div>
        </div>
      </section>

      {/* The Cost of Manual Work */}
      <section className="section border-t border-dark-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 scroll-fade">
              <span className="label">The Problem</span>
              <h2 className="mt-4 text-light-100">Manual Work Slows Growth And Kills Margin.</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="scroll-fade">
                <BulletList items={[
                  'Client follow-up handled manually',
                  'CRM records updated by hand',
                  'Weekly and monthly reports manually built in spreadsheets',
                  'Inbox triage and internal coordination living in email'
                ]} />
              </div>
              <p className="mt-8 text-light-400 scroll-fade">
                Most businesses don't need more software. They need fewer manual steps.
              </p>
              <div className="mt-8 scroll-fade">
                <Link href="/request-audit" className="btn-secondary">
                  See what to automate first
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replace, Don't Assist */}
      <section className="section border-t border-dark-800 bg-dark-900">
        <div className="container-wide">
          <div className="text-center mb-16 scroll-fade">
            <span className="label">Our Approach</span>
            <h2 className="mt-4 text-light-100">Replace, Don't Assist.</h2>
            <p className="mt-4 text-light-400 max-w-2xl mx-auto">
              We identify the manual workflows creating drag in your business, then install AI-backed systems that reduce admin load, improve execution, and create measurable operational ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="scroll-fade" style={{ transitionDelay: '0ms' }}>
              <BeforeAfterCard
                title="Recurring Reporting"
                before="Teams manually pull numbers, update spreadsheets, and write summaries every week"
                after="Reports and summaries are generated automatically from live business data"
              />
            </div>
            <div className="scroll-fade" style={{ transitionDelay: '100ms' }}>
              <BeforeAfterCard
                title="Client Follow-Up"
                before="Leads and clients fall through the cracks because follow-up depends on people remembering"
                after="Follow-up is triggered automatically with clear routing, reminders, and next steps"
              />
            </div>
            <div className="scroll-fade" style={{ transitionDelay: '200ms' }}>
              <BeforeAfterCard
                title="Internal Coordination"
                before="Task handoffs, updates, and requests get buried in inboxes and chat threads"
                after="Work is routed automatically with visibility, accountability, and status tracking"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built for Operators */}
      <section className="section border-t border-dark-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 scroll-fade">
              <span className="label">Implementation</span>
              <h2 className="mt-4 text-light-100">Built For Operators Who Need Real Outcomes.</h2>
              <p className="mt-4 text-light-400">
                We design and implement practical automation systems that fit how your business actually runs — with the right controls, clear oversight, and a focus on time savings, throughput, and margin improvement.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="card scroll-fade" style={{ transitionDelay: '0ms' }}>
                  <h4 className="text-light-100 font-medium">Workflow Audit</h4>
                  <p className="mt-2 text-sm text-light-400">
                    We identify the highest-friction manual processes first.
                  </p>
                </div>
                <div className="card scroll-fade" style={{ transitionDelay: '75ms' }}>
                  <h4 className="text-light-100 font-medium">Practical Deployment</h4>
                  <p className="mt-2 text-sm text-light-400">
                    We implement systems that reduce admin burden without disrupting operations.
                  </p>
                </div>
                <div className="card scroll-fade" style={{ transitionDelay: '150ms' }}>
                  <h4 className="text-light-100 font-medium">Oversight</h4>
                  <p className="mt-2 text-sm text-light-400">
                    Automation where it makes sense. Human review where it matters.
                  </p>
                </div>
                <div className="card scroll-fade" style={{ transitionDelay: '225ms' }}>
                  <h4 className="text-light-100 font-medium">Measured ROI</h4>
                  <p className="mt-2 text-sm text-light-400">
                    We track time saved, bottlenecks removed, and operational impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        headline="Ready to remove the manual work slowing your business down?"
        description="Tell us where your team is stuck in repetitive admin, follow-up, reporting, or coordination. We’ll show you what to automate first, what ROI to expect, and where to start."
      />
    </>
  )
}
