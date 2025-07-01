import React, { useState } from 'react';
import { Calendar, User, Tag, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'company', name: 'Company News' },
    { id: 'product', name: 'Product Updates' },
    { id: 'partnerships', name: 'Partnerships' },
    { id: 'awards', name: 'Awards & Recognition' },
    { id: 'industry', name: 'Industry News' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'CoverCell Reaches 500,000 Protected Customers Milestone',
      excerpt: 'Company celebrates major growth milestone with 500,000 active customers and announces expansion plans for 2024.',
      category: 'company',
      date: '2024-01-20',
      author: 'CoverCell Communications',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },
    {
      id: 2,
      title: 'New AI-Powered Claims Processing Reduces Wait Times by 60%',
      excerpt: 'CoverCell launches revolutionary AI system that processes claims in under 4 hours, setting new industry standard.',
      category: 'product',
      date: '2024-01-15',
      author: 'Tech Team',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 3,
      title: 'CoverCell Partners with Leading Electronics Retailer Chain',
      excerpt: 'Strategic partnership with TechMart brings CoverCell protection to 500+ retail locations nationwide.',
      category: 'partnerships',
      date: '2024-01-10',
      author: 'Business Development',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 4,
      title: 'CoverCell Wins "Best Mobile Insurance Provider" Award',
      excerpt: 'Industry recognition for outstanding customer service and innovative insurance solutions.',
      category: 'awards',
      date: '2024-01-05',
      author: 'Awards Committee',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 5,
      title: 'International Expansion: CoverCell Launches in Canada',
      excerpt: 'Company extends mobile device protection services to Canadian market with localized offerings.',
      category: 'company',
      date: '2023-12-28',
      author: 'International Team',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 6,
      title: 'Mobile Device Insurance Market Projected to Grow 15% Annually',
      excerpt: 'Industry analysis shows strong growth potential driven by increasing smartphone adoption and device values.',
      category: 'industry',
      date: '2023-12-20',
      author: 'Market Research',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 7,
      title: 'CoverCell Introduces Family Plan with Multi-Device Coverage',
      excerpt: 'New family plan allows protection for up to 5 devices under one convenient policy with shared benefits.',
      category: 'product',
      date: '2023-12-15',
      author: 'Product Team',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    },
    {
      id: 8,
      title: 'CEO Sarah Johnson Named "Insurance Executive of the Year"',
      excerpt: 'CoverCell CEO recognized for leadership in digital transformation and customer-centric innovation.',
      category: 'awards',
      date: '2023-12-10',
      author: 'Executive Team',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: false
    }
  ];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = filteredArticles.find(article => article.featured) || filteredArticles[0];
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                CoverCell News
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Stay updated with the latest news, product announcements, 
                and company milestones from CoverCell.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="ml-3 text-gray-500 text-sm capitalize">
                        {categories.find(c => c.id === featuredArticle.category)?.name}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center text-gray-500 text-sm">
                          <User className="h-4 w-4 mr-1" />
                          {featuredArticle.author}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(featuredArticle.date).toLocaleDateString()}
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium capitalize">
                      <Tag className="inline h-3 w-3 mr-1" />
                      {categories.find(c => c.id === article.category)?.name}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center text-gray-500 text-sm">
                        <User className="h-4 w-4 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(article.date).toLocaleDateString()}
                      </div>
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                      Read
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No news found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse different categories.
              </p>
            </div>
          )}

          {/* Press Kit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Media & Press Kit</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Need high-resolution images, company information, or executive bios? 
              Download our comprehensive press kit for media and journalists.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                Download Press Kit
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Contact Press Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default NewsPage;