"use client";

import Image from "next/image";
import Avatar1 from "@/public/assests/avatar-1.png";
import Avatar2 from "@/public/assests/avatar-2.png";
import Avatar3 from "@/public/assests/avatar-3.png";
import Avatar4 from "@/public/assests/avatar-4.png";
import Avatar5 from "@/public/assests/avatar-5.png";
import Avatar6 from "@/public/assests/avatar-6.png";
import Avatar7 from "@/public/assests/avatar-7.png";
import Avatar8 from "@/public/assests/avatar-8.png";
import Avatar9 from "@/public/assests/avatar-9.png";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <div className="pt-12">
      <div className="flex flex-col items-center px-28 pb-16">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl font-semibold border-slate-300/80">
          Testimonials
        </div>
        <div className="text-4xl lg:text-5xl pt-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          What our users say
        </div>
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(to_top,transparent,black,transparent)] h-[750px] mb-12 md:mb-28 lg:mb-36">
        <motion.div
          animate={{
            translateY: "-50%",
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
        >
          <div className="flex items-center justify-center overflow-x-hidden pb-4 gap-4 ">
            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  As a seasoned designer always on the lookout for innovative
                  tools, Framer.com instantly grabbed my attention.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar1} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Alex Rivera</div>
                    <div>@jamietechguru00</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  Our productivity has skyrocketed since we started using this
                  tool.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar6} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Josh Smith</div>
                    <div>@jjsmith</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  This app has completely transformed how I manage my projects
                  and deadlines.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar3} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Morgan Lee</div>
                    <div>@morganleewhiz</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  I was amazed at how quickly we were able to integrate this app
                  into our workflow.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar7} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Jordan</div>
                    <div>@caseyj</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  Planning and executing events has never been easier. This app
                  helps me keep track of all the moving parts, ensuring nothing
                  slips through the cracks.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar2} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Taylor Kim</div>
                    <div>@taylorkimm</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  The customizability and integration capabilities of this app
                  are top-notch.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar5} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Riley Smith</div>
                    <div>@rileysmith1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Adopting this app for our team has streamlined our project
                  management and improved communication across the board.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar4} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Jordan Patels</div>
                    <div>@jpatelsdesign</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  With this app, we can easily assign tasks, track progress, and
                  manage documents all in one place.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar8} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Sam Dawson</div>
                    <div>@dawsontechtips</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Its user-friendly interface and robust features support our
                  diverse needs.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar9} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Harper</div>
                    <div>@casey09</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center overflow-x-hidden gap-4 ">
            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  As a seasoned designer always on the lookout for innovative
                  tools, Framer.com instantly grabbed my attention.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar1} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Alex Rivera</div>
                    <div>@jamietechguru00</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  Our productivity has skyrocketed since we started using this
                  tool.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar6} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Josh Smith</div>
                    <div>@jjsmith</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  This app has completely transformed how I manage my projects
                  and deadlines.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar3} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Morgan Lee</div>
                    <div>@morganleewhiz</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  I was amazed at how quickly we were able to integrate this app
                  into our workflow.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar7} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Jordan</div>
                    <div>@caseyj</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8 my-6">
                <div className="font-medium pb-4">
                  Planning and executing events has never been easier. This app
                  helps me keep track of all the moving parts, ensuring nothing
                  slips through the cracks.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar2} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Taylor Kim</div>
                    <div>@taylorkimm</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  The customizability and integration capabilities of this app
                  are top-notch.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar5} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Riley Smith</div>
                    <div>@rileysmith1</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Adopting this app for our team has streamlined our project
                  management and improved communication across the board.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar4} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Jordan Patels</div>
                    <div>@jpatelsdesign</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  With this app, we can easily assign tasks, track progress, and
                  manage documents all in one place.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar8} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Sam Dawson</div>
                    <div>@dawsontechtips</div>
                  </div>
                </div>
              </div>

              <div className="shadow-xl w-[310px] rounded-2xl p-8">
                <div className="font-medium pb-4">
                  Its user-friendly interface and robust features support our
                  diverse needs.
                </div>
                <div className="flex items-center gap-3">
                  <Image src={Avatar9} alt="Avatar" className="h-12 w-12" />
                  <div>
                    <div className="font-semibold">Casey Harper</div>
                    <div>@casey09</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
