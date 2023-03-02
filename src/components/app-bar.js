import logo from "../assets/img/logo.png";

const AppBar = () => {
    return <section className="w-full h-16 bg-inherit gap-3 grid grid-cols-9">
        <img className="w-42 h-8 col-span-2" src={logo} />
        <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">About us</font>
        <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">OUR communities</font>
        <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">election data</font>
        <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">e-buddy</font>
        <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">veo platform</font>
        <font className="text-gray-100 text-center text-sm uppercase font-semibold mt-1">login</font>
        <section className="flex w-full h-full">
            <button className="text-gray-900 w-24 h-10 -mt-2 bg-yellow-400 rounded-sm text-sm uppercase font-semibold">signup</button>
        </section>
    </section>
}

export default AppBar;