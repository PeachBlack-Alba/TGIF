var members = data.results[0].members;

var tbody = document.getElementById("senate-data");

for (var i = 0; i < members.length; i++) {
  var firstName = members[i].first_name;
  var middleName = members[i].middle_name;
  var lastName = members[i].last_name;
  var party = members[i].party;
  var state = members[i].state;
  var yearsOffice = members[i].seniority;
  var votesparty = members[i].votes_with_party_pct;

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
  td2.innerHTML = party;
  tr.appendChild(td2);

  var tr3 = document.createElement("tr");
  var td3 = document.createElement("td");
  td3.innerHTML = state;
  tr.appendChild(td3);

  var tr4 = document.createElement("tr");
  var td4 = document.createElement("td");
  td4.innerHTML = yearsOffice;
  tr.appendChild(td4);

  var tr5 = document.createElement("tr");
  var td5 = document.createElement("td");
  td5.innerHTML = votesparty;
  tr.appendChild(td5);

  tbody.appendChild(tr);
}

/*****************************************************CheckBoxes**********************************/

var members = data.results[0].members;

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
  }
};

//Republican//

var partyR = document.getElementById("republican");
var showMembersR = [];

partyR.addEventListener("click", function(e) {
  if (e.partyR.checked) {
    function checkMembers() {
      for (var i = 0; i < members.length; i++) {
        var party = members[i].party;

        if (party === "D" && party === "I") {
          display = "none";
        } else {
          showMembersR.push(members[i]);
        }
      }
    }
  }
  checkMembers();
});

//Democrat//

var partyD = document.getElementById("democrat");
var showMembersD = [];

partyD.addEventListener("click", function(e) {
  if (e.partyD.checked) {
    function checkMembers() {
      for (var i = 0; i < members.length; i++) {
        var party = members[i].party;

        if (party === "R" && party === "I") {
          display = "none";
        } else {
          showMembersD.push(members[i]);
        }
      }
    }
  }
  checkMembers();
});

//Inpendendent//

var partyI = document.getElementById("independent");
var showMembersI = [];

partyI.addEventListener("click", function(e) {
  if (e.partyI.checked) {
    function checkMembers() {
      for (var i = 0; i < members.length; i++) {
        var party = members[i].party;

        if (party === "R" && party === "D") {
          display = "none";
        } else {
          showMembersI.push(members[i]);
        }
      }
    }
  }
  checkMembers();
});
