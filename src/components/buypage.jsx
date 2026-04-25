import { SiBlueprint } from "react-icons/si";
import { FaBoxTissue } from "react-icons/fa";
import { IoCheckboxSharp } from "react-icons/io5";
import { FaCcAmazonPay } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { RiCornerUpRightDoubleFill } from "react-icons/ri";
import { TbArrowBadgeRightFilled } from "react-icons/tb";


export default function BuyPage() {
    return (
        <section className="py-30 mx-8 ">

            {/* 1 */}
            <div className=" py-12  max-w-3xl mx-auto flex justify-between flex-col sm:flex-row sm:gap-4  text-center  gap-4   ">

                <div className="  p-4   text-sm  h-28 w-30 rounded-3xl border border-white/80 shadow-xl">
                    <div className="bg-white inline-block p-4 text-black mb-2 text-lg shadow-2xl rounded-full"> < SiBlueprint /> </div>
                    <p className="textwhite">EDITION</p>
                </div>

                <div className=" p-4 text-sm h-28 w-30 rounded-3xl  border  border-white/0 hover:border-white/80">
                    <div className=" inline-block p-4 mb-2 shadow-xl border border-white/15 text-lg rounded-full"> <FaBoxTissue /> </div>
                    <p>SHIPPING  </p>
                </div>

                <div className=" p-4  text-sm h-28 w-30 rounded-3xl border border-white/0 hover:border-white/80">
                    <div className=" inline-block p-4  mb-2 shadow-xl  border border-white/15 text-lg rounded-full"><IoCheckboxSharp /></div>
                    <p>REVIEW</p>
                </div>

                <div className=" p-4   text-sm h-28 w-30 rounded-3xl border border-white/0 hover:border-white/80">
                    <div className="  inline-block p-4 mb-2 shadow-xl border border-white/15 text-lg  rounded-full"> <FaCcAmazonPay /> </div>
                    <p>PAYMENT</p>
                </div>

                <div className=" p-4  text-sm h-28 w-34  rounded-3xl border border-white/0 hover:border-white/80">
                    <div className=" inline-block p-4 mb-2  shadow-xl border border-white/15 text-lg rounded-full"> <GiPayMoney /> </div>
                    <p>CONFIRMATION</p>
                </div>

            </div>

            {/* 2 */}
            <div className="py-6 text-left  max-w-3xl mx-auto    ">
                <h2 className="text-2xl textwhite  font-semibold mb-2"> Configure INDEV. </h2>
                <p className="text-xs mb-10">Select your preferred edition and finish.</p>
                <p className="text-sm  font-semibold uppercase "> Color Finish </p>

                <div className="   flex  gap-8  p-4 mb-3 rounded-3xl  text-center pl-0 ">

                    <div className=" text-xs  flex flex-col items-center gap-2">
                        <div className=" border border-white shadow-2xl  rounded-full h-14 w-14 bg-[#0F0F0F]" > </div>
                        <p className="textwhite  ">Matte Black</p>
                    </div>

                    <div className=" text-xs  flex flex-col items-center gap-2">
                        <div className="bg-[#D1D5DB]  rounded-full h-14 w-14" > </div>
                        <p> Titanium Silver</p>
                    </div>

                    <div className=" text-xs  flex flex-col items-center gap-2">
                        <div className="bg-[#1E293B]  rounded-full h-14 w-14" ></div>
                        <p>Midnight Navy</p>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <p className="text-sm text-left  font-semibold max-w-3xl mx-auto  ">MODEL EDITION</p>

            <div className=" py-3 text-left  grid  md:grid-cols-2 gap-6 max-w-3xl mx-auto  mb-8  ">
                <div className="bg-[#121212]  p-8 rounded-3xl
                border border-white/10   hover:border-white/80 " >

                    <div className="text-lg font-medium flex  justify-between mb-6  font-sans ">
                        <span className=" textwhite">INDEV Standard</span>
                        <span> $299</span>
                    </div>
                    {/*  */}
                    <div  >
                        <div className="text-sm mb-2 flex items-center gap-3">
                            < RiCornerUpRightDoubleFill className="text-xl" /> <p>40h Battery</p>
                        </div>
                        <div className="text-sm mb-2 flex items-center gap-3">
                            <RiCornerUpRightDoubleFill className="text-lg" /> <p> Adaptive ANC </p>
                        </div>
                        <div className="text-sm mb-2 flex items-center gap-3">
                            < RiCornerUpRightDoubleFill className="text-lg" /> <p> BT 5.3 LE </p>
                        </div>
                    </div>
                </div>


                {/*  */}
                <div className=" bg-[#090909]  p-8 rounded-3xl
                border border-white/10   hover:border-white/80 ">

                    <div className="text-lg font-medium flex justify-between mb-6  font-sans">
                        <span className=" textwhite">INDEV Pro Edition </span>
                        <span> $399</span>
                    </div>

                    <div>
                        <div className="text-sm mb-2 flex gap-3" >
                            < RiCornerUpRightDoubleFill className="text-lg" />  <p> 60h Battery</p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3" >
                            < RiCornerUpRightDoubleFill className="text-lg" />  <p> Adaptive ANC </p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3" >
                            < RiCornerUpRightDoubleFill className="text-lg" />  <p> BT 5.3 LE </p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3" >
                            < RiCornerUpRightDoubleFill className="text-lg" />  <p>Aerospace Aluminum </p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3" >
                            < RiCornerUpRightDoubleFill className="text-lg" />  <p> Hard Case</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className=" max-w-3xl mx-auto opacity-10 " />
            <div className="  max-w-3xl mx-auto  flex text-center justify-end">
                <button className="bg-white p-2 px-8  rounded-full my-6  hover:bg-gray-200 flex items-center gap-1  ">
                    Continue <TbArrowBadgeRightFilled className="text-lg" /> </button>
            </div>


        </section>
    )
}