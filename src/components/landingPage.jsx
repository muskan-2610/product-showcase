import Hero from "./herosection";

import { LuBrain } from "react-icons/lu";
import { FaBatteryFull } from "react-icons/fa6";
import { SiGsmarenadotcom } from "react-icons/si";
import { BsGearWideConnected } from "react-icons/bs";
import { HiMiniInboxStack } from "react-icons/hi2";
import { IoWifi } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { MdOutlineUpdate } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
//

import { AiTwotoneSound } from "react-icons/ai";
import { SiSoundcharts } from "react-icons/si";
import { HiBattery50 } from "react-icons/hi2";
import { TbStars } from "react-icons/tb";
import { GiHeadphones } from "react-icons/gi";

//st 
export default function HeroSection() {

    const features = [
        {
            star: < LuBrain />,
            title: "AI Adaptive Engine",
            para: "Real-time environmental detection adapts to your surroundings instantly with multi-microphone arrays.",
        },

        {
            star: <AiTwotoneSound />,
            title: "High-Fidelity Audio",
            para: "40mm custom drivers deliver a wide soundstage, deep bass, and crystal-clear highs.",
        },

        {
            star: <SiSoundcharts />,
            title: "Adaptive EQ",
            para: "Learns your listening preferences and adjusts the frequency response automatically.",
        },

        {
            star: < HiBattery50 />,
            title: "Endurance Battery",
            para: "Up to 40 hours of continuous high-resolution playback, with quick-charge capabilities.",
        },

        {
            star: < TbStars />,
            title: "Premium Build",
            para: "Expertly calibrated for diverse Indian environments and critical listening preference",
        },

        {
            star: < GiHeadphones />,
            title: "Made for India",
            para: "Expertly calibrated for diverse Indian environments and critical listening preferences.",
        },
    ];
    //  data
    const specs = [
        { label: "Transducer", value: "40mm Custom" },
        { label: "Battery Life", value: "40 Hours" },
        { label: "AI Engine", value: "Real-time Adaptive" },

        { label: "Bluetooth", value: "5.3 (3 Devices)" },
        { label: "Weight", value: "248g" },
        { label: "Frequency Response", value: "10Hz - 40kHz" },

        { label: "Impedance", value: "32Ω" },
        { label: "Microphones", value: "8-Mic Array" },
        { label: "Chassis", value: "Premium Alloy" },

        { label: "Controls", value: "Dual Custom Buttons" },
        { label: "Warranty", value: "Comprehensive" },
        { label: "Origin", value: "Made in India" },
    ];
    // data
    const scrollfeatures = [
        { icon: <LuBrain />, text: "AI Adaptive Environmental Noise Cancellation Engine" },
        { icon: <FaBatteryFull />, text: "40 Hour Battery" },
        { icon: <SiGsmarenadotcom />, text: "40mm Drivers" },
        { icon: <BsGearWideConnected />, text: "Adaptive Equalizer" },
        { icon: <HiMiniInboxStack />, text: "Dual Customizable Buttons" },
        { icon: <IoWifi />, text: "3 Device Pairing" },
        { icon: <GoHeartFill />, text: "Ergonomic Comfort" },
        { icon: <MdOutlineUpdate />, text: "Long Term Updates " },
        { icon: <GrUpdate />, text: "Easy Replacement" },
        { icon: <PiNumberCircleSevenFill />, text: "7 Day No Questions Return " },
        { icon: <FaMapLocationDot />, text: " Made in India for Indian Environments" },
    ];

    return (
        <section className="">

            <div><Hero /></div>

            {/* 1a */}
            <div className="w-full  bg-black py-10 px-4 md:px-10">
                {/* Container */}
                <div className="max-w-4xl mx-auto mx-8 ">
                    {/* Feature Row */}
                    <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide pb-4">
                        {scrollfeatures.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 min-w-max text-white"
                            >
                                {/* Icon */}
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-500/15 border border-purple-500/40 text-purple-400 text-sm">
                                    {item.icon}
                                </div>
                                {/* Text */}
                                <p className="text-xs  text-gray-300 whitespace-nowrap  mr-6 ">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 1 */}
            <div className="py-20  max-w-2xl mx-auto  ">

                <div className=" mb-18  mx-4 ">
                    <h4>The Problem</h4>
                    <h2 className="font-bold text-4xl my-4 mt-3 textwhite font-sans  ">Noise is everywhere.</h2>
                    <p className="">From bustling Indian streets to crowded offices, constant distractions break your focus and drain your energy. Generic noise cancellation doesn't adapt to your unique, ever-changing environment.</p>
                </div>

                <div className=" mx-4">
                    <h4>The Solution</h4>
                    <h2 className="font-bold text-4xl my-4 mt-3 textwhite font-sans" >Intelligent adaptation.</h2>
                    <p>INDEV's AI-powered adaptive engine learns your surroundings in real-time. Whether you're commuting through heavy traffic or focused in a quiet room, INDEV adjusts automatically to deliver the perfect audio experience.</p>
                </div>
            </div>

            {/* cards */}
            <div className="bg-[#050505] ">
                <div className="  py-20 mx-8 max-w-5xl mx-auto  ">
                    <div className="grid gap-6  md:grid-cols-2  lg:grid-cols-3  ">
                        {features.map((feature, index) => (
                            <div key={index} className="group  dummy-card  rounded-br-4xl rounded-tl-4xl   border border-gray-600/40   p-6 shadow-xl  
                                    hover:scale-105   duration-300 ease-in-out hover:text-white  
                            ">
                                <div className="mb-4 text-xl p-3 inline-block bg-purple-500/15  border  text-purple-500 
                                border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] 
                                            transition duration-300  px-6 shadow-md
                                rounded-bl-4xl rounded-tr-4xl color group-hover:bg-black  text-white
                                ">{feature.star}</div>
                                <h2 className="mb-2 text-sm font-medium text-white font-sans group-hover:text-black ">{feature.title}</h2>
                                <p className=" text-xs">{feature.para}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3 */}
                <div bg-yellow-500 className="grid gap-6  mx-8 bg-[#020202] ">

                    <div className="pb-28  pt-24 flex items-center justify-center px-4">
                        <div className="w-full max-w-4xl">
                            <h2 className="text-center text-sm tracking-[0.3em]  text-purple-400 mb-12
                            ">
                                TECHNICAL SPECIFICATIONS
                            </h2>

                            <div className="relative rounded-2xl  border border-purple-700/30 p-8 bg-[#050505] shadow-[0_0_40px_rgba(168,85,247,0.15)]">

                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_0_60px_rgba(168,85,247,0.2)]"></div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-12 gap-8 ">
                                    {specs.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            {/*  line */}
                                            <div className="w-[2px] h-10 bg-purple-500 mt-1"></div>

                                            <div>
                                                <p className="text-gray-400 text-xs mb-1">
                                                    {item.label}
                                                </p>
                                                <p className="text-white font-medium text-sm">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}