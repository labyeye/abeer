import React from "react";
import { Camera, Film, Clock, Image, Award, Users } from "lucide-react";
import bgImage from "../assets/images/about-bg.jpg";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Service: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="group bg-transparent p-6 rounded-lg transition-all duration-300 cursor-pointer hover:border-[#263f49]">
      <div className="text-[#263f49] mb-4 transition-colors duration-300">
        {icon}
      </div>

      <h3 className="text-[#263f49] text-xl font-semibold mb-3 relative overflow-hidden">
        <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
          {title}
        </span>
        <span className="block h-[2px] w-0 bg-[#263f49] transition-all duration-300 group-hover:w-full"></span>
      </h3>

      <p className="text-gray-600 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

const AboutServices: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-transparent backdrop-blur-sm p-6 rounded-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-[#263f49] mb-6">
              Abeer Motion Picture
            </h3>
            <p className="text-gray-700 mb-6">
              Abeer Motion Picture Pvt. Ltd. (A filmmaking Studio & Institute),
              established on April 14, 2022, in the vibrant city of Muzaffarpur,
              Bihar, stands as a beacon of creativity and innovation in the
              realm of visual storytelling. Specializing in a diverse array of
              services, we have carved a niche for ourselves in the realms of
              Wedding Filmmaking, Bhojpuri Filmmaking, Bollywood Music, and
              Indian Political Programs. Our commitment to excellence extends
              across various mediums, including Events, Photography,
              Videography, Cinematography, and Audio and Video Advertisement
              Making. At Abeer Motion Picture Pvt Ltd., we blend artistry with
              technology, ensuring that each project is executed with precision
              and finesse. With a team of seasoned professionals driven by a
              passion for their craft, we bring dreams to life on the silver
              screen. Whether it's capturing the magical moments of a wedding,
              producing compelling political programs, or crafting captivating
              advertisements, we strive to exceed expectations and deliver
              unparalleled quality.
            </p>
            <p className="text-gray-700 mb-8">
              Our dedication to storytelling transcends boundaries, reflecting
              the rich cultural tapestry of India while embracing the latest
              trends and techniques in the industry. From intimate gatherings to
              grand spectacles, we approach each project with creativity,
              sensitivity, and professionalism. At Abeer Motion Picture Pvt.
              Ltd., we believe that every frame has the potential to evoke
              emotions, inspire action, and leave a lasting impression. Join us
              on this cinematic journey as we continue to push the boundaries of
              imagination and creativity in the world of visual arts.
            </p>
            <button className="bg-[#263f49] text-white px-6 py-3 rounded transition duration-300 hover:bg-white hover:text-[#263f49] border border-transparent hover:border-[#263f49]">
              Learn More
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Service
              icon={<Camera size={32} />}
              title="Photo & Video Albums"
              description="Curated collections of your most precious moments, beautifully arranged in premium quality albums with artistic layout and design."
            />
            <Service
              icon={<Film size={32} />}
              title="Web Series & TV Serial"
              description="Professional videography and photography services for web series, television, and digital media productions."
            />
            <Service
              icon={<Clock size={32} />}
              title="Documentation Coverage"
              description="Comprehensive documentation of events, products, or processes with meticulous attention to detail and narrative flow."
            />
            <Service
              icon={<Image size={32} />}
              title="Wedding Photography"
              description="Capturing your special day with a perfect blend of candid moments, artistic portraits, and traditional photography."
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="flex items-start group cursor-pointer">
            <div className="bg-[#263f49] p-2 rounded-md mr-4">
              <Award size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-[#263f49] text-lg font-semibold mb-2 relative overflow-hidden">
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                  Award Winning
                </span>
                <span className="block h-[2px] w-0 bg-[#263f49] transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-600">
                Recognized with multiple industry awards for excellence in
                photography
              </p>
            </div>
          </div>

          <div className="flex items-start group cursor-pointer">
            <div className="bg-[#263f49] p-2 rounded-md mr-4">
              <Users size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-[#263f49] text-lg font-semibold mb-2 relative overflow-hidden">
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                  Professional Team
                </span>
                <span className="block h-[2px] w-0 bg-[#263f49] transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-600">
                Experienced photographers and videographers with specialized
                expertise
              </p>
            </div>
          </div>

          <div className="flex items-start group cursor-pointer">
            <div className="bg-[#263f49] p-2 rounded-md mr-4">
              <Clock size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-[#263f49] text-lg font-semibold mb-2 relative overflow-hidden">
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                  24/7 Support
                </span>
                <span className="block h-[2px] w-0 bg-[#263f49] transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-600">
                Always available to answer questions and provide guidance
              </p>
            </div>
          </div>

          <div className="flex items-start group cursor-pointer">
            <div className="bg-[#263f49] p-2 rounded-md mr-4">
              <Camera size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-[#263f49] text-lg font-semibold mb-2 relative overflow-hidden">
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1">
                  Latest Equipment
                </span>
                <span className="block h-[2px] w-0 bg-[#263f49] transition-all duration-300 group-hover:w-full"></span>
              </h3>
              <p className="text-gray-600">
                Using cutting-edge cameras, lenses, and lighting technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
