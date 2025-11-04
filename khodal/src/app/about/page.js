'use client';

import AnimatedSection from '@/components/AnimatedSection';
import { Target, Eye, Award, Users, Clock, Globe, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Lightbulb />,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
      icon: <Heart />,
      title: 'Client Focus',
      description: 'Your success is our success. We prioritize understanding and meeting your unique needs.',
    },
    {
      icon: <Award />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, ensuring quality and reliability.',
    },
    {
      icon: <Users />,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners in achieving their business goals.',
    },
  ];

  const team = [
    {
      name: 'Expert Developers',
      count: '50+',
      description: 'Skilled in latest technologies',
    },
    {
      name: 'Project Managers',
      count: '10+',
      description: 'Ensuring smooth delivery',
    },
    {
      name: 'Design Specialists',
      count: '15+',
      description: 'Creating stunning interfaces',
    },
    {
      name: 'QA Engineers',
      count: '20+',
      description: 'Maintaining quality standards',
    },
  ];

  const milestones = [
    { year: '2008', event: 'Company Founded', description: 'Started our journey in Surat' },
    { year: '2012', event: 'Expanded Services', description: 'Added mobile app development' },
    { year: '2016', event: 'AI/ML Division', description: 'Launched AI and ML solutions' },
    { year: '2020', event: '500+ Clients', description: 'Reached major milestone' },
    { year: '2024', event: 'Global Presence', description: 'Serving clients worldwide' },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Khodal</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a leading IT solutions provider dedicated to transforming businesses through innovative technology and exceptional service.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection animation="slide-up">
              <div className="bg-purple-50 p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage. We strive to be a trusted partner in our clients' digital transformation journey.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up">
              <div className="bg-blue-50 p-8 rounded-2xl h-full">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-white" size={32} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be recognized globally as a leader in IT innovation, known for delivering exceptional value and fostering long-term relationships built on trust, quality, and mutual success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="slide-up">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to industry leadership
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="relative">
              {milestones.map((milestone, index) => (
                <div key={index} className="mb-12 flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                    {index !== milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-purple-200 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-purple-50 p-6 rounded-xl">
                      <div className="text-purple-600 font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Amazing Team
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} animation="slide-up">
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl text-center">
                  <div className="text-4xl font-bold mb-2">{member.count}</div>
                  <div className="text-xl font-semibold mb-2">{member.name}</div>
                  <div className="text-purple-100">{member.description}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <AnimatedSection className="text-center">
              <Clock className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-xl text-gray-600">Years of Excellence</div>
            </AnimatedSection>

            <AnimatedSection className="text-center">
              <Globe className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-xl text-gray-600">Countries Served</div>
            </AnimatedSection>

            <AnimatedSection className="text-center">
              <Award className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-xl text-gray-600">Industry Awards</div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}