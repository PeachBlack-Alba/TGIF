/********************************Senate at a Glance TABLE*************************************/

/*********************************object*****************************************************/
var statistics = {
  // countD: 0,
  // countR: 0,
  // countI: 0,
  democrats: {
    count: 0,
    percentage: 0,
    party: "D"
  },
  republicans: {
    count: 0,
    percentage: 0,
    party: "R"
  },
  independents: {
    count: 0,
    percentage: 0,
    party: "D"
  }
};

/*************************************first column************************/

var members = data.results[0].members;

var tbody = document.getElementById("senate-data");

calcTotalMembers();

function calcTotalMembers() {
  for (var i = 0; i < members.length; i++) {
    var party = members[i].party;

    if (party === "D") {
      console.log(party);
      statistics.democrats.count++;
    }

    if (party === "R") {
      console.log(party);
      statistics.republicans.count++;
    }
    if (party === "I") {
      console.log(party);
      statistics.independents.count++;
    }
  }
  console.log("democrats " + statistics.democrats.count);
}

// function to calculate total percentage votes

////////////////// function calculateTotalPercentageVotes/////////////
var membersRepArray = [];
var membersDemArray = [];
var membersIndArray = [];
var total = 0;
var averagePercentageRepublicans = total / statistics.republicans.count;
var averagePercentageDemocrats = total / statistics.democrats.count;
var averagePercentageIndependents = total / statistics.independents.count;

function calculateTotalPercentageVotes() {
  for (i = 0; i < members.length; i++) {
    var party = members[i].party;
    if (party === "R") {
      membersRep = members[i].votes_with_party_pct;
      total = total + membersRep;
      membersRepArray.push(membersRep);
      console.log(averagePercentageRepublicans);
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

  console.log(
    "averagepercentageRepublicans " + total / statistics.republicans.count
  );
}
document.write(calculateTotalPercentageVotes(averagePercentageDemocrats));

/////////////////////////Render table///////////////////////////

function renderSenateAtGlance(target) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  td1.innerHTML = target;

  if (target === "Democrats") {
    td2.innerHTML = statistics.democrats.count;
    td3.innerHTML = averagePercentageDemocrats;
  } else if (target === "Republicans") {
    td2.innerHTML = statistics.republicans.count;
    td3.innerHTML = averagePercentageRepublicans;
  } else {
    td2.innerHTML = statistics.independents.count;
    td3.innerHTML = averagePercentageIndependents;
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
