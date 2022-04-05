function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event);
  
  document.querySelector("#status").innerHTML = "KEYDOWN Event"
}

function keyupAction() {
	
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event
document.addEventListener("keydown", function(event){
  var key;
  if (keydownAction === true){
    key.TextContent=keyCode
  }
});

