 (function() {
  var userStatus = { //varuserstatus
    energy: 100,
    steps: 0
  }; //varuserstatus
// initialize status 
  var status = document.getElementById("status");
  function updateDOM(){ //status
    status.innerHTML = "";
    for(key in userStatus){ //key
      status.innerHTML = status.innerHTML + "<div>" + key + ": " + userStatus[key] + "</div>"
    } //key
  } //status

  var energy = document.createElement('div');
  var steps = document.createElement('div');
  var berries = document.createElement('div');
  var water = document.createElement('div');

// update status
  energy.innerHTML = "energy: " + userStatus.energy;
  status.appendChild(energy);

  steps.innerHTML = "steps: " + userStatus.steps;
  status.appendChild(steps);

  berries.innerHTML = "berries: " + userStatus.berries;
  status.appendChild(berries);

  water.innerHTML = "water: " + userStatus.water;
  status.appendChild(water);

//buttons
  // walk button
  var walkBtn = document.getElementById('walkTrail');
  //disable walk button for 3 seconds
  walkBtn.addEventListener('click', function() { //timer
    this.setAttribute("disabled", "true");
      setTimeout(function() {
          walkBtn.removeAttribute("disabled")
      }, 500)
      
  }); //timer
  //  add steps
  walkBtn.addEventListener('click', function addSteps(){ //walkevent
      //On every step,
    userStatus.steps += 1; 
    //decrease the user's energy by a random number between 1 and 10.
    userStatus.energy -= (Math.floor(Math.random()*(10-1)+ 1))
    console.log(userStatus.steps);
    var walkingText = document.createElement('div');
  // puts the text inside of that div
  walkingText.innerHTML = "you continue down the trail";
  // puts the new div onto the dom in the left side
  document.getElementById("left").appendChild(walkingText);

    
    if (userStatus.energy < 1){
    var gameOverText = document.createElement('div');
    // puts the text inside of that div
    gameOverText.innerHTML = "GAME OVER";
    // puts the new div onto the dom in the middle
    document.getElementById("middle").appendChild(gameOverText);
    userStatus.energy = 0
    userStatus.berries = 0
    userStatus.water = 0
    userStatus.steps = 0

    updateDOM();
    }  
  
    //every 10 steps
    if (userStatus.steps % 3 === 0){ //berryIf
      // create button
      var berryBtn = document.createElement('button');
      //assign an id
      berryBtn.id = "pick-berries"
      //set the text
      berryBtn.innerHTML = "pick berries"
      //put it in the middle section
      document.getElementById("middle").appendChild(berryBtn)
      
      //on click generate random num between 1-10 
      berryBtn.addEventListener('click', function(){ //berryListen
        var berriesCount = Math.floor(Math.random()*(10-1)+ 1);
        //add that random number to total berries
        userStatus.berries ? userStatus.berries += berriesCount : userStatus.berries = berriesCount;
        updateDOM();
      //display text on left about number of berries picked
     // create new div
        var berriesText = document.createElement('div');
        // put text in div with number
        berriesText.innerHTML = "you picked " + berriesCount + " berries";
        // puts new div onto dom on the left side
        document.getElementById("left").appendChild(berriesText);
        document.getElementById("middle").removeChild(berryBtn);
      });//berryListen

      if (userStatus.berries >= 1){ //eatif
    // give the option to "eat berries". 
  // create button
      var eatBtn = document.createElement('button');
      //assign an id
      eatBtn.id = "eat-berries"
      //set the text
      eatBtn.innerHTML = "eat berries"
      //put it in the middle section
      document.getElementById("middle").appendChild(eatBtn)
       
  //Every ten seconds,
      eatBtn.addEventListener('click', function() { //eattimer
        this.setAttribute("disabled", "true");
          setTimeout(function() {
              eatBtn.removeAttribute("disabled")
          }, 2000)     
      }); //eattimer

      //One click of this button 
  
      eatBtn.addEventListener('click', function addEnergy(){ //eatevent
        //and increases energy by 2.
        userStatus.energy += 2
        console.log(userStatus.energy)
        //decreases the "berries" count by 1,
        userStatus.berries -= 1;
        console.log(userStatus.berries)
        
        var eatText = document.createElement('div');
        // puts the text inside of that div
        eatText.innerHTML = "mmm tasty berries and energy yay";
        // puts the new div onto the dom in the left side
        document.getElementById("left").appendChild(eatText);
        document.getElementById("middle").removeChild(eatBtn)
        updateDOM();
      }) //eatevent
    } //eatif
      updateDOM();
    } //berryIf
    if (userStatus.steps % 4 === 0){ //waterIf 

      // create button
      var waterBtn = document.createElement('button');
      //assign an id
      waterBtn.id = "find-water"
      //set the text
      waterBtn.innerHTML = "find water"
      //put it in the middle section
      document.getElementById("middle").appendChild(waterBtn)
      
      //on click generate random num between 1-10 
      waterBtn.addEventListener('click', function(){ //waterListen
        var waterCount = Math.floor(Math.random()*(10-1)+ 1);

        //add that random number to total water
        userStatus.water ? userStatus.water += waterCount : userStatus.water = waterCount;
        // updateDOM();
      //display text on left about number of berries picked
     // create new div
        var waterText = document.createElement('div');
        // put text in div with number
        waterText.innerHTML = "you found " + waterCount + " gallons";
        // puts new div onto dom on the left side
        document.getElementById("left").appendChild(waterText);
        document.getElementById("middle").removeChild(waterBtn); 

        // Every five seconds, give the option to "drink water". 
        // One click of this button 
        // decreases the "water" count by 1. 
        // and increases energy by 10.
        // On the left side of the page, display "you drank water and gained energy"
        // when this button is clicked. 
        if (userStatus.water >= 1){ //eatif
            // give the option to "drink water". 
          // create button
              var drinkBtn = document.createElement('button');
              //assign an id
              drinkBtn.id = "drink-water"
              //set the text
              drinkBtn.innerHTML = "drink water"
              //put it in the middle section
              document.getElementById("middle").appendChild(drinkBtn)
               
          //Every ten seconds,
              drinkBtn.addEventListener('click', function() { //drinktimer
                this.setAttribute("disabled", "true");
                  setTimeout(function() {
                      drinkBtn.removeAttribute("disabled")
                  }, 2000)     
              }); //drinktimer

              //One click of this button 
          
              drinkBtn.addEventListener('click', function addEnergy(){ //drinkevent
                //and increases energy by 2.
                userStatus.energy += 4
               
                //decreases the "water" count by 1,
                userStatus.water -= 1;
              
                
                var drinkText = document.createElement('div');
                // puts the text inside of that div
                drinkText.innerHTML = "you drank water and gained energy";
                // puts the new div onto the dom in the left side
                document.getElementById("left").appendChild(drinkText);
                document.getElementById("middle").removeChild(drinkBtn)
                updateDOM();
              }) //drinkevent
            } //drinkif


      updateDOM();
      }) //waterListen
    }; //waterIf
  
   

  })//walkevent 
 

    
//left side
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









