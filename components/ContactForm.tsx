"use client"
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e: { [k: string]: string } = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    // mock submit handler
    setTimeout(() => {
      setSubmitted(true)
    }, 600)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-lg border">
      {submitted ? (
        <div className="text-green-600">Thanks — your message was submitted (mock).</div>
      ) : (
        <>
          <label className="block">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Name</span>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 block w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Name" />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Email</span>
            <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1 block w-full border rounded px-3 py-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Email" />
            {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
          </label>

          <label className="block mt-4">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Message</span>
            <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1 block w-full border rounded px-3 py-2 h-28 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Message" />
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
          </label>

          <div className="mt-4">
            <button type="submit" className="px-4 py-2 bg-accent text-white rounded">Send message</button>
          </div>
        </>
      )}
    </form>
  )
}
