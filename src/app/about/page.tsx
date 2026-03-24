'use client'

import { useEffect } from 'react'
import { CTASection } from '@/components'

export default function About() {
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
            <span className="label">About</span>
            <h1 className="mt-4 text-3xl md:text-4xl">
              Built by <span className="gradient-text">Operators Who Fix Operations.</span>
            </h1>
          </div>
        </div>
      </section>
{/* Content */}
      <section className="section relative">
        <div className="absolute inset-0 bg-glow-teal opacity-10" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <div className="space-y-6 scroll-fade">
                <p className="text-lg text-content-300">
                  AI Does My Work was built by operators working inside growing businesses with real operational pressure — not theorists, not consultants, and not tool builders.
                </p>

                <p className="text-content-400">
                  We’ve seen what happens as companies scale: inboxes become task managers, reporting lives in spreadsheets, follow-up becomes inconsistent, and internal coordination slows everything down.
                </p>

                <p className="text-content-400">
                  Most businesses don’t have a strategy problem. They have an execution problem driven by too many manual workflows.
                </p>

                <p className="text-content-400">
                  We focus on identifying those workflows and replacing them with simple, structured automation systems that reduce admin load, improve execution, and increase margin.
                </p>

                <p className="text-content-400">
                  We are part of the <span className="text-accent-400">Sage Summit Capital</span> ecosystem, where we actively implement these systems inside our own portfolio companies. Every recommendation we make is based on what we’ve tested in real operating environments.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="card scroll-fade">
                <span className="label">How We Operate</span>
                <ul className="mt-4 space-y-3">
                  {[
                    'We focus on removing repetitive admin work first',
                    'We prioritize workflows with clear ROI and time savings',
                    'We build systems that fit your existing operations',
                    'We implement with control, visibility, and accountability'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-accent-400 flex-shrink-0" />
                      <span className="text-sm text-content-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Are Not */}
      <section className="section-sm border-t border-surface-800">
        <div className="container-wide">
          <div className="max-w-2xl scroll-fade">
            <span className="label">What We Are Not</span>

            <p className="mt-4 text-content-400">
              We are not an AI agency selling experiments, demos, or one-off automations that never get used.
            </p>

            <p className="mt-4 text-content-400">
              We are not building custom software projects that take months and require ongoing development just to function.
            </p>

            <p className="mt-4 text-content-400">
              And we do not introduce complexity into already messy operations.
            </p>

            <p className="mt-4 text-content-400">
              We focus on replacing specific manual workflows with simple, reliable systems — then measuring the operational impact.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}