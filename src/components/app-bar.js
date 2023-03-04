import logo from "../assets/img/logo.png";

const AppBar = () => {
    return  <header id="header" className="fixed z-40 w-full top-0 left-0 bg-[#1E2748]">
        <section className="w-full bg-black/30 p-6 h-20 gap-2 grid grid-cols-9">
            <img className="w-42 h-8 col-span-2" src={logo} />
            <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">About us</font>
            <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">OUR communities</font>
            <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">election data</font>
            <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">e-buddy</font>
            <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">veo platform</font>
            <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">login</font>
            <section className="flex w-full h-full">
                <button className="text-gray-900 w-24 h-10 -mt-2 bg-[#E5B805] rounded-sm text-sm uppercase font-semibold">signup</button>
            </section> <br></br>
        </section>
    </header>
    
}

export default AppBar;