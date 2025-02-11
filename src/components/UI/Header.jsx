import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const navLinkClass = ({ isActive }) =>
        isActive ? "text-blue-400" : "hover:text-blue-400 hover:underline"


    const handleNavbar = () => {
        return setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="h-24 bg-neutral-600">
            <div className="grid grid-cols-3 content-center h-full max-w-7xl w-[90%] mx-auto items-center">
                <div>
                    <NavLink to={"/"} onClick={handleLinkClick}>
                        <p className="text-2xl font-semibold">
                            <span>World</span>
                            <span>Atlas</span>
                        </p>
                    </NavLink>
                </div>

                <nav className="col-span-2">
                    <ul className={`flex justify-end gap-6 text-md md:text-lg transform transition-transform duration-700 ${isOpen ? "translate-x-[-35%] absolute top-22 bg-neutral-600 w-full flex-col items-center pb-4"
                        : "hidden sm:flex sm:flex-row"}`}>
                        <li><NavLink
                            to={"/"}
                            onClick={handleLinkClick}
                            className={navLinkClass}>
                            Home</NavLink></li>
                        <li><NavLink
                            to={"/countries"}
                            onClick={handleLinkClick}
                            className={navLinkClass}>
                            Countries</NavLink></li>
                        <li><NavLink
                            to={"/about"}
                            onClick={handleLinkClick}
                            className={navLinkClass}>
                            About</NavLink></li>
                        <li><NavLink
                            to={"/contact"}
                            onClick={handleLinkClick}
                            className={navLinkClass}>
                            Contact</NavLink></li>
                    </ul>

                    <div className="sm:hidden text-end">
                        <button onClick={handleNavbar}>{isOpen ? <FaTimes /> : <FaBars />}</button>
                    </div>
                </nav>

            </div>
        </header>
    );
};