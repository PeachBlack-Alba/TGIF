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
//   renderGlanceTable();

// function renderGlanceTable() {
//   var tdName = document.createElement("td");

//   for (var i = 0; i < stats2.length; i++) {
//     var row = document.createElement("tr");
//     for (var g = 0; g < 3; g++) {
//       var cel = document.createElement("td");
//       tdName.innerHTML = stats2.senateAtGlance[0].name;
//     }
//   }
//   console.log(renderGlanceTable);
// }

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

/********************************fourth row*******************************/

// var total = [];

// var tr = document.createElement("tr");
// var td7 = document.createElement("td");
// var td8 = document.createElement("td");
// td7.innerHTML = "Total";
// td8.innerHTML = total;
// tr.appendChild(td7);
// tr.appendChild(td8);

// tbody.appendChild(tr);

/**********************************************List*******************/
var membersRepArray = []; // creates an array
function listRep() {
  for (i = 0; i < members.length; i++) {
    var parties = members[i].party;
    if (parties === "R") {
      console.log(members[i]);
      membersRep = members[i].votes_with_party_pct;
      console.log(membersRep);
      membersRepArray.push(membersRep);
    }
  }
}
console.log(listRep());
// Getting sum of numbers.
var sum = membersRepArray.reduce(function(a, b) {
  return a + b;
}, 0);
console.log(sum);

var totalRep = sum / membersRepArray.length;
console.log(totalRep);

/**********************************************Least Engaged TABLE************************/

var members = data.results[0].members;

var tbody = document.getElementById("senate-data2");
var count = 0;
for (var i = 0; i < members.length; i++) {
  var party = members[i].party;

  if (party === "D") {
    console.log(party);
    count++;
  }
}
console.log(count);

var tr = document.createElement("tr");
var td1 = document.createElement("td");
var td2 = document.createElement("td");
td1.innerHTML = "Democrats";
td2.innerHTML = count;

tr.appendChild(td1);
tr.appendChild(td2);

tbody.appendChild(tr);
