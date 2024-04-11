function validateForm() {
  let pick = document.getElementById("pickup").value;
  let drop = document.getElementById("des").value;
  let type = document.getElementById("vehi").value;
  let km = parseFloat(document.getElementById("distance").value);
  console.log('km', km);
  let vehicleData = { km: km, type: type };
  vehicleData = JSON.stringify(vehicleData);
  console.log('vehicleData', vehicleData);
  sessionStorage.setItem("vehicleData", vehicleData);

  if (pick == "" || drop == "" || km == "") {
    alert("Please fill out all fields to proceed");
  } else {
    document
      .getElementById("myform")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Form submitted!");
        // Redirect to another page
        window.location.href = "price list.html"; // Replace 'another-page.html' with your desired page URL
      });
  }
  return km;
}

// let dist = validateForm();

function rent() {
  let vehicleData = sessionStorage.getItem("vehicleData");
  vehicleData = JSON.parse(vehicleData);
  let km = parseInt(vehicleData.km);
  let type = vehicleData.type;
  
  if (type == "E") {
    document.getElementById("moneye").innerHTML = `${"$"+10 * km}`;
  } else if (type == "C") {
    document.getElementById("moneyc").innerHTML = `${"$"+50 * km}`;
  } else if (type == "J") {
    document.getElementById("moneyj").innerHTML = `${"$"+55 * km}`;
  } else if (type == "V") {
    document.getElementById("moneyv").innerHTML = `${"$"+65 * km}`;
  } else if (type == "S") {
    document.getElementById("moneys").innerHTML = `${"$"+70 * km}`;
  } else if(type == "B"){
    document.getElementById("moneyb").innerHTML = `${"$"+30 * km}`;
  } else{
      document.getElementById("moneye").innerHTML = `${"$"+10 * km}`;
      document.getElementById("moneyc").innerHTML = `${"$"+50 * km}`;
      document.getElementById("moneyj").innerHTML = `${"$"+55 * km}`;
      document.getElementById("moneyv").innerHTML = `${"$"+65 * km}`;
      document.getElementById("moneys").innerHTML = `${"$"+70 * km}`;
      document.getElementById("moneyb").innerHTML = `${"$"+30 * km}`;
  }
}
function back(){

  window.location.href = "front pg.html";
}
  /*
			switch(type){
			case 'E':
					fee=10000*km;
					break;
			case 'C':
					fee=5000*km;
					break;
			case 'J':
					fee=5500*km;
					break;
			case 'V':
					fee=6500*km;
					break;
			case 'S':
					fee=7000*km;
					break;
			case 'B':
					fee=3000*km;
					break;
			
			}
			
			document.getElementById("money").innerHTML = fee;
	*/

