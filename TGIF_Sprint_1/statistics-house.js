/********************************Senate at a Glance TABLE*************************************/

/*********************************object*****************************************************/
var statistics = {
  countD: 0,
  countR: 0,
  countI: 0
};

/*************************************first row************************/
var members = data.results[0].members;

var tbody = document.getElementById("senate-data");

calcStat();

function calcStat() {
  for (var i = 0; i < members.length; i++) {
    var party = members[i].party;

    if (party === "D") {
      console.log(party);
      statistics.countD++;
    }

    if (party === "R") {
      console.log(party);
      statistics.countR++;
    }
    if (party === "I") {
      console.log(party);
      statistics.countI++;
    }
  }
}
