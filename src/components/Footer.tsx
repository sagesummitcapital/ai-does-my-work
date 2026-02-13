import Link from 'next/link'

const navigation = [
  { name: 'What We Automate', href: '/what-we-automate' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Case Examples', href: '/case-examples' },
  { name: 'About', href: '/about' },
]

export function Footer() {
  return (
    <footer className="border-t border-surface-800 bg-surface-950">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <span className="font-semibold text-lg text-content-100">AI Does My Work</span>
            <p className="mt-3 text-sm text-content-500 max-w-xs">
  We design and deploy AI systems that replace high-volume manual workflows — 
  with guardrails, audit trails, and measurable ROI.
</p>
            <p className="mt-4 text-xs text-content-500">
  Built inside <span className="text-accent-400">Sage Summit Capital</span> — 
  an AI-native holding company focused on disciplined, profitable operations.
</p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-8">
            <span className="label">Explore</span>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-content-500 hover:text-content-200 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-3">
            <span className="label">Workflow Audit</span>
            <div className="mt-4">
              <Link href="/request-audit" className="btn-primary text-sm">
               Request Audit
              </Link>
            </div>
          </div>
        </div>

        <div className="divider mt-12" />
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-content-500">
            © {new Date().getFullYear()} AI Does My Work
          </p>
        </div>
      </div>
    </footer>
  )
}
