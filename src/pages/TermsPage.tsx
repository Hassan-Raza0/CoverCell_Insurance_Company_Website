import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const TermsPage: React.FC = () => {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
              <p className="text-gray-600">Last updated: January 15, 2024</p>
            </div>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using CoverCell's mobile device insurance services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Coverage and Services</h2>
                <p className="text-gray-700 mb-4">
                  CoverCell provides mobile device insurance coverage as outlined in your selected plan. Coverage includes but is not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Accidental damage protection</li>
                  <li>Theft protection (where applicable)</li>
                  <li>Water damage coverage</li>
                  <li>Mechanical breakdown protection</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility Requirements</h2>
                <p className="text-gray-700 mb-4">
                  To be eligible for coverage, your device must:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Be less than 3 years old at the time of enrollment</li>
                  <li>Be in good working condition</li>
                  <li>Have no existing damage</li>
                  <li>Be purchased from an authorized retailer</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Claims Process</h2>
                <p className="text-gray-700 mb-4">
                  To file a claim, you must:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Report the incident within 30 days</li>
                  <li>Provide all required documentation</li>
                  <li>Pay applicable deductibles</li>
                  <li>Cooperate with our investigation process</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Exclusions</h2>
                <p className="text-gray-700 mb-4">
                  This insurance does not cover:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Pre-existing damage or defects</li>
                  <li>Intentional damage or misuse</li>
                  <li>Loss due to war, terrorism, or nuclear hazard</li>
                  <li>Cosmetic damage that doesn't affect functionality</li>
                  <li>Software issues or data loss</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Monthly premiums are due on the same date each month. Failure to pay premiums may result in policy cancellation. All payments are non-refundable except as required by law.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cancellation</h2>
                <p className="text-gray-700 mb-4">
                  You may cancel your policy at any time by contacting customer service. Cancellation will be effective at the end of your current billing period. We reserve the right to cancel policies for non-payment or fraudulent claims.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  Our liability is limited to the terms outlined in your policy. We are not responsible for consequential damages, lost data, or business interruption.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Privacy and Data Protection</h2>
                <p className="text-gray-700 mb-4">
                  We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
                <p className="text-gray-700 mb-4">
                  Any disputes arising from this agreement will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about these terms, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>CoverCell Insurance</strong><br />
                    Email: legal@covercell.com<br />
                    Phone: 1-800-COVER-ME<br />
                    Address: 123 Insurance Way, Suite 100, New York, NY 10001
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                By using CoverCell services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default TermsPage;