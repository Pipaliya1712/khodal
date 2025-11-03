'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Linkedin, Twitter, Github, Facebook } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for contacting us! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@khodal.com', 'support@khodal.com'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+91 98765 43210', '+91 98765 43211'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['Surat, Gujarat', 'India - 395007'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM'],
      color: 'from-pink-500 to-red-500'
    }
  ]

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', url: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', url: '#' },
    { icon: <Github className="w-5 h-5" />, name: 'GitHub', url: '#' },
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', url: '#' }
  ]

  return (
    <div className="relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-effect rounded-3xl p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Send Us a <span className="gradient-text">Message</span>
                </h2>
                <p className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="" className="bg-slate-900">Select a service</option>
                    <option value="web" className="bg-slate-900">Web Development</option>
                    <option value="mobile" className="bg-slate-900">App Development</option>
                    <option value="ai" className="bg-slate-900">AI/ML Solutions</option>
                    <option value="data" className="bg-slate-900">Data Migration</option>
                    <option value="other" className="bg-slate-900">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              {/* Quick Response */}
              <div className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quick Response Time</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We typically respond to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="glass-effect rounded-3xl overflow-hidden h-64 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                    <p className="text-xl font-bold">Surat, Gujarat</p>
                    <p className="text-gray-400">India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-cyan-400 transition-all duration-300 group"
                    >
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <span className="text-sm font-semibold">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'What is your typical project timeline?',
                a: 'Project timelines vary based on scope and complexity. A typical web application takes 8-12 weeks, while mobile apps may take 12-16 weeks. We provide detailed timelines during our initial consultation.'
              },
              {
                q: 'Do you offer ongoing support and maintenance?',
                a: 'Yes, we provide comprehensive support and maintenance packages to ensure your solution continues to perform optimally after launch.'
              },
              {
                q: 'What technologies do you specialize in?',
                a: 'We specialize in modern web technologies like React, Next.js, Node.js, and cloud platforms. For mobile, we work with React Native and Flutter. We also have expertise in AI/ML using Python and TensorFlow.'
              },
              {
                q: 'Can you work with our existing team?',
                a: 'Absolutely! We can integrate with your existing team or work independently based on your needs. We have experience with various collaboration models.'
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <summary className="font-bold cursor-pointer flex items-center justify-between">
                  {faq.q}
                  <span className="text-cyan-400 text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}