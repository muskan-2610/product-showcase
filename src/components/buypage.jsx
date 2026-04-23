import { FaXbox } from "react-icons/fa6";

export default function BuyPage() {
    return (
        <section className="py-30">

            {/* 1 */}
            <div className=" py-12 flex  text-center  justify-center gap-8   ">

                <div className="  p-4   text-sm  h-28 w-30 rounded-3xl border border-white/30 hover:border-white/80 shadow-xl">
                    <div className="bg-white inline-block p-4  mb-2  rounded-full"> < FaXbox /> </div>
                    <p className="textwhite">EDITION</p>
                </div>

                <div className=" p-4 text-sm h-28 w-30 rounded-3xl  border border-white/0 hover:border-white/80">
                    <div className="bg-white inline-block p-4 mb-2  rounded-full">##</div>
                    <p>SHIPPING  </p>
                </div>

                <div className=" p-4  text-sm h-28 w-30 rounded-3xl border border-white/0 hover:border-white/80">
                    <div className="bg-white inline-block p-4  mb-2 rounded-full">##</div>
                    <p>REVIEW</p>
                </div>

                <div className=" p-4   text-sm h-28 w-30 rounded-3xl border border-white/0 hover:border-white/80">
                    <div className="bg-white  inline-block p-4 mb-2  rounded-full">##</div>
                    <p>PAYMENT</p>
                </div>

                <div className=" p-4  text-sm h-28 w-34  rounded-3xl border border-white/0 hover:border-white/80">
                    <div className="bg-white inline-block p-4 mb-2 rounded-full">##</div>
                    <p>CONFIRMATION</p>
                </div>

            </div>

            {/* 2 */}
            <div className="py-6 text-left px-78 ">
                <h2 className="text-3xl textwhite  font-semibold mb-2"> Configure INDEV. </h2>
                <p className="text-sm mb-8">Select your preferred edition and finish.</p>
                <p className="text-sm  font-semibold"> Color Finish </p>

                <div className="   flex  gap-8  p-4  rounded-3xl  text-center pl-0 ">

                    <div className=" text-sm  flex flex-col items-center gap-2">
                        <div className="  rounded-full h-16 w-16 bg-[#0F0F0F]" > </div>
                        <p className="textwhite">Matte Black</p>
                    </div>

                    <div className=" text-sm  flex flex-col items-center gap-2">
                        <div className="bg-[#D1D5DB]  rounded-full h-16 w-16" > </div>
                        <p> Titanium Silver</p>
                    </div>

                    <div className=" text-sm  flex flex-col items-center gap-2">
                        <div className="bg-[#1E293B]  rounded-full h-16 w-16" ></div>
                        <p>Midnight Navy</p>
                    </div>
                </div>
            </div>

            {/* 3 */}
            <p className="text-sm text-left px-78 font-semibold">MODEL EDITION</p>
            <div className=" py-3 text-left px-78 flex flex-col-2 gap-4  mb-8">

                <div className="bg-[#121212]  p-10 rounded-3xl
                border border-white/10   hover:border-white/80 " >

                    <div className="text-xl font-semibold flex  mb-6">
                        <span className="mr-20 textwhite">INDEV Standard</span>
                        <span> $299</span>
                    </div>
                    {/*  */}
                    <div  >
                        <div className="text-sm mb-2 flex gap-3">
                            @ <p>40h Battery</p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3">
                            @ <p> Adaptive ANC </p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3">
                            @ <p> BT 5.3 LE </p>
                        </div>
                    </div>
                </div>


                {/*  */}
                <div className=" bg-[#090909]  p-10 rounded-3xl
                border border-white/10   hover:border-white/80 ">

                    <div className="text-xl font-semibold flex  mb-6">
                        <span className="mr-20 textwhite">INDEV Pro Edition </span>
                        <span> $399</span>
                    </div>

                    <div>
                        <div className="text-sm mb-2 flex gap-3" >
                            @ <p> 60h Battery</p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3" >
                            @ <p> Adaptive ANC </p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3" >
                            @ <p> BT 5.3 LE </p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3" >
                            @ <p>Aerospace Aluminum </p>
                        </div>
                        <div className="text-sm mb-2 flex gap-3" >
                            @ <p> Hard Case</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mx-78 mr-98 opacity-20 " />
            <button className="bg-white p-3 px-10  rounded-full ml-230 my-6  hover:bg-gray-200  "> Continue + </button>

        </section>
    )
}