const links = [
  { label: 'Email', href: 'mailto:puthethj@gmail.com', external: false },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/janaki-putheth-50479b299/', external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">Get in touch</h2>
        <p className="text-stone-600 mb-10 max-w-md mx-auto">
          I'm open to new projects and conversations. Say hi via email or find
          me on the links below.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {links.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex items-center px-5 py-3 rounded-xl font-medium text-stone-700 bg-cream-dark border border-stone-200/80 shadow-soft hover:bg-rose/15 hover:border-rose/30 hover:text-rose-dark transition-all duration-300"
            >
              {label}
            </a>
          ))}
        </div>
        <a
          href="mailto:puthethj@gmail.com"
          className="mt-8 inline-block px-8 py-4 rounded-xl font-semibold text-cream bg-sage hover:bg-sage-dark shadow-soft hover:shadow-soft-lg transition-all duration-300"
        >
          Send an email
        </a>
      </div>
    </section>
  )
}
