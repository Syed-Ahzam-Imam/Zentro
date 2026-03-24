import React from "react";
import Title from "./Title";
import { mockFAQs } from "@/constants/mockData";
import { Plus } from "lucide-react";

const FAQSection = () => {
  return (
    <div className="py-16 mb-10 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Title className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">Frequently Asked Questions</Title>
        <p className="mt-4 text-lg text-gray-600">
          Got questions? We&apos;re here to help. If you don&apos;t see your question here, feel free to reach out.
        </p>
      </div>

      <div className="space-y-4">
        {mockFAQs.map((faq, idx) => (
          <details key={idx} className="group border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none py-5 px-6">
              <span className="text-gray-900 font-semibold text-lg">{faq.question}</span>
              <span className="transition group-open:rotate-45 p-1 bg-gray-50 rounded-full">
                <Plus className="w-5 h-5 text-gray-600" />
              </span>
            </summary>
            <div className="text-gray-600 mt-1 pb-5 px-6 leading-relaxed">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
