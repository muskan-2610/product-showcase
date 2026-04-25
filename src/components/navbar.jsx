
import { useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-[92vw] md:w-[88vw] lg:w-[80vw] h-14 fixed top-3 left-1/2 -translate-x-1/2 z-[100]">

            <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 h-full rounded-xl bg-black/30 backdrop-blur-lg shadow-md border border-white/10 text-white">

                {/* Left Logo */}
                <div>
                    <span>#</span> NavBar
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-5 lg:gap-7 text-xs">
                    <Link to="/" className="hover:text-purple-400 transition">Home</Link>
                    <Link to="/features" className="hover:text-purple-400 transition">Features</Link>
                    <Link to="/buy" className="hover:text-purple-400 transition">Buy</Link>
                    <Link to="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>
                    <Link to="/controls" className="hover:text-purple-400 transition">Control Panel</Link>
                </div>

                {/* Mobile / Medium Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-lg"
                >
                    <TfiMenuAlt />
                </button>
            </div>

            {/* Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden mt-2 rounded-xl bg-black/80 backdrop-blur-xl border border-white/10 text-white flex flex-col p-4 gap-3 shadow-lg">
                    <a href="/" className="hover:text-purple-400 transition">Home</a>
                    <a href="/features" className="hover:text-purple-400 transition">Features</a>
                    <a href="/buy" className="hover:text-purple-400 transition">Buy</a>
                    <a href="/dashboard" className="hover:text-purple-400 transition">Dashboard</a>
                    <a href="/controls" className="hover:text-purple-400 transition">Control Panel</a>
                </div>
            )}
        </div>
    );
}
