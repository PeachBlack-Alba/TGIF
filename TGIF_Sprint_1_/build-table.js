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
