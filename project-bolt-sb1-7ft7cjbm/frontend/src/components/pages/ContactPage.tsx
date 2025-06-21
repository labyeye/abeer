import React from "react";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import Navbar from "../HomePage/Navbar";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#263f49] text-white py-32">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Get in touch with our team for inquiries, collaborations, or to visit our studio
            </p>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Details */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#263f49] mb-8">Our Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Address */}
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="bg-[#263f49] p-3 rounded-full mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <MapPin className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#263f49] mb-2">Head Office</h3>
                        <p className="text-gray-600 font-bold">
                          DRB MALL, Mothijheel, Muzaffarpur, Bihar-842001, INDIA
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="bg-[#263f49] p-3 rounded-full mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Mail className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#263f49] mb-2">Email Address</h3>
                        <p className="text-gray-600 font-bold">
                          reportabeermotionpicture@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="bg-[#263f49] p-3 rounded-full mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Phone className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#263f49] mb-2">Phone Number</h3>
                        <p className="text-gray-600 font-bold">+91 9835654377</p>
                        <p className="text-gray-600 font-bold">+91 9939392175</p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className="flex items-start">
                      <div className="bg-[#263f49] p-3 rounded-full mr-4 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                        <Clock className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#263f49] mb-2">Working Hours</h3>
                        <p className="text-gray-600 font-bold">Monday - Friday: 9AM - 6PM</p>
                        <p className="text-gray-600 font-bold">Saturday: 10AM - 4PM</p>
                        <p className="text-gray-600 font-bold">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="mt-12 bg-white rounded-lg p-8 shadow-lg border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#263f49] mb-6">Send Us a Message</h3>
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
                        placeholder="Enter Your Email"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 mb-2">
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
                        placeholder="Enter Your Phone"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
                        placeholder="Enter your Enquiry"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full bg-gray-50 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
                        placeholder="Tell us about your enquiry in detail"
                      ></textarea>
                    </div>
                    <div className="md:col-span-2">
                      <button
                        type="submit"
                        className="bg-[#263f49] hover:bg-white hover:text-[#263f49] hover:border-[#263f49] text-white px-8 py-3 rounded transition duration-300 border border-transparent"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Map and Visit Info */}
              <div className="space-y-8">
                {/* Map */}
                <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.346707725454!2d85.3862250754124!3d26.120236177128362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11417f39faa9%3A0x4ce5f041cf3f267d!2sAbeer%20Motion%20Picture%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1748956539670!5m2!1sen!2sin"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                    className="w-full h-full"
                  ></iframe>
                </div>

                {/* Visit Info */}
                <div className="bg-[#263f49] text-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-6">Visit Our Studio</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded-full mr-4 flex-shrink-0">
                        <MapPin className="text-[#263f49]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Location</h4>
                        <p className="text-gray-300 text-sm">
                          DRB MALL, Mothijheel, Muzaffarpur, Bihar-842001, INDIA
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded-full mr-4 flex-shrink-0">
                        <Clock className="text-[#263f49]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Studio Hours</h4>
                        <p className="text-gray-300 text-sm">
                          Monday-Friday: 9AM-6PM<br />
                          Saturday: 10AM-4PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-white p-2 rounded-full mr-4 flex-shrink-0">
                        <Calendar className="text-[#263f49]" size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Appointments</h4>
                        <p className="text-gray-300 text-sm">
                          For studio tours or meetings, please call ahead to schedule an appointment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        
      </main>
    </div>
  );
};

export default ContactPage;