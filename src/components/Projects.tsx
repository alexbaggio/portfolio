'use client'
import Image from 'next/image'

const projects = [
  {
    number: '01',
    title: 'Autonomous Cargo Handling Robot',
    description: 'Collaborating on an autonomous robotic system using ROS2 for navigation. Designed and implemented an FSK-based wireless transmitter to send digital messages using distinct carrier frequencies for reliable communication.',
    tech: ['ROS2', 'C++', 'Embedded Systems', 'Wireless Communication'],
    image: '/projects/robot-cargo.png',
  },
  {
    number: '02',
    title: 'Perimeter-Navigating Robot',
    description: 'Designed and programmed a robot capable of autonomously following the perimeter of enclosed environments using sensor-based feedback and real-time motion control.',
    tech: ['Arduino', 'C++', 'Embedded Systems', 'Sensor Integration'],
    image: '/projects/robot-perimeter.png',
  },
  {
    number: '03',
    title: 'Temperature & Humidity Monitoring System',
    description: 'Developed a real-time environmental monitoring system with a Python-based GUI, deployed on a Raspberry Pi with integrated sensors for standalone operation and live data visualization.',
    tech: ['Python', 'Raspberry Pi', 'GUI Development', 'Sensor Integration'],
    image: '/projects/temp-humidity.png',
  },
  {
    number: '04',
    title: 'AgriLift — Agricultural Drone Transport System',
    description: 'Co-designed an ergonomic, lightweight lifting and transport device enabling single-person handling of agricultural sprayer drones; resulted in a fully built and functional prototype by the department.',
    tech: ['Product Design', 'CAD', 'Prototyping', 'Mechanical Design'],
    image: '/projects/agrilift.png',
  },
  {
    number: '05',
    title: 'RFID Authentication System',
    description: 'Built an Arduino-based RFID system for secure access control in a compost bin network, logging user ID, timestamps, and controlling a locking mechanism based on authenticated access.',
    tech: ['Arduino', 'C++', 'RFID', 'Embedded Systems'],
    image: '/projects/rfid.png',
  },
  {
    number: '06',
    title: 'Leaf Pixel Sampler',
    description: 'Developed Python software for researchers to analyze leaf images by sampling pixel-level RGB values via an interactive interface and exporting data to CSV for further analysis.',
    tech: ['Python', 'Image Processing', 'GUI Development', 'Data Analysis'],
    image: '/projects/leaf-sampler.png',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-[18px] h-0.5 bg-accent/60 rounded-full inline-block" />
          <span className="font-mono text-[11px] text-accent/70 tracking-[0.18em] uppercase">Selected Work</span>
        </div>
        <h2 className="font-display font-extrabold text-[clamp(44px,5.5vw,68px)] text-text mb-14 leading-none">
          Projects<span className="text-accent">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div key={project.number}
              className="group bg-bg2 border border-border rounded-xl overflow-hidden hover:border-accent/35 hover:-translate-y-0.5 transition-all duration-300">

              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg2/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 font-mono text-[10px] text-white/50 bg-black/25 px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {project.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 pt-5">
                <h3 className="font-display font-bold text-[18px] text-text group-hover:text-accent transition-colors leading-snug mb-2.5">
                  {project.title}
                </h3>
                <p className="font-body text-[13px] text-text/55 leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-[10px] text-muted bg-surface border border-border px-2.5 py-1 rounded-full group-hover:text-accent/70 group-hover:border-accent/15 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
