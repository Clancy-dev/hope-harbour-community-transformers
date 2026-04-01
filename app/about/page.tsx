import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'

export const metadata = {
  title: 'About Hopeharbor Community Transformers | NGO in Uganda',

  description:
    'Learn about Hopeharbor Community Transformers Ltd, a non-profit organization in Uganda dedicated to transforming communities through health, education, economic empowerment, climate action, and gender equality. Meet our leadership team and discover our mission, vision, and values.',

  keywords: [
    'About Hopeharbor Community Transformers',
    'Hopeharbor NGO Uganda',
    'Non-profit organization Uganda',
    'Community development Uganda',
    'NGO leadership Uganda',
    'Health and sanitation Uganda',
    'Women empowerment Uganda',
    'Gender equality Uganda NGO',
    'Climate action Uganda NGO',
    'Food security Uganda',
    'Economic empowerment Uganda',
    'Human rights Uganda NGO',
    'Charity organizations Uganda',
    'Development organizations Africa',
    'Hope Harbor Uganda NGO',
  ],

  openGraph: {
    title: 'About Hopeharbor Community Transformers',
    description:
      'Discover the mission, vision, and leadership behind Hopeharbor Community Transformers, transforming lives across Uganda through sustainable community programs.',
    url: 'https://hopeharborcommunitytransformers.org/about', // replace with real domain
    siteName: 'Hopeharbor Community Transformers',
    images: [
      {
        url: '/community 3.jpg', // ⚠️ rename your image
        width: 1200,
        height: 630,
        alt: 'Hopeharbor Community Transformers Uganda',
      },
    ],
    locale: 'en_UG',
    type: 'article',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'About Hopeharbor Community Transformers',
    description:
      'Meet the team and learn how Hopeharbor Community Transformers is empowering communities across Uganda.',
    images: ['/community 3.jpg'],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: 'https://hopeharborcommunitytransformers.org/about', // replace
  },

  other: {
    'geo.region': 'UG',
    'geo.placename': 'Uganda',
    'geo.position': '0.3476;32.5825',
    'ICBM': '0.3476, 32.5825',
  },
}

export default function About() {
  const teamMembers = [
    {
      name: 'Prisca Namuleme',
      position: 'Founder',
      role: 'Leadership & Strategic Vision',
      image: '/prisca.jpeg',
      bio: 'Prisca leads our organization with a vision of sustainable transformation. Her strategic leadership ensures all initiatives align with our core mission.',
    },
    {
      name: 'Joyce Katumba',
      position: 'Founder',
      role: 'Implementation & Partnerships',
      image: '/joyce.jpeg',
      bio: 'Joyce brings deep expertise in program management and community engagement. She oversees the execution of all initiatives, ensuring maximum impact and accountability across all communities we serve.',
    },
     {
      name: 'Nabiryo Barbara',
      // position: 'Founder',
      role: 'Program Personnel',
      image: '/nabiryo.jpeg',
      bio: 'A highly experienced professional with over 15 years in research, program implementation, and capacity building within health and community development, including HIV and cancer programs. Skilled in quantitative and qualitative research, SOP design, training, mentorship, and community engagement, she brings a dedicated, integrity-driven approach to improving service delivery and building strong teams.',
    },
  ]

  const values = [
  {
    title: "Integrity",
    description:
      "We act with honesty, fairness, and strong moral principles in everything we do.",
  },
  {
    title: "Professionalism",
    description:
      "We deliver our work with competence, discipline, and respect.",
  },
  {
    title: "Team Work",
    description:
      "We collaborate and support one another to achieve shared goals.",
  },
  {
    title: "Result Oriented",
    description:
      "We focus on delivering measurable and meaningful results.",
  },
  {
    title: "Community Participation",
    description:
      "We involve communities in decisions that affect their lives.",
  },
  {
    title: "Sustainability",
    description:
      "We promote solutions that create lasting positive impact.",
  },
  {
    title: "Accountability",
    description:
      "We take responsibility for our actions and use resources responsibly.",
  },
  {
    title: "Excellence",
    description:
      "We strive for high quality and continuous improvement in our work.",
  },
  {
    title: "Transparency",
    description:
      "We operate openly and share information with honesty and clarity.",
  },
];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section 
          className="relative py-16 sm:py-20 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/community 3.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Green overlay */}
          <div className="absolute inset-0 bg-primary opacity-75"></div>
          
          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary-foreground">About Hopeharbor</h1>
            <p className="text-lg opacity-90 text-primary-foreground">
              Our journey transforming lives and building prosperous communities across Uganda
            </p>
          </div>
        </section>

        {/* Organization Info */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                <strong>Hopeharbor Community Transformers Ltd</strong> is an independent, non-governmental, non-profit organization working across Uganda to address socio-economic and physical challenges that limit community development.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded in 2026, we are committed to improving people's lives while fostering sustainable development through evidence-based interventions, community engagement, and strategic partnerships.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our holistic approach addresses multiple interconnected challenges, recognizing that lasting transformation requires work across health, education, economic empowerment, and environmental sustainability.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To transform the lives of men, women, boys and girls economically, socially, physically and emotionally through behaviour change communication, capacity building, service delivery and advocacy.
                  </p>
                </div>
                <div className="border-t border-border pt-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    Women, girls and their communities living healthy and prosperous lives across Uganda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition border border-border"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="text-center mb-16">
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
      Meet Our Leadership
    </h2>
    <p className="text-lg text-muted-foreground">
      Dedicated professionals driving our mission forward
    </p>
  </div>

  <div className="space-y-16">
    {teamMembers.map((member, index) => (
      <div
        key={index}
        className={`flex flex-col md:flex-row items-center gap-10 ${
          index % 2 !== 0 ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/3">
          <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-2/3">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            {member.name}
          </h3>

          <p className="text-primary font-semibold mb-2">
            {member.position}
          </p>

          <p className="text-sm uppercase tracking-wide text-muted-foreground mb-4">
            {member.role}
          </p>

          <p className="text-muted-foreground leading-relaxed text-lg">
            {member.bio}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Community Visit Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/activity.jpeg"
                alt="Our leadership team engaging with community members in Uganda"
                width={960}
                height={1280}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-30 pointer-events-none"></div>
            </div>

            {/* Content Side */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Our Connection to Communities
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We don&apos;t just work for communities—we work <span className="font-semibold text-primary">with</span> them. Our leadership and team spend time on the ground, listening to voices, understanding challenges, and co-creating solutions.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Direct Engagement
                    </h3>
                    <p className="text-muted-foreground">
                      We visit communities regularly to understand their needs, celebrate wins, and strengthen relationships.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Collaborative Solutions
                    </h3>
                    <p className="text-muted-foreground">
                      By listening and learning from those we serve, we develop programs that truly address community needs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10">
                      <span className="text-primary font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      Real Impact
                    </h3>
                    <p className="text-muted-foreground">
                      These meaningful connections drive the lasting, transformative change we&apos;re committed to creating.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <p className="text-lg text-foreground leading-relaxed italic">
                  &quot;Real transformation happens when we work alongside the people we serve, not above them. Every visit reminds us why our mission matters.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Objectives */}
        <section className="bg-muted py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
              Our Strategic Objectives
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border border-border">
                <div className="flex gap-4">
                  <div className="text-3xl">💧</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Health & Sanitation
                    </h3>
                    <p className="text-muted-foreground">
                      Improve access to quality healthcare services, clean water, sanitation and hygiene for all.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-border">
                <div className="flex gap-4">
                  <div className="text-3xl">🌱</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Food Security
                    </h3>
                    <p className="text-muted-foreground">
                      Support sustainable agriculture for improved household food and income security.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-border">
                <div className="flex gap-4">
                  <div className="text-3xl">🌍</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Climate Action
                    </h3>
                    <p className="text-muted-foreground">
                      Enhance climate adaptation, mitigation strategies, and disaster risk reduction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-border">
                <div className="flex gap-4">
                  <div className="text-3xl">⚖️</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Gender Equality
                    </h3>
                    <p className="text-muted-foreground">
                      Promote reduction of sexual and gender-based violence in families and communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-border md:col-start-1">
                <div className="flex gap-4">
                  <div className="text-3xl">💰</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Economic Empowerment
                    </h3>
                    <p className="text-muted-foreground">
                      Enhance economic opportunities and reduce poverty for men and women.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-border md:col-start-2">
                <div className="flex gap-4">
                  <div className="text-3xl">📚</div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Human Rights
                    </h3>
                    <p className="text-muted-foreground">
                      Advocate for human rights, access to justice, and policy change for marginalized groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
