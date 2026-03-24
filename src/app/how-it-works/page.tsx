'use client'

import { useEffect } from 'react'
import { StepCard, CTASection } from '@/components'

const steps = [
  {
    number: '01',
    title: 'Workflow Audit',
    description:
      'We map the process as it actually runs today — tools, handoffs, bottlenecks, exceptions, and repetitive admin work. This shows where time is being lost and what is creating drag.'
  },
  {
    number: '02',
    title: 'Prioritize ROI',
    description:
      'We identify the highest-value workflows to automate first, estimate the operational impact, and define what should stay human. You get a practical roadmap, not a vague AI strategy.'
  },
  {
    number: '03',
    title: 'Build + Launch',
    description:
      'We implement the automation, test it against real workflow conditions, and roll it out in a controlled way. The goal is simple: remove manual work without disrupting the business.'
  },
  {
    number: '04',
    title: 'Measure + Improve',
    description:
      'We track time saved, bottlenecks removed, execution speed, and workflow performance over time. As the business changes, the system is refined so it keeps creating value.'
  },
]

export default function HowItWorks() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
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
      <section className="section-sm relative overflow-hidden border-b border-surface-800">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="container-wide relative">
          <div className="max-w-2xl">
            <span className="label">How It Works</span>
            <h1 className="mt-4 text-3xl md:text-4xl">
              A Practical Process for <span className="gradient-text">Replacing Manual Work</span>
            </h1>
            <p className="mt-6 text-lg text-content-400">
              We identify the workflows slowing your team down, prioritize the best automation opportunities, implement the right systems, and measure the operational impact.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section relative">
        <div className="absolute inset-0 bg-glow-teal opacity-10" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="scroll-fade" style={{ transitionDelay: `${index * 100}ms` }}>
                <StepCard number={step.number} title={step.title} description={step.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="section relative overflow-hidden border-t border-surface-800">
        <div className="absolute inset-0 bg-surface-900/50" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 scroll-fade">
              <span className="label">Boundaries</span>
              <h2 className="mt-4 text-2xl md:text-3xl text-content-100">What We Don’t Do</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-4 scroll-fade">
                {[
                  "We don’t automate critical decisions without human review",
                  "We don’t roll out systems without testing them against real workflows",
                  "We don’t promise ROI we can’t explain or measure",
                  "We don’t add complexity to already messy operations",
                  "We don’t build brittle automations that fall apart when the business changes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-red-400/60 flex-shrink-0" />
                    <span className="text-content-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline="Start with a workflow audit."
        description="We’ll map the process, identify the highest-ROI automation opportunities, and show you what to fix first before any implementation begins."
      />
    </>
  )
}
