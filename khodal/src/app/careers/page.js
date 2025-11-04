'use client'

import { Briefcase, MapPin, Clock, TrendingUp, Heart, Users, Zap, Coffee, Laptop, GraduationCap } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedSection'

export default function Careers() {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Career Growth',
      description: 'Clear career paths and opportunities for advancement'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health Benefits',
      description: 'Comprehensive health insurance for you and your family'
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: 'Remote Work',
      description: 'Flexible work-from-home options and hybrid models'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning & Development',
      description: 'Training programs and certification support'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Work-Life Balance',
      description: 'Flexible hours and generous time-off policies'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Great Culture',
      description: 'Collaborative environment with amazing team members'
    }
  ]

  const openings = [
    {
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Surat, Gujarat',
      type: 'Full-time',
      experience: '5+ years',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'React Native Developer',
      department: 'Mobile',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['React Native', 'JavaScript', 'Firebase', 'Redux'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI/ML Engineer',
      department: 'Data Science',
      location: 'Surat, Gujarat',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '3+ years',
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'DevOps Engineer',
      department: 'Operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Surat, Gujarat',
      type: 'Full-time',
      experience: '5+ years',
      skills: ['Agile', 'Product Strategy', 'Analytics', 'Leadership'],
      color: 'from-orange-500 to-yellow-500'
    }
  ]

  const values = [
    { icon: '💡', title: 'Innovation First', description: 'We encourage creative thinking and new ideas' },
    { icon: '🤝', title: 'Collaboration', description: 'Teamwork makes the dream work' },
    { icon: '🎯', title: 'Excellence', description: 'We strive for the highest quality in everything' },
    { icon: '🌱', title: 'Growth Mindset', description: 'Continuous learning and improvement' }
  ]

  return (
    <div className="relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Build your career with a team that values innovation, collaboration, and continuous growth
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why <span className="gradient-text">Khodal</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover the benefits of being part of our innovative team
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find your perfect role and start your journey with us
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center`}>
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold">
                    {job.department}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">{job.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    {job.type} • {job.experience}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Hiring Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Apply', description: 'Submit your application online' },
              { step: '02', title: 'Screen', description: 'Initial review of your profile' },
              { step: '03', title: 'Interview', description: 'Technical and cultural fit assessment' },
              { step: '04', title: 'Offer', description: 'Join the Khodal family!' }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 relative"
              >
                <div className="text-5xl font-bold gradient-text opacity-20 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
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
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Send us your resume and we'll keep you in mind for future opportunities
              </p>
              <a
                href="mailto:careers@khodal.com"
                className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}