///////////////Fetch function////////////
var members = data.results[0].members;
//API key-y7Nmx6XhWENj7wlayywv15b3CFQtMiExtWTeVU2o
var members;
var url = "https://api.propublica.org/congress/v1/113/house/members.json";
$("#spinner").show();
function getDataHouse() {
  $("#spinner").hide();
  fetch(url, {
    headers: {
      "X-API-Key": "y7Nmx6XhWENj7wlayywv15b3CFQtMiExtWTeVU2o"
    }
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(data) {
      console.log(data);
      members = data.results[0].members;
      allTable(members);
      checkCheckBoxes();
      createStates();
      checkCheckStates();
    })
    .catch(function(error) {
      console.log(error);
    });
}
getDataHouse();

//document.tittle.includes()

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

    // var tr2 = document.createElement("tr");
    var td2 = document.createElement("td");
    td2.innerHTML = party;
    tr.appendChild(td2);

    // var tr3 = document.createElement("tr");
    var td3 = document.createElement("td");
    td3.innerHTML = state;
    tr.appendChild(td3);

    // var tr4 = document.createElement("tr");
    var td4 = document.createElement("td");
    td4.innerHTML = yearsOffice;
    tr.appendChild(td4);

    // var tr5 = document.createElement("tr");
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
    checkboxesValue.push(checkboxes[i].value); //push value in to an empty array
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

//////////////////////////////DropDown Filter by State/////////////////////////////////////////////////

///Función para crear el dropdown y filtrar los repetidos////////
var filteredStates = []; // creamos un empty array
function createStates() {
  // making array of states and dropdown
  filteredStates.push("AALL"); // put all first outside the loop so it doesn't appear everytime
  for (i = 0; i < members.length; i++) {
    // make a loop through the members
    if (filteredStates.indexOf(members[i].state) == -1) {
      // Si hay repetidos no incluir
      filteredStates.push(members[i].state); // push the full member no repetidos en el nuevo array
      filteredStates.sort(); // los ordenamos (por eso "all") esta duera del loop
    }
  }

  for (var a = 0; a < filteredStates.length; a++) {
    // hacemos loop en los estados que hemos filtrado y creamos una lista de opciones
    var option = document.createElement("option");
    option.classList.add("stateOptions"); //lista opciones
    option.setAttribute("value", filteredStates[a]); // atribuimos un valor a los estados filtrados
    option.innerHTML = filteredStates[a]; // ese valor que hemos atribuido será el qué aparecerá en pantalla (AL, ILL...)
    var dropDownOptions = document.getElementById("dropDownBody"); // creamos una variable para posicionar los valores que acabamos de crear, para que aparezcan dentro de la lista
    dropDownOptions.appendChild(option); // posicionamiento
  }
  console.log(filteredStates);
}
createStates();

//// función para crear filteredmembersbystate////

var selectedState = document.getElementById("dropDownBody");
selectedState.addEventListener("change", function() {
  checkCheckStates(selectedState.value); // creamos un addevent listener porque queremos que cada vez que elijamos un estado, ocurra una acción
});
function checkCheckStates(stateValue) {
  // creamos una función para añadir la información de los miembros al selected state, de esa forma, aparecerá toda la información
  var checkStates = document.getElementById("");

  var filteredMembersByState = []; // creamos empty array

  for (i = 0; i < members.length; i++) {
    // loop todos los miembros
    if (stateValue == members[i].state) {
      filteredMembersByState.push(members[i]); // añadimos toda la información del miembro en cuestión al nuevo array que hemos creado
    }
    // if (stateValue == "AALL") {
    //   display = "block";
  }
  allTable(filteredMembersByState); // mostramos la tabla con la información de filteredMembersByState
}

checkCheckStates();

////Función para que aparezca la información de checkboxes y dropdown ///////
