import React, { useState } from 'react';
import { Briefcase, MapPin, Clock, Users, Heart, Zap, Target, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const CareersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and wellness programs'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and generous PTO policy'
    },
    {
      icon: Zap,
      title: 'Growth & Development',
      description: 'Professional development budget, mentorship programs, and career advancement'
    },
    {
      icon: Target,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, equity options, and performance bonuses'
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'product', name: 'Product' },
    { id: 'sales', name: 'Sales' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'customer-success', name: 'Customer Success' },
    { id: 'operations', name: 'Operations' }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'new-york', name: 'New York, NY' },
    { id: 'san-francisco', name: 'San Francisco, CA' },
    { id: 'austin', name: 'Austin, TX' },
    { id: 'remote', name: 'Remote' }
  ];

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Join our engineering team to build scalable insurance technology solutions.',
      requirements: ['5+ years experience', 'React/Node.js', 'Cloud platforms'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'product',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Lead product strategy and development for our mobile insurance platform.',
      requirements: ['3+ years PM experience', 'Insurance/Fintech background', 'Data-driven mindset'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Customer Success Manager',
      department: 'customer-success',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help our customers maximize value from their CoverCell insurance coverage.',
      requirements: ['Customer success experience', 'Excellent communication', 'Problem-solving skills'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Marketing Specialist',
      department: 'marketing',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Drive growth through digital marketing campaigns and brand initiatives.',
      requirements: ['Digital marketing experience', 'Analytics tools', 'Creative thinking'],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Sales Development Representative',
      department: 'sales',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Generate new business opportunities and build relationships with prospects.',
      requirements: ['Sales experience preferred', 'Strong communication', 'Goal-oriented'],
      posted: '1 day ago'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Maintain and improve our cloud infrastructure and deployment processes.',
      requirements: ['AWS/Azure experience', 'CI/CD pipelines', 'Infrastructure as code'],
      posted: '4 days ago'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || 
                           job.location.toLowerCase().includes(selectedLocation.replace('-', ' '));
    return matchesSearch && matchesDepartment && matchesLocation;
  });

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
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Help us revolutionize mobile device protection while building a career 
                you'll love. We're looking for passionate people to join our mission.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Why CoverCell?</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At CoverCell, we believe that great products come from great people. 
                  We've built a culture that values innovation, collaboration, and personal growth.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our team is passionate about making a real difference in people's lives 
                  by protecting what matters most to them. Join us and be part of something meaningful.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Collaborative and inclusive environment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Fast-paced, innovative work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Target className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Clear career progression paths</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team working together"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-xl text-gray-600">We take care of our team members</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-sm p-6 text-center"
                >
                  <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">Find your next opportunity</p>
            </div>

            {/* Search and Filters */}
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.id}>{dept.name}</option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>{location.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Job Cards */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-1" />
                              {departments.find(d => d.id === job.department)?.name}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {job.type}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{job.posted}</span>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{job.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.requirements.map((req, reqIndex) => (
                          <span
                            key={reqIndex}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="lg:ml-6">
                      <button className="w-full lg:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No positions found</h3>
                <p className="text-gray-600">
                  Try adjusting your search criteria or check back later for new opportunities.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Don't See the Right Role?</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented people to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Send Your Resume
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default CareersPage;