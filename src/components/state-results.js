import { useState } from "react";
import FetchHTTPData from "../assets/js/http-connector";
// returning color pe
const getBgcolor = (party) => {
    if (party == "apc") return "bg-cyan-300";
    else if (party == "lp") return "bg-[#0AA83F]";
    else if (party == "pdp") return "bg-red-700";
    else return "bg-transparent"
}

function parsePoliticalParty (party) {
    if (party == "Labour Party") return "LP"
    if (party == "People's Democratic Party") return "PDP"
    if (party == "All Progressives Congress") return "APC"
}

function capitalize (word) {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    const capitalizedWord = firstLetterCap + remainingLetters
    return capitalizedWord
}

const Stateresults = () => { 
    const [state_1_var, state_1_func] = useState(<></>);
    const [state_2_var, state_2_func] = useState(<></>);
    var percentages = []; const states = [], states_2 = []; var i = 0;
    var json_data = {
        states: [
            "Abia", "adamawa", "akwa ibom", "anambra", "bauchi", "bayelsa", "benue", "borno", "cross river", "delta",
            "ebonyi", "edo", "ekiti", "enugu", "gombe", "imo", "jigawa", "kaduna", 
            "kano", "katsina", "kebbi", "kogi", "kwara", "lagos", "nasarawa", "niger", "ogun", "ondo", "osun", "oyo",
            "plateau", "rivers", "sokoto", "taraba", "yobe", "zamfara", "abuja"
        ], leading: [],
        apc: "34%", lp: "53%", pdp: "53%"
    }
    
    FetchHTTPData("state_result", response => { 
        // console.log(response);
        json_data.states.forEach(state => {
            if (response.hasOwnProperty(capitalize(state))) { var total_vote = 0;
                var state_response = response[capitalize(state)];
                state_response.forEach(state_r => { total_vote += state_r["candidate_votes"]; });
                var data = {apc: 0, lp: 0, pdp: 0}
                var pdp_vote = 0, apc_vote = 0, lp_vote = 0;
                state_response.forEach(state_r => { 
                    var vote = state_r.candidate_votes;
                    var percentage = Math.floor((vote/total_vote) * 100);
                    if (state_r.political_party_name == "Labour Party") {
                        data.lp = percentage + "%"; lp_vote = vote;
                    } else if (state_r.political_party_name == "People's Democratic Party") {
                        data.pdp = percentage + "%"; pdp_vote = vote;
                    } else if (state_r.political_party_name == "All Progressive Congress") { 
                        data.apc = percentage + "%"; apc_vote = vote;
                    }
                });
                if (pdp_vote > apc_vote && pdp_vote > lp_vote) json_data.leading.push("pdp");
                if (lp_vote > apc_vote && lp_vote > pdp_vote) json_data.leading.push("lp");
                if (apc_vote > lp_vote && apc_vote > pdp_vote) json_data.leading.push("apc");
                percentages.push(data);
            } else {percentages.push({ apc: "N/A", lp: "N/A", pdp: "N/A" });json_data.leading.push("N/A");}
        });
        
        json_data.states.forEach(state => { i ++; 
            var vote_percent = percentages[i - 1]
            var elem = <tr className="border-b text-gray-100 border-collapse border border-blue-900">
                            <th scope="row" className="px-6 py-2 font-medium whitespace-nowrap capitalize border-collapse border border-blue-900">
                                {state}
                            </th>
                            <td className="px-6 py-2 border-collapse border border-blue-900">
                                {vote_percent.apc}
                            </td>
                            <td className="px-6 py-2 border-collapse border border-blue-900">
                                {vote_percent.lp}
                            </td>
                            <td className="px-6 py-2 border-collapse border border-blue-900">
                                {vote_percent.pdp}
                            </td>
                            <td className={"px-6 py-2 border-collapse uppercase text-center border border-blue-900 " + getBgcolor(json_data.leading[i - 1])}>
                                {json_data.leading[i - 1]}
                            </td>
                        </tr>;
            if (i >= 19) 
            states_2.push(elem)
            else
            states.push(elem);
        });
        state_1_func(states); state_2_func(states_2); //console.log(percentages[0].apc);
    });
    
    return <section className="w-fullrounded-md h-full pt-20 flex">
        <div className="w-full h-full flex flex-col border border-gray-800 rounded-md">
            <div className="w-full h-fit p-4 bg-black/30">
                <h1 className="text-white text-2xl">State Results</h1>
            </div>
            <section className="w-full h-full grid grid-cols-2 gap-20">
            
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-100 uppercase  border-collapse border border-blue-900">
                            <tr>
                                <th scope="col" className="px-6 py-3  border-collapse border border-blue-900">
                                    States
                                </th>
                                <th scope="col" className="px-6 py-3 border-collapse border border-blue-900">
                                    APC
                                </th>
                                <th scope="col" className="px-6 py-3 border-collapse border border-blue-900">
                                    LP
                                </th>
                                <th scope="col" className="px-6 py-3 border-collapse border border-blue-900">
                                    PDP
                                </th>
                                <th scope="col" className="px-6 py-3 border-collapse border border-blue-900">
                                    Leading
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {state_1_var}
                        </tbody>
                    </table>
                </div>

                <div className="relative overflow-x-auto shadow-md">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-100 uppercase  border-collapse border border-blue-900">
                            <tr>
                                <th scope="col" className="px-6 py-3  border-collapse border border-blue-900">
                                    States
                                </th>
                                <th scope="col" className="px-6 py-3 border-collapse border border-blue-900">
                                    APC
                                </th>
                                <th scope="col" className="px-6 py-3 border-collapse border border-blue-900">
                                    LP
                                </th>
                                <th scope="col" className="px-6 py-3 border-collapse border border-blue-900">
                                    PDP
                                </th>
                                <th scope="col" className="px-6 py-3 border-collapse border border-blue-900">
                                    Leading
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {state_2_var}
                        </tbody>
                    </table>
                </div>

            </section>
        </div>
    </section>
}

export default Stateresults;