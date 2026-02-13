import type { Metadata } from 'next'
import { HubSpotForm } from '@/components'

export const metadata: Metadata = {
  title: 'Request Automation Audit | AI Does My Work',
  description:
    "Tell us about your current workflows. We'll identify where AI can safely replace manual work.",
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
            <span className="label">Workflow Audit</span>

            <h1 className="mt-4 text-3xl md:text-4xl">
              Request an <span className="gradient-text">Automation Audit</span>
            </h1>

            <p className="mt-6 text-lg text-content-400">
  Tell us what’s manual today. We’ll map the workflow, identify what can be automated safely,
  and provide an ROI estimate (time recovered, cycle time, error reduction) — before any build work begins.
</p>


            <div className="mt-10">
              <div className="card">
                <h4 className="text-content-200 font-medium">
                  What happens next?
                </h4>

                <ul className="mt-4 space-y-3">
                  {[
  'We review your submission within 2 business days',
  'If it’s a fit, we schedule a 30-minute workflow call',
  'You receive a short roadmap: scope, guardrails, and ROI estimate',
  'If you want to move forward, we deploy in phases with validation + audit trails',
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
  Best fit: high-volume workflows (finance, sales ops, support, reporting) where errors and delays are costly.
  If you’re looking for “AI experiments,” we’re not the right partner.
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
