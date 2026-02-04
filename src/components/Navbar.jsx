import { useState, useEffect } from 'react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navItems.map(({ href }) => href.slice(1))

function getActiveSection() {
  const threshold = 120
  const active = sectionIds.filter((id) => {
    const el = document.getElementById(id)
    return el && el.getBoundingClientRect().top <= threshold
  })
  return active.length ? active[active.length - 1] : 'about'
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const onScroll = () => setActiveSection(getActiveSection())
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-sage/25 bg-sage-nav backdrop-blur-sm">
      <nav className="mx-auto flex max-w-4xl items-center justify-between gap-8 pl-4 pr-6 py-5 sm:pl-6 sm:pr-8 sm:py-6">
        <a
          href="#about"
          className="flex items-center gap-2.5 -ml-0.5 text-sage-darker hover:text-sage-dark transition-colors duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-sage/50 focus:ring-offset-2 focus:ring-offset-sage-nav"
          aria-label="Home"
        >
          <span className="flex h-9 w-9 items-center justify-center text-xl font-bold text-sage-darker flex-shrink-0 select-none">
            :D
          </span>
          <span className="font-bold text-sage-darker text-sm sm:text-base whitespace-nowrap tracking-tight">
            Janaki Putheth
          </span>
        </a>
        <ul className="flex items-center gap-2 sm:gap-3">
          {navItems.map(({ label, href }, i) => {
            const sectionId = href.slice(1)
            const isActive = activeSection === sectionId
            const defaultPill = i % 2 === 0 ? 'bg-stone-100' : 'bg-stone-200/70'
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`rounded-full px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium text-stone-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage/50 focus:ring-offset-2 focus:ring-offset-sage-nav ${defaultPill} ${
                    isActive
                      ? '!bg-sage-dark !text-white shadow-sm font-semibold'
                      : 'hover:bg-sage/10 hover:text-sage-dark'
                  }`}
                >
                  {label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
