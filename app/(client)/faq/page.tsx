
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping usually takes 3-5 business days within the United States. International shipping may take 7-14 business days.",
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Items must be in their original packaging and in new condition to be eligible for a full refund.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. Shipping fees and delivery times vary by location.",
    },
    {
      question: "How can I track my order?",
      answer: "Once your order has shipped, you will receive an email with a tracking number and a link to trace your package.",
    },
    {
      question: "Can I change or cancel my order?",
      answer: "Orders can be changed or cancelled within 2 hours of placement. Please contact our support team immediately for help.",
    },
  ];

  return (
    <Container className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <Title className="text-center text-5xl mb-12">Frequently Asked Questions</Title>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hoverEffect">
              <h3 className="text-xl font-extrabold text-darkColor mb-4">
                {faq.question}
              </h3>
              <p className="text-lightColor leading-relaxed text-lg">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQPage;
