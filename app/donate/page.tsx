import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Heart, Users, Droplet, Leaf, BookOpen, Zap } from 'lucide-react'

export const metadata = {
  title: 'Donate - Hope Harbour Community Transformers',
  description: 'Support our mission to transform communities. Your donation makes a real impact.',
}

export default function Donate() {
  const donationImpacts = [
    {
      icon: Droplet,
      amount: '$25',
      title: 'Water Well',
      description: 'Provides clean water access to 50 families for one month',
    },
    {
      icon: Leaf,
      amount: '$50',
      title: 'Farming Support',
      description: 'Supplies seeds and tools for one farmer to plant climate-smart crops',
    },
    {
      icon: BookOpen,
      amount: '$75',
      title: 'School Supplies',
      description: 'Provides educational materials for 10 students for one semester',
    },
    {
      icon: Heart,
      amount: '$100',
      title: 'Health Checkup',
      description: 'Enables medical screening and care for 25 community members',
    },
    {
      icon: Users,
      amount: '$150',
      title: 'Skills Training',
      description: 'Funds vocational training for one woman for economic empowerment',
    },
    {
      icon: Zap,
      amount: '$250',
      title: 'Community Project',
      description: 'Supports a complete sanitation facility for a rural household',
    },
  ]

  const reasons = [
    {
      title: 'Direct Impact',
      description: 'Every donation goes directly to community programs and initiatives.',
    },
    {
      title: 'Transparent Reporting',
      description: 'We provide detailed reports on how your donations are utilized.',
    },
    {
      title: 'Trusted Organization',
      description: 'We are a registered NGO committed to accountability and integrity.',
    },
    {
      title: 'Sustainable Change',
      description: 'Your support creates lasting transformation in communities.',
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
            backgroundImage: 'url("/donation image.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Green overlay */}
          <div className="absolute inset-0 bg-primary opacity-75"></div>
          
          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-primary-foreground" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary-foreground">Make a Difference</h1>
            <p className="text-lg opacity-90 text-primary-foreground">
              Your generosity fuels community transformation. Support our mission to empower lives across Uganda.
            </p>
          </div>
        </section>

        {/* Why Donate Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Support Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              Your contribution makes real, measurable impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-border"
              >
                <h3 className="text-xl font-bold text-primary mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Donation Impact Section */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Your Impact by Donation Level
              </h2>
              <p className="text-lg text-muted-foreground">
                See exactly how your donation transforms lives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {donationImpacts.map((impact, index) => {
                const Icon = impact.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-primary transition border border-border"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                      <span className="text-2xl font-bold text-primary">
                        {impact.amount}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {impact.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {impact.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Donation Methods */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ways to Give
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the method that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1  gap-8 max-w-2xl mx-auto">

            {/* Mobile Money */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground flex items-center justify-center mb-6">
                Mobile Money
              </h3>
              <div className="space-y-4 text-muted-foreground flex items-center justify-center flex-col">
                  <p className="font-semibold text-foreground">MTN Money</p>
                  <p>+256 701 640 853</p>
              
                
                <div className="pt-4 border-t border-border">
                  <p className="text-sm">
                    Quick and secure mobile money transfers available 24/7
                  </p>
                </div>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition mt-8">
                Donate via Mobile Money
              </button>
            </div>

            {/* Email Support */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-border md:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Other Ways to Help
              </h3>
              <p className="text-muted-foreground mb-6">
                For corporate donations, in-kind contributions, or pledged giving, please reach out directly:
              </p>
              <a
                href="mailto:hopeharbourcommunity@gmail.com"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition inline-block text-center"
              >
                Contact Us for More Options
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <details className="bg-white rounded-xl p-8 border border-border hover:border-primary cursor-pointer transition group">
                <summary className="flex justify-between items-center font-bold text-foreground text-lg">
                  Is my donation tax-deductible?
                  <span className="text-primary group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Yes, Hope Harbor Community Transformers Ltd is a registered NGO. For information about tax deductions, please consult your local tax regulations or contact us directly.
                </p>
              </details>

              <details className="bg-white rounded-xl p-8 border border-border hover:border-primary cursor-pointer transition group">
                <summary className="flex justify-between items-center font-bold text-foreground text-lg">
                  How is my donation used?
                  <span className="text-primary group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Every donation goes directly to community programs including water and sanitation, agriculture, education, health, economic empowerment, and climate resilience initiatives. We provide transparent reporting on fund utilization.
                </p>
              </details>

              <details className="bg-white rounded-xl p-8 border border-border hover:border-primary cursor-pointer transition group">
                <summary className="flex justify-between items-center font-bold text-foreground text-lg">
                  Can I set up a recurring donation?
                  <span className="text-primary group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Yes! Recurring donations provide steady support for our programs. Contact us at hopeharborcommunity@gmail.com to set up monthly or quarterly giving.
                </p>
              </details>

              <details className="bg-white rounded-xl p-8 border border-border hover:border-primary cursor-pointer transition group">
                <summary className="flex justify-between items-center font-bold text-foreground text-lg">
                  What currencies do you accept?
                  <span className="text-primary group-open:rotate-180 transition">
                    ▼
                  </span>
                </summary>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  We accept Ugandan Shillings (UGX) through bank transfers and mobile money. International donors can contact us to arrange transfers in their local currency.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section 
          className="relative py-16 sm:py-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/help.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Green overlay */}
          <div className="absolute inset-0 bg-primary opacity-75"></div>
          
          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary-foreground">
              Ready to Make an Impact?
            </h2>
            <p className="text-lg opacity-90 mb-8 text-primary-foreground">
              Every donation, no matter the size, contributes to transforming lives and building prosperous communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary-foreground transition">
                Donate Now
              </button>
              <a
                href="mailto:hopeharbourcommunity@gmail.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
