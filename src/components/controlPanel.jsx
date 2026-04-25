import { useState, useRef } from "react";
import Equalizer from "./soundPanel";
// icons
import { PiSoundcloudLogoBold } from "react-icons/pi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";
import { PiHeadsetFill } from "react-icons/pi";
import { BsBlockquoteLeft } from "react-icons/bs";

export default function ControlPanel() {

    const [intensity, setIntensity] = useState(100);
    const [mode, setMode] = useState("maximum");
    const [muted, setMuted] = useState(true);
    const sliderRef = useRef(null);

    const modes = [
        { id: "transparency", label: "Transparency Mode" },
        { id: "adaptive", label: "Adaptive Mode" },
        { id: "maximum", label: "Maximum Isolation" },
    ];

    const handleModeChange = (id) => {
        setMode(id);
        if (id === "transparency") setIntensity(0);
        else if (id === "adaptive") setIntensity(50);
        else setIntensity(100);
    };

    // 3


    const options = [
        { icon: <PiSoundcloudLogoBold />, label: "Cycle Noise Control" },
        { icon: <FaMicrophoneAlt />, label: "Invoke Assistant" },
        { icon: <FaPlayCircle />, label: "Play / Pause" },
        { icon: <IoPlaySkipForwardSharp />, label: "Skip Forward" },
        { icon: <IoPlaySkipBack />, label: "Skip Backward" },
        { icon: <MdWifiCalling3 />, label: "Answer / End Call" },
    ];

    const [leftSelected, setLeftSelected] = useState(0);
    const [rightSelected, setRightSelected] = useState(1);

    return (
        <section className=" py-34  mx-8 max-w-4xl mx-auto  ">

            <h2 className="text-3xl font-semibold mb-2 textwhite">Hardware Controls </h2>
            <p className="text-sm mb-6">Calibrate your INDEV acoustic experience. </p>
            <hr className="opacity-15" />

            {/* sound */}
            <div className="  my-12 flex justify-center ">

                <div
                    className="w-full max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-950 px-10 py-8"
                    style={{ boxShadow: "0 0 60px rgba(0,0,0,0.8)" }}
                >

                    <div className="flex items-start justify-between mb-8">
                        <div>
                            <p className="text-xs font-semibold tracking-widest text-purple-400/60 uppercase mb-1">
                                Active Noise Cancellation
                            </p>
                            <h2 className="text-lg font-bold text-white tracking-tight">
                                Isolation Intensity
                            </h2>
                        </div>

                        <label className="flex items-center gap-2 cursor-pointer group">
                            {/* checkbox */}
                            <input
                                type="checkbox"
                                checked={muted}
                                onChange={(e) => setMuted(e.target.checked)}
                                className="sr-only"
                            />
                            {/* checkbox vtn */}
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 select-none
                                                ${muted
                                        ? "bg-white text-black shadow-lg"
                                        : "bg-zinc-800 text-zinc-400 border border-zinc-700"
                                    }
                                            group-hover:scale-105`}
                                title={muted ? "Muted" : "Unmuted"}
                            >
                                {muted ? (
                                    /* Mute icon */
                                    <svg
                                        icon="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                        <line x1="23" y1="9" x2="17" y2="15" />
                                        <line x1="17" y1="9" x2="23" y2="15" />
                                    </svg>
                                ) : (
                                    /* Unmute icon */
                                    <svg
                                        icon="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                                    </svg>
                                )}
                            </div>
                            {/* Checkbox state label */}
                            <span className="text-xs text-zinc-500 select-none">
                                {muted ? "Muted" : "Active"}
                            </span>
                        </label>
                    </div>


                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-sm text-zinc-500 w-8 text-right select-none">
                            0%
                        </span>

                        <div className="relative flex-1 h-1 group">
                            {/* Track background */}
                            <div className="absolute inset-0 rounded-full bg-zinc-700" />
                            {/* Filled track */}
                            <div
                                className="absolute top-0 left-0 h-full rounded-full bg-white transition-all duration-150"
                                style={{ width: `${intensity}%` }}
                            />
                            {/*  range input */}
                            <input
                                ref={sliderRef}
                                type="range"
                                min={0}
                                max={100}
                                value={intensity}
                                onChange={(e) => {
                                    const val = Number(e.target.value);
                                    setIntensity(val);
                                    if (val === 0) setMode("transparency");
                                    else if (val === 50) setMode("adaptive");
                                    else if (val === 100) setMode("maximum");
                                    else setMode(null);
                                }}
                                className="absolute inset-0 w-full opacity-0 cursor-pointer h-full"
                                style={{ zIndex: 10 }}
                            />
                            {/*  */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-md border-2 border-white transition-all duration-150 pointer-events-none"
                                style={{
                                    left: `calc(${intensity}% - 10px)`,
                                }}
                            />
                        </div>

                        <span className="text-sm text-zinc-300 w-10 select-none">
                            {intensity}%
                        </span>
                    </div>

                    {/* Btns */}
                    <div className="grid grid-cols-3 gap-3">
                        {modes.map(({ id, label }) => (
                            <button
                                key={id}
                                onClick={() => handleModeChange(id)}
                                className={`py-3 px-4 rounded-xl text-xs font-medium tracking-wide transition-all duration-200 border
                                    ${mode === id ? "bg-white text-black border-white shadow-lg"
                                        : "bg-transparent text-zinc-300 border-zinc-700 hover:border-zinc-500 hover:text-white"
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3 */}
            <div>
                <Equalizer />
            </div>

            {/* 4 */}

            <div className=" mt-2  flex items-center justify-center">
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 transition hover:border-gray-600">
                        <p className="text-xs text-gray-500 tracking-widest uppercase flex items-center gap-2 mb-1">
                            <span className="text-md  textwhite"><BsBlockquoteLeft /></span> HARDWARE MAPPING
                        </p>
                        <h2 className="text-white text-sm font-semibold  mt-2 mb-3">
                            Left Chassis Button
                        </h2>

                        <div className="space-y-3">
                            {options.map((item, i) => {
                                const active = leftSelected === i;
                                return (
                                    <div
                                        key={i}
                                        onClick={() => setLeftSelected(i)}
                                        className={`flex  items-center justify-between px-4 py-2 rounded-xl cursor-pointer transition-all duration-200
                    ${active
                                                ? "bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-gray-500"
                                                : "text-gray-500 hover:text-white hover:bg-[#121212]"}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-[0.7rem]  text-purple-400">{item.icon}</span>
                                            <span className={`text-[0.7rem] ${active ? "text-white" : ""}`}>
                                                {item.label}
                                            </span>
                                        </div>

                                        {active && <span className="text-white">✓</span>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>


                    <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 transition hover:border-gray-600">
                        <p className="text-xs text-gray-500 tracking-widest uppercase flex items-center gap-2 mb-1">
                            <span className="text-md  textwhite"><BsBlockquoteLeft /></span> HARDWARE MAPPING
                        </p>
                        <h2 className="text-white text-sm font-semibold mb-3 mt-2 ">
                            Right Chassis Button
                        </h2>

                        <div className="space-y-3">
                            {options.map((item, i) => {
                                const active = rightSelected === i;
                                return (
                                    <div
                                        key={i}
                                        onClick={() => setRightSelected(i)}
                                        className={`flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer transition-all duration-200
                ${active
                                                ? "bg-gradient-to-r from-[#1a1a1a] to-[#111] border border-gray-500"
                                                : "text-gray-500 hover:text-white hover:bg-[#121212]"}`}
                                    >

                                        <div className="flex items-center gap-3">

                                            <span className="text-[0.7rem]  text-purple-400">{item.icon}</span>
                                            <span className={`text-[0.7rem] ${active ? "text-white" : ""}`}>
                                                {item.label}
                                            </span>
                                        </div>

                                        {active && <span className="text-white">✓</span>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>

            {/* 5 */}
            <div className="max-w-5xl mx-auto flex items-center justify-center mt-8 ">
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 ">
                    {/* LEFT CARD */}
                    <div className="border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8  bg-[#090909]">
                        <p className=" text-xs uppercase ">
                            Firmware Update Section
                        </p>
                        <h2 className="text-md  font-semibold mt-1  text-white">
                            System Software
                        </h2>

                        <div className="mt-5 border border-white/20 rounded-xl p-4 sm:p-5 md:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h3 className="text-xs font-medium text-purple-400/60 uppercase">
                                    OS Build 2.6.4 Available
                                </h3>
                                <span className=" text-[0.7rem] text-white/80  bg-white/20 px-2 py-0.5 rounded-full">
                                    New
                                </span>
                            </div>
                            <p className="text-[0.7rem] mt-3">
                                Resolves multi-point dropouts and improves ANC adaptive response times.
                            </p>
                            <button className="mt-5 text-white  w-full text-[0.7rem] py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition">
                                Initiate Update
                            </button>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8  bg-[#090909]">
                        <p className="  text-xs uppercase">
                            Support Actions & Reset Options
                        </p>
                        <h2 className="text-md  font-semibold mt-1  text-white">
                            Diagnostics & Warranty
                        </h2>
                        {/* OPTIONS */}
                        <div className="mt-5 space-y-3 ">
                            {[
                                "Factory Reset Options",
                                "Replacement Request",
                                "Return Status",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="  border border-white/30 rounded-xl p-3 flex items-center justify-between"
                                >
                                    <div>
                                        <p className=" text-[0.7rem]   text-purple-400/60 ">
                                            {item}
                                        </p>
                                        <p className="text-[0.6rem] opacity-70 ">
                                            {i === 0 && "Restore factory defaults and wipe profiles"}
                                            {i === 1 && "File a claim for defective hardware"}
                                            {i === 2 && "Track your 7-day return processing"}
                                        </p>
                                    </div>
                                    <span className="text-md text-[#C07AFF]"> <PiHeadsetFill /> </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>







        </section>
    );
}
