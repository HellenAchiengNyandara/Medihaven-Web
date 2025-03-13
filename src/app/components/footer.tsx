import Image from "next/image";
import { CgMail } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 px-4 md:px-16 w-full max-w-6xl mx-auto ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-16">
        
        {/* Left Section - Insurance Logos */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-blue-500">
            Health Insurance Cards Acceptable
          </h3>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-3">
            {[
              { src: "/images/nhif-logo.png", alt: "NHIF" },
              { src: "/images/madison-logo.png", alt: "Madison" },
              { src: "/images/sha-logo.png", alt: "SHA" },
              { src: "/images/equity-logo.png", alt: "Equity" },
            ].map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                width={60}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            ))}
          </div>
        </div>

        {/* Right Section - Contact Info */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-lg md:text-xl font-semibold text-blue-500">
            Reach Out To Us
          </h3>
          <ul className="flex flex-col gap-y-2 text-gray-700 text-sm md:text-base mt-3">
            {[
              { icon: SlSocialInstagram, text: "@medihavenkenya" },
              { icon: FiPhone, text: "+254 764 389172" },
              { icon: CgMail, text: "medihavenhospital@gmail.com" },
              { icon: TbWorld, text: "www.medihavenhospital.com" },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-x-2">
                <item.icon className="text-blue-500 text-xl md:text-2xl" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}
