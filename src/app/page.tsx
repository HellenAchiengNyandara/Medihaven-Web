import Footer from "./components/footer";
import Header from "./components/Header";
import HeroSection from "./components/heroSection";
import MedicinesDoctors from "./components/medicineDoctors";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Header */}
      <Header /> 

      {/* Main Content Area - Ensures all sections have proper spacing */}
      <main className="flex-grow">
        <HeroSection />
        <MedicinesDoctors />
      </main>

      {/* Footer - Ensures it stays at the bottom */}
      <Footer /> 
    </div>
  );
}
