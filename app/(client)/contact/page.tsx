
import Container from "@/components/Container";
import Title from "@/components/Title";
import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <Container className="py-20">
      <div className="max-w-4xl mx-auto">
        <Title className="text-center text-5xl mb-12">Get In Touch</Title>
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="flex flex-col items-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hoverEffect">
            <Mail className="text-shop_dark_green mb-4 w-10 h-10" />
            <h3 className="font-bold text-lg mb-2">Email Us</h3>
            <p className="text-lightColor text-sm">support@shopcart.com</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hoverEffect">
            <Phone className="text-shop_dark_green mb-4 w-10 h-10" />
            <h3 className="font-bold text-lg mb-2">Call Us</h3>
            <p className="text-lightColor text-sm">+1 (234) 567-890</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hoverEffect">
            <MapPin className="text-shop_dark_green mb-4 w-10 h-10" />
            <h3 className="font-bold text-lg mb-2">Visit Us</h3>
            <p className="text-lightColor text-sm text-center">123 Market St, San Francisco, CA 94103</p>
          </div>
        </div>
        
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="text-sm font-semibold text-darkColor">Your Name</label>
              <input type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-shop_dark_green" />
            </div>
            <div className="space-y-4">
              <label className="text-sm font-semibold text-darkColor">Your Email</label>
              <input type="email" placeholder="john@example.com" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-shop_dark_green" />
            </div>
            <div className="md:col-span-2 space-y-4">
              <label className="text-sm font-semibold text-darkColor">Your Message</label>
              <textarea rows={6} placeholder="Tell us how we can help..." className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-shop_dark_green resize-none"></textarea>
            </div>
            <div className="md:col-span-2">
              <button className="w-full md:w-auto px-10 py-5 bg-shop_dark_green text-white font-bold rounded-xl shadow-lg hover:bg-zinc-800 hoverEffect">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
