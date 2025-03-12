import Image from "next/image";
import { CgMail } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import { SlSocialInstagram } from "react-icons/sl";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 px-4 md:px-16">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-16">
        
        {/* Left Section - Insurance Logos */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-blue-400">Health Insurance Cards Acceptable</h3>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-2">
            <Image src="/images/nhif-logo.png" alt="NHIF" width={60} height={40} className="w-auto h-8 md:h-10" />
            <Image src="/images/madison-logo.png" alt="Madison" width={60} height={40} className="w-auto h-8 md:h-10" />
            <Image src="/images/sha-logo.png" alt="SHA" width={60} height={40} className="w-auto h-8 md:h-10" />
            <Image src="/images/equity-logo.png" alt="Equity" width={60} height={40} className="w-auto h-8 md:h-10" />
            {/* <Image src="/images/afya.png" alt="Afya" width={60} height={40} className="w-auto h-8 md:h-10" /> */}
          </div>
        </div>

      {/* Right Section - Contact Info */}
<div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
  <h3 className="text-lg md:text-xl font-semibold text-blue-400 self-start md:self-end">
    Reach Out To Us
  </h3>
  <ul className=" flex flex-col gap-y-2 text-gray-600 text-sm md:text-base">
    <li className="flex items-center gap-x-2">
      <SlSocialInstagram className="text-blue-400 text-xl md:text-2xl" />
      <span>@medihavenkenya</span>
    </li>
    <li className="flex items-center gap-x-2">
      <FiPhone className="text-blue-400 text-xl md:text-2xl" />
      <span>+254 764 389172</span>
    </li>
    <li className="flex items-center gap-x-2">
      <CgMail className="text-blue-400 text-xl md:text-2xl" />
      <span>medihavenhospital@gmail.com</span>
    </li>
    <li className="flex items-center gap-x-2">
      <TbWorld className="text-blue-400 text-xl md:text-2xl" />
      <span>www.medihavenhospital.com</span>
    </li>
  </ul>
</div>



      </div>
    </footer>
  );
}
