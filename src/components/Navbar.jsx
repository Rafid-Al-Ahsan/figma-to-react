
import { useState } from "react";
import logo from "../assets/logo.svg"
import { navLinks } from "../constants";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";


const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav className="flex justify-between items-center">
            <img src={logo} alt="hoobank" className="w-[118px] h-[32px]" />

            <ul className="text-white flex justify-end">
                {navLinks.map((nav, index) => <li key={nav.id} className={`font-poppins text-[16px] ${index === navLinks.length -1 ? "mr-0" : "mr-10"}`}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                </li>)}
            </ul>

            <div className="sm:hidden">
                <img src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px]"
                    onClick={() => setToggle((prev) => !prev)}
                />
            </div>    

            <div className={`${toggle ? 'flex' : 'hiddden'} p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}></div>



        </nav>


   


















    );
};

export default Navbar;