import { Link } from 'react-router-dom'

const TAGS = ['React', 'JavaScript', 'Product Design', 'Requirements Gathering']

const docArtifacts = [
  { title: 'Project Charter', description: 'Scope, goals, and success criteria for the project.', href: 'https://docs.google.com/document/d/162u0ivMmNU8PEbWY6er9FTcTOykepwNtq6xKnlxvykk/edit?usp=sharing' },
  { title: 'Timeline & Milestones', description: 'Phased plan and key delivery checkpoints.', href: 'https://docs.google.com/spreadsheets/d/15VodnxBOxE5kImXPddOlWN2Kk6nqKiRuD9ipfw78hTA/edit?usp=sharing' },
  { title: 'Requirements & Analysis', description: 'Structured requirements and analysis documentation.', href: 'https://docs.google.com/document/d/1hN3NjlWWs2y26twND0enF15-fEP6-QtTItJBPWVCxwk/edit?usp=sharing' },
  { title: 'Decision Logic Documentation', description: 'Documented decision rules and logic flows.', href: 'https://docs.google.com/document/d/1aVkJk38F1bco1MhHtZL2Ti731_kdYfC5cDmjd8o4G-k/edit?usp=sharing' },
  { title: 'Decision Logic Table', description: 'Tabular view of decision logic for implementation.', href: 'https://docs.google.com/spreadsheets/d/1Ij5jsHUmyc0K4wVIYY8i6SYHbCbeuSiBP5XelDDSYzc/edit?usp=sharing' },
  { title: 'Risk and Issue Log', description: 'Risks, issues, and mitigation tracking.', href: 'https://docs.google.com/spreadsheets/d/1HRz7ZmoH5-9sYuo0yBm8rygng0oCO9XhfLzp5lMPSlM/edit?usp=sharing' },
]

export default function ApplicationBuddyPage() {
  return (
    <div className="min-h-screen bg-cream text-stone-700">
      <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-cream/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="font-semibold text-sage-dark hover:text-sage transition-colors"
          >
            ← Back to portfolio
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="px-6 pt-12 pb-16 sm:pt-16 sm:pb-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-stone-800 sm:text-4xl">
              ApplicationBuddy
            </h1>
            <p className="mt-4 text-stone-600 leading-relaxed">
              ApplicationBuddy is a Chrome extension that helps users quickly assess resume–job alignment. Designed with a focus on clarity, end user experience, and streamlined workflows.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <li
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border-2 border-sage-dark text-sage-dark"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#videos"
                className="inline-flex items-center px-5 py-3 rounded-xl font-medium bg-sage-dark text-white hover:bg-sage-darker transition-colors"
              >
                Watch Demo
              </a>
              <a
                href="#videos"
                className="inline-flex items-center px-5 py-3 rounded-xl font-medium border-2 border-sage-dark text-sage-dark hover:bg-sage/10 transition-colors"
              >
                Watch Exec Summary
              </a>
            </div>
          </div>
        </section>

        {/* Documentation Library */}
        <section className="px-6 py-16 sm:py-20 bg-stone-50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-sage-dark mb-8">
              Documentation Library
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {docArtifacts.map((doc) => (
                <article
                  key={doc.title}
                  className="rounded-2xl bg-cream border border-stone-200/80 shadow-soft p-6 hover:shadow-soft-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-stone-800">
                    {doc.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                    {doc.description}
                  </p>
                  <a
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-sage-dark hover:text-sage transition-colors"
                  >
                    View →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Videos */}
        <section id="videos" className="px-6 py-16 sm:py-20 scroll-mt-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-sage-dark mb-8">Videos</h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-3">
                  ApplicationBuddy Demo Video
                </h3>
                <div className="rounded-xl overflow-hidden border border-stone-200/80 bg-stone-100 aspect-video">
                  <iframe
                    title="ApplicationBuddy Demo Video"
                    src="https://www.youtube.com/embed/a6lBGLnJtWs"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-3">
                  Executive Slides Summary
                </h3>
                <div className="rounded-xl overflow-hidden border border-stone-200/80 bg-stone-100 aspect-video">
                  <iframe
                    title="Executive Slides Summary"
                    src="https://www.youtube.com/embed/mVV1riBSBFw"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
