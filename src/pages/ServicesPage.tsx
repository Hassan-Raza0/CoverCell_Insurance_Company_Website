import React from 'react';
import { Shield, Smartphone, Droplets, Users, Clock, Award, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const ServicesPage: React.FC = () => {
  const coverageTypes = [
    {
      icon: Smartphone,
      title: 'Accidental Damage',
      description: 'Complete protection against drops, cracks, and accidental damage',
      details: ['Cracked screens', 'Physical damage', 'Impact damage', 'Camera damage'],
      coverage: 'Up to full device value'
    },
    {
      icon: Shield,
      title: 'Theft Protection',
      description: 'Full device replacement if your phone is stolen',
      details: ['Robbery coverage', 'Burglary protection', 'Police report required', 'Worldwide coverage'],
      coverage: 'Full replacement'
    },
    {
      icon: Droplets,
      title: 'Water Damage',
      description: 'Protection against liquid damage and submersion',
      details: ['Spill protection', 'Submersion damage', 'Rain damage', 'Humidity damage'],
      coverage: 'Repair or replacement'
    },
    {
      icon: Users,
      title: 'Family Plans',
      description: 'Protect multiple devices under one convenient plan',
      details: ['Up to 5 devices', 'Shared deductibles', 'Family dashboard', 'Group discounts'],
      coverage: 'All covered devices'
    }
  ];

  const benefits = [
    { icon: Clock, title: '24/7 Support', description: 'Round-the-clock customer service and claims processing' },
    { icon: Award, title: 'Premium Service', description: 'Authorized repair centers and genuine parts only' },
    { icon: CheckCircle, title: 'Fast Claims', description: 'Most claims processed within 24 hours' },
    { icon: Shield, title: 'Global Coverage', description: 'Protection wherever you travel worldwide' }
  ];

  const plans = [
    {
      name: 'Basic Protection',
      price: '$9.99',
      period: 'per month',
      features: [
        'Screen repair coverage',
        'Basic accidental damage',
        '24/7 customer support',
        '2 claims per year',
        '$25 deductible'
      ],
      popular: false
    },
    {
      name: 'Complete Protection',
      price: '$19.99',
      period: 'per month',
      features: [
        'All Basic features',
        'Theft protection',
        'Water damage coverage',
        'Unlimited claims',
        '$50 deductible',
        'Express replacement'
      ],
      popular: true
    },
    {
      name: 'Family Protection',
      price: '$34.99',
      period: 'per month',
      features: [
        'Up to 5 devices',
        'All Complete features',
        'Family dashboard',
        'Priority support',
        'Device tracking',
        'Shared deductibles'
      ],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Comprehensive Mobile Protection
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From accidental drops to complete theft, we've got your device covered 
              with the most comprehensive mobile insurance available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Covered</h2>
            <p className="text-xl text-gray-600">Comprehensive protection for every situation</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coverageTypes.map((coverage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <coverage.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{coverage.title}</h3>
                    <p className="text-gray-600 mb-4">{coverage.description}</p>
                    <div className="space-y-2 mb-4">
                      {coverage.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 px-4 py-2 rounded-lg">
                      <span className="text-sm font-semibold text-blue-800">
                        Coverage: {coverage.coverage}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CoverCell</h2>
            <p className="text-xl text-gray-600">Premium service and support you can count on</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Protection Level</h2>
            <p className="text-xl text-gray-600">Flexible plans to fit your needs and budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white border-2 rounded-xl p-8 relative ${
                  plan.popular 
                    ? 'border-blue-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-gray-300'
                } transition-all`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-1">{plan.price}</div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about our coverage</p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How quickly are claims processed?',
                answer: 'Most claims are processed within 24 hours. Once approved, repairs typically take 1-2 business days, and replacements are shipped next-day.'
              },
              {
                question: 'What devices are covered?',
                answer: 'We cover smartphones from all major manufacturers including Apple, Samsung, Google, OnePlus, and more. Devices must be less than 3 years old to enroll.'
              },
              {
                question: 'Is there a waiting period?',
                answer: 'No waiting period! Your coverage begins immediately upon enrollment and payment confirmation.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Yes, you can cancel your plan at any time with no penalties. Your coverage will remain active until the end of your current billing period.'
              },
              {
                question: 'What if my phone is lost?',
                answer: 'Lost devices are not covered under our standard plans. However, theft with a police report is covered under our Premium and Family plans.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Device?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust CoverCell with their mobile protection.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Quote Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;