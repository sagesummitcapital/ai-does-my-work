'use client'

import { useEffect } from 'react'
import { StepCard, CTASection } from '@/components'

const steps = [
  {
    number: '01',
    title: 'Workflow Audit',
    description:
      'We map the workflow as it actually runs today — inputs, handoffs, systems, exceptions, and failure points. You get a clear process map, not a generic recommendation.'
  },
  {
    number: '02',
    title: 'ROI + Risk Outline',
    description:
      'We identify the highest-leverage automation opportunities and define what stays human. Before we build anything, we estimate ROI (time, cycle time, error reduction) and set guardrails.'
  },
  {
    number: '03',
    title: 'Build + Deploy',
    description:
      'We implement the automation with access controls, audit trails, and exception handling. Rollout is phased: validate in parallel, then graduate to production when it’s stable.'
  },
  {
    number: '04',
    title: 'Measurement + Iteration',
    description:
      'We track impact monthly: time recovered, cycle time, error rate, and throughput. Automations are tuned over time — the system gets better, not more complex.'
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
              A Structured Approach to <span className="gradient-text">Automation</span>
            </h1>
            <p className="mt-6 text-lg text-content-400">
              We don't experiment with your operations. We replace specific workflows with governed automation — defined scope, human oversight where it matters, and metrics you can defend.
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
              <h2 className="mt-4 text-2xl md:text-3xl text-content-100">What We Don't Do</h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="space-y-4 scroll-fade">
                {[
  "We don’t automate irreversible decisions without a human approval step",
  "We don’t ship automations without parallel testing and rollback plans",
  "We don’t claim ROI we can’t instrument and measure",
  "We don’t connect to systems without least-privilege access and logging",
  "We don’t build fragile automations that break when a process changes"
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
  description="Tell us what’s manual today. We’ll map the process, identify automation candidates, and provide an ROI estimate — before any build work begins."
/>
    </>
  )
}
