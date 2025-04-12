import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Terms and Conditions</h1>
        <p className="mb-8 text-center text-gray-600">
          Please read these Terms and Conditions carefully before using our car rental services.
        </p>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By booking or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Rental Requirements</h2>
            <p>
              Renters must be at least 21 years old with a valid driver’s license. Additional requirements or fees may apply for drivers under 25.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Payment and Deposits</h2>
            <p>
              A valid credit card is required at the time of booking. A refundable security deposit may be held during the rental period.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Use of Vehicle</h2>
            <p>
              The vehicle must be used responsibly and returned in its original condition. Smoking and unauthorized driving are prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Cancellations and Refunds</h2>
            <p>
              Cancellations must be made at least 24 hours before the rental time to receive a full refund. Late cancellations may incur charges.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Liability and Insurance</h2>
            <p>
              We provide basic insurance coverage. Renters are liable for damages not covered under our policy unless full coverage is purchased.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be posted on our website and are effective immediately upon posting.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Contact Information</h2>
            <p>
              For any questions or concerns about these Terms, please contact us at <span className="text-blue-600 underline">support@carrental.com</span>.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">Last updated: April 10, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
