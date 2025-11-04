'use client'

import { useState } from 'react'
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react'
import AnimatedBackground from '@/components/AnimatedSection'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'development', label: 'Development' },
    { id: 'design', label: 'Design' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'business', label: 'Business' }
  ]

  const posts = [
    {
      title: 'The Future of Web Development: Trends to Watch in 2025',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      category: 'development',
      author: 'Rajesh Patel',
      date: 'Oct 28, 2025',
      readTime: '8 min read',
      image: '💻',
      tags: ['Web Dev', 'Trends', 'AI'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Mastering React Server Components: A Complete Guide',
      excerpt: 'Deep dive into React Server Components and learn how to build faster, more efficient web applications.',
      category: 'development',
      author: 'Priya Shah',
      date: 'Oct 25, 2025',
      readTime: '12 min read',
      image: '⚛️',
      tags: ['React', 'Performance', 'Tutorial'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI-Powered Design: How Machine Learning is Changing UX',
      excerpt: 'Discover how artificial intelligence is revolutionizing the design process and creating better user experiences.',
      category: 'ai',
      author: 'Amit Kumar',
      date: 'Oct 22, 2025',
      readTime: '10 min read',
      image: '🤖',
      tags: ['AI', 'UX', 'Innovation'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Design Systems That Scale: Building for Growth',
      excerpt: 'Learn how to create and maintain design systems that grow with your product and team.',
      category: 'design',
      author: 'Sneha Desai',
      date: 'Oct 20, 2025',
      readTime: '15 min read',
      image: '🎨',
      tags: ['Design Systems', 'UI/UX', 'Best Practices'],
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'Digital Transformation: A Strategic Approach for Businesses',
      excerpt: 'A comprehensive guide to successfully navigating digital transformation in your organization.',
      category: 'business',
      author: 'Rajesh Patel',
      date: 'Oct 18, 2025',
      readTime: '10 min read',
      image: '📊',
      tags: ['Strategy', 'Digital', 'Leadership'],
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Mobile-First Development: Best Practices for 2025',
      excerpt: 'Essential strategies for building mobile-first applications that deliver exceptional user experiences.',
      category: 'development',
      author: 'Amit Kumar',
      date: 'Oct 15, 2025',
      readTime: '9 min read',
      image: '📱',
      tags: ['Mobile', 'Development', 'UX'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      title: 'Machine Learning in Production: Lessons Learned',
      excerpt: 'Real-world insights from deploying machine learning models at scale in production environments.',
      category: 'ai',
      author: 'Priya Shah',
      date: 'Oct 12, 2025',
      readTime: '14 min read',
      image: '🧠',
      tags: ['ML', 'DevOps', 'Production'],
      color: 'from-yellow-500 to-green-500'
    },
    {
      title: 'Microservices Architecture: When and How to Use It',
      excerpt: 'Understanding when microservices make sense and how to implement them effectively.',
      category: 'development',
      author: 'Amit Kumar',
      date: 'Oct 10, 2025',
      readTime: '11 min read',
      image: '🏗️',
      tags: ['Architecture', 'Backend', 'Scalability'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Building Inclusive Digital Products',
      excerpt: 'How to design and develop products that are accessible and inclusive for all users.',
      category: 'design',
      author: 'Sneha Desai',
      date: 'Oct 8, 2025',
      readTime: '8 min read',
      image: '♿',
      tags: ['Accessibility', 'Inclusion', 'Design'],
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const filteredPosts = activeCategory === 'all' 
    ? posts 
    : posts.filter(p => p.category === activeCategory)

  const featuredPost = posts[0]

  return (
    <div className="relative">
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Insights, tutorials, and updates from the world of technology and innovation
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className={`h-full min-h-[400px] bg-gradient-to-br ${featuredPost.color} flex items-center justify-center text-9xl relative overflow-hidden`}>
                {featuredPost.image}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold">
                    {categories.find(c => c.id === featuredPost.category)?.label}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold">
                  Read Article
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
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
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat.id
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

      {/* Blog Posts Grid */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article
                key={index}
                className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
              >
                <div className={`h-48 bg-gradient-to-br ${post.color} flex items-center justify-center text-7xl relative overflow-hidden`}>
                  {post.image}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-semibold">
                      {categories.find(c => c.id === post.category)?.label}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-semibold">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-effect rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Get the latest insights and updates delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}