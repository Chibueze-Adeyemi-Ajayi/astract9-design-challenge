const Map = () => {
    return <section className="w-full h-full flex flex-col space-y-8"> <br></br><br></br>
         <font className="capitalize text-white text-2xl font-semibold">presidential race</font>
         <div className="w-full flex h-full bg-black/20 rounded-md border border-white/20 p-12">
            <div id="map" className="w-[800px] justify-center pt-[75px] h-[800px] mx-auto my-auto"></div>
         </div>
         <div className="w-full h-full p-12 flex space-y-6 justify-end">
            <div className="w-fit -mt-[300px] h-full flex flex-col space-y-6">
                <section className="w-full h-fit flex pr-8 flex-row space-x-4">
                    <div className="w-[30px] h-[30px] bg-[#64CCFF]"></div><font className="text-gray-500 my-auto">APC</font>
                </section>
                <section className="w-full h-fit flex pr-8 flex-row space-x-4">
                    <div className="w-[30px] h-[30px] bg-[#0AA83F]"></div><font className="text-gray-500 my-auto">LP</font>
                </section>
                <section className="w-full h-fit flex pr-8 flex-row space-x-4">
                    <div className="w-[30px] h-[30px] bg-[#D62B3C]"></div><font className="text-gray-500 my-auto">PDP</font>
                </section>
            </div>
         </div>
    </section>
}

export default Map;