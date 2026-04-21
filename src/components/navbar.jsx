export default function NavBar() {
    return (
        <div className="bg-pink-200  mb-6 flex justify-between items-center p-4  bg-black/30 px-24  backdrop-blur-lg  mt-3
            shadow-md rounded-xl  w-[80vw]  h-14  fixed top-2 left-[50%]  z-100  -translate-x-1/2 ">
            <div className=""> <span> # </span> NavBar </div>

            <div className="flex gap-6">
                <a href="/"> Home </a>
                <a href="/features"> Features</a>
                <a href="/buy">Buy</a>
                <a href="/dashboard">Dashboard</a>
                <a href="/controls">Control Panel</a>
            </div>

        </div>
    )
}

