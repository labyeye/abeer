import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#263f49] mb-4">
            Contact
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Interested in working together? Fill out the form below to get in
            touch with our professional team.
          </p>
        </div>
        <div className="mt-16 bg-white rounded-lg p-8 shadow">
          <h3 className="text-2xl font-bold text-[#263f49] mb-6">
            Get in Touch
          </h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-100 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
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
                className="w-full bg-gray-100 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
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
                className="w-full bg-gray-100 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
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
                className="w-full bg-gray-100 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
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
                className="w-full bg-gray-100 text-gray-800 border border-gray-300 rounded p-3 focus:outline-none focus:border-[#263f49]"
                placeholder="Tell us about your enquiry in detail"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="bg-[#263f49] hover:bg-white hover:text-black text-white px-8 py-3 rounded transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8">
              <div className="bg-white p-6 rounded-lg shadow flex items-start hover:shadow-lg transition-all duration-300 group">
                <div className="bg-[#263f49] p-3 rounded-full min-w-[48px] min-h-[48px] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <MapPin className="text-white" size={24} />
                </div>
                <div className="ml-4 transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-[#263f49] text-lg font-semibold mb-2 relative hover-underline">
                    Head Office
                  </h3>
                  <p className="text-gray-600 font-bold relative hover-underline">
                    DRB MALL, Mothijheel, Muzaffarpur, Bihar-842001, INDIA
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow flex items-start hover:shadow-lg transition-all duration-300 group">
                <div className="bg-[#263f49] p-3 rounded-full mr-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Mail className="text-white" size={24} />
                </div>
                <div className="transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-[#263f49] text-lg font-semibold mb-2 relative hover-underline">
                    Email Address
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 font-bold relative hover-underline">
                      reportabeermotionpicture@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow flex items-start hover:shadow-lg transition-all duration-300 group">
                <div className="bg-[#263f49] p-3 rounded-full mr-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Phone className="text-white" size={24} />
                </div>
                <div className="transition-all duration-300 group-hover:translate-x-1">
                  <h3 className="text-[#263f49] text-lg font-semibold mb-2 relative hover-underline">
                    Phone Number
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-600 font-bold relative hover-underline">
                      +91 9835654377
                    </p>
                    <p className="text-gray-600 font-bold relative hover-underline">
                      +91 9939392175
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-3 h-96 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.346707725454!2d85.3862250754124!3d26.120236177128362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11417f39faa9%3A0x4ce5f041cf3f267d!2sAbeer%20Motion%20Picture%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1748956539670!5m2!1sen!2sin"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
      </div>
    </section>
  );
};

export default Contact;
