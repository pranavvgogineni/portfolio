import React from "react";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 font-mono items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi, I am Pranav!</h1>
          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium font-mono text-white">
            I love to build projects!
          </h2>
          <p className="mb-8 leading-relaxed font-mono">
            I am a sophomore pursuing a degree in Computer Science at Emory University. My academic journey in computer
            science equips me with strong problem-solving skills and an advanced understanding in various programming
            languages, such as Ruby and Java. I am eager to gain real-world experiences that will prepare me to excel in
            a high-level coding environment.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-4/6 mt-4">
            <img className="object-cover object-center rounded w-4/5 h-4/5" alt="hero" src="./coding.svg" />
          </div>
        </div>
      </div>
    </section>
  );
}
