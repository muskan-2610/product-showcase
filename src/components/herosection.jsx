import { useState, useEffect, useRef } from "react";
import { MdOutlineDeviceHub } from "react-icons/md";
import { PiDeviceMobileSpeakerFill } from "react-icons/pi";
import { AiFillFire } from "react-icons/ai";
import { FaInstalod } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { MdNearMe } from "react-icons/md";
import { RiPinDistanceFill } from "react-icons/ri";
import { BsFillStopwatchFill } from "react-icons/bs";

const SLIDER_IMAGES = [
    {
        id: 1,
        src: "/img3.png",
        alt: "Headphone showcase 1",
    },
    {
        id: 2,
        src: "/img4.png",
        alt: "Headphone showcase 2",
    },
    {
        id: 3,
        src: "/img1.jpeg",
        alt: "Headphone showcase 3",
    },
    {
        id: 4,
        src: "/img5.png",
        alt: "Headphone showcase 4",
    },
    {
        id: 5,
        src: "/img2.jpg",
        alt: "Headphone showcase 5",
    },
    {
        id: 6,
        src: "/img6.png",
        alt: "Headphone showcase 6",
    },
];

const FEATURES = [
    { icon: <FaInstalod />, label: "AI Adaptive", sub: "ANC Engine" },
    { icon: <PiDeviceMobileSpeakerFill />, label: "40 Hrs", sub: "Battery Life" },
    { icon: <AiFillFire />, label: "40mm", sub: "Drivers" },
    { icon: <MdOutlineDeviceHub />, label: "3 Device", sub: "Pairing" },
];

const BADGES = [
    { icon: <MdNearMe />, label: "7 Days", sub: "No Questions Return" },
    { icon: <BsFillStopwatchFill />, label: "Easy", sub: "No Replacement" },
    { icon: <RiPinDistanceFill />, label: "Made in India", sub: "For Indian Environment" },
    { icon: < BsFillStopwatchFill />, label: "Long Term", sub: "Software Support" },
];

const NAV_LINKS = ["HOME", "FEATURES", "BUY ", "DASHBOARD"];
const SLIDE_INTERVAL = 3500;
const SLIDE_TRANSITION_MS = 700;

export default function Hero() {
    const [current, setCurrent] = useState(0);
    const [prevIdx, setPrevIdx] = useState(null);
    const timerRef = useRef(null);

    const goTo = (idx) => {
        if (idx === current) return;
        setPrevIdx(current);
        setCurrent(idx);
        setTimeout(() => setPrevIdx(null), SLIDE_TRANSITION_MS);
    };

    const goNext = () => goTo((current + 1) % SLIDER_IMAGES.length);
    const goPrev = () => goTo((current - 1 + SLIDER_IMAGES.length) % SLIDER_IMAGES.length);

    const resetTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(goNext, SLIDE_INTERVAL);
    };

    useEffect(() => {
        timerRef.current = setInterval(goNext, SLIDE_INTERVAL);
        return () => clearInterval(timerRef.current);
    }, [current]);

    return (
        <div
            className="relative min-h-screen w-full overflow-hidden text-white  pt-20 "
            style={{
                fontFamily: "'Rajdhani', sans-serif",
                background: "#020812",
            }}
        >
            {/* hero background slider  */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {SLIDER_IMAGES.map((img, idx) => {
                    const isActive = idx === current;
                    const isExit = idx === prevIdx;
                    return (
                        <div
                            key={`bg-${img.id}`}
                            className="absolute inset-0"
                            style={{
                                opacity: isActive ? 0.6 : 0,
                                transform: isActive
                                    ? "scale(1) translateX(0px)"
                                    : isExit
                                        ? "scale(1.08) translateX(-36px)"
                                        : "scale(1.12) translateX(36px)",
                                transition: `opacity ${SLIDE_TRANSITION_MS}ms ease, transform ${SLIDE_TRANSITION_MS}ms ease`,
                                willChange: "opacity, transform",
                            }}
                        >
                            <img
                                src={img.src}
                                alt=""
                                aria-hidden="true"
                                className="h-full w-full object-cover object-center"
                                loading={idx === 0 ? "eager" : "lazy"}
                            />
                        </div>
                    );
                })}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(120deg, rgba(2,8,18,0.88) 0%, rgba(2,8,18,0.72) 45%, rgba(2,8,18,0.9) 100%)",
                    }}
                />
            </div>

            {/* ── Background atmospheric glow ── */}
            {/* <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 75% 60% at 65% 90%, rgba(163, 85, 162, 0.58) 0%, transparent 65%), radial-gradient(ellipse 45% 45% at 15% 45%, rgba(4,12,55,0.6) 0%, transparent 65%), radial-gradient(ellipse 60% 70% at 70% 50%, rgba(0,180,200,0.05) 0%, transparent 70%)",
                }}
            /> */}

            {/* {/* ── SCROLL TO EXPLORE — left vertical ──  */}
            <div className="absolute left-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col items-center gap-3">
                <span
                    className="text-[9px] tracking-[0.3em] uppercase select-none"
                    style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                        color: "rgba(150,180,255,0.4)",
                    }}
                >
                    SCROLL TO EXPLORE
                </span>
            </div>

            {/* ── RIGHT NAV — vertical ── */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-8">
                {NAV_LINKS.map((link, i) => (
                    <Link
                        key={link}
                        to={`${link.toLowerCase()}`}
                        className="text-[9px] tracking-[0.3em] uppercase transition-colors duration-200 hover:text-white"
                        style={{
                            writingMode: "vertical-rl",
                            color: i === 0 ? "#ffffff" : "rgba(140,170,255,0.4)",
                        }}
                    >
                        {link}
                    </Link>
                ))}
            </div>


            {/* ── MAIN CONTENT ── */}
            <main className="relative z-20 flex flex-col lg:flex-row items-center  px-10 md:px-14 lg:px-20 xl:px-28 pb-10 gap-8 lg:gap-6">

                {/* ── LEFT PANEL ── */}
                <div className="flex-none w-full lg:w-[46%] xl:w-[43%] flex flex-col justify-center pt-2 lg:pt-0">

                    {/* Hero Heading */}
                    <h1
                        className="leading-[0.88] tracking-[0.01em]  mb-4"
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: "5rem",
                            textShadow: "0 0 100px rgba(0,100,255,0.2)",

                        }}
                    >
                        Hear Only
                        <br />
                        What Matters.
                    </h1>

                    <p
                        className="text-gray-300 leading-relaxed max-w-[420px] mb-5"
                        style={{ fontSize: "clamp(13px, 1.4vw, 15px)" }} >
                        AI-powered Adaptive Noise Cancellation that senses your environment
                        and delivers studio-quality sound, so you can focus on what truly matters.
                    </p>

                    {/* ── Feature Icons ── */}
                    <div className="flex flex-wrap gap-10 mb-5">
                        {FEATURES.map((f) => (
                            <div key={f.label} className="flex flex-col items-center  gap-1">
                                <div
                                    className="w-[52px] h-[42px] rounded-xl flex items-center justify-center font-roboto font-extrabold text-m4 text-purple-200"
                                    style={{
                                        background: "rgba(158, 36, 186, 0.3)",
                                        border: "1.5px solid rgba(206, 30, 255, 0.6)",
                                    }}
                                >
                                    {f.icon}
                                </div>
                                <span className="text-xs mt-1 font-bold text-white text-center leading-tight">
                                    {f.label}
                                </span>
                                <span className="text-[9px] text-slate-500 text-center leading-tight">
                                    {f.sub}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* ──  Buttons ── */}
                    <div className="flex flex-wrap gap-3 mb-5 mt-">
                        <Link
                            to="/buy"
                            className="px-7 py-2.5 rounded-full text-sm font-bold tracking-[0.06em] text-white border-none cursor-pointer transition-transform duration-200 hover:scale-105"
                            style={{
                                background: "linear-gradient(135deg, #e27bff 0%, #a22be2 100%)",
                                boxShadow: "0 0 24px rgba(255, 30, 251, 0.6), 0 2px 10px rgba(0,0,0,0.4)",
                            }}
                        >
                            Buy Now – ₹4,999
                        </Link>
                        <Link
                            to="/features"
                            className="px-6 py-2.5 rounded-full text-sm font-semibold tracking-[0.04em] cursor-pointer transition-all duration-200 hover:bg-blue-900/25"
                            style={{
                                background: "transparent",
                                border: "1.5px solid rgba(206, 30, 255, 0.6)",
                                color: "#e27bff",
                            }}
                        >
                            Explore Features
                        </Link>
                    </div>

                    {/* ── Badges ── */}
                    <div className="flex flex-wrap gap-x-4 gap-y-3 mt-1">
                        {BADGES.map((b) => (
                            <div key={b.label} className="flex items-center gap-1.5">
                                <div
                                    className="w-[32px] h-[32px] rounded-full flex items-center justify-center font-extrabold text-xs text-purple-200 flex-shrink-0"
                                    style={{
                                        border: "1px solid rgba(213, 60, 255, 0.4)",
                                        background: "rgba(158, 36, 186, 0.3)",
                                    }}
                                >
                                    {b.icon}
                                </div>
                                <div>
                                    <div className="text-[10px] font-semibold font-sans leading-tight" style={{ color: "#dde8ff" }}>
                                        {b.label}
                                    </div>
                                    <div className="text-[8px] leading-tight text-slate-500">
                                        {b.sub}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT PANEL — IMAGE SLIDER ── */}
                <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 mt-12">

                    {/* Slider  */}
                    <div
                        className="relative w-full overflow-hidden rounded-2xl"
                        style={{
                            height: "clamp(240px, 48vw, 500px)",
                            maxWidth: "600px",
                            boxShadow:
                                "0 0 0 1px rgba(0,140,255,0.15), 0 0 60px rgba(0,80,200,0.22), 0 0 120px rgba(0,200,220,0.07)",
                        }}
                    >
                        {SLIDER_IMAGES.map((img, idx) => {
                            const isActive = idx === current;
                            const isExit = idx === prevIdx;
                            return (
                                <div
                                    key={img.id}
                                    className="absolute inset-0 transition-all duration-700 ease-in-out"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        transform: isActive
                                            ? "scale(1) translateX(0px)"
                                            : isExit
                                                ? "scale(0.96) translateX(-20px)"
                                                : "scale(1.06) translateX(30px)",
                                        zIndex: isActive ? 2 : 1,
                                        willChange: "opacity, transform",
                                    }}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover object-center block"
                                        loading={idx === 0 ? "eager" : "lazy"}
                                    />
                                    <div
                                        className="absolute inset-0"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, rgba(0,200,220,0.07) 0%, rgba(0,60,180,0.15) 60%, rgba(0,0,20,0.5) 100%)",
                                        }}
                                    />
                                </div>
                            );
                        })}

                        {/* Bottom fade */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none z-10"
                            style={{
                                background: "linear-gradient(to top, rgba(2,8,18,0.7), transparent)",
                            }}
                        />

                        {/* Slide counter */}
                        <div
                            className="absolute top-3 right-4 z-20 text-[10px] tracking-[0.25em]"
                            style={{
                                fontFamily: "'Rajdhani', sans-serif",
                                color: "rgba(160,210,255,0.55)",
                            }}
                        >
                            {String(current + 1).padStart(2, "0")} / {String(SLIDER_IMAGES.length).padStart(2, "0")}
                        </div>

                        {/* Left Arrow */}
                        <button
                            onClick={() => { goPrev(); resetTimer(); }}
                            aria-label="Previous slide"
                            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-[30px] h-[30px] rounded-full flex items-center justify-center text-blue-300 text-lg cursor-pointer transition-all duration-200 hover:scale-110"
                            style={{
                                background: "rgba(10,40,160,0.45)",
                                border: "1px solid rgba(80,150,255,0.4)",
                            }}
                        >
                            ‹
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={() => { goNext(); resetTimer(); }}
                            aria-label="Next slide"
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-[30px] h-[30px] rounded-full flex items-center justify-center text-blue-300 text-lg cursor-pointer transition-all duration-200 hover:scale-110"
                            style={{
                                background: "rgba(10,40,160,0.45)",
                                border: "1px solid rgba(80,150,255,0.4)",
                            }}
                        >
                            ›
                        </button>
                    </div>

                    {/* ── Dot Indicators ── */}
                    <div className="flex items-center gap-2.5">
                        {SLIDER_IMAGES.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => { goTo(idx); resetTimer(); }}
                                aria-label={`Slide ${idx + 1}`}
                                className="p-0 border-none cursor-pointer transition-all duration-300 rounded-full"
                                style={{
                                    width: idx === current ? "20px" : "7px",
                                    height: "7px",
                                    borderRadius: "9999px",
                                    background: idx === current ? "#3b82f6" : "rgba(255,255,255,0.25)",
                                    boxShadow: idx === current ? "0 0 8px #3b82f6" : "none",
                                    transform: idx === current ? "scale(1)" : "scale(1)",
                                }}
                            />
                        ))}
                    </div>

                    {/* ── Thumbnail strip ── */}
                    <div className="flex gap-2 mt-1">
                        {SLIDER_IMAGES.map((img, idx) => (
                            <button
                                key={img.id}
                                onClick={() => { goTo(idx); resetTimer(); }}
                                className="relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 border-2 p-0"
                                style={{
                                    width: "52px",
                                    height: "36px",
                                    borderColor: idx === current ? "#3b82f6" : "rgba(80,120,255,0.2)",
                                    opacity: idx === current ? 1 : 0.55,
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </main>

        </div>
    );
}
