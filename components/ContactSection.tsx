import React from "react";
import Title from "./Title";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="py-16 mb-10 border-t border-gray-100">
      
      <div className="flex flex-col md:flex-row gap-12 relative z-10">
        <div className="w-full md:w-1/2 space-y-8">
          <div>
            <Title className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-left mb-4">Get in Touch</Title>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Have a question or need assistance? Our support team is here to help you 24/7. Drop us a message or visit us in person.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Our Location</h4>
                <p className="text-gray-600 leading-snug">123 Tech Avenue, Suite 456<br />New York, NY 10001</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Email Us</h4>
                <p className="text-gray-600 leading-snug">support@shopcart.com<br />contact@shopcart.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4">
              <div className="w-12 h-12 bg-gray-100 text-gray-900 rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Call Us</h4>
                <p className="text-gray-600 leading-snug">+1 (800) 123-4567<br />Mon-Fri, 9am - 6pm</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
          <form className="p-8 space-y-5 flex flex-col h-full justify-between">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-gray-50/50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-gray-50/50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea id="message" rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors bg-gray-50/50 resize-none"></textarea>
            </div>
            <button type="button" className="w-full py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-semibold shadow-lg shadow-gray-900/20 transition-all active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
