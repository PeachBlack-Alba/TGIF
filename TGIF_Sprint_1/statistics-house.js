/********************************House at a Glance TABLE*************************************/

/*********************************object*****************************************************/
var statisticsHouse = {
  countD: 0,
  countR: 0,
  countI: 0
};

/*************************************first row**************************************/
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
/***********************************Render the first column, function calcStat()************************************************/

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

/*************************************** Votes with party*************************************/
var membersRepArray = [];
var membersDemArray = [];
var membersIndArray = [];

function listHouse() {
  for (i = 0; i < members.length; i++) {
    var party = members[i].party;
    if (party === "R") {
      membersRep = members[i].votes_with_party_pct;
      console.log(membersRep);
      membersRepArray.push(membersRep);
    } else if (party === "D") {
      membersDem = members[i].votes_with_party_pct;
      console.log(membersDem);
      membersDemArray.push(membersDem);
    } else if (party === "I") {
      membersInd = members[i].votes_with_party_pct;
      console.log(membersInd);
      membersIndArray.push(membersInd);
    }
  }
}
document.write(listHouse());

/************************************SUM of numbers****************************************************/
/*******************************************Least engaged House****************************************/
var members = data.results[0].members;

var tbody = document.getElementById("house-data2");

//Get names//
for (var i = 0; i < members.length; i++) {
  var firstName = members[i].first_name;
  var middleName = members[i].middle_name;
  var lastName = members[i].last_name;
  // var party = members[i].party;
  // var state = members[i].state;
  // var yearsOffice = members[i].seniority;
  // var votesparty = members[i].votes_with_party_pct;

  var tr = document.createElement("tr");
  var td1 = document.createElement("td");

  if (middleName === null) {
    td1.innerHTML = firstName + " " + lastName;
  } else {
    td1.innerHTML = firstName + " " + middleName + " " + lastName;
  }
  tr.appendChild(td1);
  tbody.appendChild(tr);
}
