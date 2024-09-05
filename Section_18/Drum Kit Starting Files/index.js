/** Concepts used :
1. EventListeners : https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
Syntax: addEventListener(type, listener)
 > 'type' is the event type to listen for. Example - https://developer.mozilla.org/en-US/docs/Web/Events
 > 'listener' is the object that receives a notification when an event of the specified type occurs.Such as a JavaScript function

2. What are Events : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
**/


//Implementation to make sound on button click
for(i=0;i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
      var buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      addAnimation(buttonInnerHTML);
    });

}

//Implementation to make sound on keyboard key-press
document.addEventListener("keydown", function(event) {
    console.log(event);
    makeSound(event.key);
    addAnimation(event.key);
})

//Function that is called to make sound
function makeSound(key){
    switch(key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");  
            crash.play();
            break;   
            
        case "a":
            var tom1 = new Audio("sounds/tom-1.mp3");  
            tom1.play();
            break;
            
        case "s":
        var kick = new Audio("sounds/kick-bass.mp3");  
        kick.play();
        break;   
        
        case "d":
            var tom2 = new Audio("sounds/tom-2.mp3");  
            tom2.play();
            break;   
            
        case "j":
            var snare = new Audio("sounds/snare.mp3");  
            snare.play();
            break;   
        
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");  
            tom3.play();
            break;
        
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");  
            tom4.play();
            break;   
    
       default :
            console.log("The button clicked is not found. Value - :" + buttonInnerHTML);
            break;            
    }
}

//Function that is called to add button animation
function addAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed"); 
    }, 200)
}