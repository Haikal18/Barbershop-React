import React from 'react';

const BannerSection = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Image Background */}
      <img
        src="/barbershop-banner.jpg"
        alt="Barbershop"
        className="absolute inset-0 object-cover w-full h-full"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 lg:bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-screen-xl px-6 py-32 sm:px-8 lg:flex lg:h-screen lg:items-center lg:px-10">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white">
            Welcome to{" "}
            <strong className="block font-extrabold text-yellow-500">
              The Gentleman’s Cut
            </strong>
          </h1>

          <p className="mt-4 text-base sm:text-lg lg:text-xl xl:text-2xl text-white max-w-md mx-auto lg:mx-0">
            Experience the finest grooming services in an elegant and relaxing atmosphere. Your style, our expertise.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#services"
              className="w-full sm:w-auto rounded bg-yellow-500 px-8 py-3 text-sm lg:text-base font-medium text-white shadow hover:bg-yellow-600 focus:outline-none focus:ring active:bg-yellow-700"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
