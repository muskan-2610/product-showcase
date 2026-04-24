import { useState, useRef } from "react";
// icons
import { GiSoundOff } from "react-icons/gi";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { IoPlaySkipForwardSharp } from "react-icons/io5";
import { IoPlaySkipBack } from "react-icons/io5";
import { MdWifiCalling3 } from "react-icons/md";


export default function ContrlPanel() {

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
    const frequencies = [
        "31Hz",
        "62Hz",
        "125Hz",
        "250Hz",
        "500Hz",
        "1kHz",
        "2kHz",
        "4kHz",
        "8kHz",
        "16kHz",
    ];

    const [values, setValues] = useState([80, 80, 80, 70, 80, 80, 80, 30, 25, 30]);

    const handleChange = (index, val) => {
        const newVals = [...values];
        newVals[index] = val;
        setValues(newVals);
    };

    const options = [
        "Cycle Noise Control",
        "Invoke Assistant",
        "Play / Pause",
        "Skip Forward",
        "Skip Backward",
        "Answer / End Call",
    ];

    const [leftSelected, setLeftSelected] = useState(0);
    const [rightSelected, setRightSelected] = useState(1);

    return (
        <section className=" py-40  mx-8 max-w-4xl mx-auto  ">

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
                            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-1">
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
                <div className=" flex items-center justify-center p-6">
                    <div className="w-full max-w-6xl bg-[#0b0b0b] rounded-2xl p-8 border border-gray-800">
                        {/* Header */}
                        <div className="mb-6">
                            <p className="text-xs mb-2 text-gray-500 tracking-widest uppercase">
                                Graph Based Equalizer
                            </p>
                            <h1 className="text-2xl text-white font-semibold mt-1">
                                Acoustic Tuning & Presets
                            </h1>
                        </div>

                        {/* Presets */}
                        <div className="flex gap-3 mb-10 flex-wrap">
                            {["Studio Reference", "Low Frequency+", "Vocal Clarity", "High Fidelity"].map(
                                (item, i) => (
                                    <button
                                        key={i}
                                        className="px-4 py-2 text-sm rounded-full border border-gray-700 text-gray-300 hover:bg-gray-800 transition"
                                    >
                                        {item}
                                    </button>
                                )
                            )}
                            <button className="px-5 py-2 text-sm rounded-full bg-white text-black font-medium">
                                Custom Profile
                            </button>
                        </div>

                        {/* Sliders */}
                        <div className="flex items-end justify-between pt-8  ">
                            {values.map((val, i) => (
                                <div key={i} className="flex flex-col items-center w-full">
                                    <div className="relative flex items-end justify-center h-50 w-3">
                                        {/* Track */}
                                        <div className="absolute w-1.5 h-full bg-gray-700 rounded-full" />

                                        {/* Active Track */}
                                        <div
                                            className="absolute w-1 bg-blue-500 rounded-full bottom-0"
                                            style={{ height: `${val}%` }}
                                        />

                                        {/* Thumb */}
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={val}
                                            onChange={(e) => handleChange(i, e.target.value)}
                                            className="absolute w-full h-full opacity-0 cursor-pointer"
                                        />

                                        <div
                                            className="absolute w-4 h-4 bg-blue-500 rounded-full shadow-lg"
                                            style={{ bottom: `calc(${val}% - 8px)` }}
                                        />
                                    </div>

                                    <span className="text-xs text-gray-500 mt-3">{frequencies[i]}</span>
                                </div>
                            ))}
                        </div>


                        <div className="flex justify-between items-center mt-10">
                            <button className="text-xs text-gray-500 uppercase tracking-wider">
                                Reset Flat
                            </button>
                            <button className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium">
                                Save to Device
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* 4 */}

            <div className=" my-4 mb-8 flex items-center justify-center p-6">
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">


                    <div className="bg-[#0b0b0b] border border-gray-800 rounded-2xl p-6 transition hover:border-gray-600">
                        <p className="text-xs text-gray-500 tracking-widest uppercase flex items-center gap-2 mb-1">
                            <span>#</span> HARDWARE MAPPING
                        </p>
                        <h2 className="text-white text-sm font-semibold mb-6">
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
                                            <span>#</span>
                                            <span className={`text-[0.7rem] ${active ? "text-white" : ""}`}>
                                                {item}
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
                            <span>#</span> HARDWARE MAPPING
                        </p>
                        <h2 className="text-white text-sm font-semibold mb-6">
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
                                            <span>#</span>
                                            <span className={`text-[0.7rem] ${active ? "text-white" : ""}`}>
                                                {item}
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

            {/* 5
            <div className=" justify-center  grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10   max-w-5xl mx-auto sm:p-6 md:p-10">
                <div className="  border border-white rounded-xl p-6 w-[45%] ">
                    <p className="text-xs uppercase mb-1.5">Firmware Update Section</p>
                    <h4 className="font-medium text-md textwhite">System Software </h4>

                    <div className="border border-gray-600 rounded-xl p-4 my-4 px-6 ">
                        <div className="flex  gap-6">
                            <p className="text-sm font-medium textwhite">OS Build 2.6.4 Available</p>
                            <button className="textwhite">New</button>
                        </div>

                        <p className="text-xs mr-8">Resolves multi-point dropouts and improves  ANC adaptive <br /> response times.</p>
                        <button className="  textwhite  font-semibold  text-sm w-full  py-3 rounded-full   my-4
                        border border-white"> Initiate Update </button>
                    </div>
                </div>

                {/*  */}
            {/* <div className="  border border-white rounded-xl p-6 px-8 w-[45%]">
                    <p className="text-xs uppercase mb-1.5">Support Actions & Reset Options</p>
                    <h4 className="font-medium text-md textwhite">Diagnostics & Warranty</h4>
                    {/* a */}
            {/* <div className="bg-purple-200  rounded-lg my-2  mt-4 flex p-2 items-center justify-between ">
                        <div className="p-2  ">
                            <p className="text-xs font-medium textwhite"> Factory Reset Options </p>
                            <p className="text-[0.69rem]"> Restore factory defaults and wipe profiles</p>
                        </div>
                        <div> # </div>
                    </div>

                    {/* b */}
            {/* <div className="bg-purple-200  rounded-lg my-2 flex  p-2  items-center justify-between ">
                        <div className="p-2  ">
                            <p className="text-xs font-medium textwhite">Replacement Request </p>
                            <p className="text-[0.69rem]"> File a claim for defective hardware </p>
                        </div>
                        <div> # </div>
                    </div> */}

            {/* c
                    <div className="bg-purple-200  rounded-lg my-2 flex  p-2 items-center justify-between ">
                        <div className="p-2  ">
                            <p className="text-xs font-medium textwhite"> Return Status </p>
                            <p className="text-[0.69rem]"> Track your 7-day return processing </p>
                        </div>
                        <div> # </div>
                    </div> */}
            {/* 
                </div>
            </div> */}






            {/* 5 */}


            <div className="  flex items-center justify-center p-4  sm:p-6 md:p-10">

                {/* GRID CONTAINER */}
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 ">

                    {/* LEFT CARD */}
                    <div className="border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8">

                        <p className=" text-xs uppercase ">
                            Firmware Update Section
                        </p>

                        <h2 className="text-md  font-semibold mt-1  text-white">
                            System Software
                        </h2>

                        {/* Inner Box */}
                        <div className="mt-5 border border-white/20 rounded-xl p-4 sm:p-5 md:p-6">

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h3 className="text-xs font-medium">
                                    OS Build 2.6.4 Available
                                </h3>
                                <span className="text-xs text-gray-300">New</span>
                            </div>

                            <p className="text-[0.7rem] mt-3">
                                Resolves multi-point dropouts and improves ANC adaptive response times.
                            </p>

                            <button className="mt-5 w-full text-xs py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition">
                                Initiate Update
                            </button>

                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8">

                        <p className="  text-xs uppercase">
                            Support Actions & Reset Options
                        </p>

                        <h2 className="text-md  font-semibold mt-1  text-white">
                            Diagnostics & Warranty
                        </h2>

                        {/* OPTIONS */}
                        <div className="mt-5 space-y-3">

                            {[
                                "Factory Reset Options",
                                "Replacement Request",
                                "Return Status",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-purple-200/80 text-black rounded-xl p-4 flex items-center justify-between"
                                >
                                    <div>
                                        <p className="font-medium text-xs">
                                            {item}
                                        </p>
                                        <p className="text-[0.7rem] opacity-70">
                                            {i === 0 && "Restore factory defaults and wipe profiles"}
                                            {i === 1 && "File a claim for defective hardware"}
                                            {i === 2 && "Track your 7-day return processing"}
                                        </p>
                                    </div>

                                    <span className="text-md">#</span>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>








        </section>
    );
}

// export default function FirmwareUI() {
//     return (
//         <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 sm:p-6 md:p-10">

//             {/* GRID CONTAINER */}
//             <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

//                 {/* LEFT CARD */}
//                 <div className="border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8">

//                     <p className="text-gray-400 text-sm sm:text-base">
//                         Firmware Update Section
//                     </p>

//                     <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1">
//                         System Software
//                     </h2>

//                     {/* Inner Box */}
//                     <div className="mt-5 border border-white/20 rounded-xl p-4 sm:p-5 md:p-6">

//                         <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//                             <h3 className="text-sm sm:text-base md:text-lg font-medium">
//                                 OS Build 2.6.4 Available
//                             </h3>
//                             <span className="text-sm text-gray-300">New</span>
//                         </div>

//                         <p className="text-gray-400 text-xs sm:text-sm mt-2">
//                             Resolves multi-point dropouts and improves ANC adaptive response times.
//                         </p>

//                         <button className="mt-5 w-full sm:w-auto px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition">
//                             Initiate Update
//                         </button>

//                     </div>
//                 </div>

//                 {/* RIGHT CARD */}
//                 <div className="border border-white/20 rounded-2xl p-5 sm:p-6 md:p-8">

//                     <p className="text-gray-400 text-sm sm:text-base">
//                         Support Actions & Reset Options
//                     </p>

//                     <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mt-1">
//                         Diagnostics & Warranty
//                     </h2>

//                     {/* OPTIONS */}
//                     <div className="mt-5 space-y-3">

//                         {[
//                             "Factory Reset Options",
//                             "Replacement Request",
//                             "Return Status",
//                         ].map((item, i) => (
//                             <div
//                                 key={i}
//                                 className="bg-purple-200/80 text-black rounded-xl p-4 sm:p-5 flex items-center justify-between"
//                             >
//                                 <div>
//                                     <p className="font-medium text-sm sm:text-base">
//                                         {item}
//                                     </p>
//                                     <p className="text-xs sm:text-sm opacity-70">
//                                         {i === 0 && "Restore factory defaults and wipe profiles"}
//                                         {i === 1 && "File a claim for defective hardware"}
//                                         {i === 2 && "Track your 7-day return processing"}
//                                     </p>
//                                 </div>

//                                 <span className="text-lg">#</span>
//                             </div>
//                         ))}

//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// }