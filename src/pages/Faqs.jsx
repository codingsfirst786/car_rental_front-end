import React, { useState } from 'react';

const faqsData = [
  {
    question: "What is the minimum age to rent a car?",
    answer: "The minimum age to rent a car is 21 years. Drivers under 25 may incur a young driver surcharge.",
  },
  {
    question: "Do I need a credit card to rent a car?",
    answer: "Yes, a valid credit card is required for security and deposit purposes.",
  },
  {
    question: "Can I return the car to a different location?",
    answer: "Yes, you can return the car to a different location, but additional charges may apply.",
  },
  {
    question: "What should I do in case of an accident?",
    answer: "In case of an accident, contact emergency services immediately, and then inform our support team.",
  },
  {
    question: "Is insurance included in the rental price?",
    answer: "Basic insurance is included. You can also opt for full coverage at an additional cost.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12 px-4 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-10">Find answers to the most commonly asked questions about our car rental service.</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <svg
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
