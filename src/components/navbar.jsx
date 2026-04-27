import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { FaHeadset } from "react-icons/fa6";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="w-[92vw] md:w-[88vw] lg:w-[80vw] h-14 fixed top-3 left-1/2 -translate-x-1/2 z-[100]  rounded-2xl border border-purple-500/20 shadow-[0_0_10px_rgba(118,85,247,0.4)] 
        hover:bg-purple-500/10 hover:border-purple-400 ">
            <div className="flex justify-between text-center items-center px-4 sm:px-6 lg:px-10 h-full rounded-2xl bg-black/30 backdrop-blur-lg shadow-md border border-white/10 text-white">

                <div flex className="flex gap-2 items-center justify-center font-bold text-lg">
                    <span className="text-purple-400"><FaHeadset /></span> INDEV
                </div>

                <div className="hidden md:flex gap-5 lg:gap-7 text-xs flex items-center">
                    <Link to="/" className="hover:text-purple-400 transition">Home</Link>
                    <Link to="/features" className="hover:text-purple-400 transition">Features</Link>
                    <Link to="/buy" className=" text-purple-400 bg-white py-1 px-3  rounded-xl border border-white transition">Buy</Link>
                    <Link to="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>
                    <Link to="/controls" className="hover:text-purple-400 transition">Control Panel</Link>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-lg"
                >
                    <TfiMenuAlt />
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden mt-2 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 text-white flex flex-col p-4 gap-3 shadow-lg">
                    <Link to="/" className="hover:text-purple-400 transition">Home</Link>
                    <Link to="/features" className="hover:text-purple-400 transition">Features</Link>
                    <Link to="/buy" className="hover:text-purple-400 transition">Buy</Link>
                    <Link to="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>
                    <Link to="/controls" className="hover:text-purple-400 transition">Control Panel</Link>
                </div>
            )}
        </div>
    );
}
