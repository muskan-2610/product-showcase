// imports graphs 
import { ChartLineInteractive } from './liveChart'
import { ChartBarDefault } from './barChart'
/// icons 
import { CiBatteryFull } from "react-icons/ci";
import { MdBluetoothAudio } from "react-icons/md";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { IoIosTimer } from "react-icons/io";
import { SiAlwaysdata } from "react-icons/si";
import { GiMedal } from "react-icons/gi";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { LiaCarSideSolid } from "react-icons/lia";
import { PiBowlSteam } from "react-icons/pi";

export default function Dashboard() {
    return (
        <section className="py-34 pb-30">

            {/* Device Status */}
            <div className="flex justify-between   mx-auto max-w-5xl mb-8 ">
                <div>
                    <h2 className="text-3xl font-semibold textwhite">Analytics</h2>
                    <p className='text-xs mt-2'>Monitor your acoustic environment and usage.</p>
                </div>
                {/*  */}
                <div className="w-full flex  px-3 sm:px-4 justify-end ">
                    <div className="flex items-center justify-between px-3 my-4 rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 w-full max-w-md text-white flex-wrap sm:flex-nowrap">
                        {/* Battery */}
                        <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                            <CiBatteryFull className="text-sm" />
                            <span className="text-xs" >82%</span>
                        </div>

                        <div className="hidden sm:block h-4 sm:h-5 w-px bg-gray-700" />
                        <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                            <MdBluetoothAudio className="text-sm" />
                            <span className="text-xs">Multipoint Active</span>
                        </div>

                        <div className="hidden sm:block h-4 sm:h-5 w-px bg-gray-700" />
                        {/* Connected */}
                        <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
                            <PiPlugsConnectedFill className="text-sm" />
                            <span className="text-xs">Connected</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Line Chart */}
            <div className=' max-w-5xl mx-auto '>
                <ChartLineInteractive />
            </div>

            {/*SCORE METER  */}
            <div >
                <div className=" max-w-5xl mx-auto  text-white  md:p-8  ">
                    <div className="fixed inset-0 -z-10">
                        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-700/20 blur-3xl rounded-full"></div>
                        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6  mx-auto max-w-6xl">
                        {/*  Score */}
                        <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition duration-300">
                            <p className="text-purple-400 tracking-widest text-sm mb-6">
                                FOCUS SCORE METER
                            </p>

                            {/* Circle*/}
                            <div className="relative w-44 h-44 flex items-center justify-center">
                                {/* Glow Ring */}
                                <div className="absolute w-full h-full rounded-full border-4 border-purple-500/30 blur-sm"></div>
                                <div className="absolute w-full h-full rounded-full border-4 border-purple-600 animate-pulse"></div>
                                <div className="text-center z-10">
                                    <h1 className="text-5xl font-light text-purple-300 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                                        91
                                    </h1>
                                    <p className="text-xs text-gray-400 tracking-widest mt-1">
                                        SCORE
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mt-6 text-center">
                                Top 5% among INDEV users this week.
                            </p>
                        </div>

                        {/* b*/}
                        <div className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:shadow-[0_0_60px_rgba(168,85,247,0.35)] transition duration-300 flex flex-col justify-between">
                            <div>
                                <p className="text-gray-400 text-xs tracking-widest mb-2">
                                    CURRENT MODE PANEL
                                </p>
                                <h2 className="text-2xl text-purple-300 font-medium mb-3 drop-shadow-[0_0_8px_rgba(168,85,247,0.7)]">
                                    Deep Work
                                </h2>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    Algorithms currently optimizing for absolute acoustic isolation.
                                    Vocal pass-through disabled. Active noise reduction at peak
                                    levels.
                                </p>
                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">ANC Intensity</span>
                                        <span className="text-purple-300">100%</span>
                                    </div>

                                    <div className="flex justify-between border-b border-gray-800 pb-2">
                                        <span className="text-gray-400">Equalizer</span>
                                        <span className="text-purple-300">Flat Response</span>
                                    </div>
                                </div>
                            </div>

                            {/* Glow Button */}
                            <button className="mt-6 w-full py-3 rounded-full border border-purple-500/30 text-purple-300 
                            hover:bg-purple-500/10 hover:border-purple-400  hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]  transition duration-300">
                                Modify Profile
                            </button>
                        </div>
                    </div>

                    {/* c */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8  mx-auto max-w-6xl ">
                        {[
                            {
                                icon: <GiSandsOfTime />,
                                title: "PEAK FOCUS TIME",
                                value: "10 AM - 12 PM",
                                sub: "+12% efficiency",
                                color: "text-green-500",
                            },
                            {
                                icon: <IoIosTimer />,
                                title: "AVERAGE SESSION",
                                value: "2.5 Hours",
                                sub: "+8% duration",
                                color: "text-green-500",
                            },
                            {
                                icon: <SiAlwaysdata />,
                                title: "WEEKLY USAGE",
                                value: "42.2 Hours",
                                sub: "Active",
                                color: "text-gray-500",
                            },
                            {
                                icon: <GiMedal />,
                                title: "ISOLATION STREAK",
                                value: "12 Days",
                                sub: "Personal Best",
                                color: "text-gray-500",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-xl p-4 mt-3  
                                            hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] 
                                            transition duration-300 group"
                            >
                                <div className="mb-2  text-lg group-hover:text-purple-400 transition">
                                    {card.icon}
                                </div>
                                <p className="text-[0.7rem] text-gray-500 tracking-widest">   {card.title}  </p>
                                <h3 className="text-sm mt-1 text-white group-hover:text-purple-300 transition">
                                    {card.value}
                                </h3>
                                <p className={`${card.color} text-xs mt-1`}> {card.sub}   </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/*  */}
            <div className='max-w-5xl mx-auto p-4 grid md:grid-cols-2 gap-6 '>
                {/* a */}
                <div className='  '>
                    <ChartBarDefault />
                </div>

                {/* b */}
                <div className=" rounded-[24px] border border-white/10 bg-[#020202] px-4 sm:px-5 md:px-6 py-5 sm:py-6 shadow-[0_0_30px_rgba(255,255,255,0.02)] min-h-[280px]">
                    <h2 className="text-[10px] sm:text-[11px] tracking-[0.18em] text-gray-500 font-semibold uppercase  sm:mb-6">
                        Environment Profiles
                    </h2>
                    {/* Main Wrapper */}
                    <div className="flex items-center text-center justify-between gap-4 h-full">
                        {/* Donut Chart */}
                        <div className=" ml-6  relative w-[130px] h-[130px] sm:w-[135px] sm:h-[135px] md:w-[145px] md:h-[145px] rounded-full
                        bg-[conic-gradient(#f5f5f5_0deg_162deg,#bdbdbd_162deg_270deg,#5d5d5d_270deg_324deg,#242424_324deg_360deg)] shrink-0">
                            {/* center hole */}
                            <div className="absolute inset-[22%] rounded-full bg-[#020202]" />

                            {/* separators */}
                            <div className="absolute top-1/2 left-1/2 w-full h-[2px] bg-black -translate-x-1/2 -translate-y-1/2 rotate-[90deg]" />
                            <div className="absolute top-1/2 left-1/2 w-full h-[2px] bg-black -translate-x-1/2 -translate-y-1/2 rotate-[22deg]" />
                            <div className="absolute top-1/2 left-1/2 w-full h-[2px] bg-black -translate-x-1/2 -translate-y-1/2 rotate-[145deg]" />
                        </div>

                        {/* divider */}
                        <div className="h-28 w-px  bg-white/10 shrink-0" />
                        {/* Data list */}
                        <div className="flex-1 space-y-3 sm:space-y-4 text-sm   ">
                            <div className="flex items-center justify-between text-white">
                                <div className="flex items-center gap-2 text-gray-300/60">
                                    <span><MdOutlineHomeRepairService /></span>
                                    <span className='text-xs'>Office</span>
                                </div>
                                <span className="text-xs">45%</span>
                            </div>
                            <div className="flex items-center  justify-between  text-white">
                                <div className="flex items-center gap-2 text-gray-300/60">
                                    <span><IoHomeOutline /></span>
                                    <span className='text-xs'>Home</span>
                                </div>
                                <span className="text-xs">30%</span>
                            </div>
                            <div className="flex items-center  justify-between  text-white">
                                <div className="flex items-center gap-2 text-gray-300/60">
                                    <span><LiaCarSideSolid /></span>
                                    <span className='text-xs'>Commute</span>
                                </div>
                                <span className="text-xs">15%</span>
                            </div>
                            <div className="flex items-center  justify-between  text-white">
                                <div className="flex items-center gap-2 text-gray-300/60">
                                    <span><PiBowlSteam /></span>
                                    <span className='text-xs'>Café</span>
                                </div>
                                <span className="text-xs">10%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}