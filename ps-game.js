(function() {
  var userStatus = {
    energy: 100,
    steps: 0
  };
// initialize status 
  var status = document.getElementById("status");
  function updateDOM(){
    status.innerHTML = "";
    for(key in userStatus){
      status.innerHTML = status.innerHTML + "<div>" + key + ": " + userStatus[key] + "</div>"
    }
  }

  var energy = document.createElement('div');
  var steps = document.createElement('div');
// update status
  energy.innerHTML = "energy: " + userStatus.energy;
  status.appendChild(energy);

  steps.innerHTML = "steps: " + userStatus.steps;
  status.appendChild(steps);

  // walk button
  var walkBtn = document.getElementById('walkTrail');
  //disable walk button for 3 seconds
  walkBtn.addEventListener('click', function() {
    this.setAttribute("disabled", "true");
      setTimeout(function() {
          walkBtn.removeAttribute("disabled")
      }, 3000)
      
  });
  //  add steps
  walkBtn.addEventListener('click', function addSteps(){
    userStatus.steps += 1;
    console.log(userStatus.steps);
    updateDOM();
  });
  // display text on left side about walking
    // creates a new div
    var walkingText = document.createElement('div');
    // puts the text inside of that div
    walkingText.innerHTML = "you continue down the trail";
    // puts the new div onto the dom in the left side
    document.getElementById("left").appendChild(walkingText);

    //udate the dom on pageload
    updateDOM();
  })();








