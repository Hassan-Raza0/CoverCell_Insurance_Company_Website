import React from 'react';
import { TrendingUp, DollarSign, Users, Award, Download, Calendar, BarChart3, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const InvestorsPage: React.FC = () => {
  const financialHighlights = [
    { metric: 'Revenue Growth', value: '+45%', period: 'YoY 2023' },
    { metric: 'Customer Base', value: '500K+', period: 'Active Policies' },
    { metric: 'Market Share', value: '12%', period: 'US Mobile Insurance' },
    { metric: 'Claim Satisfaction', value: '98.5%', period: 'Customer Rating' }
  ];

  const reports = [
    {
      title: 'Annual Report 2023',
      type: 'Annual Report',
      date: 'March 15, 2024',
      size: '2.4 MB',
      description: 'Comprehensive overview of our 2023 performance and strategic initiatives'
    },
    {
      title: 'Q4 2023 Earnings',
      type: 'Quarterly Report',
      date: 'February 1, 2024',
      size: '1.8 MB',
      description: 'Fourth quarter 2023 financial results and business highlights'
    },
    {
      title: 'Q3 2023 Earnings',
      type: 'Quarterly Report',
      date: 'November 1, 2023',
      size: '1.6 MB',
      description: 'Third quarter 2023 financial results and operational metrics'
    },
    {
      title: 'Investor Presentation',
      type: 'Presentation',
      date: 'January 15, 2024',
      size: '3.2 MB',
      description: 'Latest investor presentation with market outlook and strategy'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Q1 2024 Earnings Call',
      date: 'May 15, 2024',
      time: '4:00 PM EST',
      type: 'Earnings Call'
    },
    {
      title: 'Insurance Innovation Summit',
      date: 'June 20, 2024',
      time: '9:00 AM EST',
      type: 'Conference'
    },
    {
      title: 'Annual Shareholder Meeting',
      date: 'July 10, 2024',
      time: '2:00 PM EST',
      type: 'Shareholder Meeting'
    }
  ];

  const keyMetrics = [
    {
      icon: Users,
      title: 'Customer Acquisition',
      value: '15K',
      period: 'Monthly New Customers',
      trend: '+23%'
    },
    {
      icon: DollarSign,
      title: 'Average Revenue Per User',
      value: '$18.50',
      period: 'Monthly ARPU',
      trend: '+8%'
    },
    {
      icon: BarChart3,
      title: 'Customer Lifetime Value',
      value: '$420',
      period: 'Average CLV',
      trend: '+12%'
    },
    {
      icon: PieChart,
      title: 'Gross Margin',
      value: '68%',
      period: 'Q4 2023',
      trend: '+3%'
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
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Investor Relations
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Discover CoverCell's strong financial performance, growth strategy, 
                and commitment to delivering value to our shareholders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Financial Highlights */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Financial Highlights</h2>
              <p className="text-xl text-gray-600">Key performance indicators</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {financialHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">{highlight.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{highlight.metric}</div>
                  <div className="text-gray-600">{highlight.period}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Business Metrics</h2>
              <p className="text-xl text-gray-600">Operational performance indicators</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <metric.icon className="h-8 w-8 text-blue-600" />
                    <span className="text-green-600 font-semibold text-sm">{metric.trend}</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{metric.title}</div>
                  <div className="text-gray-600 text-sm">{metric.period}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Thesis */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment Thesis</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Growing Market</h3>
                    <p className="text-gray-700">
                      The mobile device insurance market is projected to grow at 15% CAGR, 
                      driven by increasing smartphone adoption and device values.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Leadership</h3>
                    <p className="text-gray-700">
                      CoverCell holds a 12% market share in the US mobile insurance market 
                      with strong brand recognition and customer loyalty.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Technology Advantage</h3>
                    <p className="text-gray-700">
                      Our proprietary claims processing platform and AI-driven risk assessment 
                      provide competitive advantages and operational efficiency.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Expansion Opportunities</h3>
                    <p className="text-gray-700">
                      International expansion and new product categories present significant 
                      growth opportunities for revenue diversification.
                    </p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Business growth"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Reports & Documents */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Reports & Documents</h2>
              <p className="text-xl text-gray-600">Access our latest financial reports and presentations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{report.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">{report.type}</p>
                      <p className="text-gray-600 text-sm mb-3">{report.description}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <span>{report.date}</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                    <button className="ml-4 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
              <p className="text-xl text-gray-600">Mark your calendar for these important dates</p>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Calendar className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{event.title}</h3>
                        <p className="text-blue-600 font-medium">{event.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-gray-900">{event.date}</div>
                      <div className="text-gray-600">{event.time}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact IR */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Investor Contact</h2>
            <p className="text-xl text-blue-100 mb-8">
              Have questions about our financial performance or investment opportunities? 
              Our investor relations team is here to help.
            </p>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-8 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">Sarah Mitchell</h3>
                  <p className="text-blue-100 mb-1">VP, Investor Relations</p>
                  <p className="text-blue-100">investors@covercell.com</p>
                  <p className="text-blue-100">1-800-INVESTOR</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Quarterly Calls</h3>
                  <p className="text-blue-100 mb-1">Every quarter at 4:00 PM EST</p>
                  <p className="text-blue-100">Dial-in: 1-888-EARNINGS</p>
                  <p className="text-blue-100">Webcast available on our website</p>
                </div>
              </div>
            </div>
            
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Contact Investor Relations
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default InvestorsPage;