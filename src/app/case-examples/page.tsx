'use client'

import { useEffect } from 'react'
import { CTASection, Sparkles } from '@/components'

const cases = [
  {
    title: 'Month-End Close + Reporting Pack',
    category: 'Finance & Reporting',
    problem:
      'Month-end close was slowed down by manual exports, spreadsheet reconciliation, missing mappings, and repeated report formatting. The bottleneck was not financial judgment — it was repetitive process work and inconsistent inputs.',
    solution:
      'We designed a structured close workflow that pulls source data automatically, runs validation checks, flags exceptions for review, and generates a standardized reporting pack on schedule.',
    result: '5–8 hours of manual work → 45–60 minutes of review',
    details: [
      'Automated data pulls from accounting, payroll, and banking systems',
      'Validation rules flag missing mappings, outliers, and incomplete inputs',
      'Exception queue routes issues to the right owner for review',
      'Reporting pack generated in a consistent format with audit visibility',
    ],
  },
  {
    title: 'Lead Intake, Follow-Up, and CRM Updates',
    category: 'Sales & Revenue Operations',
    problem:
      'Leads arrived through forms, inbound email, and referrals, then sat in inboxes or were followed up inconsistently. CRM records fell out of date, attribution became unreliable, and pipeline visibility suffered.',
    solution:
      'We implemented an intake and follow-up system that captures, enriches, routes, and logs every lead automatically, then triggers follow-up based on intent and stage with escalation rules for human intervention.',
    result: 'Manual lead handling → faster response, cleaner CRM, better pipeline visibility',
    details: [
      'Automatic enrichment, deduplication, and lead record creation',
      'Routing rules based on territory, service line, intent, or owner',
      'Follow-up sequences triggered automatically with stop conditions',
      'CRM updated with status changes, notes, timestamps, and next steps',
    ],
  },
  {
    title: 'Support Triage + Resolution Routing',
    category: 'Client Support & Operations',
    problem:
      'Support requests came in across email and chat with no consistent triage layer. High-priority issues were mixed with low-value requests, routing depended on tribal knowledge, and response quality varied across the team.',
    solution:
      'We built a triage workflow that classifies requests, summarizes customer context, flags urgency, and routes each case to the correct owner while keeping humans in control of final responses and sensitive situations.',
    result: 'Queue chaos → prioritized routing, faster handling, and more consistent support',
    details: [
      'Classification by issue type, urgency, account tier, and risk level',
      'Automatic context summary including history, prior issues, and key details',
      'Routing to the correct team or owner with visibility into SLA status',
      'Escalation logic and audit trail for decisions, actions, and handoffs',
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
            <span className="label">Workflow Examples</span>
            <h1 className="mt-4 text-3xl md:text-4xl">
              Examples of <span className="gradient-text">Manual Work We Replace</span>
            </h1>
            <p className="mt-6 text-lg text-content-400">
              Representative examples of the kinds of operational workflows we automate for growing businesses. Clear scope, practical implementation, and human oversight where it matters.
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
                        <span className="text-xs font-medium uppercase tracking-wider text-accent-400">Outcome</span>
                      </div>
                      <p className="text-content-200 font-medium">{caseStudy.result}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-7 lg:col-start-6 space-y-8">
                    <div className="card">
                      <h4 className="text-sm font-medium text-content-300 uppercase tracking-wider mb-3">The Bottleneck</h4>
                      <p className="text-content-400">{caseStudy.problem}</p>
                    </div>

                    <div className="card">
                      <h4 className="text-sm font-medium text-content-300 uppercase tracking-wider mb-3">The System</h4>
                      <p className="text-content-400">{caseStudy.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-content-300 uppercase tracking-wider mb-4">What Gets Automated</h4>
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

      <CTASection
        headline="Have a workflow like this in your business?"
        description="We’ll assess where the manual drag is, what can be automated safely, and which workflow is worth fixing first."
      />
    </>
  )
}