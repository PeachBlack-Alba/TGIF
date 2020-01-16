/////////////////////////////////HOUSE at a Glance TABLE///////////////////////////////////////

/*********************************object*****************************************************/
var statistics = {
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
  },
  missedVotes: 0,
  missedVotesPct: 0,
  votesWithPartypct: 0,
  votesAgainstPartyPct: 0,
  leastEngaged: [],
  mostEngaged: []
};

/*************************************first column************************/

var members = data.results[0].members;

var tbody = document.getElementById("house-data");

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

/********************************function calculateTotalPercentageVotes***********************/

function calculateTotalPercentageVotes() {
  var totalR = 0;
  var totalD = 0;
  var totalI = 0;
  for (i = 0; i < members.length; i++) {
    var party = members[i].party;
    if (party === "R") {
      var membersRep = members[i].votes_with_party_pct;
      totalR = totalR + membersRep;
    } else if (party === "D") {
      membersDem = members[i].votes_with_party_pct;
      totalD = totalD + membersDem;
    } else if (party === "I") {
      membersInd = members[i].votes_with_party_pct;
      totalI = totalI + membersInd;
    }
  }
  console.log(totalD);

  statistics.republicans.percentage = totalR / statistics.republicans.count;
  statistics.democrats.percentage = totalD / statistics.democrats.count;
  statistics.independents.percentage = totalI / statistics.independents.count;
}
calculateTotalPercentageVotes();

/************************************Render table****************************************/

function renderHouseAtGlance(target) {
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  var td2 = document.createElement("td");
  var td3 = document.createElement("td");
  td1.innerHTML = target;

  if (target === "Democrats") {
    td2.innerHTML = statistics.democrats.count;
    td3.innerHTML = Math.round(statistics.democrats.percentage);
  } else if (target === "Republicans") {
    td2.innerHTML = statistics.republicans.count;
    td3.innerHTML = Math.round(statistics.republicans.percentage);
  } else {
    td2.innerHTML = statistics.independents.count;
    td3.innerHTML = Math.round(statistics.independents.percentage);
  }

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);

  tbody.appendChild(tr);
}
renderHouseAtGlance("Democrats");
renderHouseAtGlance("Republicans");
renderHouseAtGlance("Independents");

/////////////////////////////////Least Engaged House////////////////////////////////

//object for this function is on the top of the page//
var members = data.results[0].members;

var tbody = document.getElementById("house-data2");

/*******Function to get Least Engaged 10% missed votes******/

function calcMissedVotes() {
  var sortedMembers = members.sort(function mySorter(a, b) {
    return a.missed_votes_pct - b.missed_votes_pct; // Because its an object, we cant use just sort.(), it loops each member member a memberb and access the key in the object. Gets the value of the key and compares with a and b and does the order.
  });

  for (var i = 0; i < sortedMembers.length; i++) {
    var tenPercent = sortedMembers.length * 0.1;
    if (statistics.leastEngaged.length < tenPercent) {
      //statistics.leastEngaged = lo ponemos en un object para usarlo cuando queramos

      statistics.leastEngaged.push(sortedMembers[i]);
    }
  }
}
calcMissedVotes();

/*********RENDER in a table CalcMissedVotes*********/
var members = data.results[0].members;

var tbody = document.getElementById("house-data2");

function renderLeastEngagedTable() {
  for (var i = 0; i < statistics.leastEngaged.length; i++) {
    var leastEngaged = statistics.leastEngaged[i];
    var firstName = leastEngaged.first_name;
    var middleName = leastEngaged.middle_name;
    var lastName = leastEngaged.last_name;
    var missedVotes = leastEngaged.missed_votes;
    var missedVotesPct = leastEngaged.missed_votes_pct;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");

    if (middleName === null) {
      td1.innerHTML = firstName + " " + lastName;
    } else {
      td1.innerHTML = firstName + " " + middleName + " " + lastName;
    }
    tr.appendChild(td1);

    var tr2 = document.createElement("tr");
    var td2 = document.createElement("td");
    td2.innerHTML = missedVotes;
    tr.appendChild(td2);

    var tr3 = document.createElement("tr");
    var td3 = document.createElement("td");
    td3.innerHTML = missedVotesPct;
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}
renderLeastEngagedTable();

/////////////////////////////////Least Engaged House////////////////////////////////

//object for this function is on the top of the page//

/*******Function to get Most Engaged 10% missed votes******/
function calcMostEngaged() {
  var sortedMembers = members.sort(function mySorter(a, b) {
    return b.missed_votes_pct - a.missed_votes_pct;
  });

  for (var i = 0; i < sortedMembers.length; i++) {
    var tenPercent = sortedMembers.length * 0.1;
    if (statistics.mostEngaged.length < tenPercent) {
      //statistics.leastEngaged = lo ponemos en un object para usarlo cuando queramos

      statistics.mostEngaged.push(sortedMembers[i]);
    }
  }
}
calcMostEngaged();
console.log(statistics.mostEngaged);

/********************Render in a table Most engaged 10%***************************/
var tbody = document.getElementById("house-data3");

function renderMostEngagedTable() {
  for (var i = 0; i < statistics.mostEngaged.length; i++) {
    var mostEngaged = statistics.mostEngaged[i];
    var firstName = mostEngaged.first_name;
    var middleName = mostEngaged.middle_name;
    var lastName = mostEngaged.last_name;
    var missedVotes = mostEngaged.missed_votes;
    var missedVotesPct = mostEngaged.missed_votes_pct;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");

    if (middleName === null) {
      td1.innerHTML = firstName + " " + lastName;
    } else {
      td1.innerHTML = firstName + " " + middleName + " " + lastName;
    }
    tr.appendChild(td1);

    var tr2 = document.createElement("tr");
    var td2 = document.createElement("td");
    td2.innerHTML = missedVotes;
    tr.appendChild(td2);

    var tr3 = document.createElement("tr");
    var td3 = document.createElement("td");
    td3.innerHTML = missedVotesPct;
    tr.appendChild(td3);

    tbody.appendChild(tr);
  }
}
renderMostEngagedTable();
