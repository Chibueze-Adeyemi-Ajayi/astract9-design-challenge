const getBgcolor = (party) => {
    if (party == "apc") return "bg-cyan-300";
    else if (party == "lp") return "bg-[#0AA83F]";
    else return "bg-red-700";
}

const Stateresults = () => {

    var json_data = {
        states: [
            "Abia", "adamawa", "akwa ibom", "anambra", "bauchi", "bayelsa", "benue", "borno", "cross river", "delta",
            "ebonyi", "edo", "ekiti", "enugu", "gombe", "imo", "jigawa", "kaduna", 
            "kano", "katsina", "kebbi", "kogi", "kwara", "lagos", "nasarawa", "niger", "ogun", "ondo", "osun", "oyo",
            "plateau", "rivers", "sokoto", "taraba", "yobe", "zamfara", "abuja"
        ], leading: [
            "lp", "pdp", "lp", "lp", "apc", "lp", "lp", "lp", "lp", "lp", "lp", "lp", "lp", "lp", "pdp", "lp", "pdp",
            "apc", "apc", "apc", "apc", "lp", "lp", "apc", "apc", "apc", "apc", "apc", "apc", "apc", "lp", "lp", "apc",
            "pdp", "pdp", "apc", "apc"
        ],
        apc: "34%", lp: "53%", pdp: "53%"
    }
    const states = [], states_2 = []; var i = 0;
    json_data.states.forEach(state => { i ++;
        var elem = <tr class="border-b text-gray-100 border-collapse border border-blue-900">
                        <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap capitalize border-collapse border border-blue-900">
                            {state}
                        </th>
                        <td class="px-6 py-2 border-collapse border border-blue-900">
                            {json_data.apc}
                        </td>
                        <td class="px-6 py-2 border-collapse border border-blue-900">
                            {json_data.lp}
                        </td>
                        <td class="px-6 py-2 border-collapse border border-blue-900">
                            {json_data.pdp}
                        </td>
                        <td class={"px-6 py-2 border-collapse uppercase text-center border border-blue-900 " + getBgcolor(json_data.leading[i])}>
                            {json_data.leading[i]}
                        </td>
                    </tr>;
        if (i >= 19) 
         states_2.push(elem)
        else
        states.push(elem);
    });
    return <section className="w-fullrounded-md h-full pt-20 flex">
        <div className="w-full h-full flex flex-col border border-gray-800 rounded-md">
            <div className="w-full h-fit p-4 bg-black/30">
                <h1 className="text-white text-2xl">State Results</h1>
            </div>
            <section className="w-full h-full grid grid-cols-2 gap-20">
            
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500">
                        <thead class="text-xs text-gray-100 uppercase  border-collapse border border-blue-900">
                            <tr>
                                <th scope="col" class="px-6 py-3  border-collapse border border-blue-900">
                                    States
                                </th>
                                <th scope="col" class="px-6 py-3 border-collapse border border-blue-900">
                                    APC
                                </th>
                                <th scope="col" class="px-6 py-3 border-collapse border border-blue-900">
                                    LP
                                </th>
                                <th scope="col" class="px-6 py-3 border-collapse border border-blue-900">
                                    PDP
                                </th>
                                <th scope="col" class="px-6 py-3 border-collapse border border-blue-900">
                                    Leading
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {states}
                        </tbody>
                    </table>
                </div>

                <div class="relative overflow-x-auto shadow-md">
                    <table class="w-full text-sm text-left text-gray-500">
                        <thead class="text-xs text-gray-100 uppercase  border-collapse border border-blue-900">
                            <tr>
                                <th scope="col" class="px-6 py-3  border-collapse border border-blue-900">
                                    States
                                </th>
                                <th scope="col" class="px-6 py-3 border-collapse border border-blue-900">
                                    APC
                                </th>
                                <th scope="col" class="px-6 py-3 border-collapse border border-blue-900">
                                    LP
                                </th>
                                <th scope="col" class="px-6 py-3 border-collapse border border-blue-900">
                                    PDP
                                </th>
                                <th scope="col" class="px-6 py-3 border-collapse border border-blue-900">
                                    Leading
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {states_2}
                        </tbody>
                    </table>
                </div>

            </section>
        </div>
    </section>
}

export default Stateresults;