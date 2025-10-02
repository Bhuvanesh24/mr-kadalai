import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';

export type IContactPageProps = object;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ContactPage(_props: IContactPageProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-primary-dark flex">
      {/* Left Panel - Hero Section */}
      <div className="w-1/2 h-full relative">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/5077a510-037c-45be-8087-666f3a484684.png')" }}
        >
          <div className="w-full h-full bg-black bg-opacity-80 flex flex-col justify-between items-start">
            <div className="flex flex-col items-start w-full">
              {/* Logo Section */}
              <div className="flex justify-center w-full mt-11">
                <div className="relative w-25 h-25">
                  <img 
                    src="/assets/534c2e1e-871a-4d05-910d-c7b473c03828.png" 
                    className="w-20 h-20 absolute top-2.5 left-2.5"
                    alt="MrKadalai Logo"
                  />
                  <div className="w-25 h-25 overflow-hidden absolute top-0 left-0">
                    <div 
                      className="absolute top-9 left-8 flex justify-start items-start w-9 h-9 bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: "url('/assets/90003755-6a21-4563-b0d9-0178d97f5afc.png')" }}
                    >
                      {/* Logo icon elements */}
                      <div className="mt-8 ml-1 flex justify-center items-center w-1 h-1">
                        <img 
                          src="/assets/c4b0bd36-1e9c-4ab7-9ac0-45d2037c3ad8.png" 
                          className="w-1 h-1"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <div className="flex justify-center w-full mt-60">
                <div className="font-ulm text-4xl md:text-6xl whitespace-nowrap text-white tracking-tight font-bold">
                  <span>Contact Us</span>
                </div>
              </div>
            </div>

            {/* Navigation Bar - Bottom */}
            <div className="flex justify-center w-full mb-8">
              <NavigationBar />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Contact Form */}
      <div className="w-1/2 h-full bg-primary-dark flex flex-col p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto w-full">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-ulm text-4xl text-white font-extrabold mb-8 tracking-tight">
              Contact Us
            </h1>
            <p className="font-ulm text-xl text-white font-medium leading-relaxed tracking-tight">
              We'd love to hear from you! Whether you have questions, feedback, or business inquiries, feel free to reach out
            </p>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* First Row - Name Fields */}
            <div className="flex space-x-7">
              <div className="flex-1">
                <label className="block font-ulm text-xl text-white font-medium mb-4 tracking-tight">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border border-white bg-primary-dark text-white px-4 focus:outline-none focus:border-primary-gold transition-colors duration-300"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block font-ulm text-xl text-white font-medium mb-4 tracking-tight">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border border-white bg-primary-dark text-white px-4 focus:outline-none focus:border-primary-gold transition-colors duration-300"
                  required
                />
              </div>
            </div>

            {/* Second Row - Email and Phone */}
            <div className="flex space-x-7">
              <div className="flex-1">
                <label className="block font-ulm text-xl text-white font-medium mb-4 tracking-tight">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border border-white bg-primary-dark text-white px-4 focus:outline-none focus:border-primary-gold transition-colors duration-300"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block font-ulm text-xl text-white font-medium mb-4 tracking-tight">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full h-12 rounded-lg border border-white bg-primary-dark text-white px-4 focus:outline-none focus:border-primary-gold transition-colors duration-300"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block font-ulm text-xl text-white font-medium mb-4 tracking-tight">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full rounded-lg border border-white bg-primary-dark text-white px-4 py-3 focus:outline-none focus:border-primary-gold transition-colors duration-300 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-20 rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-primary-gold hover:to-yellow-400 transition-all duration-300 flex items-center justify-center group"
            >
              <span className="font-ulm text-4xl text-white font-bold tracking-tight group-hover:scale-105 transition-transform duration-300">
                Submit
              </span>
            </button>
          </form>

          {/* Footer Text */}
          <div className="mt-16 text-center">
            <p className="font-satisfy text-3xl text-primary-gold tracking-tight">
              General & Franchise Enquiries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
