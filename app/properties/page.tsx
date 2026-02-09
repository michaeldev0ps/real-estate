import PropertyCard from '../../components/PropertyCard'
import { properties } from '../../data/mockProperties'

export default function PropertiesPage() {
  return (
    <section className="container">
      <h1 className="text-3xl font-bold">Properties</h1>
      <p className="mt-2 text-gray-600">Browse available listings.</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p) => (
          <PropertyCard key={p.id} image={p.image} title={p.title} location={p.location} price={p.price} />
        ))}
      </div>
    </section>
  )
}
