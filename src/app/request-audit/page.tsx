import type { Metadata } from 'next'
import { HubSpotForm } from '@/components'

export const metadata: Metadata = {
  title: 'Request Automation Audit | AI Does My Work',
  description:
    "Tell us about your current workflows. We'll identify where manual work can be replaced and estimate ROI.",
}

export default function RequestAuditPage() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-30" />
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="label">Automation Audit</span>

            <h1 className="mt-4 text-3xl md:text-4xl">
              Find the <span className="gradient-text">Manual Work Costing You Time and Money</span>
            </h1>

            <p className="mt-6 text-lg text-content-400">
              Tell us how your workflows run today. We’ll identify where your team is spending time on repetitive admin, what can be automated, and what the expected ROI looks like before any implementation.
            </p>

            <p className="mt-4 text-content-400">
              Most businesses we work with uncover 10–30 hours per week of manual work that can be reduced or removed.
            </p>

            <div className="mt-10">
              <div className="card">
                <h4 className="text-content-200 font-medium">
                  What you’ll get
                </h4>

                <ul className="mt-4 space-y-3">
                  {[
                    'A clear breakdown of your current workflow and bottlenecks',
                    'The highest-ROI automation opportunities identified',
                    'Estimated time savings and operational impact',
                    'A simple roadmap for what to automate first',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-accent-400 flex-shrink-0" />
                      <span className="text-sm text-content-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <h4 className="mt-8 text-content-200 font-medium">
                  What happens next
                </h4>

                <ul className="mt-4 space-y-3">
                  {[
                    'We review your submission within 1–2 business days',
                    'If it’s a fit, we schedule a 30-minute workflow call',
                    'You receive a focused automation roadmap with ROI estimates',
                    'If you decide to move forward, we implement in a structured rollout',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-accent-400 flex-shrink-0" />
                      <span className="text-sm text-content-400">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm text-content-500">
                  Best fit: service businesses with 5–50 employees, growing fast but dealing with manual workflows across operations, sales, finance, or support.
                </p>

                <p className="mt-2 text-sm text-content-500">
                  If you’re looking for AI experiments or custom software builds, we’re probably not the right fit.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="card">
              <HubSpotForm
                portalId="244871017"
                formId="2fb051a8-e088-43d0-a4d0-514236e957b2"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
