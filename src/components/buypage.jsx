import { useMemo, useState } from "react"
import { Link } from "react-router-dom"

const STEP_LABELS = ["EDITION", "SHIPPING", "REVIEW", "PAYMENT", "CONFIRMATION"]

const FINISHES = [
    { id: "matte-black", label: "Matte Black", swatch: "bg-[#0F0F0F]" },
    { id: "titanium-silver", label: "Titanium Silver", swatch: "bg-[#D1D5DB]" },
    { id: "midnight-navy", label: "Midnight Navy", swatch: "bg-[#1E293B]" },
]

const EDITIONS = [
    {
        id: "standard",
        name: "INDEV Standard",
        price: 299,
        features: ["40h Battery", "Adaptive ANC", "BT 5.3 LE"],
    },
    {
        id: "pro",
        name: "INDEV Pro Edition",
        price: 399,
        features: ["60h Battery", "Adaptive ANC", "BT 5.3 LE", "Aerospace Aluminum", "Hard Case"],
    },
]

const INPUT_CLASS =
    "h-11 w-full rounded-xl border border-white/10 bg-black px-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/30"

function TopRow() {
    return (
        <header className="flex items-center justify-between border-b border-white/5 px-4 py-5 sm:px-8">
            <div className="flex items-center gap-3">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-semibold text-black">
                    #
                </span>
                <p className="text-lg font-semibold text-white">INDEV</p>
            </div>

            <nav className="hidden items-center gap-7 text-xs text-white/55 md:flex">
                <Link to="/" className="transition hover:text-white">
                    Home
                </Link>
                <Link to="/features" className="transition hover:text-white">
                    Features
                </Link>
                <span className="rounded-full bg-white px-4 py-1.5 text-black">Buy</span>
                <Link to="/dashboard" className="transition hover:text-white">
                    Dashboard
                </Link>
                <Link to="/controls" className="transition hover:text-white">
                    Control Panel
                </Link>
            </nav>
        </header>
    )
}

function StepTracker({ currentStep, onStepClick }) {
    return (
        <div className="overflow-x-auto pb-1">
            <div className="mx-auto min-w-[690px]">
                <div className="relative flex justify-between">
                    <span className="absolute left-[8%] right-[8%] top-4 h-px bg-white/8" />
                    {STEP_LABELS.map((label, index) => {
                        const complete = index <= currentStep
                        return (
                            <button
                                key={label}
                                onClick={() => onStepClick(index)}
                                className="relative z-10 flex flex-col items-center gap-3"
                                type="button"
                            >
                                <span
                                    className={`inline-flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold transition ${complete
                                            ? "border-white bg-white text-black"
                                            : "border-white/15 bg-black text-white/35"
                                        }`}
                                >
                                    #
                                </span>
                                <span className={`text-[10px] tracking-[0.2em] ${complete ? "text-white" : "text-white/35"}`}>
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

function EditionStep({ finish, setFinish, edition, setEdition, next }) {
    return (
        <>
            <h2 className="text-4xl font-semibold text-white">Configure INDEV.</h2>
            <p className="mt-2 text-white/45">Select your preferred edition and finish.</p>

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
                            className={`rounded-3xl border bg-[#090909] p-7 text-left transition ${active ? "border-white/60" : "border-white/10 hover:border-white/35"
                                }`}
                        >
                            <div className="mb-6 flex items-center justify-between text-lg">
                                <p className="text-white">{item.name}</p>
                                <p className="text-white/85">${item.price}</p>
                            </div>

                            <div className="space-y-2">
                                {item.features.map((feature) => (
                                    <p key={feature} className="flex items-center gap-3 text-sm text-white/80">
                                        <span className="text-white/90">#</span>
                                        {feature}
                                    </p>
                                ))}
                            </div>
                        </button>
                    )
                })}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6 text-right">
                <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-11 items-center rounded-full bg-white px-10 text-sm font-medium text-black transition hover:bg-white/90"
                >
                    Continue
                </button>
            </div>
        </>
    )
}

function ShippingStep({ shipping, setShipping, back, next }) {
    const updateField = (field, value) => {
        setShipping((prev) => ({ ...prev, [field]: value }))
    }

    return (
        <>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Shipping details.</h2>
            <p className="mt-2 text-white/45">Where should we send your INDEV?</p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2">
                <label className="text-xs tracking-[0.16em] text-white/45">
                    FULL NAME
                    <input
                        className={`${INPUT_CLASS} mt-2`}
                        value={shipping.fullName}
                        onChange={(event) => updateField("fullName", event.target.value)}
                        placeholder="Jane Doe"
                    />
                </label>
                <label className="text-xs tracking-[0.16em] text-white/45">
                    EMAIL
                    <input
                        className={`${INPUT_CLASS} mt-2`}
                        value={shipping.email}
                        onChange={(event) => updateField("email", event.target.value)}
                        placeholder="jane@example.com"
                    />
                </label>
            </div>

            <label className="mt-6 block text-xs tracking-[0.16em] text-white/45">
                ADDRESS
                <input
                    className={`${INPUT_CLASS} mt-2`}
                    value={shipping.address}
                    onChange={(event) => updateField("address", event.target.value)}
                    placeholder="123 Audio Lane"
                />
            </label>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="text-xs tracking-[0.16em] text-white/45">
                    CITY
                    <input
                        className={`${INPUT_CLASS} mt-2`}
                        value={shipping.city}
                        onChange={(event) => updateField("city", event.target.value)}
                        placeholder="New York"
                    />
                </label>
                <label className="text-xs tracking-[0.16em] text-white/45">
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
                <button type="button" onClick={back} className="text-sm text-white/65 transition hover:text-white">
                    Back
                </button>
                <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-11 items-center rounded-full bg-white px-12 text-sm font-medium text-black transition hover:bg-white/90"
                >
                    Continue
                </button>
            </div>
        </>
    )
}

function ReviewStep({ finishLabel, editionData, shipping, promoCode, setPromoCode, next, back }) {
    return (
        <>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Order summary.</h2>
            <p className="mt-2 text-white/45">Review your configuration before payment.</p>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
                <div className="space-y-6">
                    <div className="rounded-2xl border border-white/10 p-6">
                        <p className="text-xs tracking-[0.2em] text-white/35">HARDWARE</p>
                        <div className="mt-5 flex items-center justify-between text-xl text-white">
                            <p>{editionData.name}</p>
                            <p>${editionData.price}</p>
                        </div>
                        <div className="mt-7 flex items-center justify-between text-sm text-white/60">
                            <p>Finish</p>
                            <p>{finishLabel}</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 p-6">
                        <p className="text-xs tracking-[0.2em] text-white/35">DESTINATION</p>
                        <div className="mt-5 space-y-2 text-white/85">
                            <p>{shipping.fullName || "Jane Doe"}</p>
                            <p>{shipping.address || "123 Audio Lane"}</p>
                            <p>
                                {shipping.city || "New York"} - {shipping.postalCode || "10001"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-white/10 p-6">
                    <p className="text-xs tracking-[0.2em] text-white/35">TOTAL</p>
                    <div className="mt-5 space-y-3 text-white/55">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>${editionData.price}</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Shipping</p>
                            <p className="text-white/85">Complimentary</p>
                        </div>
                    </div>

                    <div className="mt-4 border-t border-white/10 pt-4">
                        <div className="flex items-end justify-between">
                            <p className="text-2xl text-white/85">Total Due</p>
                            <p className="text-5xl font-semibold text-white">${editionData.price}</p>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <input
                            value={promoCode}
                            onChange={(event) => setPromoCode(event.target.value)}
                            className={`${INPUT_CLASS} h-10`}
                            placeholder="PROMO CODE"
                        />
                        <button
                            type="button"
                            className="h-10 rounded-lg border border-white/15 px-6 text-xs tracking-[0.16em] text-white/80 transition hover:border-white/35"
                        >
                            APPLY
                        </button>
                    </div>

                    <p className="mt-3 text-xs text-white/35">Try &apos;STUDIO&apos; for 10% off</p>
                    <button
                        type="button"
                        onClick={next}
                        className="mt-6 h-12 w-full rounded-full bg-white text-base font-medium text-black transition hover:bg-white/90"
                    >
                        Checkout
                    </button>
                </div>
            </div>

            <button type="button" onClick={back} className="mt-6 text-sm text-white/65 transition hover:text-white">
                Back
            </button>
        </>
    )
}

function PaymentStep({ card, setCard, amount, back, next }) {
    const updateField = (field, value) => {
        setCard((prev) => ({ ...prev, [field]: value }))
    }

    return (
        <>
            <h2 className="text-4xl font-semibold text-white sm:text-5xl">Payment.</h2>
            <p className="mt-2 text-white/45">Secure encrypted checkout.</p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-[#050505] p-6 sm:p-8">
                <p className="text-center text-xs tracking-[0.2em] text-white/35">AMOUNT DUE</p>
                <p className="mt-2 text-center text-5xl text-white sm:text-6xl">${amount}</p>

                <div className="mt-7 border-t border-white/10 pt-6">
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

                <p className="mt-5 text-center text-xs text-white/35"># This is a simulated checkout.</p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                <button type="button" onClick={back} className="text-sm text-white/65 transition hover:text-white">
                    Back
                </button>
                <button
                    type="button"
                    onClick={next}
                    className="inline-flex h-11 items-center rounded-full bg-white px-10 text-sm font-medium text-black transition hover:bg-white/90"
                >
                    Authorize Payment
                </button>
            </div>
        </>
    )
}

function ConfirmationStep({ amount, shipping }) {
    return (
        <div className="py-6 text-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-purple-500 to-violet-700 text-3xl font-medium text-white shadow-[0_0_30px_rgba(168,85,247,0.7)]">
                #
            </span>

            <h2 className="mt-8 text-4xl font-semibold text-[#9F44FF] sm:text-5xl">Your focus journey begins.</h2>
            <p className="mt-3 text-white/45">
                Your INDEV headphones are being prepared for dispatch. Thank you for choosing absolute focus.
            </p>

            <div className="mx-auto mt-10 max-w-[500px] space-y-4 border-y border-white/10 py-6 text-sm">
                <div className="flex items-center justify-between">
                    <p className="tracking-[0.16em] text-white/35">ORDER NUMBER</p>
                    <p className="text-[#9F44FF]">INV-88771</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="tracking-[0.16em] text-white/35">DELIVERY ESTIMATE</p>
                    <p className="text-white/85">3-5 Business Days</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="tracking-[0.16em] text-white/35">SHIPPING TO</p>
                    <p className="text-white/85">{shipping.address || "123 Audio Lane"}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="tracking-[0.16em] text-white/35">TOTAL PAID</p>
                    <p className="text-white/85">${amount}</p>
                </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                    to="/"
                    className="inline-flex h-11 items-center rounded-full border border-[#9F44FF]/35 px-10 text-sm text-white transition hover:border-[#9F44FF]/70"
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
        <section className="min-h-screen bg-[#1D1D1F] px-3 pb-8 pt-24 sm:px-5">
            <p className="mx-auto max-w-[1120px] text-sm text-white/35">Purchase {step + 1}</p>

            <div className="mx-auto mt-2 max-w-[1120px] border border-white/8 bg-black">
                <TopRow />

                <div className="px-4 pb-10 pt-12 sm:px-7 md:px-12">
                    <StepTracker currentStep={step} onStepClick={setStep} />

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
                                editionData={editionData}
                                shipping={shipping}
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
                                amount={editionData.price}
                                back={prevStep}
                                next={nextStep}
                            />
                        )}
                        {step === 4 && <ConfirmationStep amount={editionData.price} shipping={shipping} />}
                    </div>
                </div>
            </div>
        </section>
    )
}
