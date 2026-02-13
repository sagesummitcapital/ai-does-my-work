'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { ArrowRight, BeforeAfterCard, BulletList, CTASection, Sparkles } from '@/components'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.scroll-fade').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero - Visually striking with mesh gradient */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-surface-950">
          {/* Mesh gradient */}
          <div className="absolute inset-0 bg-mesh" />
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          
          {/* Animated glow orbs */}
          <div className="glow-orb w-[600px] h-[600px] bg-accent-500/20 -top-48 -left-48" style={{ animationDelay: '0s' }} />
          <div className="glow-orb w-[500px] h-[500px] bg-secondary-500/15 top-1/4 -right-32" style={{ animationDelay: '2s' }} />
          <div className="glow-orb w-[400px] h-[400px] bg-accent-500/10 bottom-0 left-1/3" style={{ animationDelay: '4s' }} />
          
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container-wide relative z-10 py-20 md:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="animate-initial animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full 
                            bg-surface-800/60 border border-surface-700/50 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span className="text-sm text-content-300">AI-Powered Workflow Automation</span>
            </div>

            <h1 className="animate-initial animate-fade-up animate-delay-100 text-balance">
              We Replace Manual Work <br />
              <span className="gradient-text">With AI.</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-content-400 max-w-2xl leading-relaxed animate-initial animate-fade-up animate-delay-200">
              AI Does My Work helps operators eliminate repetitive workflows across operations, finance, and internal systems — with controls, audit trails, and measurable ROI.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 animate-initial animate-fade-up animate-delay-300">
              <Link href="/request-audit" className="btn-primary">
                Request Automation Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/how-it-works" className="btn-secondary">
                See How It Works
              </Link>
            </div>

            <p className="mt-8 text-sm text-content-500 animate-initial animate-fade-up animate-delay-400">
              Built by operators for operators.


            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-950 to-transparent" />
      </section>

      {/* The Cost of Manual Work */}
      <section className="section relative">
        <div className="absolute inset-0 bg-glow-teal opacity-30" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 scroll-fade">
              <span className="label">The Problem</span>
              <h2 className="mt-4 text-content-100">
                Manual Work Is <span className="gradient-text">Expensive.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="scroll-fade">
                <BulletList items={[
  'Recurring reports built in spreadsheets',
  'Data copied between tools and systems',
  'Leads and important emails falling through cracks',
  'Month-end close and reconciliation done manually'
]} />
              </div>
              <p className="mt-8 text-content-400 scroll-fade">
                Most businesses don’t need more headcount or another tool.
They need fewer manual steps — and fewer places for errors, delays, and dropped follow-ups to hide.
              </p>
              <div className="mt-8 scroll-fade">
                <Link href="/request-audit" className="btn-text group">
                  Request an audit
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replace, Don't Assist */}
      <section className="section relative overflow-hidden">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-surface-900/50" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-700 to-transparent" />
        
        <div className="container-wide relative">
          <div className="text-center mb-16 scroll-fade">
            <span className="label">Our Approach</span>
            <h2 className="mt-4 text-content-100">
              Replace, <span className="gradient-text">Don't Assist.</span>
            </h2>
            <p className="mt-4 text-content-400 max-w-2xl mx-auto">
              We don’t bolt AI onto broken processes.
We remove the manual layer entirely — then instrument what remains so performance improves over time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="scroll-fade" style={{ transitionDelay: '0ms' }}>
              <BeforeAfterCard
                title="Recurring Operations"
                before="4-hour monthly report compiled manually"
                after="Auto-generated reporting with approvals + audit trail"
              />
            </div>
            <div className="scroll-fade" style={{ transitionDelay: '100ms' }}>
              <BeforeAfterCard
                title="Repetitive Reporting"
                before="Weekly data pulls from 5 different systems"
                after="Live pipeline + weekly exec summary sent automatically"
              />
            </div>
            <div className="scroll-fade" style={{ transitionDelay: '200ms' }}>
              <BeforeAfterCard
                title="Internal Coordination"
                before="Email chains coordinating task handoffs"
                after="Intake → routing → status updates handled automatically"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Built for Operators */}
      <section className="section relative">
        <div className="absolute inset-0 bg-glow-purple opacity-20" />
        <div className="container-wide relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 scroll-fade">
              <span className="label">Implementation</span>
              <h2 className="mt-4 text-content-100">
                Automation <br />
                <span className="gradient-text">With Controls.</span>
              </h2>
              <p className="mt-4 text-content-400">
                We don't experiment with your operations. We deploy structured automation with oversight, versioning, and measurable outcomes.
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Workflow Audit', desc: 'We map the process and quantify ROI before we automate anything.' },
                  { title: 'Structured Deployment', desc: 'Roll out in phases with validation at each step.' },
                  { title: 'Oversight & Control', desc: 'Human review where it matters. Audit trails everywhere.' },
                  { title: 'Measurable ROI', desc: 'Track time saved, error reduction, and cycle time monthly.' },
                ].map((item, index) => (
                  <div 
                    key={item.title} 
                    className="card-glow scroll-fade group" 
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    <div className="relative z-10">
                      <h4 className="text-content-100 font-medium group-hover:text-accent-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-content-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="section-sm relative overflow-hidden border-y border-surface-800">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 via-surface-900 to-secondary-500/5" />
        <div className="container-wide relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
  { value: '10–40 hrs/mo', label: 'Typical Time Recovered' },
  { value: '2–6 Weeks', label: 'From Audit to Deployment' },
  { value: 'Audit Trails', label: 'Every Automation Logged' },
  { value: 'Ops + Finance', label: 'Built for Real Workflows' },
].map((stat, index) => (
              <div key={stat.label} className="scroll-fade" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-2 text-sm text-content-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        headline="Ready to eliminate manual work?"
        description="Tell us what’s manual today. We’ll map what can be automated safely, what should stay human, and what the ROI looks like — before you commit to anything."

      />
    </>
  )
}
