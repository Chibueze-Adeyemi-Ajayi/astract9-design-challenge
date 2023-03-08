import "flowbite"
import $, { isArray } from "jquery";
import FetchHTTPData from "../assets/js/http-connector";
// Importing candidate images
import atiku from "../assets/img/atiku.png";
import obi from "../assets/img/obi.png";
import tinubu from "../assets/img/tinubu.png";
// Importing ployical parties
import apc from "../assets/img/apc.png";
import lp from "../assets/img/lp.png";
import pdp from "../assets/img/pdp.png";

function parsePoliticalParty (party) {
  if (party == "Labour Party") return "LP"
  if (party == "People's Democratic Party") return "PDP"
  if (party == "All Progressives Congress") return "APC"
}

function getPercentage (vote, total_vote) {
    var percentage = (vote/total_vote) * 100;
    console.log(vote, total_vote);
    return `(${Math.round(percentage)}%)`;
}

function fetchSenateElectionData () {
    FetchHTTPData("senate", (response) => {
        if (isArray(response)) {
            if (response.length <= 2) {
                $("#senate").fadeOut();
                return;
            }
        } else {  $("#senate").fadeOut(); $("#senate-result").fadeIn(); return}
        alert(`This is the JSON tree to be parsed: ${JSON.stringify(response)}`);
    });
}


function fetchHouseElectionData () {
    FetchHTTPData("house", (response) => {
        if (isArray(response)) {
            if (response.length <= 2) {
                $("#house").fadeOut();
                return;
            }
        } else {  $("#house").fadeOut(); $("#house-result").fadeIn(); return;}
        alert(`This is the JSON tree to be parsed: ${JSON.stringify(response)}`);
    });
}


function fetchPresidentialData () {  $("#presidential-loader-error-message").fadeOut();
    var senate = $("#senate-house"), region = $("#map-region"), state__ = $("#state-results"), presidential = $("#presidential");
    fetchSenateElectionData(); fetchHouseElectionData();
    FetchHTTPData("president", (response) => { $("#presidential-loader").fadeOut(250);
        if (isArray(response)) {
            if (response.length <= 0) {
                presidential.fadeOut(500); senate.fadeOut(500); region.fadeOut(500); state__.fadeOut(500);
                $("#presidential-loader-error-message").fadeIn();
                return;
            }
        } else {
            presidential.fadeOut(500); senate.fadeOut(500); region.fadeOut(500); state__.fadeOut(500);
            $("#presidential-loader-error-message").fadeIn();
            return;
        }
        state__.fadeIn(700); presidential.fadeIn(700); senate.fadeIn(700); region.fadeOut(700);
        // parsing the data
        var x = 0, total_votes = 0;
        response.forEach(result => { total_votes += result.candidates_vote; });
        response.forEach(result => { x ++;
            var candidate_id = result.candidate_id; var elem = $("#bar-" + x);
            // matching if the score with LP
            if (candidate_id == "01gsxaa3v52mbr3aspbjn4w9bh") {
                var vote = result.candidates_vote; vote = vote.toString();var numFormat = Intl.NumberFormat("en-US");
                vote = numFormat.format(vote); 
                elem.css("background-color", "#0AA83F"); $("#picx-" + x).attr("src", obi); $("#name-" + x).css("color", "#0AA83F");
                $("#name-" + x).html(`${result.full_name}, ${parsePoliticalParty(result.political_party_name)}`); $("#vote-" + x).html(vote+ " votes " + getPercentage(result.candidates_vote, total_votes));
            }
            // matching if APC
            if (candidate_id == "01gsxaarzz4gnvqykbb3ryewja") {
                var vote = result.candidates_vote; vote = vote.toString();var numFormat = Intl.NumberFormat("en-US");
                vote = numFormat.format(vote); 
                elem.css("background-color", "#64CCFF"); $("#picx-" + x).attr("src", tinubu); $("#name-" + x).css("color", "#64CCFF");
                $("#name-" + x).html(`${result.full_name}, ${parsePoliticalParty(result.political_party_name)}`); $("#vote-" + x).html(vote + " votes " + getPercentage(result.candidates_vote, total_votes));
            }
            // matching if PDP
            if (candidate_id == "01gsxab585djcfcneefkpten1r") {
                var vote = result.candidates_vote; vote = vote.toString();var numFormat = Intl.NumberFormat("en-US");
                vote = numFormat.format(vote); 
                elem.css("background-color", "#D62B3C"); $("#picx-" + x).attr("src", atiku); $("#name-" + x).css("color", "#D62B3C");
                $("#name-" + x).html(`${result.full_name}, ${parsePoliticalParty(result.political_party_name)}`); $("#vote-" + x).html(vote + " votes " + getPercentage(result.candidates_vote, total_votes));
            }
        })
        setTimeout(() => {
            $('html, body').animate({
                scrollTop: presidential.offset().top
            }, 500);
        }, 500);
    });
}

const DropButton = (props) => {
    let array = [], x  = -1; 
    props.children.forEach(child => { x ++;
        array.push( <li onClick={() => {
            var presidential = $("#presidential"), senate = $("#senate-house"),
                region = $("#map-region"), state__ = $("#state-results");
            if (props.target_id == "btn-1") { $(`#${props.id}`).trigger("onclick")
                if (child == "Pre-Election") {//alert
                    presidential.fadeOut(500); senate.fadeOut(500); region.fadeOut(500); state__.fadeOut(500);
                    $('html, body').animate({
                        scrollTop: $("#app").offset().top
                    }, 500);
                } else if (child == "Election Day Live Update") {
                    $("#presidential-loader").fadeIn();presidential.fadeOut(250); senate.fadeOut(250); region.fadeOut(250); state__.fadeOut(250);
                    // fetching presidential data result
                    fetchPresidentialData();
                } else {
                    presidential.fadeOut(500); senate.fadeOut(700);region.fadeIn(1500); state__.fadeOut(1200);
                    $('html, body').animate({
                        scrollTop: region.offset().top
                    }, 1000);
                }
                $(`#${props.target_id}`).show();
            }
        }}>
            <a href="#" className={(x < props.children.length - 1 ? "border-b" : "") + " block border-gray-800 px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600 dark:hover:text-white"}>{child}</a>
          </li> )
    });
    return <div className="w-full h-full flex flex-row space-x-2">
        <button id={props.id} data-dropdown-toggle={props.target_id} className="text-white w-full flex-row space-x-2 mx-auto font-light rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700" type="button"> 
            <font className="w-full text-left text-gray-100">{props.title}</font>
            <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id={props.target_id} className="z-10 border border-gray-800 hidden bg-gray-900 divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700">
            <ul className="text-sm text-gray-100 dark:text-gray-200" aria-labelledby={props.id}>
                {array}
            </ul>
        </div>
    </div>
}


const ElectionData = (props) => {
  return <section className="w-full h-fit grid grid-cols-5 gap-5">
    <div className="w-full h-full flex flex-col space-y-3">
        <div className="w-full h-full flex flex-row space-x-2">
            <font className="font-bold w-96 h-fit flex text-3xl text-gray-100">Election&nbsp;Data</font>
            <font className="w-fit text-gray-100 text-sm h-fit p-1 flex flex-row border rounded-md mt-1 space-x-1 bg-black/20 border-gray-800">
                <font className="uppercase font-semibold">presidential</font>
                <font>/</font>
                <font className="uppercase font-semibold">2023</font>
            </font>
        </div>
        <font className="uppercase font-light text-gray-100"><font className="text-yellow-400">updated</font> mar.15, 9:43 a.m. edt</font>
    </div><div></div>
    <div className="w-full h-[3rem] flex p-2 bg-black/20 rounded-md border border-gray-800"><DropButton title="Election Data" target_id="btn-1" id="drop-btn-1" children={
     [ "Pre-Election", "Election Day Live Update", "post Election Analysis" ]} /></div>
    <div className="w-full h-[3rem] flex p-2 bg-black/20 rounded-md border border-gray-800"><DropButton title="Presidential" target_id="btn-2" id="drop-btn-2" children={
     [ "Presidential", "Gubernatorial", "Senate", "House of representatives" ]
    } /></div>
    <div className="w-full h-[3rem] flex p-2 bg-black/20 rounded-md border border-gray-800"><DropButton title="2023" target_id="btn-3" id="drop-btn-3" children={
     [ "2023", "2019", "2015", "2011", "2007", "2003", "1999", "1995", "1991", "1987" ]
    } /></div>
    
  </section>
}

export default ElectionData;