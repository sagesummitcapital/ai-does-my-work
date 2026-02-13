'use client'

import { useEffect } from 'react'
import { BeforeAfterCard, CTASection } from '@/components'

const categories = [
  {
    title: 'Sales & Revenue Ops',
    description: 'Stop revenue leakage caused by slow follow-up, messy CRM data, and manual handoffs.',
    examples: [
      {
        title: 'Lead Intake → Routing → Follow-Up',
        before: 'Leads land in inboxes, get routed inconsistently, and follow-up is uneven',
        after: 'Every lead is enriched, routed by rules, logged to CRM, and followed up automatically'
      },
      {
        title: 'Pipeline Updates + Weekly Exec Summary',
        before: 'Sales updates assembled manually from CRM notes and spreadsheets',
        after: 'Auto-generated pipeline summary delivered weekly with risks and next actions'
      }
    ]
  },
  {
    title: 'Marketing Operations',
    description: 'Turn scattered campaign work into repeatable systems with tracking, attribution, and reuse.',
    examples: [
      {
        title: 'Content + Campaign Production',
        before: 'Ad hoc drafting, approvals, and posting across tools with no visibility',
        after: 'Structured workflow: brief → draft → review → publish → performance recap'
      },
      {
        title: 'Inbound Funnel Triage',
        before: 'Form fills and inquiries manually reviewed and responded to (often late)',
        after: 'AI triage + templated responses + routing to the right owner with SLA tracking'
      }
    ]
  },
  {
    title: 'Finance & Reporting',
    description: 'Reduce close time, eliminate spreadsheet drag, and keep an audit trail for every step.',
    examples: [
      {
        title: 'Month-End Close + Reporting Pack',
        before: 'Exports, reconciliation, and formatting done manually each month',
        after: 'Automated pulls + validation checks + exception queue + consistent reporting pack'
      },
      {
        title: 'Expense Categorization + Review Queue',
        before: 'Manual coding of transactions and inconsistent category rules',
        after: 'AI categorization with confidence scoring and a clean review/approval queue'
      }
    ]
  },
  {
    title: 'Client Support & Operations',
    description: 'Improve response time and consistency by routing issues correctly the first time.',
    examples: [
      {
        title: 'Support Triage + Routing',
        before: 'Requests pile up across email and chat with inconsistent prioritization',
        after: 'Categorized, summarized, prioritized tickets routed automatically with escalation rules'
      },
      {
        title: 'Client Onboarding Pipeline',
        before: 'Manual emails, document chasing, and unclear internal status',
        after: 'Automated onboarding: intake → document collection → provisioning → status tracking'
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
              Practical Automation for <span className="gradient-text">Real Operations</span>
            </h1>
            <p className="mt-6 text-lg text-content-400">
              We automate workflows that are high-volume, rules-based, and measurable — so you get time back, reduce errors, and tighten cycle times without losing control.
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

      <CTASection headline="Have a workflow in mind?" description="Tell us what’s manual today. We’ll map the workflow, identify what can be automated, and estimate ROI before any build work.
" />
    </>
  )
}
