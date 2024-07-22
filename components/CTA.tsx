"use client";

import { FaArrowRight } from "react-icons/fa";
import Button from "./Button";
import Star from "@/public/assests/emojistar 1.png";
import Helix from "@/public/assests/helix2 1.png";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CTA = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center pt-16 pb-24 px-14 bg-gradient-to-t from-[#afbbe4] to-white  overflow-x-clip"
    >
      <div className="max-w-[570px] flex flex-col items-center relative">
        <motion.img
          src={Star.src}
          alt="Star"
          className="absolute -left-[345px] -top-28 pr-6 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
        <motion.img
          src={Helix.src}
          alt="Helix"
          className="absolute -right-80 -top-6 hidden md:block"
          style={{
            translateY: translateY,
          }}
        />
        <div className="text-4xl md:text-5xl lg:text-6xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Sign up for free today
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </div>

        <div className="flex items-center gap-4 mt-4 text-lg">
          <Button text="Get for free" />
          <div className="font-semibold cursor-pointer  hover:underline">
            Learn more
            <FaArrowRight className="h-3 w-3 inline ml-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
