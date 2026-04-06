'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden border-b border-border">

      {/* PCB trace background SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 900 520"
        preserveAspectRatio="xMaxYMin slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#52B2BF" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.13">
          <line x1="520" y1="60" x2="750" y2="60" strokeWidth="1.5"/>
          <line x1="750" y1="60" x2="750" y2="120" strokeWidth="1.5"/>
          <line x1="750" y1="120" x2="860" y2="120" strokeWidth="1.5"/>
          <line x1="620" y1="160" x2="800" y2="160" strokeWidth="1.5"/>
          <line x1="800" y1="160" x2="800" y2="220" strokeWidth="1.5"/>
          <line x1="800" y1="220" x2="870" y2="220" strokeWidth="1.5"/>
          <line x1="560" y1="260" x2="680" y2="260" strokeWidth="1.5"/>
          <line x1="680" y1="260" x2="680" y2="320" strokeWidth="1.5"/>
          <line x1="680" y1="320" x2="900" y2="320" strokeWidth="1.5"/>
          <line x1="590" y1="380" x2="730" y2="380" strokeWidth="1.5"/>
          <line x1="730" y1="380" x2="730" y2="440" strokeWidth="1.5"/>
          <line x1="730" y1="440" x2="900" y2="440" strokeWidth="1.5"/>
          <line x1="750" y1="90" x2="800" y2="90" strokeWidth="1"/>
          <line x1="800" y1="90" x2="800" y2="160" strokeWidth="1"/>
          <line x1="620" y1="160" x2="600" y2="140" strokeWidth="1"/>
          <line x1="600" y1="140" x2="560" y2="140" strokeWidth="1"/>
          <line x1="560" y1="140" x2="520" y2="100" strokeWidth="1"/>
          <line x1="520" y1="100" x2="520" y2="60" strokeWidth="1"/>
          <line x1="560" y1="260" x2="540" y2="240" strokeWidth="1"/>
          <line x1="540" y1="240" x2="540" y2="180" strokeWidth="1"/>
          <line x1="540" y1="180" x2="560" y2="160" strokeWidth="1"/>
        </g>
        {/* Vias */}
        <g fill="none" stroke="#52B2BF" opacity="0.22">
          {[
            [750,60],[750,120],[800,160],[800,220],
            [680,260],[680,320],[730,380],[730,440],
            [520,60],[620,160],[560,260]
          ].map(([cx,cy], i) => (
            <g key={i}>
              <circle cx={cx} cy={cy} r="5" strokeWidth="1.5"/>
              <circle cx={cx} cy={cy} r="2.5" fill="#52B2BF" opacity="0.4"/>
            </g>
          ))}
        </g>
        {/* IC chip */}
        <g stroke="#52B2BF" fill="none" opacity="0.14" strokeWidth="1">
          <rect x="810" y="50" width="72" height="56" rx="3"/>
          <line x1="810" y1="64" x2="800" y2="64"/><line x1="810" y1="76" x2="800" y2="76"/>
          <line x1="810" y1="88" x2="800" y2="88"/>
          <line x1="882" y1="64" x2="892" y2="64"/><line x1="882" y1="76" x2="892" y2="76"/>
          <line x1="882" y1="88" x2="892" y2="88"/>
          <line x1="828" y1="50" x2="828" y2="40"/><line x1="846" y1="50" x2="846" y2="40"/>
          <line x1="864" y1="50" x2="864" y2="40"/>
          <circle cx="820" cy="61" r="2.5" fill="#52B2BF" opacity="0.3"/>
        </g>
        {/* Resistors */}
        <g stroke="#52B2BF" fill="none" opacity="0.13" strokeWidth="1">
          <line x1="856" y1="160" x2="864" y2="160"/>
          <rect x="864" y="155" width="18" height="10" rx="2"/>
          <line x1="882" y1="160" x2="890" y2="160"/>
          <line x1="856" y1="320" x2="864" y2="320"/>
          <rect x="864" y="315" width="18" height="10" rx="2"/>
          <line x1="882" y1="320" x2="890" y2="320"/>
        </g>
        {/* Left fade mask */}
        <defs>
          <linearGradient id="pcbFade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0D0E1A" stopOpacity="1"/>
            <stop offset="45%" stopColor="#0D0E1A" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="#0D0E1A" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="620" height="520" fill="url(#pcbFade)"/>
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto w-full pt-32 pb-20">
        <div className="flex items-center gap-3 mb-7">
          <span className="w-2 h-2 rounded-full bg-accent inline-block" />
          <span className="font-mono text-xs text-accent/80 tracking-[0.15em] uppercase">
            Electrical Engineering · Dalhousie University
          </span>
        </div>

        <h1 className="font-display font-extrabold leading-none mb-2">
          <span className="block text-[clamp(64px,9vw,108px)] text-text">Alex</span>
          <span className="block text-[clamp(64px,9vw,108px)] text-transparent" style={{ WebkitTextStroke: '2px #52B2BF' }}>
            Baggio.
          </span>
        </h1>

        <p className="font-body font-light text-lg text-muted max-w-xl leading-relaxed mt-7 mb-10">
          Integrating communication, control, and power systems with embedded software to create real-world solutions.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="#projects"
            className="group flex items-center gap-3 px-7 py-3 bg-accent text-bg font-display font-bold text-sm tracking-wide rounded hover:opacity-85 transition-opacity">
            View Projects
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="https://www.linkedin.com/in/alexbaggio/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3 border border-border font-body font-light text-sm text-muted hover:border-accent hover:text-accent transition-colors rounded">
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 bg-surface border border-border px-4 py-2 rounded-full font-mono text-xs text-muted hidden md:block">
        3rd Year · Dal EE · Halifax
      </div>
    </section>
  )
}
