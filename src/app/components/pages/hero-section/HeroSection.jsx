// app/components/HeroSection.js

export default function HeroSection() {
  return (
    <section>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Hi, I'm Alif Danish, a passionate software developer creating seamless
          user experiences.
        </p>
        <div className="mt-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
}
