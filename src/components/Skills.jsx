const skillGroups = [
  {
    label: 'Design & Product',
    skills: ['Figma', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems'],
  },
  {
    label: 'Engineering',
    skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Vite'],
  },
  {
    label: 'Other',
    skills: ['Leadership', 'Writing', 'Workshops', 'Accessibility'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">Skills</h2>
        <p className="text-stone-600 mb-12 max-w-xl">
          Tools and areas I work in most often.
        </p>
        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="text-sm font-semibold text-sage-dark uppercase tracking-wider mb-4">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-cream-dark/80 text-stone-700 border border-stone-200/80 shadow-soft hover:bg-sage/15 hover:border-sage/30 hover:text-sage-dark transition-all duration-300">
                      {skill}
                    </span>
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
