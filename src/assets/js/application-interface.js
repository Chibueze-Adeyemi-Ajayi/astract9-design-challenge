function getCandidateName (party) {
    if (party == "Labour Party") return "Peter Obi"
    if (party == "People's Democratic Party") return "Atiku Abubakar"
    if (party == "All Progressives Congress") return "Bola Ahmed Tinubu"
}

function parsePoliticalParty (party) {
    if (party == "Labour Party") return "LP"
    if (party == "People's Democratic Party") return "PDP"
    if (party == "All Progressives Congress") return "APC"
}

function formatInt (num) {
    var format = Intl.NumberFormat("en-US");
    return format.format(num);
}

function getVotePercent (vote, block) {
   var total = 0; try {
    block.forEach(data => {
        total += data.candidate_votes
    });
    return Math.floor((vote/total) * 100) + "%";
   } catch (error) { return "N/A" }
}
  
module.exports = { getCandidateName, parsePoliticalParty, formatInt, getVotePercent }