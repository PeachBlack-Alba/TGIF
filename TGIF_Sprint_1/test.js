var members = data.results[0].members;
console.log(members);
$("#senate-data").show(),
  $("#senate-data2").hide(),
  $("#senate-data3").hide(),
  $("#senate-data4").hide();

// Checkbox Rep
var checkRep = document.getElementById("checkRep");
checkRep.addEventListener("change", event => {
  if (event.target.checked) {
    $("#senate-data").hide(),
      $("#senate-data2").show(),
      $("#senate-data3").hide(),
      $("#senate-data4").hide();
  } else {
    $("#senate-data").show(),
      $("#senate-data2").hide(),
      $("#senate-data3").hide(),
      $("#senate-data4").hide();
  }
});

// Checkbox Dem
var checkDem = document.getElementById("checkDem");
checkDem.addEventListener("change", event => {
  if (event.target.checked) {
    $("#senate-data").hide(),
      $("#senate-data2").hide(),
      $("#senate-data3").show(),
      $("#senate-data4").hide();
  } else {
    $("#senate-data").show(),
      $("#senate-data2").hide(),
      $("#senate-data3").hide(),
      $("#senate-data4").hide();
  }
});

// Checkbox Ind
var checkInd = document.getElementById("checkInd");
checkInd.addEventListener("change", event => {
  if (event.target.checked) {
    $("#senate-data").hide(),
      $("#senate-data2").hide(),
      $("#senate-data3").hide(),
      $("#senate-data4").show();
  } else {
    $("#senate-data").show(),
      $("#senate-data2").hide(),
      $("#senate-data3").hide(),
      $("#senate-data4").hide();
  }
});

// All
var tableBody = document.getElementById("senate-data");
function printTable() {
  for (i = 0; i < members.length; i++) {
    {
      if (members[i].middle_name !== null) {
        var name =
          members[i].first_name +
          "&nbsp" +
          members[i].middle_name +
          "&nbsp" +
          members[i].last_name;
      } else var name = members[i].first_name + "&nbsp" + members[i].last_name;
    }
    var parties = members[i].party;
    var states = members[i].state;
    var seniorities = members[i].seniority;
    var votes = members[i].votes_with_party_pct + " %";
    var tr = document.createElement("tr");
    var td1 = document.createElement("td"),
      td2 = document.createElement("td"),
      td3 = document.createElement("td"),
      td4 = document.createElement("td"),
      td5 = document.createElement("td");
    td1.innerHTML = name;
    td2.innerHTML = parties;
    td3.innerHTML = states;
    td4.innerHTML = seniorities;
    td5.innerHTML = votes;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tableBody.appendChild(tr);
  }
}
document.write(printTable());

// REP
var tableBody2 = document.getElementById("senate-data2");
function printTable2() {
  for (i = 0; i < members.length; i++) {
    var parties = members[i].party;
    if (parties === "R") {
      {
        if (members[i].middle_name !== null) {
          var name =
            members[i].first_name +
            "&nbsp" +
            members[i].middle_name +
            "&nbsp" +
            members[i].last_name;
        } else
          var name = members[i].first_name + "&nbsp" + members[i].last_name;
      }
      var parties2 = members[i].party;
      var states = members[i].state;
      var seniorities = members[i].seniority;
      var votes = members[i].votes_with_party_pct + " %";
      var tr = document.createElement("tr");
      var td1 = document.createElement("td"),
        td2 = document.createElement("td"),
        td3 = document.createElement("td"),
        td4 = document.createElement("td"),
        td5 = document.createElement("td");
      td1.innerHTML = name;
      td2.innerHTML = parties2;
      td3.innerHTML = states;
      td4.innerHTML = seniorities;
      td5.innerHTML = votes;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tableBody2.appendChild(tr);
    } else {
    }
  }
}
document.write(printTable2());

// DEM
var tableBody3 = document.getElementById("senate-data3");
function printTable3() {
  for (i = 0; i < members.length; i++) {
    var parties = members[i].party;
    if (parties === "D") {
      {
        if (members[i].middle_name !== null) {
          var name =
            members[i].first_name +
            "&nbsp" +
            members[i].middle_name +
            "&nbsp" +
            members[i].last_name;
        } else
          var name = members[i].first_name + "&nbsp" + members[i].last_name;
      }
      var parties2 = members[i].party;
      var states = members[i].state;
      var seniorities = members[i].seniority;
      var votes = members[i].votes_with_party_pct + " %";
      var tr = document.createElement("tr");
      var td1 = document.createElement("td"),
        td2 = document.createElement("td"),
        td3 = document.createElement("td"),
        td4 = document.createElement("td"),
        td5 = document.createElement("td");
      td1.innerHTML = name;
      td2.innerHTML = parties2;
      td3.innerHTML = states;
      td4.innerHTML = seniorities;
      td5.innerHTML = votes;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tableBody3.appendChild(tr);
    } else {
    }
  }
}
document.write(printTable3());

// IND
var tableBody = document.getElementById("senate-data4");
function printTable4() {
  for (i = 0; i < members.length; i++) {
    var parties = members[i].party;
    if (parties === "I") {
      {
        if (members[i].middle_name !== null) {
          var name =
            members[i].first_name +
            "&nbsp" +
            members[i].middle_name +
            "&nbsp" +
            members[i].last_name;
        } else
          var name = members[i].first_name + "&nbsp" + members[i].last_name;
      }
      var parties2 = members[i].party;
      var states = members[i].state;
      var seniorities = members[i].seniority;
      var votes = members[i].votes_with_party_pct + " %";
      var tr = document.createElement("tr");
      var td1 = document.createElement("td"),
        td2 = document.createElement("td"),
        td3 = document.createElement("td"),
        td4 = document.createElement("td"),
        td5 = document.createElement("td");
      td1.innerHTML = name;
      td2.innerHTML = parties2;
      td3.innerHTML = states;
      td4.innerHTML = seniorities;
      td5.innerHTML = votes;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tableBody.appendChild(tr);
    } else {
    }
  }
}
document.write(printTable4());

function filterTable() {
  // Variables
  let dropdown, table, rows, cells, country, filter;
  dropdown = document.getElementById("countriesDropdown");
  table = document.getElementById("myTable");
  rows = table.getElementsByTagName("tr");
  filter = dropdown.value;

  // Loops through rows and hides those with countries that don't match the filter
  for (let row of rows) {
    // `for...of` loops through the NodeList
    cells = row.getElementsByTagName("td");
    country = cells[2] || null; // gets the 3rd `td` or nothing
    // if the filter is set to 'All', or this is the header row, or 2nd `td` text matches filter
    if (filter === "All" || !country || filter === country.textContent) {
      row.style.display = ""; // shows this row
    } else {
      row.style.display = "none"; // hides this row
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////
