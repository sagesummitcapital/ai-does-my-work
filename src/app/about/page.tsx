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
              Built by <span className="gradient-text">Operators.</span>
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
                  AI Does My Work was created by builders who deploy AI inside their own 
                  portfolio companies. We focus on replacing manual workflows — not 
                  experimenting with your core operations.
                </p>
                <p className="text-content-400">
                  Every implementation we recommend is one we would deploy in our own 
                  businesses. We've seen what works, what fails, and what creates 
                  unnecessary complexity. That experience shapes how we approach each engagement.
                </p>
                <p className="text-content-400">
                  We're part of the <span className="text-accent-400">Sage Summit Capital</span> portfolio — a holding company focused on 
                  building AI-native businesses with discipline and long-term intent. This means 
                  we understand the operator's perspective because we are operators.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="card scroll-fade">
                <span className="label">Our Focus</span>
                <ul className="mt-4 space-y-3">
                  {[
  'Workflow replacement, not AI add-ons',
  'ROI quantified before deployment',
  'Governed automation with human oversight',
  'Systems that compound over time'
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

<section className="section-sm border-t border-surface-800">
  <div className="container-wide">
    <div className="max-w-2xl scroll-fade">
      <span className="label">What We Are Not</span>
      <p className="mt-4 text-content-400">
        We are not an AI agency selling experiments. We are not building chatbots for the sake of it. 
        And we do not deploy autonomous systems into critical workflows without oversight.
      </p>
      <p className="mt-4 text-content-400">
        We replace specific manual processes with structured automation — then measure the result.
      </p>
    </div>
  </div>
</section>

      <CTASection />
    </>
  )
}
