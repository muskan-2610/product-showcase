import { useMemo, useState } from "react"
import { Link } from "react-router-dom"

//icons 
import { BsBoxFill } from "react-icons/bs";
import { BsFillBox2HeartFill } from "react-icons/bs";
import { FaUpRightFromSquare } from "react-icons/fa6";
import { FaCcAmazonPay } from "react-icons/fa";
import { IoCloudDone } from "react-icons/io5";
import { RiCornerUpRightDoubleFill } from "react-icons/ri";
import { FaRegHandPointRight } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { IoHeadset } from "react-icons/io5";

const STEP_LABELS = ["EDITION", "SHIPPING", "REVIEW", "PAYMENT", "CONFIRMATION"]
const STEP_ICONS = [BsBoxFill, BsFillBox2HeartFill, FaUpRightFromSquare, FaCcAmazonPay, IoCloudDone]

const FINISHES = [
    { id: "matte-black", label: "Matte Black", swatch: "bg-[#0F0F0F]" },
    { id: "titanium-silver", label: "Titanium Silver", swatch: "bg-[#D1D5DB]" },
    { id: "midnight-navy", label: "Midnight Navy", swatch: "bg-[#1E293B]" },
]

const EDITIONS = [
    {
        id: "standard",
        name: "INDEV Standard",
        price: 4999,
        features: ["40h Battery", "Adaptive ANC", "BT 5.3 LE"],
    },
    {
        id: "pro",
        name: "INDEV Pro Edition",
        price: 5999,
        features: ["60h Battery", "Adaptive ANC", "BT 5.3 LE", "Aerospace Aluminum", "Hard Case"],
    },
]

const INPUT_CLASS =
    "h-11 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/30"

// btns
function StepTracker({ currentStep, onStepClick }) {
    return (
        <div className="overflow-x-auto pt-14 pb-1">
            <div className="max-w-3xl mx-auto min-w-[520px] sm:min-w-0 px-2 sm:px-0">
                <div className="relative flex justify-between gap-2 sm:gap-0">
                    <span className="absolute left-[8%] right-[8%] top-4 h-px bg-white/8" />
                    {STEP_LABELS.map((label, index) => {
                        const complete = index <= currentStep
                        const Icon = STEP_ICONS[index]
                        return (
                            <button
                                key={label}
                                onClick={() => onStepClick(index)}
                                className="relative z-10 flex min-w-[86px] sm:min-w-0 flex-col items-center gap-2 sm:gap-3"
                                type="button"
                            >
                                <span
                                    className={`inline-flex h-10 w-10 sm:h-13 sm:w-13 items-center justify-center rounded-full border text-sm font-semibold transition ${complete
                                        ? " border-2 border-purple-500 bg-white text-black  "
                                        : "border-white/15 bg-black text-white/35"
                                        }`}
                                >
                                    {Icon ? <Icon className="text-sm sm:text-base" aria-hidden="true" /> : "#"}
                                </span>
                                <span className={`text-[8px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] text-center whitespace-nowrap ${complete ? "text-white" : "text-white/35"}`}>
                                    {label}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

// 1
function EditionStep({ finish, setFinish, edition, setEdition, next }) {
    return (
        <>
            <h2 className="text-4xl font-semibold purple">Configure INDEV.</h2>
            <p className="mt-2 text-white/45 text-sm">Select your preferred edition and finish.</p>

            <p className="mt-10 text-xs font-semibold tracking-[0.16em] text-white/55">COLOR FINISH</p>
            <div className="mt-5 flex flex-wrap gap-8">
                {FINISHES.map((item) => {
                    const active = finish === item.id
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setFinish(item.id)}
                            className="group flex flex-col items-center gap-2 text-xs text-white/70"
                        >
                            <span
                                className={`h-14 w-14 rounded-full ${item.swatch} ${active ? "ring-2 ring-white ring-offset-2 ring-offset-black" : "ring-1 ring-white/15"
                                    }`}
                            />
                            <span className={active ? "text-white" : ""}>{item.label}</span>
                        </button>
                    )
                })}
            </div>

            <p className="mt-10 text-xs font-semibold tracking-[0.16em] text-white/55">MODEL EDITION</p>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
                {EDITIONS.map((item) => {
                    const active = edition === item.id
                    return (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => setEdition(item.id)}
                            className={`rounded-3xl border bg-[#090909]
                                    hover:bg-purple-500/10 hover:border-purple-400  hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] 
                                p-6 text-left transition ${active ? "border-white/60" : "border-white/10 hover:border-white/35"
                                }`}
                        >
                            <div className="mb-6 flex items-center justify-between text-lg font-medium">
                                <p className="text-white">{item.name}</p>
                                <p className="purple">₹{item.price}</p>
                            </div>

                            <div className="space-y-2">
                                {item.features.map((feature) => (
                                    <p key={feature} className="flex items-center gap-3 text-xs text-white/80">
                                        <span className="purple"><RiCornerUpRightDoubleFill /></span>
                                        {feature}
                                    </p>
                                ))}
                            </div>
                        </button>
                    )
                })}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-right ">
                <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-11 gap-1.5 items-center rounded-full bg-white px-8 text-sm font-medium text-black transition hover:bg-white/90 hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                >
                    Continue  <FaRegHandPointRight />
                </button>
            </div>
        </>
    )
}

// 2
function ShippingStep({ shipping, setShipping, back, next }) {
    const updateField = (field, value) => {
        setShipping((prev) => ({ ...prev, [field]: value }))
    }

    return (
        <>
            <h2 className="text-4xl font-semibold purple ">Shipping details.</h2>
            <p className="mt-2 text-white/45 text-sm">Where should we send your INDEV?</p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 ">
                <label className="text-xs tracking-[0.16em] purple">
                    FULL NAME
                    <input
                        className={`${INPUT_CLASS} mt-2`}
                        value={shipping.fullName}
                        onChange={(event) => updateField("fullName", event.target.value)}
                        placeholder="Jane Doe"

                    />
                </label>
                <label className="text-xs tracking-[0.16em] purple">
                    EMAIL
                    <input
                        className={`${INPUT_CLASS} mt-2`}
                        value={shipping.email}
                        onChange={(event) => updateField("email", event.target.value)}
                        placeholder="jane@example.com"
                    />
                </label>
            </div>

            <label className="mt-6 block text-xs tracking-[0.16em] purple">
                ADDRESS
                <input
                    className={`${INPUT_CLASS} mt-2`}
                    value={shipping.address}
                    onChange={(event) => updateField("address", event.target.value)}
                    placeholder="123 Audio Lane"
                />
            </label>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="text-xs tracking-[0.16em] purple">
                    CITY
                    <input
                        className={`${INPUT_CLASS} mt-2`}
                        value={shipping.city}
                        onChange={(event) => updateField("city", event.target.value)}
                        placeholder="New York"
                    />
                </label>
                <label className="text-xs tracking-[0.16em] purple">
                    POSTAL CODE
                    <input
                        className={`${INPUT_CLASS} mt-2`}
                        value={shipping.postalCode}
                        onChange={(event) => updateField("postalCode", event.target.value)}
                        placeholder="10001"
                    />
                </label>
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-7">
                <button type="button" onClick={back} className="text-md text-white/65 transition hover:text-white">
                    Back
                </button>
                <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-11  gap-1.5 items-center rounded-full bg-white px-8 text-sm font-medium text-black transition hover:bg-white/90
                        hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                >
                    Continue <FaRegHandPointRight />
                </button>
            </div>
        </>
    )
}

// 3 
function ReviewStep({ finishLabel, editionData, subtotal, shipping, promoCode, setPromoCode, next, back }) {
    return (
        <>
            <h2 className="text-4xl font-semibold purple ">Order summary.</h2>
            <p className="mt-2 text-white/45 text-sm">Review your configuration before payment.</p>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                <div className="space-y-6">
                    <div className="rounded-2xl border border-white/10 p-6 
                    hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ">
                        <p className="text-xs tracking-[0.2em] text-white/35">HARDWARE</p>
                        <div className="mt-2 flex items-center justify-between text-lg text-white">
                            <p>{editionData.name}</p>
                            <p className="purple">₹{editionData.price}</p>
                        </div>
                        <div className="mt-3 flex items-center justify-between text-sm text-white/60">
                            <p>Finish</p>
                            <p >{finishLabel}</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 p-6
                        hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ">
                        <p className="text-xs tracking-[0.2em] text-white/35">DESTINATION</p>
                        <div className="mt-2 space-y-2 purple text-sm">
                            <p>{shipping.fullName || "Jane Doe"}</p>
                            <p>{shipping.address || "123 Audio Lane"}</p>
                            <p>
                                {shipping.city || "New York"} - {shipping.postalCode || "10001"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-white/10 p-6
                    hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ">
                    <p className="text-xs tracking-[0.2em] text-white">TOTAL</p>
                    <div className="mt-5 space-y-3 text-white/55">
                        <div className="flex justify-between text-sm">
                            <p>Subtotal</p>
                            <p className="text-white">₹{subtotal}</p>
                        </div>
                        <div className="flex justify-between text-sm">
                            <p>Shipping</p>
                            <p className="text-white/85">Complimentary</p>
                        </div>
                        {promoCode === "INDEV10" && (
                            <div className="flex justify-between">
                                <p>Promo Discount</p>
                                <p className="text-green-400">-₹{Math.round(subtotal * 0.1)}</p>
                            </div>
                        )}
                    </div>

                    <div className="mt-4 border-t border-white/10 pt-4">
                        <div className="flex items-end justify-between">
                            <p className="text-2xl text-white/85">Total Due</p>
                            <p className="text-4xl font-semibold purple">₹{editionData.price}</p>
                        </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                        <input
                            value={promoCode}
                            onChange={(event) => setPromoCode(event.target.value)}
                            className={`${INPUT_CLASS} h-6`}
                            placeholder="PROMO CODE"
                        />
                    </div>

                    <p className="mt-3 text-xs text-white/70">Try &apos;INDEV10&apos; for 10% off</p>
                    <button
                        type="button"
                        onClick={next}
                        className="mt-5 h-10 w-full flex gap-1.5 justify-center items-center rounded-full bg-white text-base font-medium text-black transition hover:bg-white/90
                        hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] "
                    >
                        Checkout <FaRegHandPointRight />
                    </button>
                </div>
            </div>

            <button type="button" onClick={back} className=" text-md text-white/65 transition hover:text-white">
                Back
            </button>
        </>
    )
}

// 4
function PaymentStep({ card, setCard, amount, back, next }) {
    const updateField = (field, value) => {
        setCard((prev) => ({ ...prev, [field]: value }))
    }

    return (
        <>
            <h2 className="text-4xl font-semibold purple">Payment.</h2>
            <p className="mt-2 text-white/45 text-sm">Secure encrypted checkout.</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#050505] p-6 sm:p-8
                hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] ">
                <p className="text-center text-xs tracking-[0.2em] text-white/35">AMOUNT DUE</p>
                <p className="mt-2 text-center text-5xl purple ">₹{amount}</p>

                <div className="mt-4 border-t border-white/10 pt-6">
                    <label className="text-xs tracking-[0.16em] text-white/45">
                        CARD NUMBER
                        <input
                            className={`${INPUT_CLASS} mt-2`}
                            value={card.number}
                            onChange={(event) => updateField("number", event.target.value)}
                            placeholder="0000 0000 0000 0000"
                        />
                    </label>

                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                        <label className="text-xs tracking-[0.16em] text-white/45">
                            EXPIRY DATE
                            <input
                                className={`${INPUT_CLASS} mt-2`}
                                value={card.expiry}
                                onChange={(event) => updateField("expiry", event.target.value)}
                                placeholder="MM/YY"
                            />
                        </label>
                        <label className="text-xs tracking-[0.16em] text-white/45">
                            CVC
                            <input
                                className={`${INPUT_CLASS} mt-2`}
                                value={card.cvc}
                                onChange={(event) => updateField("cvc", event.target.value)}
                                placeholder="123"
                            />
                        </label>
                    </div>

                    <label className="mt-4 block text-xs tracking-[0.16em] text-white/45">
                        NAME ON CARD
                        <input
                            className={`${INPUT_CLASS} mt-2`}
                            value={card.name}
                            onChange={(event) => updateField("name", event.target.value)}
                            placeholder="JANE DOE"
                        />
                    </label>
                </div>

                <p className="mt-5 text-center text-xs text-white/35 flex justify-center gap-2 items-center"><IoMdDoneAll className="purple " /> This is a simulated checkout.</p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <button type="button" onClick={back} className="text-md text-white/65 transition hover:text-white">
                    Back
                </button>
                <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-11 flex gap-1.5 justify-center items-center rounded-full bg-white px-10 text-sm font-medium text-black transition hover:bg-white/90  hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] "
                >
                    Authorize Payment  <FaRegHandPointRight />
                </button>
            </div>
        </>
    )
}

// 5
function ConfirmationStep({ amount, shipping }) {
    return (
        <div className="py-6 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-b from-purple-500 to-violet-700 text-3xl font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.7)]">
                < IoHeadset />
            </span>

            <h2 className="mt-8 text-4xl font-semibold text-[#9F44FF] ">Your focus journey begins.</h2>
            <p className="mt-3 text-white/45 text-sm">
                Your INDEV headphones are being prepared for dispatch. Thank you for choosing absolute focus.
            </p>

            <div className="mx-auto mt-10 max-w-[500px] space-y-4 border-y border-white/10 py-6 text-sm">
                <div className="flex items-center justify-between">
                    <p className="tracking-[0.16em] text-white/35 text-xs">ORDER NUMBER</p>
                    <p className="text-[#9F44FF]">INV-88771</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="tracking-[0.16em] text-white/35 text-xs">DELIVERY ESTIMATE</p>
                    <p className="text-white/85">3-5 Business Days</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="tracking-[0.16em] text-white/35 text-xs">SHIPPING TO</p>
                    <p className="text-white/85">{shipping.address || "123 Audio Lane"}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="tracking-[0.16em] text-white/35 text-xs">TOTAL PAID</p>
                    <p className="purple">₹{amount}</p>
                </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                    to="/"
                    className="inline-flex h-11 items-center rounded-full border border-[#9F44FF]/35 px-10 text-sm text-white transition hover:border-[#9F44FF]/70
                        hover:bg-purple-500/10 hover:border-purple-400 
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] "
                >
                    Return Home
                </Link>
                <button
                    type="button"
                    className="inline-flex h-11 items-center rounded-full bg-gradient-to-r from-[#8A2CFF] to-[#B74DFF] px-10 text-sm text-white shadow-[0_0_20px_rgba(159,68,255,0.6)] transition hover:brightness-110"
                >
                    Track Order
                </button>
            </div>
        </div>
    )
}

// st
export default function BuyPage() {
    const [step, setStep] = useState(0)
    const [selectedFinish, setSelectedFinish] = useState(FINISHES[0].id)
    const [selectedEdition, setSelectedEdition] = useState(EDITIONS[0].id)
    const [promoCode, setPromoCode] = useState("")
    const [shipping, setShipping] = useState({
        fullName: "Jane Doe",
        email: "jane@example.com",
        address: "123 Audio Lane",
        city: "New York",
        postalCode: "10001",
    })
    const [card, setCard] = useState({
        number: "0000 0000 0000 0000",
        expiry: "MM/YY",
        cvc: "123",
        name: "JANE DOE",
    })

    const editionData = useMemo(
        () => EDITIONS.find((item) => item.id === selectedEdition) ?? EDITIONS[0],
        [selectedEdition]
    )
    const finishLabel = useMemo(
        () => FINISHES.find((item) => item.id === selectedFinish)?.label ?? FINISHES[0].label,
        [selectedFinish]
    )

    const nextStep = () => setStep((prev) => Math.min(prev + 1, STEP_LABELS.length - 1))
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 0))

    return (
        <div className="mx-auto mt-2  py-10 pb-26 ">

            <div className="px-4 pb-10 pt-12 sm:px-7 md:px-12">
                <StepTracker currentStep={step} />

                <div className="mx-auto mt-12 max-w-[840px]">
                    {step === 0 && (
                        <EditionStep
                            finish={selectedFinish}
                            setFinish={setSelectedFinish}
                            edition={selectedEdition}
                            setEdition={setSelectedEdition}
                            next={nextStep}
                        />
                    )}
                    {step === 1 && (
                        <ShippingStep shipping={shipping} setShipping={setShipping} back={prevStep} next={nextStep} />
                    )}
                    {step === 2 && (
                        <ReviewStep
                            finishLabel={finishLabel}
                            editionData={promoCode === "INDEV10" ? { ...editionData, price: Math.round(editionData.price - editionData.price * 0.1) } : editionData}
                            shipping={shipping}
                            subtotal={editionData.price}
                            promoCode={promoCode}
                            setPromoCode={setPromoCode}
                            next={nextStep}
                            back={prevStep}
                        />
                    )}
                    {step === 3 && (
                        <PaymentStep
                            card={card}
                            setCard={setCard}
                            amount={promoCode === "INDEV10" ? Math.round(editionData.price - editionData.price * 0.1) : editionData.price}
                            back={prevStep}
                            next={nextStep}
                        />
                    )}
                    {step === 4 && <ConfirmationStep amount={promoCode === "INDEV10" ? Math.round(editionData.price - editionData.price * 0.1) : editionData.price} shipping={shipping} />}
                </div>
            </div>
        </div>
    )
}
