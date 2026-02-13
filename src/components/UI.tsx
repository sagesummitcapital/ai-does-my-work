import Link from 'next/link'

// Icons
export function ArrowRight({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

export function Check({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function Sparkles({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
}

// CTA Section
interface CTASectionProps {
  headline?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({ 
  headline = 'Ready to eliminate manual work?',
  description,
  buttonText = 'Request Automation Audit',
  buttonHref = '/request-audit',
}: CTASectionProps) {
  return (
    <section className="section relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent-500/50 to-transparent" />
      
      <div className="container-wide relative text-center">
        <h3 className="text-2xl md:text-3xl text-content-100">{headline}</h3>
        {description && (
          <p className="mt-4 text-content-400 max-w-xl mx-auto">{description}</p>
        )}
        <div className="mt-8">
          <Link href={buttonHref} className="btn-primary">
            {buttonText}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Before/After Card - redesigned
interface BeforeAfterCardProps {
  title: string
  before: string
  after: string
}

export function BeforeAfterCard({ title, before, after }: BeforeAfterCardProps) {
  return (
    <div className="before-after-card group hover:border-surface-600 transition-all duration-300">
      <div className="px-5 py-4 border-b border-surface-700/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500/20 to-secondary-500/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-accent-400" />
        </div>
        <span className="text-sm font-medium text-content-200">{title}</span>
      </div>
      <div className="before-section">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-red-400/60" />
          <span className="text-xs font-medium uppercase tracking-wider text-red-400/80">Before</span>
        </div>
        <p className="text-sm text-content-400">{before}</p>
      </div>
      <div className="after-section">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-accent-400" />
          <span className="text-xs font-medium uppercase tracking-wider text-accent-400">After</span>
        </div>
        <p className="text-sm text-content-200">{after}</p>
      </div>
    </div>
  )
}

// Step Card - redesigned
interface StepCardProps {
  number: string
  title: string
  description: string
}

export function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="card-hover group">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-secondary-500/10 
                        flex items-center justify-center border border-accent-500/20
                        group-hover:border-accent-500/40 transition-colors">
          <span className="font-mono text-sm font-semibold text-accent-400">{number}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg text-content-100 group-hover:text-accent-300 transition-colors">{title}</h3>
          <p className="mt-2 text-sm text-content-400">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Bullet List
interface BulletListProps {
  items: string[]
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="w-1.5 h-1.5 mt-2.5 rounded-full bg-accent-400 flex-shrink-0" />
          <span className="text-content-300">{item}</span>
        </li>
      ))}
    </ul>
  )
}

// Feature Card
interface FeatureCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="card-glow group">
      <div className="relative z-10">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500/20 to-secondary-500/10 
                          flex items-center justify-center mb-4 border border-accent-500/20">
            {icon}
          </div>
        )}
        <h4 className="text-content-100 font-medium group-hover:text-accent-300 transition-colors">{title}</h4>
        <p className="mt-2 text-sm text-content-400">{description}</p>
      </div>
    </div>
  )
}
