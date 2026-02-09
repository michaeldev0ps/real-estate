import Hero from '../components/Hero'
import { properties } from '../data/mockProperties'
import PropertyCard from '../components/PropertyCard'

export default function Home() {
  return (
    <section className="container">
      <Hero title="Find your dream home" subtitle="Premium listings curated for you." ctaLink="https://wa.me/" />

      <h2 className="mt-12 text-2xl font-semibold">Featured Properties</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.slice(0,6).map((p) => (
          <PropertyCard key={p.id} image={p.image} title={p.title} location={p.location} price={p.price} />
        ))}
      </div>
    </section>
  )
}
