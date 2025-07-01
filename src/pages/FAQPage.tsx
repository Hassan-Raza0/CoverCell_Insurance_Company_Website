import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, HelpCircle, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';

const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'coverage', name: 'Coverage' },
    { id: 'claims', name: 'Claims' },
    { id: 'billing', name: 'Billing' },
    { id: 'devices', name: 'Devices' },
    { id: 'account', name: 'Account' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'coverage',
      question: 'What types of damage are covered?',
      answer: 'Our insurance covers accidental damage (drops, cracks), water damage, theft (with police report), and mechanical breakdowns. Coverage varies by plan - Basic covers screen repair and basic damage, while Premium includes theft and water damage protection.'
    },
    {
      id: 2,
      category: 'coverage',
      question: 'Is there a waiting period for coverage?',
      answer: 'No, there is no waiting period! Your coverage begins immediately upon enrollment and payment confirmation. You can file a claim right away if needed.'
    },
    {
      id: 3,
      category: 'claims',
      question: 'How do I file a claim?',
      answer: 'Filing a claim is easy! Log into your customer portal, click "File New Claim," provide details about the incident, upload photos if applicable, and submit. Most claims are processed within 24 hours.'
    },
    {
      id: 4,
      category: 'claims',
      question: 'How long does claim processing take?',
      answer: 'Most claims are processed within 24 hours. Once approved, repairs typically take 1-2 business days at our authorized service centers, and replacement devices are shipped next-day.'
    },
    {
      id: 5,
      category: 'claims',
      question: 'What do I need to file a theft claim?',
      answer: 'For theft claims, you need to file a police report within 48 hours and provide us with the police report number. You\'ll also need to provide your device\'s IMEI number and details about when and where the theft occurred.'
    },
    {
      id: 6,
      category: 'billing',
      question: 'How much are the deductibles?',
      answer: 'Deductibles vary by plan: Basic Plan has a $25 deductible, Premium Plan has a $50 deductible, and Family Plan has shared deductibles. The deductible is paid when you file a claim, not monthly.'
    },
    {
      id: 7,
      category: 'billing',
      question: 'Can I cancel my plan anytime?',
      answer: 'Yes, you can cancel your plan at any time with no penalties or cancellation fees. Your coverage will remain active until the end of your current billing period.'
    },
    {
      id: 8,
      category: 'billing',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), debit cards, and bank transfers. Payments are processed securely and automatically each month.'
    },
    {
      id: 9,
      category: 'devices',
      question: 'What devices are eligible for coverage?',
      answer: 'We cover smartphones from all major manufacturers including Apple, Samsung, Google, OnePlus, and more. Devices must be less than 3 years old and in good working condition to enroll.'
    },
    {
      id: 10,
      category: 'devices',
      question: 'Can I add multiple devices to my plan?',
      answer: 'Yes! Our Family Plan covers up to 5 devices under one account. You can also upgrade from Basic or Premium to Family Plan at any time to add more devices.'
    },
    {
      id: 11,
      category: 'devices',
      question: 'What if I upgrade my phone?',
      answer: 'When you upgrade your phone, simply log into your account and update your device information. Your coverage will transfer to the new device. If the new device has a higher value, there may be a small adjustment to your premium.'
    },
    {
      id: 12,
      category: 'account',
      question: 'How do I access my account?',
      answer: 'You can access your account by logging in at our website or through our mobile app. Your account dashboard shows your coverage details, claim history, payment information, and allows you to manage your devices.'
    },
    {
      id: 13,
      category: 'account',
      question: 'Can I change my plan?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle. If you upgrade mid-cycle, you\'ll be charged a prorated amount for the remaining days.'
    },
    {
      id: 14,
      category: 'coverage',
      question: 'Are refurbished phones covered?',
      answer: 'Yes, we cover refurbished phones as long as they are in good working condition and less than 3 years old. The coverage is the same as for new devices.'
    },
    {
      id: 15,
      category: 'claims',
      question: 'Where can I get my phone repaired?',
      answer: 'We work with a network of authorized repair centers nationwide. When you file a claim, we\'ll direct you to the nearest authorized location. We also offer mail-in repair services for your convenience.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

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
              <div className="bg-white bg-opacity-20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Find answers to common questions about CoverCell insurance coverage, 
                claims, billing, and more.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
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
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:bg-gray-50"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openFAQ === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600">
                Try adjusting your search terms or browse different categories.
              </p>
            </div>
          )}

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you 
              with any questions about your coverage or claims.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Call Us</h4>
                <p className="text-blue-100 text-sm">1-800-COVER-ME</p>
                <p className="text-blue-100 text-xs">Mon-Fri: 8AM-8PM EST</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Email Us</h4>
                <p className="text-blue-100 text-sm">support@covercell.com</p>
                <p className="text-blue-100 text-xs">24-48 hour response</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <MessageCircle className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Live Chat</h4>
                <p className="text-blue-100 text-sm">Available 24/7</p>
                <p className="text-blue-100 text-xs">Instant support</p>
              </div>
            </div>
            
            <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;