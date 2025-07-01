import React from 'react';
import { Handshake, Shield, Award, Users, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const PartnersPage: React.FC = () => {
  const partnerTypes = [
    {
      icon: Phone,
      title: 'Device Manufacturers',
      description: 'Partner with leading smartphone and tablet manufacturers to offer integrated protection',
      benefits: ['Increased customer satisfaction', 'Additional revenue stream', 'Enhanced product value']
    },
    {
      icon: Shield,
      title: 'Retail Partners',
      description: 'Electronics retailers offering CoverCell protection at point of sale',
      benefits: ['Higher transaction values', 'Customer retention', 'Competitive advantage']
    },
    {
      icon: Users,
      title: 'Service Providers',
      description: 'Authorized repair centers and service providers in our network',
      benefits: ['Steady business flow', 'Training and certification', 'Marketing support']
    },
    {
      icon: Handshake,
      title: 'Channel Partners',
      description: 'Resellers and distributors expanding our market reach',
      benefits: ['Attractive margins', 'Sales support', 'Co-marketing opportunities']
    }
  ];

  const currentPartners = [
    {
      name: 'TechMart Electronics',
      type: 'Retail Partner',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Leading electronics retailer with 500+ locations nationwide'
    },
    {
      name: 'QuickFix Repair',
      type: 'Service Provider',
      logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Authorized repair network with certified technicians'
    },
    {
      name: 'MobilePro Distributors',
      type: 'Channel Partner',
      logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Regional distributor serving the Southeast market'
    },
    {
      name: 'DeviceGuard Solutions',
      type: 'Technology Partner',
      logo: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200',
      description: 'Integration and API solutions for enterprise clients'
    }
  ];

  const requirements = [
    'Established business with proven track record',
    'Commitment to customer service excellence',
    'Technical capabilities for integration',
    'Compliance with industry standards',
    'Financial stability and references'
  ];

  const process = [
    {
      step: 1,
      title: 'Initial Contact',
      description: 'Reach out to our partnership team with your proposal'
    },
    {
      step: 2,
      title: 'Evaluation',
      description: 'We review your application and business model'
    },
    {
      step: 3,
      title: 'Discussion',
      description: 'Detailed discussions about partnership structure'
    },
    {
      step: 4,
      title: 'Agreement',
      description: 'Finalize terms and sign partnership agreement'
    },
    {
      step: 5,
      title: 'Onboarding',
      description: 'Training, integration, and launch support'
    }
  ];

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
                <Handshake className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Partner With CoverCell
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join our growing network of partners and help us deliver exceptional 
                mobile device protection to customers worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Opportunities</h2>
              <p className="text-xl text-gray-600">Multiple ways to grow together</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <type.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{type.title}</h3>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Benefits:</h4>
                        {type.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
              <p className="text-xl text-gray-600">Trusted companies we work with</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentPartners.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm p-6 text-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 rounded-lg mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{partner.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{partner.type}</p>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Requirements</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We're selective about our partners to ensure we maintain the highest 
                  standards of service and customer satisfaction.
                </p>
                <div className="space-y-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Partnership meeting"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Process</h2>
              <p className="text-xl text-gray-600">How to become a CoverCell partner</p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2 hidden lg:block"></div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner With Us</h2>
              <p className="text-xl text-gray-600">The advantages of working with CoverCell</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: 'Industry Leader',
                  description: 'Partner with the most trusted name in mobile device insurance'
                },
                {
                  icon: Users,
                  title: 'Proven Track Record',
                  description: '500K+ satisfied customers and 98.5% claim approval rate'
                },
                {
                  icon: Shield,
                  title: 'Comprehensive Support',
                  description: 'Full training, marketing support, and ongoing assistance'
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Partner?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can work together to grow your business 
              and provide exceptional value to your customers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <Mail className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">partnerships@covercell.com</p>
              </div>
              
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <Phone className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">1-800-PARTNER</p>
              </div>
            </div>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center">
              Start Partnership Discussion
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PartnersPage;