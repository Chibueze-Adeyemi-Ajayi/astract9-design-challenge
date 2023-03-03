import React from "react";
import Chart from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
    weight: .5,
  //labels: labels,
  datasets: [
    {
      weight: .5,
      label: "My First dataset",
      backgroundColor: [ "#D62B3C","#449352",],
      borderColor: "transparent",
      cutout: "70%",
      data: [40000000, 130512222],
    },
  ],
};

const MapRegion = () => {
    return <section className="w-full flex h-full -mt-24 bg-black/20 rounded-md border border-white/20 px-4 py-8">
        <div className="w-full h-full grid grid-cols-4 gap-4">
            {/* pie chart */}
            <div className="w-full flex h-full bg-transparent border border-white/20 p-3 rounded-md">
                <div className="w-full h-full flex flex-col">
                    <div className="w-48 h-48 mx-auto my-auto p-1">
                        {/* <section className="w-56 flex h-56 mx-auto my-auto border border-white/20 rounded-full"> */}
                            <Doughnut data={data} />
                            <div className="w-fit my-auto mx-auto -mt-[6.8rem] flex flex-col space-y-0 text-center h-fit">
                                <font className="font-light text-sm uppercase text-gray-100">total votes</font>
                                <font className="font-medium text-gray-100 text-lg">168,192,222</font>
                            </div>
                        {/* </section>  */}
                    </div>
                    <div className="w-fit h-fit pl-10 flex text-gray-100 flex-col space-y-1">
                        <font className="uppercase w-36 text-gray-400 text-sm font-light">accepted votes</font>
                    <font className="text-gray-100 font-medium">160,512,222</font>
                </div>
                </div>
                <div className="w-fit h-fit mt-2 -ml-5 flex text-gray-100 flex-col space-y-1">
                    <font className="uppercase w-36 text-gray-400 text-sm font-light">rejected votes</font>
                    <font className="text-gray-100 font-medium">8,400,000</font>
                </div>
            </div>
            {/* candidate grouping by geo-political zone */}
            <div className="w-full col-span-2 flex h-full bg-transparent border border-white/20 p-3 rounded-md">

            </div>
            {/* elected members */}
            <div className="w-full flex h-full bg-transparent border border-white/20 p-3 rounded-md">
                <section className="w-full h-full flex px-3 py-6 flex-col space-y-8">
                    <div className="w-full h-fit flex flex-col">
                        <font className="uppercase text-gray-100 text-sm font-light w-full">total elected members</font>
                        <font className="text-gray-100 font-medium text-xl">10,000</font>
                    </div>
                    <div className="w-full h-fit flex flex-col">
                        <font className="uppercase text-gray-100 text-sm font-light w-full">male</font>
                        <font className="text-gray-100 font-medium text-xl">9,000</font>
                    </div>
                    <div className="w-full h-fit flex flex-col">
                        <font className="uppercase text-gray-100 text-sm font-light w-full">female</font>
                        <font className="text-gray-100 font-medium text-xl">1,000</font>
                    </div>
                </section>
            </div>
        </div>
    </section>
}

export default MapRegion;