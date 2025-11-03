'use client'

import { Target, Eye, Heart, Award, Users, Lightbulb, Shield, Zap } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function About() {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: 'Innovation',
      description: 'We constantly push boundaries to deliver cutting-edge solutions'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Integrity',
      description: 'Transparency and honesty guide every decision we make'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Client-Centric',
      description: 'Your success is our priority in everything we do'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in all our deliverables'
    }
  ]

  const team = [
    { name: 'Rajesh Patel', role: 'CEO & Founder', image: '👨‍💼' },
    { name: 'Priya Shah', role: 'CTO', image: '👩‍💻' },
    { name: 'Amit Kumar', role: 'Head of Development', image: '👨‍💻' },
    { name: 'Sneha Desai', role: 'Head of Design', image: '👩‍🎨' }
  ]

  return (
    <div className="relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Khodal</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Pioneering digital transformation through innovative IT solutions and unwavering commitment to excellence
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To empower businesses worldwide with transformative IT solutions that drive growth, innovation, and success. We strive to be the trusted technology partner that turns visions into reality through expertise, dedication, and cutting-edge solutions.
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                To become a global leader in IT innovation, recognized for delivering exceptional value and fostering long-term partnerships. We envision a future where technology seamlessly integrates with business to create unprecedented opportunities for growth and success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
          </div>
          
          <div className="glass-effect rounded-3xl p-8 md:p-12">
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Founded in the heart of Gujarat, Khodal emerged from a simple yet powerful vision: to bridge the gap between businesses and technology. What started as a small team of passionate developers has grown into a full-service IT solutions provider, serving clients across the globe.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg mb-6">
              Over the years, we've evolved alongside technology, constantly adapting and innovating to meet the changing needs of our clients. From web development to artificial intelligence, our expertise spans the entire spectrum of modern IT solutions.
            </p>
            <p className="text-gray-300 leading-relaxed text-lg">
              Today, we're proud to have completed over 1000 projects, partnered with 500+ clients, and built a team of 50+ dedicated professionals. But our journey is far from over. We continue to push boundaries, embrace new technologies, and deliver solutions that make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The visionaries driving our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-cyan-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
                Why Choose <span className="gradient-text">Khodal</span>?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Award className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
                  <p className="text-gray-400">Years of experience delivering successful projects</p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-xl font-bold mb-2">Dedicated Team</h3>
                  <p className="text-gray-400">Skilled professionals committed to your success</p>
                </div>
                <div className="text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-xl font-bold mb-2">Cutting-Edge Tech</h3>
                  <p className="text-gray-400">Latest technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}