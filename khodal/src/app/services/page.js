'use client'

import { Code, Smartphone, Brain, Database, Cloud, ShoppingCart, Search, Lock, Palette, Server, Globe, BarChart } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'
import Link from 'next/link'

export default function Services() {
  const mainServices = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Web Development',
      description: 'Create stunning, responsive websites and web applications using the latest frameworks and technologies.',
      features: ['React & Next.js', 'Node.js Backend', 'Progressive Web Apps', 'E-commerce Solutions'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: 'App Development',
      description: 'Build powerful native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter Development', 'Native iOS & Android', 'App Maintenance'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI/ML Solutions',
      description: 'Leverage artificial intelligence and machine learning to automate and optimize your business processes.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Chatbots & Virtual Assistants'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: 'Data Migration',
      description: 'Seamlessly migrate your data to new systems with zero downtime and complete security.',
      features: ['Cloud Migration', 'Database Migration', 'Data Integration', 'Legacy System Modernization'],
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services to power your digital transformation.',
      features: ['AWS & Azure', 'Cloud Architecture', 'DevOps Services', 'Cloud Security'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: 'E-Commerce',
      description: 'Complete e-commerce solutions from design to deployment and ongoing optimization.',
      features: ['Custom Stores', 'Payment Integration', 'Inventory Management', 'Multi-vendor Platforms'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: 'SEO & Digital Marketing',
      description: 'Boost your online presence and drive traffic with data-driven marketing strategies.',
      features: ['SEO Optimization', 'Content Marketing', 'Social Media Marketing', 'PPC Campaigns'],
      color: 'from-yellow-500 to-green-500'
    },
    {
      icon: <Lock className="w-12 h-12" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions and best practices.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Security Training'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: 'UI/UX Design',
      description: 'Create intuitive and visually stunning user experiences that delight your customers.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: 'Backend Development',
      description: 'Robust and scalable backend systems that power your applications efficiently.',
      features: ['RESTful APIs', 'Microservices', 'Database Design', 'Server Management'],
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Digital Transformation',
      description: 'Transform your business with comprehensive digital strategies and solutions.',
      features: ['Process Automation', 'Digital Strategy', 'Change Management', 'Technology Consulting'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'Analytics & BI',
      description: 'Turn data into actionable insights with powerful analytics and business intelligence tools.',
      features: ['Data Visualization', 'Custom Dashboards', 'Reporting Solutions', 'Predictive Analytics'],
      color: 'from-indigo-600 to-purple-600'
    }
  ]

  const process = [
    { step: '01', title: 'Discovery', description: 'Understanding your needs and goals' },
    { step: '02', title: 'Planning', description: 'Creating a strategic roadmap' },
    { step: '03', title: 'Development', description: 'Building your solution' },
    { step: '04', title: 'Testing', description: 'Ensuring quality and performance' },
    { step: '05', title: 'Deployment', description: 'Launching your project' },
    { step: '06', title: 'Support', description: 'Ongoing maintenance and updates' }
  ]

  return (
    <div className="relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions designed to accelerate your digital journey and drive business growth
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/20`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 relative group"
              >
                <div className="text-6xl font-bold gradient-text opacity-20 absolute top-4 right-6">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="inline-block px-4 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-4">
                    Step {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
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
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}