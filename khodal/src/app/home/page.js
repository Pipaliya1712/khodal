'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Brain, Database, Users, Award, Zap, CheckCircle2, Sparkles } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI/ML Solutions',
      description: 'Intelligent systems powered by machine learning and artificial intelligence.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Migration',
      description: 'Seamless data transfer and integration services with zero downtime.',
      color: 'from-pink-500 to-red-500'
    }
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: '500+', label: 'Happy Clients' },
    { icon: <Award className="w-6 h-6" />, number: '1000+', label: 'Projects Completed' },
    { icon: <Zap className="w-6 h-6" />, number: '50+', label: 'Team Members' },
    { icon: <CheckCircle2 className="w-6 h-6" />, number: '99%', label: 'Success Rate' }
  ]

  const technologies = [
    '⚛️ React', '📱 React Native', '🔷 Next.js', '🟢 Node.js', 
    '🐍 Python', '🔥 Firebase', '☁️ AWS', '🎨 Tailwind CSS'
  ]

  return (
    <div className="relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.15), transparent 40%)`
          }}
        />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="space-y-8">
            <div className="inline-block animate-bounce">
              <span className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold backdrop-blur-sm inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Innovating the Future of Technology
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block mb-2">Transform Your Business</span>
              <span className="gradient-text animate-pulse-slow">with Khodal IT Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge IT solutions that empower businesses to thrive in the digital age. From web development to AI/ML, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link
                href="/services"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 glass-effect rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>

            {/* Tech Stack Badges */}
            <div className="pt-12">
              <p className="text-sm text-gray-500 mb-4">Trusted Technologies We Use</p>
              <div className="flex flex-wrap justify-center gap-3">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating 3D Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg opacity-20 blur-xl animate-float"></div>
          <div className="absolute bottom-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl animate-float-delayed"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl animate-float"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Khodal</span>?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Result-Driven Approach</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We focus on delivering measurable results that directly impact your business growth and success.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We use the latest technologies and best practices to build future-proof solutions.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Dedicated Support</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our team provides continuous support to ensure your success every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rahul Sharma',
                role: 'CEO, TechStart India',
                text: 'Khodal transformed our digital presence completely. Their expertise in web development is outstanding!',
                rating: 5
              },
              {
                name: 'Priya Mehta',
                role: 'Founder, HealthCare Plus',
                text: 'The AI solutions they delivered exceeded our expectations. Highly professional team!',
                rating: 5
              },
              {
                name: 'Amit Desai',
                role: 'CTO, FinTech Solutions',
                text: 'Best IT partner we have worked with. Their attention to detail is remarkable.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your ideas to life with our expert team
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}