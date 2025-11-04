'use client';

import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import {
  Code,
  Smartphone,
  Brain,
  Database,
  Globe,
  Layers,
  Cloud,
  Shield,
  ArrowRight,
  CheckCircle2,
  Palette,
  ShoppingCart,
  BarChart,
  Zap,
} from 'lucide-react';

export default function Services() {
  const mainServices = [
    {
      icon: <Code size={48} />,
      title: 'Web Development',
      description:
        'Build powerful, scalable web applications using cutting-edge technologies like React, Next.js, Node.js, and more.',
      features: [
        'Responsive Web Design',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'CMS Development',
        'API Development',
        'Web Performance Optimization',
      ],
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: <Smartphone size={48} />,
      title: 'App Development',
      description:
        'Create native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.',
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Development',
        'UI/UX Design',
        'App Maintenance',
        'Push Notifications',
        'In-app Purchases',
      ],
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: <Brain size={48} />,
      title: 'AI & ML Solutions',
      description:
        'Leverage artificial intelligence and machine learning to automate processes and gain valuable insights from your data.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'AI Integration',
      ],
      gradient: 'from-indigo-500 to-indigo-700',
    },
    {
      icon: <Database size={48} />,
      title: 'Data Migration',
      description:
        'Seamlessly migrate your data with zero downtime and complete data integrity across different platforms and systems.',
      features: [
        'Cloud Migration',
        'Database Migration',
        'Legacy System Migration',
        'Data Validation',
        'Backup & Recovery',
        'Performance Optimization',
      ],
      gradient: 'from-cyan-500 to-cyan-700',
    },
  ];

  const additionalServices = [
    {
      icon: <Cloud />,
      title: 'Cloud Services',
      description: 'AWS, Azure, and Google Cloud solutions for scalable infrastructure.',
    },
    {
      icon: <Shield />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions.',
    },
    {
      icon: <Palette />,
      title: 'UI/UX Design',
      description: 'Create stunning, user-friendly interfaces that engage users.',
    },
    {
      icon: <ShoppingCart />,
      title: 'E-commerce',
      description: 'Build powerful online stores with seamless payment integration.',
    },
    {
      icon: <BarChart />,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights for better decisions.',
    },
    {
      icon: <Zap />,
      title: 'DevOps',
      description: 'Streamline development with CI/CD and automation tools.',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We understand your business goals, requirements, and challenges.',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Create a detailed roadmap with timelines and milestones.',
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your solution using agile methodologies and best practices.',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Rigorous quality assurance to ensure flawless performance.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Launch your solution with minimal disruption.',
    },
    {
      step: '06',
      title: 'Support',
      description: 'Ongoing maintenance and support to ensure success.',
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to help your business thrive in the digital age
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <AnimatedSection key={index} animation="slide-up">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center text-white mb-6`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-0.5 group"
                    >
                      Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                    <div className={`relative bg-gradient-to-br ${service.gradient} rounded-2xl p-8 shadow-xl`}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                        <div className="grid grid-cols-2 gap-4">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <div key={idx} className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                              <div className="text-white font-semibold text-sm">
                                {feature}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Services We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expand your capabilities with our comprehensive range of IT services
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={index} animation="slide-up">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {process.map((item, index) => (
              <AnimatedSection key={index} animation="slide-up">
                <div className="relative">
                  <div className="absolute -top-8 -left-8 z-10">
                    <div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-500 shadow-sm flex items-center justify-center text-3xl font-extrabold">
                      {item.step}
                    </div>
                  </div>
                  <div className="relative bg-white border-2 border-purple-100 p-6 rounded-xl hover:border-purple-300 transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium text-lg"
            >
              Contact Us Today
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
