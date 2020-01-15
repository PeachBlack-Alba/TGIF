/********************************Senate at a Glance TABLE*************************************/

/*********************************object*****************************************************/
var statistics = {
  countD: 0,
  countR: 0,
  countI: 0
};

/*************************************first column************************/

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

//Render the first column, function calcStat()//

function renderSenateAtGlance(target) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  td1.innerHTML = target;
  if (target === "Democrats") {
    td2.innerHTML = statistics.countD;
  } else if (target === "Republicans") {
    td2.innerHTML = statistics.countR;
  } else {
    td2.innerHTML = statistics.countI;
  }

  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
renderSenateAtGlance("Democrats");
renderSenateAtGlance("Republicans");
renderSenateAtGlance("Independents");

/********************************total row*******************************/

// var total = [];

// var tr = document.createElement("tr");
// var td7 = document.createElement("td");
// var td8 = document.createElement("td");
// td7.innerHTML = "Total";
// td8.innerHTML = total;
// tr.appendChild(td7);
// tr.appendChild(td8);

// tbody.appendChild(tr);

/*************************************** Votes with party*************************************/

var membersRepArray = [];
var membersDemArray = [];
var membersIndArray = [];

function listsenate() {
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
document.write(listsenate());

/**********************************************Least Engaged TABLE************************/

var members = data.results[0].members;

var tbody = document.getElementById("senate-data2");

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

// var members = data.results[0].members;

// var tbody = document.getElementById("senate-data2");
// var count = 0;
// for (var i = 0; i < members.length; i++) {
//   var party = members[i].party;

//   if (party === "D") {
//     console.log(party);
//     count++;
//   }
// }
// console.log(count);

// var tr = document.createElement("tr");
// var td1 = document.createElement("td");
// var td2 = document.createElement("td");
// td1.innerHTML = "Democrats";
// td2.innerHTML = count;

// tr.appendChild(td1);
// tr.appendChild(td2);

// tbody.appendChild(tr);
