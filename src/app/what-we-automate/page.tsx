'use client'

import { useEffect } from 'react'
import { BeforeAfterCard, CTASection } from '@/components'

const categories = [
  {
    title: 'Sales & Revenue Operations',
    description: 'Reduce revenue leakage by automating lead handling, follow-up, CRM updates, and pipeline visibility.',
    examples: [
      {
        title: 'Lead Intake → Routing → Follow-Up',
        before: 'Leads land in inboxes, get routed inconsistently, and follow-up happens late or not at all',
        after: 'Every lead is enriched, routed by rules, logged to the CRM, and followed up automatically'
      },
      {
        title: 'Pipeline Updates + Weekly Summary',
        before: 'Sales updates are pieced together manually from CRM notes, inboxes, and spreadsheets',
        after: 'A clear pipeline summary is generated automatically with risks, next actions, and visibility for leadership'
      }
    ]
  },
  {
    title: 'Back Office Operations',
    description: 'Replace repetitive internal admin work with structured workflows that improve speed, visibility, and consistency.',
    examples: [
      {
        title: 'Inbox Triage + Internal Routing',
        before: 'Requests come in through shared inboxes and get manually sorted, forwarded, and tracked',
        after: 'Messages are categorized, summarized, routed automatically, and tracked through completion'
      },
      {
        title: 'Meeting Notes → Tasks → Follow-Through',
        before: 'Action items are buried in notes, Slack messages, and follow-up emails',
        after: 'Meeting notes are turned into structured tasks, assigned automatically, and tracked to completion'
      }
    ]
  },
  {
    title: 'Finance & Reporting',
    description: 'Reduce close time, remove spreadsheet drag, and improve reporting consistency with clear review controls.',
    examples: [
      {
        title: 'Month-End Close + Reporting Pack',
        before: 'Exports, reconciliation, and formatting are done manually every month',
        after: 'Source data is pulled automatically, validated, and turned into a consistent reporting pack'
      },
      {
        title: 'Expense Categorization + Review Queue',
        before: 'Transactions are coded manually with inconsistent rules and slow review cycles',
        after: 'Expenses are categorized automatically with confidence scoring and a clean review queue for approval'
      }
    ]
  },
  {
    title: 'Client Support & Onboarding',
    description: 'Improve client experience and reduce internal coordination by automating intake, routing, and status tracking.',
    examples: [
      {
        title: 'Support Triage + Routing',
        before: 'Requests pile up across email and chat with inconsistent prioritization and handoffs',
        after: 'Requests are categorized, prioritized, summarized, and routed automatically with escalation rules'
      },
      {
        title: 'Client Onboarding Pipeline',
        before: 'Onboarding depends on manual emails, document chasing, and unclear internal ownership',
        after: 'A structured onboarding workflow handles intake, document collection, provisioning, and status tracking'
      }
    ]
  }
]

export default function WhatWeAutomate() {
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
            <span className="label">What We Automate</span>
            <h1 className="mt-4 text-3xl md:text-4xl">
              The Manual Work <span className="gradient-text">Slowing Your Business Down</span>
            </h1>
            <p className="mt-6 text-lg text-content-400">
              We automate high-friction workflows across sales, operations, finance, support, and internal coordination — especially the repetitive admin work that eats up time, slows execution, and creates avoidable errors.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      {categories.map((category, categoryIndex) => (
        <section
          key={category.title}
          className={`section relative ${categoryIndex % 2 === 1 ? 'bg-surface-900/50' : ''}`}
        >
          {categoryIndex % 2 === 0 && <div className="absolute inset-0 bg-glow-teal opacity-10" />}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-700 to-transparent" />

          <div className="container-wide relative">
            <div className="mb-12 scroll-fade">
              <span className="label">{String(categoryIndex + 1).padStart(2, '0')}</span>
              <h2 className="mt-4 text-2xl md:text-3xl text-content-100">{category.title}</h2>
              <p className="mt-4 text-content-400 max-w-2xl">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.examples.map((example, exampleIndex) => (
                <div key={example.title} className="scroll-fade" style={{ transitionDelay: `${exampleIndex * 100}ms` }}>
                  <BeforeAfterCard title={example.title} before={example.before} after={example.after} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Have a workflow you want to automate?"
        description="Tell us what is manual today. We’ll map the workflow, identify the best automation opportunity, and estimate the operational ROI before any build work begins."
      />
    </>
  )
}
