import { useState } from "react";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import Header from "@/components/custom/Header";

function Home() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-light-beige text-dark-slate">
      <Header /> 
      {/* Navbar */}
      <header className="w-full h-16 bg-opacity-0 bg-transparent sticky top-2"></header>

      {/* Main Section */}
      <section className="relative py-32 px-8 mx-auto max-w-screen-xl text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-teal-500 opacity-30 rounded-lg shadow-lg transform -skew-y-3"></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-gray-800 mb-4 tracking-wide">
            Welcome to Your Dashboard
          </h2>
          <p className="text-xl text-gray-500 mb-8 mx-auto max-w-lg">
            Stay organized, stay inspired. Take control of your projects with a
            seamless experience.
          </p>
          <button className="mt-6 bg-teal-500 text-white py-3 px-10 rounded-full font-semibold shadow-lg hover:bg-teal-400 transform hover:scale-105 transition-transform">
            Explore Features
          </button>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-screen-lg text-center">
          <span className="block font-semibold text-gray-500 uppercase mb-6 text-sm tracking-wider">
            Our Services
          </span>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {/* Feature Cards with Dropdowns */}
            {[
              {
                icon: <AtomIcon className="h-10 w-10 mx-auto text-teal-500" />,
                title: "Data Analytics",
                description:
                  "Gain insights and make data-driven decisions with our tools.",
              },
              {
                icon: <Edit className="h-10 w-10 mx-auto text-pink-500" />,
                title: "Content Creation",
                description:
                  "Create compelling content for LinkedIn and other platforms.",
              },
              {
                icon: <Share2 className="h-10 w-10 mx-auto text-orange-600" />,
                title: "Collaboration",
                description:
                  "Work together with ease and share insights effortlessly.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-72 text-center hover:shadow-xl transition-all transform hover:-translate-y-2"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 text-dark-slate">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
                {/* Dropdown for more information */}
                <div className="mt-4">
                  <button
                    className="text-sm text-teal-500 font-medium hover:underline"
                    onClick={() => toggleDropdown(index)}
                  >
                    {openDropdown === index ? "Hide Details" : "Show More"}
                  </button>
                  {openDropdown === index && (
                    <div className="mt-3 text-gray-700 text-sm border-t pt-3">
                      <p>
                        Our {service.title.toLowerCase()} service offers
                        intuitive tools designed to help new users make the most
                        of their data, content, and collaboration. Perfect for
                        getting started!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Description for New Users */}
          <div className="relative mt-20 bg-gradient-to-r from-teal-100 to-pink-100 py-12 px-8 rounded-lg shadow-md max-w-screen-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 via-white to-teal-100 opacity-10 rounded-lg"></div>
            <div className="relative z-10 flex flex-col items-center space-y-6 text-center">
              <h3 className="text-3xl font-semibold text-teal-600 tracking-wide">
                Why Choose Us?
              </h3>
              <p className="text-lg text-gray-800 max-w-lg">
                Our platform is designed to simplify your workflow by seamlessly
                integrating data analytics, content creation, and collaboration
                tools. Whether you’re an individual creator or part of a team,
                we offer a streamlined experience to boost productivity and keep
                you organized.
              </p>

              {/* Feature Highlights with Icons */}
              <div className="flex gap-8 mt-8">
                {[
                  {
                    title: "Analytics Made Easy",
                    icon: <AtomIcon className="h-8 w-8 text-teal-600" />,
                  },
                  {
                    title: "Create with Ease",
                    icon: <Edit className="h-8 w-8 text-pink-500" />,
                  },
                  {
                    title: "Effortless Collaboration",
                    icon: <Share2 className="h-8 w-8 text-orange-600" />,
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="p-3 rounded-full bg-white shadow-lg">
                      {feature.icon}
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-700">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
