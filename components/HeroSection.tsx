const HeroSection = () => {
  return (
    <header className="flex items-end justify-end font-bold md:text-7xl text-5xl w-full md:h-48 h-32 px-10">
      <h1 className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
        What&apos;s new?
      </h1>
      <svg
        className="max-md:hidden absolute top-0 left-0 overflow-hidden blur-3xl -z-10 opacity-5"
        width="400"
        height="400"
      >
        <circle r="400" fill="#facc15"></circle>
      </svg>
    </header>
  );
};

export default HeroSection;
