import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Smartphone, Clock, Star, CheckCircle, ArrowRight, Play, Award, Users, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const HomePage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

const plans = [
  {
    name: 'Basic Plan',
    price: 'From $5 – $12',
    features: [
      'Screen repair',
      'Battery cover',
      'Crash cover',
      '2 claims/year'
    ],
    popular: false
  },
  {
    name: 'Premium Plan',
    price: '$19.99',
    features: [
      'Full protection',
      'Theft cover',
      'Water damage',
      'Fast claims'
    ],
    popular: true
  },
  {
    name: 'Family Plan',
    price: '$34.99',
    features: [
      '5 devices',
      'Family portal',
      'Group tracking',
      'Unlimited claim'
    ],
    popular: false
  }
];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'When I dropped my phone and cracked the screen, CoverCell had it fixed within 24 hours. Amazing service!',
      location: 'New York, NY'
    },
    {
      name: 'Mike Chen',
      rating: 5,
      text: 'My phone was stolen while traveling. CoverCell sent me a replacement the next day. Lifesaver!',
      location: 'Los Angeles, CA'
    },
    {
      name: 'Emily Davis',
      rating: 5,
      text: 'The claims process was so simple. Just took a photo and submitted online. Highly recommend!',
      location: 'Chicago, IL'
    }
  ];

  const stats = [
    { icon: Users, value: '500K+', label: 'Protected Customers' },
    { icon: Shield, value: '98.5%', label: 'Claims Approved' },
    { icon: Clock, value: '24hrs', label: 'Average Response' },
    { icon: Award, value: '4.9/5', label: 'Customer Rating' }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Protect Your Phone,
                <span className="text-yellow-400"> Peace of Mind</span>
              </h1>
              <p className="text-xl mt-6 text-blue-100 leading-relaxed">
                Comprehensive mobile device insurance that covers everything from cracked screens to complete theft. 
                Get back to your life faster with CoverCell.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-8">
                <Link
                  to="/quote"
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center"
                >
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <div className="text-center">
                  <Smartphone className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Instant Protection</h3>
                  <p className="text-blue-100 mb-6">Coverage starts immediately after registration</p>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    ✓ No Waiting Period
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting protected is simple. Follow these easy steps to secure your device today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Get Quote', description: 'Enter your device details for instant pricing', icon: Smartphone },
              { step: 2, title: 'Choose Plan', description: 'Select the coverage level that fits your needs', icon: Shield },
              { step: 3, title: 'Register', description: 'Complete your registration in under 3 minutes', icon: CheckCircle },
              { step: 4, title: 'Stay Protected', description: 'Your coverage starts immediately', icon: Award }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <step.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-gray-400" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* Pricing Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
      <p className="text-xl text-gray-600">No hidden fees. No surprises. Just reliable protection.</p>
    </div>

    {/* Info Box */}
    <div className="mb-12 bg-blue-50 border border-blue-200 p-6 rounded-md text-sm text-gray-700 md:col-span-3">

      <p className="mb-2">
        <strong>Basic Plan Pricing:</strong> from <span className="font-bold text-blue-700">$5 – $12</span> depending on iPhone model.
      </p>
      <p>
        <strong>Deductible:</strong> <span className="font-bold text-blue-700">$29 – $99</span> based on the claim type.
      </p>
    </div>

    {/* Plan Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`border-2 rounded-xl p-6 transition-all relative ${
            plan.popular ? 'border-blue-600 bg-blue-50 shadow-lg' : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold text-blue-600">{plan.price}</p>
            <p className="text-gray-500">per month</p>
          </div>

          <ul className="space-y-4 mb-6">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/register"
            className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
              plan.popular
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            Get Started
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Optional Add-ons */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Optional Add-ons</h2>
      <p className="text-xl text-gray-600">Enhance your protection with these optional services.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          id: 'express',
          name: 'Express Replacement',
          description: 'Next-day device replacement',
          price: 4.99
        },
        {
          id: 'international',
          name: 'International Coverage',
          description: 'Worldwide protection',
          price: 2.99
        },
        {
          id: 'accessories',
          name: 'Accessories Coverage',
          description: 'Cases, chargers, and more',
          price: 1.99
        }
      ].map((addOn, index) => (
        <motion.div
          key={addOn.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-2">{addOn.name}</h3>
          <p className="text-gray-600 mb-4">{addOn.description}</p>
          <div className="text-lg font-semibold text-blue-600">+${addOn.price}/month</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Coverage Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What's Covered?</h2>
              <div className="space-y-6">
                {[
                  { title: 'Accidental Damage', description: 'Cracked screens, drops, and other accidents' },
                  { title: 'Theft Protection', description: 'Full device replacement if stolen' },
                  { title: 'Water Damage', description: 'Liquid damage from spills or submersion' },
                  { title: 'Mechanical Breakdown', description: 'Hardware failures and defects' },
                  { title: 'Battery Issues', description: 'Battery replacement when performance drops' },
                  { title: 'Global Coverage', description: 'Protection wherever you travel' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <Shield className="h-16 w-16 text-yellow-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Complete Protection</h3>
                <p className="text-blue-100 mb-6">
                  Our comprehensive coverage ensures you're protected in any situation. 
                  From everyday accidents to unexpected theft, we've got you covered.
                </p>
                <Link
                  to="/services"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  View All Coverage
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it</p>
          </div>
          
          <div className="relative">
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-gray-900 font-medium mb-6">
                  "{testimonials[activeTestimonial].text}"
                </blockquote>
                <div className="text-lg font-semibold text-gray-900">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-gray-600">
                  {testimonials[activeTestimonial].location}
                </div>
              </div>
              
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Tool Teaser */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Protected?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get an instant quote tailored to your device and needs. It takes less than 2 minutes.
          </p>
          <Link
            to="/quote"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center"
          >
            <DollarSign className="mr-2 h-5 w-5" />
            Get My Quote Now
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;