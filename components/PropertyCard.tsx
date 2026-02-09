import Image from 'next/image'
import { useId } from 'react'

interface Props {
  image: string
  title: string
  location: string
  price: string
}

// Helper to get a random delay for floating animation
function getRandomDelay(id: string) {
  // Use id hash to get a stable random delay per card
  let hash = 0
  for (let i = 0; i < id.length; i++) hash = ((hash << 5) - hash) + id.charCodeAt(i)
  const delays = [0, 0.5, 1, 1.5, 2]
  return delays[Math.abs(hash) % delays.length]
}

export default function PropertyCard({ image, title, location, price }: Props) {
  const id = useId()
  const floatDelay = getRandomDelay(title + location)
  return (
    <article
      className="border rounded-lg overflow-hidden bg-white dark:bg-gray-900 transition transform hover:scale-105 hover:shadow-2xl dark:hover:shadow-accent/40 hover:bg-gray-50 dark:hover:bg-gray-800 animate-float"
      style={{ animationDelay: `${floatDelay}s` }}
    >
      <div className="w-full h-48 relative">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300">{location}</p>
        <p className="mt-2 font-bold text-gray-900 dark:text-gray-100">{price}</p>
      </div>
    </article>
  )
}
