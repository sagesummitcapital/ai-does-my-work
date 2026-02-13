'use client'

import { useEffect } from 'react'
import { CTASection, Sparkles } from '@/components'

const cases = [
  {
    title: 'Month-End Close + Reporting Pack',
    category: 'Finance & Reporting',
    problem:
      'Month-end close required manual exports from multiple systems, spreadsheet reconciliation, and repeated formatting. The bottleneck wasn’t accounting knowledge — it was workflow drag and inconsistent inputs.',
    solution:
      'We built a close pipeline that pulls source data automatically, applies validation checks, flags exceptions for review, and generates a consistent reporting pack (P&L, balance sheet, KPIs) on schedule.',
    result: '5–8 hours → 45–60 minutes review',
    details: [
      'Automated pulls from accounting + payroll + banking sources',
      'Validation rules catch missing mappings and outliers',
      'Exception queue routes issues to the right owner',
      'Reports generated in a standard format with an audit trail',
    ],
  },
  {
    title: 'Sales Lead Intake → Follow-Up → CRM Hygiene',
    category: 'Sales & Revenue Operations',
    problem:
      'Leads came in through forms, inbound email, and referrals — then sat in inboxes. Follow-ups were inconsistent, CRM data drifted, and attribution was unreliable. Revenue leakage was a process issue.',
    solution:
      'We implemented a governed intake and follow-up system: every lead is enriched, routed, logged to the CRM, and followed up with sequences based on intent — with escalation rules when humans should step in.',
    result: 'Dropped leads → tracked pipeline + faster response',
    details: [
      'Auto-enrichment (company, role, size) + dedupe',
      'Lead routing based on rules (territory, product, intent)',
      'Follow-up sequences triggered with stop conditions',
      'CRM kept clean automatically (notes, status, timestamps)',
    ],
  },
  {
    title: 'Support Triage + Resolution Routing',
    category: 'Client Support & Operations',
    problem:
      'Support requests arrived across email and chat. High-priority issues were mixed with low-value noise, response times varied, and routing depended on tribal knowledge. Customers felt the inconsistency.',
    solution:
      'We built a support triage layer that categorizes requests, summarizes context, flags urgency, and routes to the correct owner — while keeping humans in control of final responses and sensitive cases.',
    result: 'Queue chaos → prioritized routing + consistent handling',
    details: [
      'Classification by issue type, urgency, and customer tier',
      'Context summary included (history, prior tickets, key details)',
      'Auto-routing to the right team with SLA tracking',
      'Escalation rules + full audit trail of actions taken',
    ],
  },
]
export default function CaseExamples() {
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
            <span className="label">Case Examples</span>
            <h1 className="mt-4 text-3xl md:text-4xl">
              Real Implementations, <span className="gradient-text">Real Results</span>
            </h1>
            <p className="mt-6 text-lg text-content-400">
Examples of common workflows we’ve replaced with automation.
Clear scope. Human oversight where it matters.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="section">
        <div className="container-wide">
          <div className="space-y-20">
            {cases.map((caseStudy, index) => (
              <article key={caseStudy.title} className={`scroll-fade ${index > 0 ? 'pt-20 border-t border-surface-800' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-4">
                    <span className="label">{caseStudy.category}</span>
                    <h2 className="mt-3 text-2xl text-content-100">{caseStudy.title}</h2>
                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-br from-accent-500/10 to-secondary-500/5 border border-accent-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4 text-accent-400" />
                        <span className="text-xs font-medium uppercase tracking-wider text-accent-400">Result</span>
                      </div>
                      <p className="text-content-200 font-medium">{caseStudy.result}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 lg:col-start-6 space-y-8">
                    <div className="card">
                      <h4 className="text-sm font-medium text-content-300 uppercase tracking-wider mb-3">The Problem</h4>
                      <p className="text-content-400">{caseStudy.problem}</p>
                    </div>

                    <div className="card">
                      <h4 className="text-sm font-medium text-content-300 uppercase tracking-wider mb-3">The Solution</h4>
                      <p className="text-content-400">{caseStudy.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-content-300 uppercase tracking-wider mb-4">Implementation Details</h4>
                      <ul className="space-y-2">
                        {caseStudy.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-accent-400 flex-shrink-0" />
                            <span className="text-sm text-content-400">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection headline="Have a similar workflow?" description="We'll assess whether your process is a good fit for automation." />
    </>
  )
}
