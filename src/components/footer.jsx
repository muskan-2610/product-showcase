import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaHeadset } from "react-icons/fa6";
import { HiArrowRight } from "react-icons/hi2";

export default function Footer() {
    const shopLinks = [
        { label: "All Headphones", to: "/" },
        { label: "Wireless", to: "/" },
        { label: "Over-Ear", to: "/" },
        { label: "Earbuds", to: "/" },
        { label: "Accessories", to: "/" },
    ];

    const supportLinks = [
        { label: "Help Center", to: "/" },
        { label: "Shipping Info", to: "/" },
        { label: "Returns", to: "/" },
        { label: "Order Tracking", to: "/" },
        { label: "Size Guide", to: "/" },
    ];

    const companyLinks = [
        { label: "About Us", to: "/" },
        { label: "Our Story", to: "/" },
        { label: "Careers", to: "/" },
        { label: "Blog", to: "/" },
        { label: "Contact", to: "/" },
    ];

    const socialIcons = [
        { icon: <FaFacebookF />, href: "#" },
        { icon: <FaInstagram />, href: "#" },
        { icon: <FaXTwitter />, href: "#" },
        { icon: <FaYoutube />, href: "#" },
    ];

    return (
        <footer className="relative w-full bg-[#050505] overflow-hidden border-t border-purple-500/20">
            <div className="absolute inset-0 pointer-events-none z-0">
                <img
                    src="/img5.png"
                    alt="Background"
                    className="w-full h-full object-cover object-left md:object-left opacity-50 md:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-[#050505]/90 to-[#050505]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-16 pb-6">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between">

                    <div className="lg:w-[35%] flex flex-col items-center lg:items-start justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight text-center lg:text-left drop-shadow-lg">
                            FEEL{" "}
                            <br className="hidden sm:block" />
                            THE <span className="text-purple-400">BEAT.</span>
                        </h2>
                        <p className="text-gray-300 text-sm mt-4 max-w-[280px] text-center lg:text-left leading-relaxed drop-shadow-md">
                            Premium sound. Unmatched comfort.
                            <br />
                            Redefine your music experience.
                        </p>

                        <Link
                            to="/buy"
                            className="group mt-8 inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-purple-500/50 text-white text-sm font-medium tracking-wide
                            hover:bg-purple-500/20 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 backdrop-blur-sm"
                        >
                            SHOP NOW
                            <HiArrowRight className="text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                    </div>

                    <div className="lg:w-[60%] grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6">
                        <div>
                            <h3 className="text-purple-400 text-xs font-semibold tracking-[0.15em] uppercase mb-5 drop-shadow-sm">Shop</h3>
                            <ul className="space-y-3">
                                {shopLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.to} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-purple-400 text-xs font-semibold tracking-[0.15em] uppercase mb-5 drop-shadow-sm">Support</h3>
                            <ul className="space-y-3">
                                {supportLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.to} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-purple-400 text-xs font-semibold tracking-[0.15em] uppercase mb-5 drop-shadow-sm">Company</h3>
                            <ul className="space-y-3">
                                {companyLinks.map((link, i) => (
                                    <li key={i}>
                                        <Link to={link.to} className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-purple-400 text-xs font-semibold tracking-[0.15em] uppercase mb-5 drop-shadow-sm">Follow Us</h3>
                            <div className="flex gap-3 mb-8">
                                {socialIcons.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 text-xs
                                        hover:border-purple-500 hover:text-purple-400 hover:shadow-[0_0_12px_rgba(168,85,247,0.4)] hover:bg-black/40 transition-all duration-300"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>

                            <h3 className="text-purple-400 text-xs font-semibold tracking-[0.15em] uppercase mb-4 drop-shadow-sm">Contact Us</h3>
                            <div className="space-y-3">
                                <a href="mailto:info@indev.com" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-200">
                                    <MdEmail className="text-purple-400/80 text-base" />
                                    <span>info@indev.com</span>
                                </a>
                                <a href="tel:+919876543210" className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors duration-200">
                                    <MdPhone className="text-purple-400/80 text-base" />
                                    <span>+91 98765 43210</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-white font-bold text-sm drop-shadow-sm">
                        <FaHeadset className="text-purple-400" />
                        INDEV
                    </div>
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} INDEV Audio. All rights reserved.
                    </p>
                    <div className="flex gap-5 text-gray-500 text-xs">
                        <Link to="/" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
                        <Link to="/" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}