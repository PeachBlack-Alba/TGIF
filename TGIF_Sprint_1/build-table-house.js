////////////////////////////ALL TABLE//////////////////
var members = data.results[0].members;

var tbody = document.getElementById("house-data");
function allTable(members) {
  tbody.innerHTML = ""; //we clear the table so it doesn't print first members and then filtered members
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
}
document.write(allTable(members));

///////////////////////////////////CheckBoxes////////////////////////////////

//Republican//

var partyR = document.getElementById("republican");

partyR.addEventListener("click", function(e) {
  checkCheckBoxes();
});

//Democrat//

var partyD = document.getElementById("democrat");

partyD.addEventListener("click", function(e) {
  checkCheckBoxes();
});

//Inpendendent//

var partyI = document.getElementById("independent");

var alert = document.getElementById("alert");
console.log(partyI.checked);

partyI.addEventListener("click", function(e) {
  checkCheckBoxes();
});
//////////////////////////Function checkcheckboxes/////////////////
function checkCheckBoxes() {
  var partyR = document.getElementById("republican");
  var partyD = document.getElementById("democrat");
  var partyI = document.getElementById("independent");

  var checkboxes = Array.from(
    document.querySelectorAll("input[name=checkboxes]:checked")
  );
  var checkboxesValue = [];
  for (i = 0; i < checkboxes.length; i++) {
    checkboxesValue.push(checkboxes[i].value); //.map(elt => elt.value)
  }

  var filteredMembers = [];
  if (
    partyI.checked == false &&
    partyD.checked == false &&
    partyR.checked == false
  ) {
    document.getElementById("alert").style.display = "block";
  }
  for (i = 0; i < members.length; i++) {
    if (partyI.checked == true && members[i].party == "I") {
      filteredMembers.push(members[i]);
    }
    if (partyD.checked == true && members[i].party == "D") {
      filteredMembers.push(members[i]);
    }
    if (partyR.checked == true && members[i].party == "R") {
      filteredMembers.push(members[i]);
    }
  }
  if (
    partyI.checked == true ||
    partyD.checked == true ||
    partyR.checked == true
  ) {
    document.getElementById("alert").style.display = "none"; // if any checkboxes is checked, don't show alert
  }

  allTable(filteredMembers); // call the function with the general table to print it with the filtered memebers
}
checkCheckBoxes();
