/********************************House at a Glance TABLE*************************************/

/*********************************object*****************************************************/
var statisticsHouse = {
  countD: 0,
  countR: 0,
  countI: 0
};

/*************************************first row************************/
var members = data.results[0]["members"];
// console.log(members);

var tbody = document.getElementById("house-data");

calcStatHouse();

function calcStatHouse() {
  for (var i = 0; i < members.length; i++) {
    var party = members[i].party;

    if (party === "D") {
      console.log(party);
      statisticsHouse.countD++;
    }

    if (party === "R") {
      console.log(party);
      statisticsHouse.countR++;
    }
    if (party === "I") {
      console.log(party);
      statisticsHouse.countI++;
    }
  }
}

//Render the first column, function calcStat()//

function renderHouseAtGlance(target) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  td1.innerHTML = target;
  if (target === "Democrats") {
    td2.innerHTML = statisticsHouse.countD;
  } else if (target === "Republicans") {
    td2.innerHTML = statisticsHouse.countR;
  } else {
    td2.innerHTML = statisticsHouse.countI;
  }

  tr.appendChild(td1);
  tr.appendChild(td2);
  //   tbody.appendChild(tr);
}
renderHouseAtGlance("Democrats");
renderHouseAtGlance("Republicans");
renderHouseAtGlance("Independents");

// Votes with party//
var membersRepArray = [];
var membersDemArray = [];
var membersIndArray = [];

function list() {
  for (i = 0; i < members.length; i++) {
    var party = members[i].party;
    if (party === "R") {
      console.log(members[i]);
      membersRep = members[i].votes_with_party_pct;
      console.log(membersRep);
      membersRepArray.push(membersRep);
    } else if (party === "D") {
      console.log(members[i]);
      membersDem = members[i].votes_with_party_pct;
      console.log(membersDem);
      membersDemArray.push(membersDem);
    } else if (party === "I") {
      console.log(members[i]);
      membersInd = members[i].votes_with_party_pct;
      console.log(membersInd);
      membersIndArray.push(membersInd);
    }
  }
}
console.log(list());
