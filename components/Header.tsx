import Image from "next/image";
import Logo from "@/public/assests/logo.png";
import { FaBars } from "react-icons/fa";
import Button from "./Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 backdrop-blur-md sticky top-0 z-20 bg-gradient-to-r from-[#E0E7FD] to-[#FDFEFF] shadow-md">
      <Image src={Logo} alt="Logo" className="cursor-pointer"/>
      <FaBars className="block md:hidden" />
      <nav className="hidden md:block">
        <ul className="flex gap-6 items-center">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Customers</a>
          </li>
          <li>
            <a href="#">Updates</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
          <Button text="Get for free" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
