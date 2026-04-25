import { LuBrain } from "react-icons/lu";
import { FaDropbox } from "react-icons/fa6";
import { RiSoundModuleLine } from "react-icons/ri";
import { PiCubeFocusFill } from "react-icons/pi";
import { AiOutlineSound } from "react-icons/ai";
import { IoMdBatteryCharging } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa";
import { TbBrandHeadlessui } from "react-icons/tb";
import { TiWiFi } from "react-icons/ti";
import { RiChatVoiceAiFill } from "react-icons/ri";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { MdOutlineQueueMusic } from "react-icons/md";
import { BsPatchCheckFill } from "react-icons/bs";




import { RiVoiceAiLine, RiVoiceprintFill } from "react-icons/ri";


export default function Features() {

    const features = [
        {
            icon: <LuBrain />,
            title: "AI Adaptive Engine ",
            para: "Real-time environment detection. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Multi-microphone array for constant analysis " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Detects ambient frequencies within milliseconds " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Automatic dynamic noise adjustment " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "ML improves cancellation over time " },
            ],
            tags: [
                { tag: "ACTIVE" },
                { tag: "LEARNING" },
                { tag: "OPTIMIZED" },
            ]
        },
        {
            icon: <RiSoundModuleLine />,
            title: "Adaptive Equalizer ",
            para: "Learns your user preference. ",
            items: [
                { icon: <RiVoiceprintFill className="text-purple-500" />, label: "AI learns your music taste and habits " },
                { icon: <RiVoiceprintFill className="text-purple-500" />, label: "Save unlimited custom sound profiles " },
                { icon: <RiVoiceprintFill className="text-purple-500" />, label: "Genre-specific mastering presets " },
                { icon: <RiVoiceprintFill className="text-purple-500" />, label: "Hardware-level DSP frequency adjustments " },
            ],
            tags: [
                { tag: "TUNING " },
                { tag: "CUSTOM " },
                { tag: "PRECISE " },
            ]
        },
        {

            icon: <FaDropbox />,
            title: "Focus Modes ",
            para: "Presets for every scenario. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Deep Work: Maximum noise cancellation " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Commute: Traffic and siren alert system " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Relax: Enhanced ambient sound pass-through " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Instant conversation mode toggle " },
            ],
            tags: [
                { tag: "DEEP WORK" },
                { tag: "COMMUTE" },
                { tag: "RELAX" },
            ]
        },
        {
            icon: <AiOutlineSound />,
            title: "Hardware Details ",
            para: "Studio-grade reproduction. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Custom 40mm titanium-coated drivers " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Expanded frequency response: 10Hz - 40kHz " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: " Distortion < 0.1% at maximum volume" },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Tuned for high-resolution lossless audio " },
            ],
            tags: [
                { tag: "40MM DRIVERS " },
                { tag: "40 KHZ " },
                { tag: "HI-RES " },
            ]
        },
        {
            icon: <IoMdBatteryCharging />,
            title: " Endurance Battery",
            para: "Uninterrupted listening sessions. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "40 hours of continuous playback (ANC On) " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "60 hours of standard playback " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Fast charge: 10 minutes yields 5 hours " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "USB-C standard power delivery " },
            ],
            tags: [
                { tag: "40H ANC " },
                { tag: "60H BASE " },
                { tag: "FAST CHARGE " },

            ]
        },
        {
            icon: <FaHeadphones />,
            title: "Ergonomic Comfort ",
            para: "Engineered for absolute comfort. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "High-density acoustic memory foam " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Ultra-light 248g aluminum chassis " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Low-clamping-force headband " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Breathable synthetic leather earcups " },
            ],
            tags: [
                { tag: "ALUMINUM " },
                { tag: "248G " },
                { tag: "MEMORY FOAM " },
            ]
        },
        {
            icon: <TbBrandHeadlessui />,
            title: "Smart Controls ",
            para: "Customizable button mapping. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Dual programmable hardware buttons " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Zero-latency capacitive touch surface " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Map any function to any gesture " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Wear-detection auto pause/play " },
            ],
            tags: [
                { tag: "TOUCH " },
                { tag: "BUTTONS " },
                { tag: "SENSORS " },

            ]
        },
        {
            icon: <TiWiFi />,
            title: "Seamless Connectivity ",
            para: "Multi-device pairing. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Simultaneous connection to 3 devices " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Instant audio source switching " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Ultra-low latency Bluetooth 5.3 " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "High-bitrate codec transmission " },
            ],
            tags: [
                { tag: "BT 5.3 " },
                { tag: "3 DEVICES " },
                { tag: "LE AUDIO " },

            ]
        },
        {
            icon: <RiChatVoiceAiFill />,
            title: "Long Term Support ",
            para: "Evolving capabilities via OTA. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Over-the-air firmware updates " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Continuous ANC algorithm refinement " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "New feature drops via mobile app " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "3+ years of guaranteed software updates " },
            ],
            tags: [
                { tag: "OTA " },
                { tag: " CLOUD" },
                { tag: "UPDATES " },
            ]
        },
        {
            icon: <FaWandMagicSparkles />,
            title: "Premium Warranty ",
            para: "Comprehensive protection. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "2-year manufacturer guarantee " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Easy advanced replacement program " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "7-day no-questions return policy " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Dedicated premium support line " },
            ],
            tags: [
                { tag: "2 YEAR " },
                { tag: "7 DAY RETURN " },
                { tag: "PREMIUM " },
            ]
        },
        {
            icon: <MdOutlineQueueMusic />,
            title: "Acoustic Analytics ",
            para: "Monitor your listening habits. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Real-time environment level monitoring " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Daily focus score insights " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Noise environment logging " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Health-recommended limit alerts " },
            ],
            tags: [
                { tag: "FOCUS STORE " },
                { tag: "ANALYTICS " },
                { tag: "SAFETY " },
            ]
        },
        {
            icon: <BsPatchCheckFill />,
            title: "Made for India ",
            para: "Designed for Indian environments. ",
            items: [
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Algorithms trained on heavy urban noise " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Materials tested for tropical humidity " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Engineered & assembled locally " },
                { icon: <RiVoiceAiLine className="text-purple-500" />, label: "Tuned for Indian music and languages " },
            ],
            tags: [
                { tag: "URBAN " },
                { tag: "TROPICAL " },
                { tag: "LOCAL " },
            ]
        },
    ]



    return (
        <section className="py-34  text-center max-w-5xl mx-auto">

            <h1 className=" mx-8   mx-auto font-bold text-5xl textwhite font-sans ">Intelligent features for
                <p className="  text-purple-600">modern professionals. </p>
            </h1>

            <p className="  mx-8 mx-auto my-6   ">Every detail of the INDEV ecosystem is meticulously crafted to keep you <br /> focused, comfortable, and in absolute control.</p>

            {/*  */}
            <div className=" grid mt-16 gap-6 mx-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
                {features.map((feature, index) => (
                    <div key={index} className=" group  text-left  backdrop-blur-2xl bg-[#0a0a0a]/90 border border-white/10 rounded-2xl shadow-2xl
                    overflow-hidden hover:border-white/20 transition-colors pt-10 p-6  cursor-pointer transition-all duration-300 bg-[#050505]
                        hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ">

                        {/* <div className=" w-14 h-14 my-8 ml-2 mb-4  text-white rounded-xl bg-gradient-to-br from-purple-500 to-purple-600
                        flex items-center justify-center opacity-20 z-10 text-white absolute -mt-4 -ml-4 blur-xl  transition-opacity ">
                            <div className="relative z-10 text-white">{feature.icon} </div>
                        </div> */}



                        {/*  3333333 */}
                        <div className="  relative w-12 h-12  text-white rounded-xl flex items-center justify-center  ">

                            {/* Smoky Background  */}
                            <div className=" absolute inset-0 
                    bg-gradient-to-br from-pink-500 to-purple-600 
                    opacity-30 blur-xl rounded-xl  group-hover:opacity-50 group-hover:scale-110 transition-all duration-400  ">
                            </div>

                            {/* Icon + Text (clear) */}
                            <div className="relative z-10 flex items-center justify-center text-lg text-center text-white/70 group-hover:text-purple-400 transition-colors duration-300">
                                {feature.icon}
                                {/* <span className=" text-sm">+</span> */}
                            </div>
                        </div>

                        <h3 className="textwhite text-sm font-medium mt-6">{feature.title}</h3>
                        <p className=" text-xs mt-1.5  "> {feature.para}</p>

                        {/* hide */}
                        <div className=" text-xs pt-4 pb-1 leading-7 
                        opacity-0 max-h-0 overflow-hidden    group-hover:opacity-100 group-hover:max-h-44    transition-all duration-500">
                            <hr className="border border-white/10 mb-4  " />
                            {feature.items.map((item, idx) => (
                                <p key={idx} className="flex gap-2 items-center text-[0.6rem] text-white/70" > {item.icon} {item.label}</p>
                            ))}
                        </div>

                        {/* span */}
                        <div>
                            {feature.tags.map((tag, idx) => (
                                <span key={idx} className="inline-block text-white/60 border border-white/30 group-hover:border-pink-100   text-[0.6rem] px-3 py-1 rounded-full mr-2">
                                    {tag.tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </section >
    )
}
