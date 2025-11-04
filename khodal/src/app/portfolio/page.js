'use client';

import { useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';
import { ExternalLink, Code, Smartphone, Brain, Database, ShoppingCart, Heart } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'data', label: 'Data Solutions' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'A comprehensive online shopping platform with advanced features and seamless checkout experience.',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      icon: <ShoppingCart />,
      gradient: 'from-purple-500 to-pink-500',
      image: 'bg-purple-100',
    },
    {
      title: 'Healthcare Mobile App',
      category: 'mobile',
      description: 'Patient management system with telemedicine capabilities and appointment scheduling.',
      technologies: ['React Native', 'Firebase', 'WebRTC'],
      icon: <Heart />,
      gradient: 'from-blue-500 to-cyan-500',
      image: 'bg-blue-100',
    },
    {
      title: 'AI Chatbot Solution',
      category: 'ai',
      description: 'Intelligent customer support chatbot with natural language processing and sentiment analysis.',
      technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
      icon: <Brain />,
      gradient: 'from-indigo-500 to-purple-500',
      image: 'bg-indigo-100',
    },
    {
      title: 'Enterprise Data Migration',
      category: 'data',
      description: 'Large-scale data migration from legacy systems to cloud infrastructure with zero downtime.',
      technologies: ['AWS', 'PostgreSQL', 'Python', 'Apache Airflow'],
      icon: <Database />,
      gradient: 'from-cyan-500 to-teal-500',
      image: 'bg-cyan-100',
    },
    {
      title: 'Real Estate Portal',
      category: 'web',
      description: 'Property listing platform with advanced search, virtual tours, and integrated payment system.',
      technologies: ['React', 'Express', 'MySQL', '3D Tours'],
      icon: <Code />,
      gradient: 'from-orange-500 to-red-500',
      image: 'bg-orange-100',
    },
    {
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Comprehensive fitness app with workout plans, nutrition tracking, and social features.',
      technologies: ['Flutter', 'Firebase', 'ML Kit'],
      icon: <Smartphone />,
      gradient: 'from-green-500 to-emerald-500',
      image: 'bg-green-100',
    },
    {
      title: 'Predictive Analytics Platform',
      category: 'ai',
      description: 'Business intelligence tool using machine learning for sales forecasting and trend analysis.',
      technologies: ['Python', 'Scikit-learn', 'React', 'D3.js'],
      icon: <Brain />,
      gradient: 'from-violet-500 to-purple-500',
      image: 'bg-violet-100',
    },
    {
      title: 'Cloud Data Warehouse',
      category: 'data',
      description: 'Scalable data warehouse solution with real-time analytics and reporting capabilities.',
      technologies: ['Snowflake', 'DBT', 'Python', 'Tableau'],
      icon: <Database />,
      gradient: 'from-sky-500 to-blue-500',
      image: 'bg-sky-100',
    },
    {
      title: 'Restaurant Management System',
      category: 'web',
      description: 'Complete restaurant solution with POS, inventory management, and online ordering.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Socket.io'],
      icon: <Code />,
      gradient: 'from-amber-500 to-orange-500',
      image: 'bg-amber-100',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Inc.',
      text: 'Khodal delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and technical expertise is outstanding.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'HealthCare Plus',
      text: 'The mobile app they developed has transformed how we interact with patients. Professional team and excellent communication throughout.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'DataTech Solutions',
      text: 'Their AI/ML expertise helped us automate our processes and gain valuable insights. Highly recommend their services!',
      rating: 5,
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our success stories and the innovative solutions we've delivered to clients worldwide
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={index} animation="slide-up">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full flex flex-col">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                    <div className="relative z-10 text-white">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                        <div className="scale-150">{project.icon}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-purple-50 text-purple-600 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium group transition-all duration-200">
                      View Details <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} animation="slide-up">
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl shadow-lg h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-purple-600">{testimonial.company}</div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-medium text-lg"
            >
              Get in Touch
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}