
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";

const TermsPage = () => {
  const sections = [
    {
      title: "Introduction",
      content: "By accessing and using this website, you agree to comply with and be bound by these Terms and Conditions.",
    },
    {
      title: "Intellectual Property",
      content: "All content on this website, including text, graphics, logos, and software, is the property of Shopcart and protected by copyright law.",
    },
    {
      title: "Use of Website",
      content: "You may not use this website for any unlawful purpose. Harassment or interference with the site's operation is strictly prohibited.",
    },
    {
      title: "Limitation of Liability",
      content: "Shopcart shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of this website.",
    },
  ];

  return (
    <Container className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto">
        <Title className="text-center text-5xl mb-12">Terms & Conditions</Title>
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div key={index} className="p-10 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hoverEffect">
              <h3 className="text-2xl font-extrabold text-darkColor mb-4">
                {section.title}
              </h3>
              <p className="text-lightColor leading-relaxed text-lg">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TermsPage;
