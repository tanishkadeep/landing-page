import logo_acme from "@/public/assests/logo-acme.png";
import logo_apex from "@/public/assests/logo-apex.png";
import logo_celestial from "@/public/assests/logo-celestial.png";
import logo_echo from "@/public/assests/logo-echo.png";
import logo_pulse from "@/public/assests/logo-pulse.png";
import logo_quantum from "@/public/assests/logo-quantum.png";
import Image from "next/image";

const BrandSlide = () => {
  return (
    <div className="py-8 bg-white px-4 md:p-12">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
        <div className="flex gap-14 flex-none items-center justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default BrandSlide;
