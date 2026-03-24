
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

const PrivacyPage = () => {
  const policies = [
    {
      title: "Data Collection",
      content: "We collect personal information such as name, email, and address only when you provide them through the checkout process or contact form.",
    },
    {
      title: "How We Use Your Data",
      content: "Your information is used solely to process orders, improve our service, and communicate with you about your account.",
    },
    {
      title: "Secure Payment Tracking",
      content: "We prioritize security. Your payment details are encrypted and processed by third-party providers such as Stripe and are not stored in our database.",
    },
    {
      title: "Cookies",
      content: "We use cookies to enhance your browsing experience and analyze site traffic for better performance.",
    },
  ];

  return (
    <Container className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <Title className="text-center text-5xl mb-12 font-extrabold text-shop_dark_green">Privacy Policy</Title>
        <div className="space-y-12">
          {policies.map((policy, index) => (
            <div key={index} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hoverEffect">
              <h3 className="text-2xl font-extrabold text-darkColor mb-4">
                {policy.title}
              </h3>
              <p className="text-lightColor leading-relaxed text-lg">
                {policy.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPage;
