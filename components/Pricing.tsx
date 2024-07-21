import { FaCheck } from "react-icons/fa";
import Button from "./Button";
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <div className="mb-8">
      <div className="flex flex-col items-center font-medium mt-16 mb-12 px-12 mx-auto max-w-[550px] ">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Boost your productivity
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          A more effective way to track progress
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center pb-20 gap-8">
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8">
          <div className="font-bold text-gray-500">Free</div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$0</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <button className="text-white mb-8 bg-black py-1.5 w-full rounded-lg cursor-pointer">
            Get started for free
          </button>
          <div className="flex flex-col gap-6">
            <div>
              <IoMdCheckmark className="inline mr-2" /> Up to 5 project members
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Unlimited tasks and
              projects
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> 2GB storage
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Integrations
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Basic support
            </div>
          </div>
        </div>

        <div className="shadow-2xl border-2 rounded-2xl p-8 bg-black text-white">
          <div className="flex justify-between items-center">
            <div className="font-bold text-gray-500">Pro</div>
            <div className="border-2 w-fit p-0.5 px-3 text-xs rounded-xl border-slate-300/20 bg-gradient-to-r from-pink-500  via-lime-600 to-sky-400 text-transparent bg-clip-text font-bold tracking-tighter">
              Most Popular
            </div>
          </div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$9</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <button className="text-black font-medium mb-8 bg-white py-1.5 w-full rounded-lg cursor-pointer">
            Sign up now
          </button>
          <div className="flex flex-col gap-6">
            <div>
              <IoMdCheckmark className="inline mr-2" /> Up to 50 project members
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Unlimited tasks and
              projects
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> 50GB storage
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Integrations
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Priority support
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Advanced support
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Expert support
            </div>
          </div>
        </div>
        <div className="shadow-xl border-gray-100 border-2 rounded-2xl p-8">
          <div className="font-bold text-gray-500">Business</div>
          <div className="py-8">
            <span className="font-extrabold text-5xl">$19</span>
            <span className="font-semibold text-gray-600">/month</span>
          </div>
          <button className="text-white mb-8 bg-black py-1.5 w-full rounded-lg cursor-pointer">
            Sign up now
          </button>
          <div className="flex flex-col gap-6">
            <div>
              <IoMdCheckmark className="inline mr-2" /> Up to 50 project members
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Unlimited tasks and
              projects
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> 200GB storage
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Integrations
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Dedicated account
              manager
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Custom fields
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" />
              Advanced analytics
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" />
              Export capabilities
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> API access
            </div>
            <div>
              <IoMdCheckmark className="inline mr-2" /> Advanced security
              features
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
