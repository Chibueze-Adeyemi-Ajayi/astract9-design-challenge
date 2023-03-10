import StateResult from "./state-result";
import $ from "jquery";
import FetchHTTPData from "../assets/js/http-connector";
import { useEffect } from "react";
import { formatInt, getCandidateName, getVotePercent, parsePoliticalParty } from "../assets/js/application-interface";

var css = `<style>
.tt_sm{border-radius: 5px;box-shadow: 3px 3px 4px rgba(0,0,0,.5); z-index: 1000000;   background-color: #1E2748;   padding: 7px; opacity:1; font: 12px/1.5 Verdana, Arial, Helvetica, sans-serif; color: white;} 
      .tt_name_sm{float: left; font-weight: bold} 
      .xmark_sm{float: right; margin-left: 5px; cursor: pointer; line-height: 0px;}  
      .tt_custom_sm{ background-color: transparent;} 
      .tt_mobile_sm{margin-top: 5px;} 
      .btn_simplemaps{color: white;text-decoration: none;background: #1E2748;display: inline-block;padding: 5px 5px;margin: 0; width: 100%; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; line-height: 1.43;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border: 1px solid;border-radius: 4px;}   
      .btn_simplemaps:hover{text-decoration: underline;}
</style>`;

// This code section embeds raw JavaScript
function jsRender (block) { localStorage.setItem('state-result', JSON.stringify(block));
console.log(JSON.parse(localStorage.getItem('state-result')));
    setTimeout(() => {
        var script = $("#js-script"); script.append(css);
        script.append(`<script src="js/mapdata.js"></script> <script src="js/countrymap.js"></script>`);
        script.append(`<script>function getCandidateName (party) {
            if (party == "Labour Party") return "Peter Obi"
            if (party == "People's Democratic Party") return "Atiku Abubakar"
            if (party == "All Progressives Congress") return "Bola Ahmed Tinubu"
        }</script>`);
        script.append(`<script>function parsePoliticalParty (party) {
            if (party == "Labour Party") return "LP"
            if (party == "People's Democratic Party") return "PDP"
            if (party == "All Progressive Congress") return "APC"
        }</script>`);
        script.append(`<script>function formatInt (num) {
            var format = Intl.NumberFormat("en-US");
            return format.format(num);
        }</script>`);
        script.append(`<script>function getVotePercent (vote, block) {
            var total = 0; try {
             block.forEach(data => {
                 total += data.candidate_votes
             });
             var per = ((vote/total) * 100);
             return per.toFixed(2) + "%";
            } catch (error) { return "N/A" }
         }</script>`);
        script.append(`<script>
        simplemaps_countrymap.hooks.ready = function (){
            simplemaps_countrymap.hooks.click_state = function (id) {
                $('#candidate-percent-1').html('N/A'); 
                $('#apc-percent').html('N/A'); 
                $('#candidate-percent-3').html('N/A');
                var name = simplemaps_countrymap_mapdata.state_specific[id].name
                var result = localStorage.getItem('state-result');
                var data = JSON.parse(result)[name]; 
                $("#selected-state-name").html(name);
                setTimeout(function () { var x = 0;
                    try {
                        data.forEach(datum => { x ++;
                            var party = parsePoliticalParty(datum.political_party_name);
                            console.log(party)
                            if (party == 'LP') {
                                $('#candidate-vote-1').html(formatInt(datum.candidate_votes));
                                $('#candidate-percent-1').html(getVotePercent(datum.candidate_votes, data));
                            } if (party == "APC") { 
                                $('#apc-vote').html(formatInt(datum.candidate_votes));
                                $('#apc-percent').html(getVotePercent(datum.candidate_votes, data));
                            } if (party == 'PDP') {
                                $('#candidate-vote-3').html(formatInt(datum.candidate_votes));
                                $('#candidate-percent-3').html(getVotePercent(datum.candidate_votes, data));
                            }
                        });
                    } catch (err) {
                        $('#candidate-vote-1').html('N/A'); $('#apc-vote').html('N/A'); $('#candidate-vote-3').html('N/A');
                    }
                }, 1);
            }
            simplemaps_countrymap.hooks.over_state = function (id) {
                var name = simplemaps_countrymap_mapdata.state_specific[id].name
                var result = localStorage.getItem('state-result');
                var data = JSON.parse(result)[name]; 
                setTimeout(function () { var x = 0;
                    data.forEach(datum => { x ++;
                        $('#candidate-' + x + '-name').html(getCandidateName(datum.political_party_name));
                        $('#candidate-' + x + '-name').css({width: '1000px'}); 
                        $('#candidate-' + x + '-party').html(parsePoliticalParty(datum.political_party_name));
                        $('#candidate-' + x + '-vote').html(formatInt(datum.candidate_votes));
                    });
                }, 1);
            }
        }
        </script>`);
    }, 0);
}

function loadStateResults () {
    FetchHTTPData("state_result", response => jsRender(response));
}
// display the generated (Scalable Vector Gr) SVG map
const Map = () => { 
    useEffect(loadStateResults);
    return <>
    <div id="js-script"></div>
    <section className="w-full h-fit flex flex-col space-y-8"> <br></br><br></br>
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
    <div id="my-result-sheet" className="hidden">
        <StateResult />
    </div>
    </>
    
    
}

export default Map;