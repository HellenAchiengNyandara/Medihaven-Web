import Image from "next/image";

const MedicinesDoctors = () => {
  return (
    
    <section className="w-full max-w-[1440px] mx-auto  md:px-8 ">
      {/* Medicines Section */}
      <div className="text-center py-10">
        <h2 className="text-3xl font-semibold text-blue-600">Medicines</h2>
        <p className="text-gray-700 mt-4 md:w-3/4 lg:w-1/2 mx-auto">
          Our pharmacy stocks high-quality, approved drugs that cater to various medical needs, ensuring safety and effectiveness for our patients.
          All our medicines meet strict regulatory standards and provide comprehensive support for treatment and recovery.
        </p>

        {/* Medicine Images */}
        <div className="grid grid-cols-2 md:grid-cols-4  mt-6">
          {[...Array(4)].map((_, index) => (
            <Image key={index} src="/images/medicine.jpg" alt={`Medicine ${index + 1}`} width={200} height={150} className="rounded-lg shadow-md" />
          ))}
        </div>

        <p className="mt-6 italic text-gray-600 font-medium">&quot;Reliable Medicines for Better Care&quot;</p>
      </div>

      {/* Our Doctors Section */}
      <div className="bg-blue-50 py-8 px-6 mt-10 ">
        <h2 className="text-3xl font-semibold text-blue-600 text-center">Our Doctors</h2>
        <p className="text-gray-700 mt-4 text-center md:w-3/4 mx-auto">
          Our team of dedicated doctors is committed to providing exceptional healthcare with compassion and expertise. With years of experience in their fields, they ensure the best possible medical care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            { name: "Dr. Burton S. Hillary", title: "Chief of Surgery", desc: "Expert in general and trauma surgery, with over 15 years of experience in advanced surgical procedures." },
            { name: "Dr. Nandi Nika", title: "Director of Diagnostic & Imaging", desc: "Specializes in radiology and diagnostic imaging, helping patients with accurate diagnoses and treatment plans." },
            { name: "Dr. Tomason Mukono", title: "Chief of Medicine", desc: "Extensive experience in internal medicine, providing comprehensive care for chronic and acute illnesses." },
          ].map((doctor, index) => (
            <div key={index} className="p-6 text-center rounded-md">
              <Image src="/images/doctor-male.jpg" alt={doctor.name} width={250} height={200} className="mx-auto rounded-md" />
              <h3 className="text-xl font-semibold mt-4">{doctor.title}</h3>
              <p className="text-blue-600 text-md font-medium mt-1">{doctor.name}</p>
              <p className="text-gray-700 text-sm mt-2">{doctor.desc}</p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-8">
          <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full text-lg shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MedicinesDoctors;
