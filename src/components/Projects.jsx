import { Link } from 'react-router-dom'

const projects = [
  {
    id: 'applicationbuddy',
    title: 'ApplicationBuddy',
    description:
      'ApplicationBuddy is a Chrome extension that helps users quickly assess resume–job alignment. Designed with a focus on clarity, end user experience, and streamlined workflows.',
    tags: ['React', 'JavaScript', 'Product Design', 'Requirements Gathering'],
    demoUrl: 'https://www.youtube.com/embed/a6lBGLnJtWs',
    link: '/projects/applicationbuddy',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 sm:py-24 bg-stone-50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-sage-dark mb-4">Projects</h2>
        <p className="text-stone-600 mb-12 max-w-xl">
          A selection of recent work—design and code.
        </p>
        <ul className="space-y-10">
          {projects.map((project) => (
            <li key={project.id}>
              <article className="rounded-2xl bg-cream border border-stone-200/80 shadow-soft overflow-hidden hover:shadow-soft-lg hover:border-sage/20 transition-all duration-300">
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-sage-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="text-xs font-medium px-3 py-1.5 rounded-full border-2 border-sage-dark text-sage-dark"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.id === 'applicationbuddy' ? (
                    <div className="rounded-xl overflow-hidden border border-stone-200/80 bg-stone-100 aspect-video mt-4">
                      <iframe
                        title="ApplicationBuddy demo"
                        src={project.demoUrl}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="rounded-xl overflow-hidden border border-stone-200/80 mt-4 aspect-video bg-stone-100">
                      <img
                        src={project.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {project.link && (
                    <Link
                      to={project.link}
                      className="inline-block mt-4 text-sm font-medium text-sage hover:text-sage-dark transition-colors"
                    >
                      View project →
                    </Link>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
