// Write your JavaScript code here!

window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotNameInput = document.getElementById("pilotName");
      let copilotNameInput = document.getElementById("copilotName");
      let fuelLevelInput = document.getElementById("fuelLevel");
      let cargoMassInput = document.getElementById("cargoMass");
      console.log("pilotvalue   " + pilotNameInput.value);
      console.log("copilotvalue  " + copilotNameInput.value);
      console.log("fuelvalue" + fuelLevelInput.value);
      console.log("cargovalue" + cargoMassInput.value);


      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("You forgot to enter something");
         event.preventDefault();
      }
      
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")
      let faultyItems = document.getElementById("faultyItems")
      let launchStatus = document.getElementById("launchStatus");
      pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`
      copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`
      if (fuelLevelInput.value < 10000) {
         console.log("uh on not enout fuel")
         faultyItems.style.visibility = "visible";
         fuelStatus.innerHTML = "There is not enough fuel for the journey"
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red";
      }
      if (cargoMassInput.value > 10000) {
         console.log("you're too fat")
         faultyItems.style.visibility = "visible";
         cargoStatus.innerHTML = "There is too much mass for the shuttle to take off"
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red";
      }

      
   });
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget")
         let i = Math.floor(Math.random() * json.length);
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
         
            <li>Name: ${json[i].name}</li>
            <li>Diameter: ${json[i].diameter}</li>
            <li>Star: ${json[i].star}</li>
            <li>Distance from Earth: ${json[i].distance}</li>
            <li>Number of Moons: ${json[i].moons}</li>
         </ol>
         <img src="${json[i].image}">
         </img>
         `
      })
   })
})
// This block of code shows how to format the HTML once you fetch some planetary JSON!
