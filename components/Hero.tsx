
import { FC } from 'react'
import { Button } from './ui/button'

interface HeroProps {
  title?: string
  subtitle?: string
  ctaLink?: string
}


const Hero: FC<HeroProps> = ({ title = 'Welcome!', subtitle = 'Find your dream property', ctaLink = '#' }) => {
  // WhatsApp link with your number
  const whatsapp = 'https://wa.me/2347040565645'
  return (
    <section className="mt-8 rounded-lg bg-gradient-to-b from-white to-gray-50 dark:from-primary dark:to-gray-900 p-6">
      <div className="container text-center">
        <div className="flex justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white drop-shadow-md typing inline-block text-left">{title}</h1>
        </div>
        <p className="mt-3 text-gray-600 dark:text-gray-200">{subtitle}</p>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <Button className="mt-6 px-6 py-3 text-base">Contact via WhatsApp</Button>
        </a>
      </div>
    </section>
  )
}

export default Hero
