// Importing candidate images
import atiku from "../assets/img/atiku.png";
import obi from "../assets/img/obi.png";
import tinubu from "../assets/img/tinubu.png";
// Importing plotical parties
import apc from "../assets/img/apc.png";
import lp from "../assets/img/lp.png";
import pdp from "../assets/img/pdp.png";
// Importing running mates
import shettima from "../assets/img/shettima.png";
import okowa from "../assets/img/okowa.png";
import datti from "../assets/img/datti.png";

const StateResult = () => {
    return <section className="w-full z-40 -mt-[200px] mb-[0px] h-fit flex flex-col bg-[#1E2748]">
        <div className="w-full h-fit flex flex-col bg-black/30">
            <h1 id="selected-state-name" className="text-gray-100 p-6 bg-black/30 w-full  font-medium text-md">N/A</h1>
            <section className="w-full h-fit gap-y-3 p-6 grid grid-cols-8">
                <font className="w-full capitalize text-sm col-span-2 text-gray-400">Party</font>
                <font className="w-full capitalize text-sm col-span-2 text-gray-400">presidential candidate</font>
                <font className="w-full capitalize text-sm col-span-2 text-gray-400">running mate</font>
                <font className="w-full capitalize text-sm text-gray-400">votes</font>
                <font className="w-full capitalize text-sm text-gray-400">percentage</font>

                <div className="flex space-x-2 flex-row text-white-gray col-span-2 text-gray-100 font-medium">
                    <img className="w-5 h-5" src={lp}></img> <font className="-mt-1">LP</font> 
                </div>
                <div id="candidate-name-1" className="flex space-x-2 flex-row text-white-gray col-span-2 text-gray-100">
                    <img className="w-5 h-5 rounded-full" src={obi}></img> <font className="">Peter Obi</font> </div>
                <div id="candidate-running-mate-1" className="flex space-x-2 flex-row text-white-gray col-span-2 text-gray-100 font-medium">
                    <img className="w-5 h-5 rounded-full" src={datti}></img> <font className="-mt-1">Baba Ahmed Yusuf Datti</font></div>
                <div id="candidate-vote-1" className="flex flex-row text-white-gray text-gray-100 font-medium">20,0000,000</div>
                <div id="candidate-percent-1" className="flex flex-row text-white-gray text-gray-100 font-medium">20%</div>

                <div className="flex space-x-2 flex-row text-white-gray col-span-2 text-gray-100 font-medium">
                    <img className="w-5 h-5" src={apc}></img> <font className="-mt-1">APC</font> 
                </div>
                <div className="flex space-x-2 flex-row text-white-gray col-span-2 text-gray-100">
                <img className="w-5 h-5 rounded-full" src={tinubu}></img> <font className="-mt-1">Tinubu Bola Ahmed</font></div>
                <div className="flex space-x-2 flex-row text-white-gray col-span-2 text-gray-100 font-medium">
                <img className="w-5 h-5 rounded-full" src={shettima}></img> <font className="-mt-1">Shettima Kashim</font></div>
                <div id="apc-vote" className="flex flex-row text-white-gray text-gray-100 font-medium">20,0000,000</div>
                <div id="apc-percent" className="flex flex-row text-white-gray text-gray-100 font-medium">20%</div>

                <div className="flex space-x-2 flex-row text-white-gray col-span-2 text-gray-100 font-medium">
                    <img className="w-5 h-5" src={pdp}></img> <font className="-mt-1">PDP</font> 
                </div>
                <div className="flex space-x-2 flex-row text-white-gray col-span-2 text-gray-100">
                <img className="w-5 h-5 rounded-full" src={atiku}></img> <font className="-mt-1">Abubakar Atiku</font></div>
                <div className="flex space-x-2 flex-row text-white-gray col-span-2 text-gray-100 font-medium">
                <img className="w-5 h-5 rounded-full" src={okowa}></img> <font className="-mt-1">Okowa Arthur Ifeanyi</font></div>
                <div id="candidate-vote-3" className="flex flex-row text-white-gray text-gray-100 font-medium">20,0000,000</div>
                <div id="candidate-percent-3" className="flex flex-row text-white-gray text-gray-100 font-medium">20%</div>

            </section>
        </div>
    </section>
}

export default StateResult;