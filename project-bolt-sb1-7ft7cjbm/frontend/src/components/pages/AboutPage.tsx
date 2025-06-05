import React from "react";
import Navbar from "../HomePage/Navbar";
import { Camera, Film, Users, Award, Mic, Video, Monitor } from "lucide-react";


const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#263f49] text-white py-32">
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Abeer Motion Picture</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Crafting visual stories that captivate and inspire since 2022
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#263f49] mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6">
                  Founded on April 14, 2022, in Muzaffarpur, Bihar, Abeer Motion Picture Pvt. Ltd. 
                  emerged from a passion for visual storytelling and a vision to revolutionize the 
                  regional film industry. What began as a small studio has grown into a multifaceted 
                  production house and educational institute.
                </p>
                <p className="text-gray-700 mb-6">
                  Our journey has been marked by relentless innovation, from pioneering new techniques 
                  in Bhojpuri filmmaking to setting benchmarks in wedding cinematography. Each project 
                  has been a stepping stone in our mission to blend traditional storytelling with 
                  cutting-edge technology.
                </p>
                <div className="bg-[#263f49] text-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                  <p>
                    To create compelling visual narratives that resonate with audiences while 
                    nurturing the next generation of filmmakers through our institute.
                  </p>
                </div>
              </div>
              {/* <div className="lg:w-1/2">
                <img 
                  src={teamImage} 
                  alt="Abeer Motion Picture Team" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div> */}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263f49] mb-12 text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Creativity */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#263f49] mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#263f49] mb-3">Creativity</h3>
                <p className="text-gray-600">
                  We believe in pushing boundaries and exploring new artistic horizons in every project.
                </p>
              </div>
              
              {/* Excellence */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#263f49] mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#263f49] mb-3">Excellence</h3>
                <p className="text-gray-600">
                  From concept to delivery, we maintain the highest standards in all our productions.
                </p>
              </div>
              
              {/* Integrity */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#263f49] mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#263f49] mb-3">Integrity</h3>
                <p className="text-gray-600">
                  We build relationships on trust, transparency, and mutual respect with all our clients.
                </p>
              </div>
              
              {/* Innovation */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#263f49] mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#263f49] mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Constantly evolving our techniques to stay at the forefront of the film industry.
                </p>
              </div>
              
              {/* Community */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#263f49] mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#263f49] mb-3">Community</h3>
                <p className="text-gray-600">
                  We're committed to nurturing local talent and contributing to Bihar's creative economy.
                </p>
              </div>
              
              {/* Passion */}
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#263f49] mb-4">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#263f49] mb-3">Passion</h3>
                <p className="text-gray-600">
                  Our love for storytelling drives everything we do, from small projects to grand productions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#263f49] mb-6">Our State-of-the-Art Studio</h2>
                <p className="text-gray-700 mb-6">
                  Located in the heart of Muzaffarpur, our 10,000 sq. ft. facility houses the latest 
                  equipment and technology to bring your vision to life. From high-end cinema cameras 
                  to professional audio recording booths, we've invested in the tools that matter.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#263f49] mb-2">Production Equipment</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>Sony FX3 & FX6 Cinema Cameras</li>
                      <li>Red Komodo & Arri Alexa Systems</li>
                      <li>Professional Lighting Setup</li>
                      <li>DJI Ronin Stabilizers</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-[#263f49] mb-2">Post-Production</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>DaVinci Resolve Color Grading</li>
                      <li>Adobe Premiere Pro & After Effects</li>
                      <li>Professional Sound Mixing</li>
                      <li>3D Animation Workstations</li>
                    </ul>
                  </div>
                </div>
                <button className="bg-[#263f49] text-white px-6 py-3 rounded transition duration-300 hover:bg-white hover:text-[#263f49] border border-transparent hover:border-[#263f49]">
                  Tour Our Facility
                </button>
              </div>
              {/* <div className="lg:w-1/2">
                <img 
                  src={studioImage} 
                  alt="Abeer Motion Picture Studio" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div> */}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#263f49] mb-12 text-center">Meet Our Creative Force</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#263f49] mb-1">Rajesh Kumar</h3>
                  <p className="text-gray-500 text-sm mb-3">Founder & Creative Director</p>
                  <p className="text-gray-600 text-sm">
                    With over 15 years in the industry, Rajesh brings visionary leadership to every project.
                  </p>
                </div>
              </div>
              
              {/* Team Member 2 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#263f49] mb-1">Priya Sharma</h3>
                  <p className="text-gray-500 text-sm mb-3">Head of Cinematography</p>
                  <p className="text-gray-600 text-sm">
                    Specializing in wedding films, Priya has an eye for capturing the most emotional moments.
                  </p>
                </div>
              </div>
              
              {/* Team Member 3 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#263f49] mb-1">Amit Patel</h3>
                  <p className="text-gray-500 text-sm mb-3">Sound Engineer</p>
                  <p className="text-gray-600 text-sm">
                    Our audio wizard who ensures every production has crystal clear sound quality.
                  </p>
                </div>
              </div>
              
              {/* Team Member 4 */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#263f49] mb-1">Neha Gupta</h3>
                  <p className="text-gray-500 text-sm mb-3">Post-Production Head</p>
                  <p className="text-gray-600 text-sm">
                    Leads our editing team to transform raw footage into compelling visual stories.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-[#263f49] text-white px-6 py-3 rounded transition duration-300 hover:bg-white hover:text-[#263f49] border border-transparent hover:border-[#263f49]">
                View Full Team
              </button>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* <div className="lg:w-1/2">
                <img 
                  src={awardImage} 
                  alt="Awards won by Abeer Motion Picture" 
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div> */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-[#263f49] mb-6">Our Achievements</h2>
                <p className="text-gray-700 mb-6">
                  In just a few short years, we've made our mark on the regional film industry with 
                  numerous accolades and successful projects that showcase our commitment to excellence.
                </p>
                
                <div className="space-y-6">
                  {/* Award 1 */}
                  <div className="flex items-start">
                    <div className="bg-[#263f49] p-2 rounded-md mr-4">
                      <Award size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#263f49] mb-1">Best Regional Film 2023</h3>
                      <p className="text-gray-600">
                        Bihar Film Awards for our Bhojpuri feature "Gaon Ke Sapne"
                      </p>
                    </div>
                  </div>
                  
                  {/* Award 2 */}
                  <div className="flex items-start">
                    <div className="bg-[#263f49] p-2 rounded-md mr-4">
                      <Award size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#263f49] mb-1">Excellence in Wedding Cinematography</h3>
                      <p className="text-gray-600">
                        National Wedding Awards 2022 for innovative storytelling
                      </p>
                    </div>
                  </div>
                  
                  {/* Award 3 */}
                  <div className="flex items-start">
                    <div className="bg-[#263f49] p-2 rounded-md mr-4">
                      <Award size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#263f49] mb-1">Emerging Filmmaker of the Year</h3>
                      <p className="text-gray-600">
                        Eastern India Film Festival 2023 for our documentary work
                      </p>
                    </div>
                  </div>
                </div>
                
                <button className="mt-8 bg-[#263f49] text-white px-6 py-3 rounded transition duration-300 hover:bg-white hover:text-[#263f49] border border-transparent hover:border-[#263f49]">
                  View All Awards
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#263f49] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're planning a wedding, producing a film, or need professional media services, 
              we'd love to hear about your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#263f49] px-8 py-3 rounded font-semibold transition duration-300 hover:bg-transparent hover:text-white border border-white">
                Get in Touch
              </button>
              <button className="bg-transparent text-white px-8 py-3 rounded font-semibold transition duration-300 hover:bg-white hover:text-[#263f49] border border-white">
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;