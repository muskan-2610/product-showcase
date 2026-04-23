export default function Features() {

    const features = [
        {
            icon: 0,
            title: "AI Adaptive Engine ",
            para: "Real-time environment detection. ",
            items: [
                { label: "Multi-microphone array for constant analysis " },
                { label: "Detects ambient frequencies within milliseconds " },
                { label: "Automatic dynamic noise adjustment " },
                { label: "Machine learning improves cancellation over time " },
            ],
            tags: [
                { tag: "ACTIVE" },
                { tag: "LEARNING" },
                { tag: "OPTIMIZED" },
            ]
        },
        {
            icon: 0,
            title: "Adaptive Equalizer ",
            para: "Learns your user preference. ",
            items: [
                { label: "AI learns your music taste and habits " },
                { label: "Save unlimited custom sound profiles " },
                { label: "Genre-specific mastering presets " },
                { label: "Hardware-level DSP frequency adjustments " },
            ],
            tags: [
                { tag: "TUNING " },
                { tag: "CUSTOM " },
                { tag: "PRECISE " },
            ]
        },
        {
            icon: 0,
            title: "Focus Modes ",
            para: "Presets for every scenario. ",
            items: [
                { label: "Deep Work: Maximum noise cancellation " },
                { label: "Commute: Traffic and siren alert system " },
                { label: "Relax: Enhanced ambient sound pass-through " },
                { label: "Instant conversation mode toggle " },
            ],
            tags: [
                { tag: "DEEP WORK" },
                { tag: "COMMUTE" },
                { tag: "RELAX" },
            ]
        },
        {
            icon: 0,
            title: "Hardware Details ",
            para: "Studio-grade reproduction. ",
            items: [
                { label: "Custom 40mm titanium-coated drivers " },
                { label: "Expanded frequency response: 10Hz - 40kHz " },
                { label: " Distortion < 0.1% at maximum volume" },
                { label: "Tuned for high-resolution lossless audio " },
            ],
            tags: [
                { tag: "40MM DRIVERS " },
                { tag: "40 KHZ " },
                { tag: "HI-RES " },
            ]
        },
        {
            icon: 0,
            title: " Endurance Battery",
            para: "Uninterrupted listening sessions. ",
            items: [
                { label: "40 hours of continuous playback (ANC On) " },
                { label: "60 hours of standard playback " },
                { label: "Fast charge: 10 minutes yields 5 hours " },
                { label: "USB-C standard power delivery " },
            ],
            tags: [
                { tag: "40H ANC " },
                { tag: "60H BASE " },
                { tag: "FAST CHARGE " },

            ]
        },
        {
            icon: 0,
            title: "Ergonomic Comfort ",
            para: "Engineered for absolute comfort. ",
            items: [
                { label: "High-density acoustic memory foam " },
                { label: "Ultra-light 248g aluminum chassis " },
                { label: "Low-clamping-force headband " },
                { label: "Breathable synthetic leather earcups " },
            ],
            tags: [
                { tag: "ALUMINUM " },
                { tag: "248G " },
                { tag: "MEMORY FOAM " },
            ]
        },
        {
            icon: 0,
            title: "Smart Controls ",
            para: "Customizable button mapping. ",
            items: [
                { label: "Dual programmable hardware buttons " },
                { label: "Zero-latency capacitive touch surface " },
                { label: "Map any function to any gesture " },
                { label: "Wear-detection auto pause/play " },
            ],
            tags: [
                { tag: "TOUCH " },
                { tag: "BUTTONS " },
                { tag: "SENSORS " },

            ]
        },
        {
            icon: 0,
            title: "Seamless Connectivity ",
            para: "Multi-device pairing. ",
            items: [
                { label: "Simultaneous connection to 3 devices " },
                { label: "Instant audio source switching " },
                { label: "Ultra-low latency Bluetooth 5.3 " },
                { label: "High-bitrate codec transmission " },
            ],
            tags: [
                { tag: "BT 5.3 " },
                { tag: "3 DEVICES " },
                { tag: "LE AUDIO " },

            ]
        },
        {
            icon: 0,
            title: "Long Term Support ",
            para: "Evolving capabilities via OTA. ",
            items: [
                { label: "Over-the-air firmware updates " },
                { label: "Continuous ANC algorithm refinement " },
                { label: "New feature drops via mobile app " },
                { label: "3+ years of guaranteed software updates " },
            ],
            tags: [
                { tag: "OTA " },
                { tag: " CLOUD" },
                { tag: "UPDATES " },
            ]
        },
        {
            icon: 0,
            title: "Premium Warranty ",
            para: "Comprehensive protection. ",
            items: [
                { label: "2-year manufacturer guarantee " },
                { label: "Easy advanced replacement program " },
                { label: "7-day no-questions return policy " },
                { label: "Dedicated premium support line " },
            ],
            tags: [
                { tag: "2 YEAR " },
                { tag: "7 DAY RETURN " },
                { tag: "REPLACEMENT " },
            ]
        },
        {
            icon: 0,
            title: "Acoustic Analytics ",
            para: "Monitor your listening habits. ",
            items: [
                { label: "Real-time environment level monitoring " },
                { label: "Daily focus score insights " },
                { label: "Noise environment logging " },
                { label: "Health-recommended limit alerts " },
            ],
            tags: [
                { tag: "FOCUS STORE " },
                { tag: "ANALYTICS " },
                { tag: "SAFETY " },
            ]
        },
        {
            icon: 0,
            title: "Made for India ",
            para: "Designed for Indian environments. ",
            items: [
                { label: "Algorithms trained on heavy urban noise " },
                { label: "Materials tested for tropical humidity " },
                { label: "Engineered & assembled locally " },
                { label: "Tuned for Indian music and languages " },
            ],
            tags: [
                { tag: "URBAN " },
                { tag: "TROPICAL " },
                { tag: "LOCAL " },
            ]
        },
    ]



    return (
        <section className="py-40 text-center px-48 ">

            <h1 className=" mx-auto font-bold text-5xl ">Intelligent features for <br />
                <span className="  text-purple-600">modern professionals.</span>
            </h1>

            <p className="mx-auto my-6 ">Every detail of the INDEV ecosystem is meticulously crafted to keep you <br /> focused, comfortable, and in absolute control.</p>

            {/*  */}
            <div className="grid mt-20 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
                {features.map((feature, index) => (
                    <div key={index} className=" text-left  backdrop-blur-2xl bg-[#0a0a0a]/90 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors pt-10 p-6  cursor-pointer transition-all duration-300 bg-[#050505] ">

                        <div className=" w-14 h-14 my-8 ml-2 mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center opacity-20 absolute -mt-4 -ml-4 blur-xl transition-opacity ">
                            {feature.icon}
                        </div>
                        <h3 className="textwhite text-md font-semibold mt-18">{feature.title}</h3>
                        <p className=" text-xs my-2  mb-4">{feature.para}</p> 
                        <hr />

                        {/* hide */}
                        <div className=" text-xs py-4 leading-7 ">
                            {feature.items.map((item, idx) => (
                                <p key={idx}  >{item.label}</p>
                            ))}
                        </div>


                        {/* span */}
                        <div>
                            {feature.tags.map((tag, idx) => (
                                <span key={idx} className="inline-block border border-white/20  text-gray-700 text-[0.7rem] px-3 py-1 rounded-full mr-2">
                                    {tag.tag}
                                </span>
                            ))}
                        </div>

                    </div>
                ))}
            </div>


        </section>
    )
}

{/* <div class="
        backdrop-blur-2xl bg-[#0a0a0a]/90 border border-white/10 rounded-2xl overflow-hidden
        hover:border-white/20 transition-colors
        p-10 h-full cursor-pointer transition-all duration-300 bg-[#050505]
        "><div class="flex items-start justify-between mb-8"><div 
        class="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center opacity-20 absolute -mt-4 -ml-4 blur-xl transition-opacity ">
        </div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain w-6 h-6 relative z-10 text-gray-400 transition-colors"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg><div class="flex gap-1.5 relative z-10"><div class="w-1.5 h-1.5 rounded-full bg-gray-600" style="opacity: 0.3; transform: scale(0.8);"></div><div class="w-1.5 h-1.5 rounded-full bg-gray-600" style="opacity: 0.3; transform: scale(0.8);"></div><div class="w-1.5 h-1.5 rounded-full bg-gray-600" style="opacity: 0.3; transform: scale(0.8);"></div></div></div><h3 class="text-xl font-medium tracking-tight mb-2 text-white relative z-10">AI Adaptive Engine</h3><p class="text-sm font-light text-gray-500 mb-6 relative z-10">Real-time environment detection.</p><div class="overflow-hidden relative z-10" style="height: 0px; opacity: 0;"><div class="pt-6 border-t border-white/10 space-y-3"><div class="flex items-start gap-3"><div class="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1.5 flex-shrink-0"></div><p class="text-sm font-light text-gray-300">Multi-microphone array for constant analysis</p></div><div class="flex items-start gap-3"><div class="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1.5 flex-shrink-0"></div><p class="text-sm font-light text-gray-300">Detects ambient frequencies within milliseconds</p></div><div class="flex items-start gap-3"><div class="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1.5 flex-shrink-0"></div><p class="text-sm font-light text-gray-300">Automatic dynamic noise adjustment</p></div><div class="flex items-start gap-3"><div class="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1.5 flex-shrink-0"></div><p class="text-sm font-light text-gray-300">Machine learning improves cancellation over time</p></div></div></div><div class="flex flex-wrap gap-2 mt-6 relative z-10"><span class="text-xs uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full">Active</span><span class="text-xs uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full">Learning</span><span class="text-xs uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 text-gray-400 rounded-full">Optimized</span></div></div> */}