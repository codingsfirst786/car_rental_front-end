import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Privacy Policy</h1>
        <p className="mb-8 text-center text-gray-600">
          This Privacy Policy describes how we collect, use, and protect your personal information when you use our car rental services.
        </p>

        <div className="space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
            <p>
              We are committed to protecting your privacy. This policy outlines how we handle your personal data to ensure transparency and trust.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
            <p>
              We may collect personal details including your name, email, phone number, driver’s license, and payment information when you register, book a car, or contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside pl-2">
              <li>To process bookings and manage rentals</li>
              <li>To improve customer service</li>
              <li>To send notifications or updates related to your booking</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
            <p>
              We do not sell your personal information. We may share it with trusted partners (e.g., insurance companies or payment processors) solely to fulfill your booking or comply with the law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. You may also withdraw consent for data processing at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at <span className="text-blue-600 underline">support@carrental.com</span>.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">Last updated: April 10, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
