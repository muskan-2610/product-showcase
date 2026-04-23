import { ChartLineDefault } from "./graph"

export default function Dashboard() {
    return (
        <section className="py-30">



            <div className="flex items-center justify-center">
                <ChartLineDefault className="bg-black text-white w-4xl"/>
            </div>








            <div className="flex justify-between  mx-auto max-w-6xl">
                <div>
                    <h2 className="text-3xl font-semibold textwhite">Analytics</h2>
                    <p>Monitor your acoustic environment and usage.</p>
                </div>

                <div className="flex justify-between p-4 rounded-lg bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 mt-6 w-full max-w-md  ">
                    #  <span> 82%</span>  <hr className="rotate-[90deg]" />
                    #  <span>Multipoint Active</span>  <hr />
                    #  <span>Connected</span>  <hr />
                </div>
            </div>





            {/*  */}
            <div >

                <div className="min-h-screen  text-white p-4 md:p-8  ">

                    {/* Glow Background */}
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

                                {/* Progress  */}
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
                            hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] 
                            transition duration-300">
                                Modify Profile
                            </button>
                        </div>
                    </div>

                    {/* c */}
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8  mx-auto max-w-6xl ">

                        {[
                            {
                                title: "PEAK FOCUS TIME",
                                value: "10 AM - 12 PM",
                                sub: "+12% efficiency",
                                color: "text-green-500",
                            },
                            {
                                title: "AVERAGE SESSION",
                                value: "2.5 Hours",
                                sub: "+8% duration",
                                color: "text-green-500",
                            },
                            {
                                title: "WEEKLY USAGE",
                                value: "42.2 Hours",
                                sub: "Active",
                                color: "text-gray-500",
                            },
                            {
                                title: "ISOLATION STREAK",
                                value: "12 Days",
                                sub: "Personal Best",
                                color: "text-gray-500",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-gray-800 rounded-xl p-5 my-6  
                                            hover:border-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] 
                                            transition duration-300 group"
                            >
                                <div className="mb-4 text-gray-500 group-hover:text-purple-400 transition">
                                    #
                                </div>

                                <p className="text-xs text-gray-500 tracking-widest">   {card.title}  </p>

                                <h3 className="text-xl mt-2 text-white group-hover:text-purple-300 transition">
                                    {card.value}
                                </h3>

                                <p className={`${card.color} text-sm mt-1`}> {card.sub}   </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
































        </section>
    )
}