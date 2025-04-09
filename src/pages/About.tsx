import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Seção de Imagem */}
          <div className="w-full md:w-1/2">
            <img
              src="https://via.placeholder.com/400"
              alt="About Us Illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          {/* Seção de Texto */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              We are dedicated to providing top-notch solutions to businesses, helping them to thrive and grow in the digital world. Our mission is to empower companies with the best technology, service, and support.
            </p>

            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-4">
              Our vision is to be the leading provider of innovative software solutions, transforming industries and delivering unparalleled value to our clients through cutting-edge technology.
            </p>

            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Core Values</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Customer Focus</li>
              <li>Excellence</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
