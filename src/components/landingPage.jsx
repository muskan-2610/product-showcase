export default function HeroSection() {


    const features = [
        {
            star: 0,
            title: "AI Adaptive Engine",
            para: "Real-time environmental detection adapts to your surroundings instantly with multi-microphone arrays.",
        },

        {
            star: 0,
            title: "High-Fidelity Audio",
            para: "40mm custom drivers deliver a wide soundstage, deep bass, and crystal-clear highs.",
        },

        {
            star: 0,
            title: "Adaptive EQ",
            para: "Learns your listening preferences and adjusts the frequency response automatically.",
        },

        {
            star: 0,
            title: "Endurance Battery",
            para: "Up to 40 hours of continuous high-resolution playback, with quick-charge capabilities.",
        },

        {
            star: 0,
            title: "Premium Build",
            para: "Expertly calibrated for diverse Indian environments and critical listening preference",
        },

        {
            star: 0,
            title: "Made for India",
            para: "Expertly calibrated for diverse Indian environments and critical listening preferences.",
        },

    ];



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

    return (
        <section className="">

            {/* 1 */}
            <div className="py-24 bg-red-100 px-94   ">

                <div className=" mb-18">
                    <h4>The Problem</h4>
                    <h2 className="font-bold text-4xl my-4 mt-3 ">Noise is everywhere.</h2>
                    <p className="">From bustling Indian streets to crowded offices, constant distractions break your focus and drain your energy. Generic noise cancellation doesn't adapt to your unique, ever-changing environment.</p>
                </div>

                <div>
                    <h4>The Solution</h4>
                    <h2 className="font-bold text-4xl my-4 mt-3 " >Intelligent adaptation.</h2>
                    <p>INDEV's AI-powered adaptive engine learns your surroundings in real-time. Whether you're commuting through heavy traffic or focused in a quiet room, INDEV adjusts automatically to deliver the perfect audio experience.</p>
                </div>

            </div>


            {/* 2 */}

            <div className=" ">

                <div className="bg-blue-100 py-20 w-full px-58 ">
                    <div className="grid gap-8  md:grid-cols-3  ">
                        {features.map((feature, index) => (
                            <div key={index} className=" bg-pink-300   rounded-br-4xl rounded-tl-4xl   p-6 shadow-xl  
                            hover:scale-105  duration-400  ">
                                <div className="mb-4 text-3xl p-3 inline-block  px-6 shadow-md rounded-bl-4xl rounded-tr-4xl color">{feature.star}</div>
                                <h2 className="mb-2 text-lg font-semibold">{feature.title}</h2>
                                <p className=" text-sm">{feature.para}</p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* 3 */}

                <div bg-yellow-500 className="grid gap-6  px-58  ">

                    <div className="pb-28  pt-24 flex items-center justify-center px-4">
                        <div className="w-full max-w-4xl">

                            <h2 className="text-center text-sm tracking-[0.3em]  text-purple-400 mb-12">
                                TECHNICAL SPECIFICATIONS
                            </h2>

                            <div className="relative rounded-2xl  border border-purple-700/30 p-8 bg-black shadow-[0_0_40px_rgba(168,85,247,0.15)]">

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