import Helix from "@/public/assests/cube-helix 1.png";
import Cube from "@/public/assests/cube-helix.png";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="pb-28 flex flex-col items-center">
      <div className="flex flex-col items-center justify-center pt-28 px-12 pb-10 md:w-[600px]">
        <div className="border-2 w-fit p-0.5 px-3 text-sm rounded-xl border-slate-300/80">
          Everything you need
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl py-6 font-bold tracking-tighter text-center bg-gradient-to-b from-black to-[#002499] text-transparent bg-clip-text">
          Streamlined for easy management
        </div>

        <div className="text-center text-lg mb-8 md:text-xl">
          Enjoy customizable lists, team work tools, and smart tracking all in
          one place. Set tasks, get reminders, and see your progress simply and
          quickly.
        </div>
      </div>

      <div className="flex flex-col gap-16 pt-4 lg:flex-row justify-center items-center px-8">
        <div className="shadow-2xl rounded-xl flex justify-center items-center flex-col p-8 max-w-[400px]">
          <Image src={Helix} alt="Helix" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
            Integration ecosystem
          </div>
          <div className="text-center">
            Enhance your productivity by connecting with your favorite tools,
            keeping all your essentials in one place.
          </div>
        </div>

        <div className="shadow-2xl rounded-xl flex justify-center items-center flex-col p-8 max-w-[400px]">
          <Image src={Cube} alt="Cube" className="pb-4" />
          <div className="text-2xl font-bold pb-3 text-center">
            Goal setting and tracking
          </div>
          <div className="text-center">
            Define and track your goals, breaking down objectives into
            achievable tasks to keep your targets in sight.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
