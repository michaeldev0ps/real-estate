import ContactForm from '../../components/ContactForm'
import MapEmbed from '../../components/MapEmbed'

export default function ContactPage() {
  return (
    <section className="container">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-gray-600">Fill the form and we'll get back to you (mock submit).</p>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <ContactForm />
        <MapEmbed location="37.7749,-122.4194" />
      </div>
    </section>
  )
}
