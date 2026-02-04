export default function Hero() {
  return (
    <section
      id="about"
      className="px-6 pt-16 pb-20 sm:pt-20 sm:pb-24 text-center"
    >
      <div className="mx-auto max-w-2xl">
        <div className="mb-6">
          <img
            src={`${import.meta.env.BASE_URL}hero-photo.png`}
            alt="Janaki Putheth"
            className="mx-auto h-40 w-40 rounded-full object-cover object-[center_22%] shadow-soft-lg border-4 border-sage sm:h-48 sm:w-48"
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
          Hi, I'm Janaki.
        </h1>
        <p className="mt-4 text-lg font-medium italic text-stone-700 sm:text-xl">
          Computer science student building user-centered solutions through technology and leadership.
        </p>
        <div className="mx-auto mt-8 max-w-xl text-left">
          <p className="leading-relaxed text-stone-600">
            I'm a third-year at UBCO exploring the product side of tech, with a strong interest in leadership and community building. Outside of projects and campus initiatives, you'll usually find me trying new places to eat or spending time with friends.
          </p>
        </div>
      </div>
    </section>
  )
}
