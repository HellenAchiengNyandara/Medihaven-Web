import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-blue-100 min-h-[400px] flex items-center justify-center text-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/medical-bg.jpg" 
          alt="Medical background" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
          Discover Expertise, Experience Care, <br /> Embrace Wellness
        </h1>
        <p className="text-gray-800 mt-3">
          We are dedicated to providing exceptional care, advanced treatments, 
          and a compassionate approach to your well-being. With state-of-the-art 
          facilities and a team of world-class medical professionals, we deliver 
          personalized healthcare solutions for you and your family.
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>

      {/* Doctors Image */}
      <div className="absolute bottom-0 right-0 left-0 flex justify-center">
        <Image 
          src="/images/doctors-group.png" 
          alt="Doctors team" 
          width={500} 
          height={200} 
          className="drop-shadow-lg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
