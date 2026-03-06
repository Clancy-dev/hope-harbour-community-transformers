import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ImageCarousel } from '@/components/image-carousel'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const carouselSlides = [
    { src: '/carousel-1.jpg', alt: 'Community water and sanitation initiatives' },
    { src: '/carousel-2.jpg', alt: 'Sustainable agriculture programs' },
    { src: '/carousel-3.jpg', alt: 'Girls education and mentorship' },
  ]

  const initiatives = [
    {
      icon: '💧',
      title: 'Water & Sanitation',
      description: 'Improving access to clean water and proper sanitation facilities in rural communities.',
    },
    {
      icon: '🌱',
      title: 'Sustainable Agriculture',
      description: 'Empowering farmers with climate-smart techniques for improved food and income security.',
    },
    {
      icon: '👩‍🎓',
      title: 'Education & Empowerment',
      description: 'Supporting girls\' education, vocational training, and economic opportunities.',
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Providing health education, awareness campaigns, and access to medical services.',
    },
    {
      icon: '⚖️',
      title: 'Gender Equality',
      description: 'Promoting gender equality, reducing SGBV, and supporting survivors with care services.',
    },
    {
      icon: '🌍',
      title: 'Climate Action',
      description: 'Building climate resilience and disaster preparedness in vulnerable communities.',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[600px] md:h-[700px] bg-cover bg-center overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="Community gathering"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
              Transforming Lives, Building Futures
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mb-8 text-balance">
              Hope Harbour Community Transformers is dedicated to empowering communities across Uganda through sustainable development and transformative change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/donate"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold hover:opacity-90 transition"
              >
                Make a Donation
              </Link>
              <Link
                href="/about"
                className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-foreground transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Image Carousel Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Impact in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the transformative work we do daily in communities across Uganda
            </p>
          </div>
          <ImageCarousel slides={carouselSlides} />
        </section>

        {/* Key Initiatives Section */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Work & Initiatives
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Six core areas of focus driving sustainable community transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {initiatives.map((initiative, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-border"
                >
                  <div className="text-4xl mb-4">{initiative.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                To transform the lives of men, women, boys and girls economically, socially, physically and emotionally through behaviour change communication, capacity building, service delivery and advocacy for policy change.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We empower women, girls and other marginalized groups for their social economic development, creating lasting change in communities.
              </p>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Women, girls and their communities living healthy and prosperous lives across Uganda, with equal opportunities, voices heard, and futures secured.
              </p>
              <div className="mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-primary font-semibold text-center text-lg">
                  "Serving together, Transforming lives"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-primary-foreground py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Be Part of the Change
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Your support makes real impact. Join us in transforming communities and changing lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-foreground transition"
              >
                Donate Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
