import React from 'react';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const PrivacyPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-sm p-8"
          >
            <div className="text-center mb-12">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 15, 2024</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="h-6 w-6 text-blue-600 mr-2" />
                  Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  At CoverCell, we collect information to provide you with the best mobile device insurance services. 
                  The types of information we collect include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and date of birth</li>
                  <li><strong>Device Information:</strong> Device make, model, IMEI number, purchase date, and condition</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address, and payment history</li>
                  <li><strong>Claims Information:</strong> Incident details, photos, police reports, and repair documentation</li>
                  <li><strong>Usage Data:</strong> Website interactions, app usage, and customer service communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="h-6 w-6 text-blue-600 mr-2" />
                  How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Processing insurance applications and policy management</li>
                  <li>Handling claims and providing customer support</li>
                  <li>Fraud prevention and risk assessment</li>
                  <li>Improving our services and developing new features</li>
                  <li>Sending policy updates, renewal notices, and important communications</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Marketing our services (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="h-6 w-6 text-blue-600 mr-2" />
                  Information Sharing and Disclosure
                </h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Service Providers:</strong> Authorized repair centers, shipping companies, and payment processors</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>Fraud Prevention:</strong> To prevent fraud and protect our customers and business</li>
                  <li><strong>Consent:</strong> When you have given explicit consent for sharing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>SSL encryption for all data transmission</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Employee training on data protection and privacy</li>
                  <li>Access controls and authentication systems</li>
                  <li>Regular data backups and disaster recovery procedures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy Rights</h2>
                <p className="text-gray-700 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
                  <li><strong>Restriction:</strong> Request limitation of processing in certain circumstances</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to enhance your experience on our website:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li><strong>Essential Cookies:</strong> Required for website functionality and security</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
                <p className="text-gray-700">
                  We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li>Policy information: For the duration of your policy plus 7 years</li>
                  <li>Claims data: For 10 years after claim resolution</li>
                  <li>Marketing data: Until you opt-out or request deletion</li>
                  <li>Website analytics: Typically 26 months</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">International Transfers</h2>
                <p className="text-gray-700">
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  We ensure appropriate safeguards are in place to protect your data, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Binding corporate rules</li>
                  <li>Certification schemes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700">
                  Our services are not intended for children under 18 years of age. We do not knowingly collect 
                  personal information from children under 18. If we become aware that we have collected personal 
                  information from a child under 18, we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
                  We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-4">
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications to registered users</li>
                  <li>Displaying prominent notices on our platform</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
                </p>
              </section>

              <section className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Email: privacy@covercell.com</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    <span>Phone: 1-800-COVER-ME</span>
                  </div>
                  <div className="flex items-start text-gray-700">
                    <Shield className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                    <div>
                      <div>CoverCell Insurance</div>
                      <div>Privacy Officer</div>
                      <div>123 Insurance Way</div>
                      <div>New York, NY 10001</div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;