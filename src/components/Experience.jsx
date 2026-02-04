const timeline = [
  {
    role: 'Communications & Web Specialist',
    organization: 'UBC School of Engineering',
    dates: 'May 2024 – Present',
    description:
      'Collaborate with faculty and student teams to translate technical information into clear, user-facing digital communication. Maintain and improve WordPress pages, apply HTML fixes, and support digital signage and social platforms. Designed digital assets and built an internal article-tracking workflow to streamline content production.',
  },
  {
    role: 'President',
    organization: 'Girls in Tech UBCO',
    dates: 'September 2023 – Present',
    description:
      'Lead external operations, communications, and partnerships for a student organization focused on access to technology. Oversaw end-to-end planning for large-scale events, including a 150+ person STEM Gala and a 100-person hackathon. Coordinated cross-functional teams and external stakeholders with a focus on participant experience and impact.',
  },
  {
    role: 'Student Liaison',
    organization: 'Women in Leadership',
    dates: 'December 2024 – Present',
    description:
      'Serve as a bridge between students and the Women in Leadership community, supporting communication, coordination, and engagement across initiatives. Assist with event planning and leadership-focused programming while representing student perspectives.',
  },
  {
    role: 'Entrepreneurship Event Logistics Coordinator Assistant',
    organization: 'Enstrati Consulting',
    dates: 'December 2024 – Present',
    description:
      'Support planning and execution of entrepreneurship-focused events by coordinating logistics, timelines, and communication across teams. Assist with operational details that enable smooth event delivery and a positive participant experience.',
  },
  {
    role: 'Software & QA Analytics Intern',
    organization: 'Delta Controls',
    dates: 'May 2023 – August 2023',
    description:
      'Contributed to software quality assurance and analytics workflows by supporting testing processes and data analysis initiatives. Worked with QA data to improve product reliability and support data-informed engineering decisions.',
  },
  {
    role: 'Teacher & Curriculum Creator',
    organization: 'Cloverdale Robotics',
    dates: '2022 – 2023',
    description:
      'Designed and delivered robotics and computer science curriculum across multiple schools, adapting instruction for varied learning levels. Led classroom instruction and coordinated with team members to expand program reach and student outcomes.',
  },
  {
    role: 'President of Student Council',
    organization: 'Lord Tweedsmuir Secondary School',
    dates: '2021 – 2022',
    description:
      'Led the student council and represented the student body in collaboration with staff and administration. Coordinated events, initiatives, and internal communication to drive engagement and community impact.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 sm:py-24 bg-stone-50">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-sage-dark mb-4">Experience</h2>
        <p className="text-stone-600 mb-12 max-w-xl">
          A quick overview of where I've been and what I've focused on.
        </p>
        <div className="relative">
          <div
            className="absolute left-[15px] top-6 bottom-6 w-[2px] rounded-full bg-stone-300/70"
            aria-hidden
          />
          <ul className="space-y-12">
            {timeline.map((item, i) => (
              <li key={i} className="flex gap-6">
                <div className="w-8 flex-shrink-0 flex justify-center relative z-10">
                  <span
                    className="w-8 h-8 rounded-full border-2 border-stone-500 bg-stone-50 flex-shrink-0 shadow-soft"
                    aria-hidden
                  />
                </div>
                <div className="pt-0.5 space-y-2 text-left flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg font-bold text-stone-800">
                      {item.role}
                    </h3>
                    <span className="text-stone-500 text-sm">{item.dates}</span>
                  </div>
                  <p className="text-stone-500 text-sm">
                    {item.organization}
                  </p>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
