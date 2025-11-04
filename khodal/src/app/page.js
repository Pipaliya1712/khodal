'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { Code, Smartphone, Brain, Database, ArrowRight, CheckCircle2, Users, Award, Zap } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance.',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    },
    {
      icon: <Brain size={40} />,
      title: 'AI & ML Solutions',
      description: 'Intelligent automation and machine learning models to transform your business operations.',
    },
    {
      icon: <Database size={40} />,
      title: 'Data Migration',
      description: 'Seamless data migration services ensuring zero data loss and minimal downtime.',
    },
  ];

  const stats = [
    { icon: <Users />, value: '500+', label: 'Clients Served' },
    { icon: <Award />, value: '1000+', label: 'Projects Completed' },
    { icon: <Zap />, value: '15+', label: 'Years Experience' },
    { icon: <CheckCircle2 />, value: '99%', label: 'Success Rate' },
  ];

  const features = [
    'Agile Development Process',
    '24/7 Technical Support',
    'Scalable Solutions',
    'Quality Assurance',
    'Cost-Effective',
    'On-Time Delivery',
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8" style={{ fontFamily: 'Caveat, cursive' }}>
                All your business on{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">one platform.</span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-300 -rotate-1 -z-0"></span>
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-gray-800 mb-8" style={{ fontFamily: 'Caveat, cursive' }}>
                Simple, efficient, yet{' '}
                <span className="relative inline-block">
                  <span className="relative z-10">affordable!</span>
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan-300 rotate-1"></span>
                </span>
              </p>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
                >
                  Start now - It's free
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-gray-700 border-2 border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 hover:border-blue-700 transition-all duration-200 font-semibold text-lg transform hover:scale-105 hover:-translate-y-0.5"
                >
                  Meet an advisor
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right" className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl transform rotate-6"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <Code className="text-purple-600 mb-2" size={32} />
                      <p className="font-semibold text-gray-800">Web Dev</p>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <Smartphone className="text-blue-600 mb-2" size={32} />
                      <p className="font-semibold text-gray-800">App Dev</p>
                    </div>
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <Brain className="text-indigo-600 mb-2" size={32} />
                      <p className="font-semibold text-gray-800">AI & ML</p>
                    </div>
                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <Database className="text-cyan-600 mb-2" size={32} />
                      <p className="font-semibold text-gray-800">Data</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your unique business needs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="slide-up" className="delay-100">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full transform hover:scale-105 hover:-translate-y-2 group">
                  <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href="/services"
                    className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-2 group/link transition-all duration-200"
                  >
                    Learn more <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Khodal?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine technical expertise with business acumen to deliver solutions that drive real results. Our team is committed to your success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-in-right">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6">
                  Let's discuss how we can help transform your business with our innovative IT solutions.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
                >
                  Contact Us Today
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Partner with us to transform your vision into reality
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5"
            >
              Start Your Project
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}