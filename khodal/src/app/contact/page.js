'use client';

import { useRef, useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { Mail, Phone, MapPin, Send, Clock, Linkedin, Twitter, Facebook } from 'lucide-react';
import ToastHost from '@/components/ToastHost';

export default function Contact() {
  const toastRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitMessage(result.message);
        toastRef.current?.show({ type: 'success', title: 'Success', message: result.message || 'Message sent successfully.' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setSubmitError(result.error || 'Something went wrong. Please try again.');
        toastRef.current?.show({ type: 'error', title: 'Error', message: result.error || 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitError('Failed to submit form. Please check your connection and try again.');
      toastRef.current?.show({ type: 'error', title: 'Network Error', message: 'Failed to submit form. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitMessage('');
        setSubmitError('');
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone />,
      title: 'Phone',
      details: ['+91 XXX XXX XXXX', '+91 YYY YYY YYYY'],
      gradient: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Mail />,
      title: 'Email',
      details: ['info@khodal.com', 'support@khodal.com'],
      gradient: 'from-purple-500 to-purple-600',
    },
    {
      icon: <MapPin />,
      title: 'Address',
      details: ['Surat, Gujarat', 'India - 395007'],
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: <Clock />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      gradient: 'from-cyan-500 to-cyan-600',
    },
  ];

  const services = [
    'Web Development',
    'App Development',
    'AI & ML Solutions',
    'Data Migration',
    'Cloud Services',
    'UI/UX Design',
    'Other',
  ];

  const officeLocations = [
    {
      city: 'Surat (Head Office)',
      address: 'Ring Road, Surat, Gujarat 395007',
      phone: '+91 XXX XXX XXXX',
    },
    {
      city: 'Mumbai',
      address: 'Andheri East, Mumbai, Maharashtra 400069',
      phone: '+91 YYY YYY YYYY',
    },
    {
      city: 'Ahmedabad',
      address: 'Satellite, Ahmedabad, Gujarat 380015',
      phone: '+91 ZZZ ZZZ ZZZZ',
    },
  ];

  return (
    <div className="pt-16">
      {/* Toasts */}
      <ToastHost ref={toastRef} />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} animation="slide-up">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-lg flex items-center justify-center text-white mb-4`}>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slide-up">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                
                {submitMessage && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition resize-none"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 font-medium text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 disabled:transform-none disabled:hover:scale-100 disabled:hover:translate-y-0 group"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map & Additional Info */}
            <AnimatedSection animation="slide-in-right">
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8 h-80 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                    <p className="text-gray-700 text-lg">Interactive Map</p>
                    <p className="text-gray-500">Surat, Gujarat, India</p>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Offices
                  </h3>
                  <div className="space-y-6">
                    {officeLocations.map((location, index) => (
                      <div key={index} className="border-l-4 border-purple-600 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {location.city}
                        </h4>
                        <p className="text-gray-600 text-sm mb-1">{location.address}</p>
                        <p className="text-purple-600 text-sm">{location.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                  <p className="mb-6">Stay connected on social media</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Twitter size={24} />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6">
              {[
                {
                  question: 'What is your typical project timeline?',
                  answer: 'Project timelines vary based on complexity, but most projects range from 4-12 weeks. We provide detailed timelines during the initial consultation.',
                },
                {
                  question: 'Do you offer ongoing support?',
                  answer: 'Yes, we provide comprehensive support and maintenance packages to ensure your solution continues to perform optimally.',
                },
                {
                  question: 'What technologies do you work with?',
                  answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure.',
                },
                {
                  question: 'How do you ensure project quality?',
                  answer: 'We follow rigorous testing procedures, code reviews, and quality assurance protocols throughout the development process.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
