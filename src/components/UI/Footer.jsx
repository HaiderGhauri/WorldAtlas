import { NavLink } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaXTwitter } from "react-icons/fa6";

export function Footer() {
    return (
        <section className="bg-neutral-600 py-6">
            <div className="flex flex-col justify-center items-center gap-8 max-w-7xl w-[90%] mx-auto">
                <div>
                    <ul className="flex justify-center gap-6">
                        <li className="hover:underline hover:text-blue-400"><NavLink to={"/"}>Home</NavLink></li>
                        <li className="hover:underline hover:text-blue-400"><NavLink to={"/countries"}>Countries</NavLink></li>
                        <li className="hover:underline hover:text-blue-400"><NavLink to={"/about"}>About</NavLink></li>
                        <li className="hover:underline hover:text-blue-400"><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                </div>

                <div>
                    <ul className="flex justify-center gap-6 md:gap-8">
                        <li className="text-blue-800"><NavLink><FaFacebook /></NavLink></li>
                        <li className="text-red-600"><NavLink><FaInstagram /></NavLink></li>
                        <li><NavLink><FaXTwitter /></NavLink></li>
                        <li><NavLink><FaGithub /></NavLink></li>
                    </ul>
                </div>

                <div>
                    <p className="">© 2024 PokeSaga. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};