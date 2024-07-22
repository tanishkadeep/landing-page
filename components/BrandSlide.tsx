"use client";

import logo_acme from "@/public/assests/logo-acme.png";
import logo_apex from "@/public/assests/logo-apex.png";
import logo_celestial from "@/public/assests/logo-celestial.png";
import logo_echo from "@/public/assests/logo-echo.png";
import logo_pulse from "@/public/assests/logo-pulse.png";
import logo_quantum from "@/public/assests/logo-quantum.png";
import Image from "next/image";
import { motion } from "framer-motion";

const BrandSlide = () => {
  return (
    <div className="pt-8 bg-white px-4 md:p-12 flex justify-center">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] w-[1200px]">
        <motion.div
          className="flex gap-14 flex-none items-center justify-center pr-14"
          animate={{
            translateX: "-50%",
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <Image src={logo_acme} alt="logo_acme" className="h-8 w-auto" />
          <Image src={logo_apex} alt="logo_apex" className="h-8 w-auto" />
          <Image
            src={logo_celestial}
            alt="logo_celestial"
            className="h-8 w-auto"
          />
          <Image src={logo_echo} alt="logo_echo" className="h-8 w-auto" />
          <Image src={logo_pulse} alt="logo_pulse" className="h-8 w-auto" />
          <Image src={logo_quantum} alt="logo_quantum" className="h-8 w-auto" />

          <Image src={logo_acme} alt="logo_acme" className="h-8 w-auto" />
          <Image src={logo_apex} alt="logo_apex" className="h-8 w-auto" />
          <Image
            src={logo_celestial}
            alt="logo_celestial"
            className="h-8 w-auto"
          />
          <Image src={logo_echo} alt="logo_echo" className="h-8 w-auto" />
          <Image src={logo_pulse} alt="logo_pulse" className="h-8 w-auto" />
          <Image src={logo_quantum} alt="logo_quantum" className="h-8 w-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default BrandSlide;
