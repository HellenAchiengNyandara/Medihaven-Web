
import HeroSection from "./components/heroSection";
import MedicinesDoctors from "./components/medicineDoctors";

export default function Home() {
  return (
    <div className="flex flex-col ">
    
      <main className="flex-grow">
        <HeroSection />
        <MedicinesDoctors />
      </main>

  
    </div>
  );
}
