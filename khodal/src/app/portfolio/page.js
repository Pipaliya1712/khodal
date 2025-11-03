'use client'

import { useState } from 'react'
import { ExternalLink, Code, Smartphone, Brain, Database, ShoppingCart, Globe } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'ecommerce', label: 'E-Commerce' }
  ]

  const projects = [
    {
      title: 'FinTech Dashboard',
      category: 'web',
      description: 'Real-time financial analytics platform with advanced data visualization',
      icon: <Code className="w-6 h-6" />,
      image: '💼',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'mobile',
      description: 'Patient management and telemedicine platform for healthcare providers',
      icon: <Smartphone className="w-6 h-6" />,
      image: '🏥',
      tags: ['React Native', 'Firebase', 'WebRTC'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI Chatbot Platform',
      category: 'ai',
      description: 'Intelligent customer service automation with NLP capabilities',
      icon: <Brain className="w-6 h-6" />,
      image: '🤖',
      tags: ['Python', 'TensorFlow', 'NLP', 'AWS'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Fashion E-Commerce',
      category: 'ecommerce',
      description: 'Modern online shopping platform with AI-powered recommendations',
      icon: <ShoppingCart className="w-6 h-6" />,
      image: '👗',
      tags: ['Next.js', 'Stripe', 'PostgreSQL'],
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'Data Migration System',
      category: 'web',
      description: 'Enterprise-grade data migration tool for cloud transformation',
      icon: <Database className="w-6 h-6" />,
      image: '📊',
      tags: ['Python', 'Apache Kafka', 'Docker'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Restaurant Ordering App',
      category: 'mobile',
      description: 'Multi-restaurant food delivery platform with real-time tracking',
      icon: <Smartphone className="w-6 h-6" />,
      image: '🍕',
      tags: ['Flutter', 'Firebase', 'Google Maps'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Predictive Analytics Tool',
      category: 'ai',
      description: 'ML-powered forecasting system for business intelligence',
      icon: <Brain className="w-6 h-6" />,
      image: '📈',
      tags: ['Python', 'Scikit-learn', 'Pandas'],
      color: 'from-yellow-500 to-green-500'
    },
    {
      title: 'Corporate Website',
      category: 'web',
      description: 'Modern corporate website with CMS and multilingual support',
      icon: <Globe className="w-6 h-6" />,
      image: '🌐',
      tags: ['Next.js', 'Tailwind', 'Strapi'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Electronics Marketplace',
      category: 'ecommerce',
      description: 'B2B marketplace for electronics with auction features',
      icon: <ShoppingCart className="w-6 h-6" />,
      image: '📱',
      tags: ['React', 'Node.js', 'Redis', 'WebSocket'],
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <div className="relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore our successful projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '1000+', label: 'Projects Completed' },
              { number: '500+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
              { number: '15+', label: 'Countries Served' }
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30'
                    : 'glass-effect text-gray-300 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="glass-effect rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-8xl relative overflow-hidden`}>
                  {project.image}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center`}>
                      {project.icon}
                    </div>
                    <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Delivering specialized solutions across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '🏦', name: 'Finance' },
              { icon: '🏥', name: 'Healthcare' },
              { icon: '🎓', name: 'Education' },
              { icon: '🛒', name: 'Retail' },
              { icon: '🏭', name: 'Manufacturing' },
              { icon: '🚗', name: 'Automotive' }
            ].map((industry, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <p className="text-sm font-semibold">{industry.name}</p>
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
                Want to See Your Project Here?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's collaborate and create something amazing together
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}