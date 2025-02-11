import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { About } from "./About";

export function Home() {
    return (
        <>
            <section className="min-h-lvh flex flex-col justify-center items-center py-8">
                <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-15 max-w-7xl w-[90%] mx-auto h-[100%]">
                    <div className="basis-[50%]">
                        <h1 className="text-2xl font-semibold sm:text-4xl sm:leading-12">
                            Explore the World, <br />One Country at a Time.</h1>
                        <p className="my-5">
                            Discover the history, culture, and beauty of every nation. Sort,
                            search, and filter through countries to find the details you need.
                        </p>
                        <NavLink to={"/countries"} >
                            <button className="bg-neutral-700 px-2 py-1 sm:px-4 sm:py-1.5 rounded-2xl border flex items-center gap-2">
                                Start Exploring <i className="mt-0.5"><FaArrowRightLong /></i>
                            </button>
                        </NavLink>
                    </div>

                    <div className="basis-[50%]">
                        <img className="w-full"
                            src="/images/world.png" alt="" />
                    </div>
                </div>
            </section>

            <About />
        </>
    );
};