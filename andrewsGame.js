(function() {
  var userStatus = {
    energy: 100,
    steps: 0
  };

  var status = document.getElementById("status");
  function updateDom() {
    status.innerHTML = "";
    for(key in userStatus) {
      status.innerHTML = status.innerHTML + "<div>" + key + ": " + userStatus[key] + "</div>";
    }
  }

  // get the walk button
  var walkBtn = document.getElementById('walk-trail');
  // add event listener to the walk button
  walkBtn.addEventListener('click', function() {
    // when clicked, set disabled
    walkBtn.setAttribute('disabled', 'true');
    // after 3 seconds, set to be enabled/remove disabled
    setTimeout(function() {
      walkBtn.removeAttribute('disabled');
    }, 3000);
    // increase the steps in the userStatus by 1
    userStatus.steps += 1;
    // display text on left side about walking
    // creates a new div
    var walkingText = document.createElement('div');
    // puts the text inside of that div
    walkingText.innerHTML = "you continue down the trail";
    // puts the new div onto the dom in the left side
    document.getElementById("left").appendChild(walkingText);

    if (userStatus.steps % 2 === 0) {
      // create a new button
      var berryBtn = document.createElement('button');
      // assign it an id
      berryBtn.id = "pick-berries"
      // set the text
      berryBtn.innerHTML = "pick berries";
      // append it to the middle div
      document.getElementById("middle").appendChild(berryBtn);

      berryBtn.addEventListener('click', function() {
        var berriesCount =  Math.floor(Math.random() * (10 - 1) + 1);
        userStatus.berries ? userStatus.berries += berriesCount : userStatus.berries = berriesCount;
        updateDom();
        var berriesText = document.createElement('div');
        // puts the text inside of that div
        berriesText.innerHTML = "you picked " + berriesCount + " berries";
        // puts the new div onto the dom in the left side
        document.getElementById("left").appendChild(berriesText);
        document.getElementById("middle").removeChild(berryBtn);
      });
    }

    //my old water code....
    //   var waterText = document.createElement('div');
  // //every 20 steps 
  //   if (userStatus.steps % 5 === 0){ 
  // //prompt user to look for water
  // // create button
  //     var waterBtn = document.createElement('button');
  //      //set the text
  //     waterBtn.innerHTML = "look for water"
  //     //put it in the middle section
  //     document.getElementById("middle").appendChild(waterBtn);
  // //give user 50% chance of finding water
  //     waterBtn.addEventListener('click', function(){
  //       var findWater = Math.floor(Math.random()*(2-1)+ 1);
  // // if found increase supply by 1  //display total water supply 
  //     //when the walk button is clicked...
  //       if (findWater == 2){ userStatus.water += 1
  //       //create water text
  //         // put text in div with number
  //       waterText.innerHTML = "you found water";
  //       // puts new div onto dom on the left side
  //       document.getElementById("left").appendChild(waterText);
  //       document.getElementById("middle").removeChild(waterBtn);

  //     });
  // //   } else {
  // //        //display you could't find any water 
  // //        // put text in div with number
  // //     waterText.innerHTML = "you didn't find any water";
  // //     // puts new div onto dom on the left side
  // //     document.getElementById("left").appendChild(waterText);
  // //     document.getElementById("middle").removeChild(waterBtn);
       
  // //   }

  // //   //only display after first time
  // //     //(userStatus.water >= 1)

  //   //update dom
  //   updateDOM();
  //  });
