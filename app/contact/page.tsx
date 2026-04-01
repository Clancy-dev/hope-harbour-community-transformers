'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hopeharborcommunity@gmail.com',
      link: 'mailto:hopeharborcommunity@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+256 701 640 853',
      link: 'tel:+256701640853',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'P.O Box 202327, Kampala, Uganda',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday - Friday: 8:00 AM - 5:00 PM',
      link: '#',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="relative py-16 sm:py-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/contact.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Green overlay */}
          <div className="absolute inset-0 bg-primary opacity-75"></div>
          
          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary-foreground">Get in Touch</h1>
            <p className="text-lg opacity-90 text-primary-foreground">
              We'd love to hear from you. Reach out with any questions or partnership inquiries.
            </p>
          </div>
        </section>

        {/* Contact Information Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <a
                  key={index}
                  href={info.link}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-border text-center hover:border-primary group"
                >
                  <div className="flex justify-center mb-4">
                    <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {info.details}
                  </p>
                </a>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
