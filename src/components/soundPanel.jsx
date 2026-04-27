import { useState } from "react";

const BANDS = ["31Hz", "62Hz", "125Hz", "250Hz", "500Hz", "1kHz", "2kHz", "4kHz", "8kHz", "16kHz"];

const PRESETS = {
    "Studio Reference": [40, 55, 45, 42, 38, 44, 52, 58, 50, 46],
    "Low Frequency+": [70, 75, 65, 50, 40, 38, 35, 35, 38, 40],
    "Vocal Clarity": [35, 38, 42, 50, 60, 68, 65, 55, 45, 40],
    "High Fidelity": [45, 48, 50, 52, 50, 55, 58, 62, 65, 60],
    "Custom Profile": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
};

const PRESET_ICONS = {
    "Studio Reference": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <line x1="4" y1="6" x2="4" y2="18" /><line x1="8" y1="4" x2="8" y2="18" />
            <line x1="12" y1="8" x2="12" y2="18" /><line x1="16" y1="5" x2="16" y2="18" />
            <line x1="20" y1="10" x2="20" y2="18" />
        </svg>
    ),
    "Low Frequency+": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </svg>
    ),
    "Vocal Clarity": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
    ),
    "High Fidelity": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
    ),
    "Custom Profile": (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
    ),
};

export default function Equalizer() {
    const [activePreset, setActivePreset] = useState("Studio Reference");
    const [values, setValues] = useState(PRESETS["Studio Reference"]);

    const handlePreset = (preset) => {
        setActivePreset(preset);
        setValues([...PRESETS[preset]]);
    };

    const handleSlider = (index, val) => {
        const newVals = [...values];
        newVals[index] = Number(val);
        setValues(newVals);
        setActivePreset("Custom Profile");
    };

    const resetFlat = () => {
        setValues(new Array(10).fill(50));
        setActivePreset("Custom Profile");
    };

    return (
        <div className="mb-10  flex items-center justify-center ">
            <div className="w-full max-w-5xl rounded-2xl border border-zinc-800 bg-zinc-950 px-10 py-6">

                {/* Header */}
                <div className="mb-4">
                    <p className="text-[0.7rem] font-semibold tracking-widest text-zinc-500 uppercase mb-1">
                        Graph Based Equalizer
                    </p>
                    <h2 className="text-lg font-bold text-white tracking-tight">
                        Acoustic Tuning & Presets
                    </h2>
                </div>

                {/* Preset Buttons */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {Object.keys(PRESETS).map((preset) => (
                        <button
                            key={preset}
                            onClick={() => handlePreset(preset)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200
                ${activePreset === preset
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-zinc-300 border-zinc-700 hover:border-zinc-400 hover:text-white"
                                }`}
                        >
                            {PRESET_ICONS[preset]}
                            {preset}
                        </button>
                    ))}
                </div>

                {/* Sliders */}
                <div className="grid grid-cols-5 gap-x-2 gap-y-4 px-2 mb-6 sm:flex sm:justify-between sm:items-end sm:gap-y-0">
                    {BANDS.map((band, i) => (
                        <div key={band} className="flex flex-col items-center gap-3 w-full sm:w-[7%]">
                            {/* Vertical Slider Container */}
                            <div className="relative flex justify-center" style={{ height: "200px", width: "24px" }}>
                                {/* Track background */}
                                <div className="absolute top-0 bottom-0 w-1 rounded-full bg-zinc-700" style={{ left: "50%", transform: "translateX(-50%)" }} />

                                {/* {/* Filled  */}
                                <div
                                    className="absolute w-1 rounded-full bg-purple-500"
                                    style={{
                                        bottom: 0,
                                        height: `${values[i]}%`,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                    }}
                                />

                                {/* Thumb dot */}
                                <div
                                    className="absolute w-4 h-4 rounded-full bg-purple-500 border-2 border-purple-100 shadow-lg pointer-events-none z-10"
                                    style={{
                                        bottom: `calc(${values[i]}% - 8px)`,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                    }}
                                />

                                {/* Invisible range input rotated */}
                                <input
                                    type="range"
                                    min={0}
                                    max={100}
                                    value={values[i]}
                                    onChange={(e) => handleSlider(i, e.target.value)}
                                    className="absolute opacity-0 cursor-pointer"
                                    style={{
                                        width: "200px",
                                        height: "24px",
                                        left: "50%",
                                        top: "50%",
                                        transform: "translate(-50%, -50%) rotate(-90deg)",
                                        transformOrigin: "center center",
                                    }}
                                />
                            </div>

                            {/* Band Label */}
                            <span className="text-xs text-zinc-400 text-center whitespace-nowrap">{band}</span>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-800">
                    <button
                        onClick={resetFlat}
                        className="text-[0.7rem] font-semibold tracking-widest text-purple-400 uppercase hover:text-white transition-colors"
                    >
                        Reset Flat
                    </button>
                    <button className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-zinc-300 transition-colors">
                        Save to Device
                    </button>
                </div>

            </div>
        </div>
    );
}