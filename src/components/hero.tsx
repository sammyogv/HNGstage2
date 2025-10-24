

function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-500 to-blue-700 text-white overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl" />

      {/* Content */}
      <div className="max-w-1440 mx-auto px-6 py-24 flex flex-col items-center text-center z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Simplify Your Ticket Management
        </h1>
        <p className="max-w-2xl text-lg md:text-xl mb-8 text-black">
          Manage, track, and resolve tickets with ease. Built for speed, simplicity, and reliability.
        </p>
        <div className="space-x-4">
          <a
            href="/auth/signup"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow hover:bg-gray-100"
          >
            Get Started
          </a>
          <a
            href="/auth/login"
            className="border text-blue-800 border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-700 font-semibold"
          >
            Login
          </a>
        </div>
      </div>

      {/* Wavy SVG Background */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,224L48,192C96,160,192,96,288,90.7C384,85,480,139,576,149.3C672,160,768,128,864,144C960,160,1056,224,1152,224C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Hero;
