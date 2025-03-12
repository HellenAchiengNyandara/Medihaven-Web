import Image from "next/image";

const MedicinesDoctors = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 md:px-8">
      {/* Medicines Section */}
      <div className="text-center py-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">Medicines</h2>
        <p className="text-gray-700 mt-4 md:w-3/4 lg:w-1/2 mx-auto">
          Our pharmacy stocks high-quality, approved drugs that cater to various medical needs, ensuring safety and effectiveness for our patients.
          We provide a comprehensive range of medicines to support your treatment and recovery. All our medicines meet strict regulatory standards.
        </p>

        {/* Medicine Images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-6 place-items-center">
          <Image src="/images/medicine.jpg" alt="Medicine 1" width={150} height={150} className="rounded-lg shadow-md" />
          <Image src="/images/medicine.jpg" alt="Medicine 2" width={150} height={150} className="rounded-lg shadow-md" />
          <Image src="/images/medicine.jpg" alt="Medicine 3" width={150} height={150} className="rounded-lg shadow-md" />
          <Image src="/images/medicine.jpg" alt="Medicine 4" width={150} height={150} className="rounded-lg shadow-md" />
        </div>

        <p className="mt-4 italic text-gray-600 font-semibold">
          &quot;Reliable Medicines for Better Care&quot;
        </p>
      </div>

      {/* Our Doctors Section */}
      <div className="bg-blue-50 py-12 px-6 rounded-lg shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 text-center">Our Doctors</h2>
        <p className="text-gray-700 mt-4  text-center text-justify md:w-3/4 mx-auto">
          Our team of dedicated doctors is committed to providing exceptional healthcare with compassion and expertise.Our specialists are leaders in their fields, bringing years of experience and advanced medical training to address your health needs.
        </p>

        {/* Doctors Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Doctor 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/doctor-male.jpg" alt="Doctor 1" width={100} height={100} className="rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-4 text-center text-justify">Chief of Surgery</h3>
            <p className="text-blue-400 text-sm text-center text-justify">Dr. Burton S. Hillary</p>
            <p className="text-gray-700 text-sm mt-2 text-center text-justify">
              Dr. Hillary is an expert in general and trauma surgery, with over 15 years of experience in advanced surgical procedures.
            </p>
          </div>

          {/* Doctor 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/doctor1.jpg" alt="Doctor 2" width={100} height={100} className="rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Director of Diagnostic & Imaging</h3>
            <p className="text-gray-600 text-sm">Dr. Nandi Nika</p>
            <p className="text-gray-700 text-sm mt-2 text-center text-justify">
              Dr. Nika specializes in radiology and diagnostic imaging, helping patients with accurate diagnoses and treatment plans.
            </p>
          </div>

          {/* Doctor 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/doctor1.jpg" alt="Doctor 3" width={100} height={100} className="rounded-full mx-auto" />
            <h3 className="text-lg font-semibold mt-4">Chief of Medicine</h3>
            <p className="text-gray-600 text-sm">Dr. Tomason Mukono</p>
            <p className="text-gray-700 text-sm mt-2 text-center text-justify">
              Dr. Mukono has extensive experience in internal medicine, providing comprehensive care for chronic and acute illnesses.
            </p>
          </div>
        </div>


        {/* Learn More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full text-lg shadow-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default MedicinesDoctors;
