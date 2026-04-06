'use client'

const skillGroups = [
  {
    index: '01',
    category: 'Hardware & Embedded',
    skills: ['Arduino', 'Raspberry Pi', 'Oscilloscopes', 'Microcontrollers'],
  },
  {
    index: '02',
    category: 'Programming',
    skills: ['C / C++', 'Python', 'MATLAB', 'AVR Assembly'],
  },
  {
    index: '03',
    category: 'Engineering Tools',
    skills: ['LTspice', 'Multisim', 'AutoCAD', 'SolidWorks', 'Git'],
  },
  {
    index: '04',
    category: 'Fundamentals',
    skills: ['Circuit Analysis', 'Digital Logic', 'Control Systems', 'Electromagnetics', 'Power Electronics', 'Communications'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-[18px] h-0.5 bg-accent/60 rounded-full inline-block" />
          <span className="font-mono text-[11px] text-accent/70 tracking-[0.18em] uppercase">Expertise</span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(44px,5.5vw,68px)] text-text mb-14 leading-none">
          Skills<span className="text-accent">.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-[11px] text-muted2 w-6">{group.index}</span>
                <h3 className="font-display font-semibold text-xs tracking-[0.1em] uppercase text-accent/85">{group.category}</h3>
              </div>
              <ul className="divide-y divide-border/60">
                {group.skills.map((skill) => (
                  <li key={skill} className="group flex items-center gap-3 py-2.5">
                    <span className="w-1 h-1 rounded-full bg-muted2 group-hover:bg-accent transition-colors shrink-0" />
                    <span className="font-body text-sm text-muted group-hover:text-text transition-colors">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
