'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display font-extrabold text-[clamp(44px,5.5vw,68px)] text-text mb-14 leading-none">
          Contact<span className="text-accent">.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-display font-bold text-2xl md:text-[28px] text-text leading-snug mb-5">
              Let's build something{' '}
              <span className="text-accent">interesting</span>{' '}
              together.
            </p>
            <p className="font-body font-light text-sm text-muted leading-relaxed">
            Open to opportunities across electrical engineering and multidisciplinary system design. Always happy to connect.
            </p>
          </div>
          <div className="border border-border rounded-xl overflow-hidden">
            {[
              { label: 'Email',    value: 'baggio@dal.ca',               href: 'mailto:baggio@dal.ca' },
              { label: 'LinkedIn', value: 'linkedin.com/in/alexbaggio',  href: 'https://www.linkedin.com/in/alexbaggio/' },
              { label: 'GitHub',   value: 'github.com/alexbaggio',       href: 'https://github.com/alexbaggio' },
            ].map((item) => (
              <a key={item.label} href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-6 py-5 border-b border-border hover:bg-surface transition-colors">
                <div>
                  <div className="font-mono text-[10px] text-muted/60 tracking-[0.15em] uppercase mb-1">{item.label}</div>
                  <div className="font-body text-sm text-text">{item.value}</div>
                </div>
                <span className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all">→</span>
              </a>
            ))}
            <div className="flex items-center justify-between px-6 py-5 opacity-50">
              <div>
                <div className="font-mono text-[10px] text-muted/60 tracking-[0.15em] uppercase mb-1">Location</div>
                <div className="font-body text-sm text-text">Halifax, NS · Canada</div>
              </div>
              <span className="font-mono text-[10px] text-muted2 tracking-widest">DAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
