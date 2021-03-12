//alert("Working");
//debugger; in browser to test functions

/*//Constructor Function: Constructs Objects
function BellBoy (name, age, hasWorkPermit, languages){ //constructor name BellBoy capitalized
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorlPermit;
    this.languages = languages;
    this.moveSuitcase = function() { //Constructors/Objects may contain Functions
        alert("may I tak your suitcase?")
        pickUpSuitcase();
        move();
    }
}
//Initialise Object
var bellBoy1 = new BellBoy("Timmy", 19, true, ["French", "English"]);
//Calling object variable/function
bellBoy1.age;
bellBoy1.moveSuitcase();
*/




//Detecting Button Press
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //retunrs number of druym buttons

for (var i = 0; i<numberOfDrumButtons; i++){ //cycles through drum buttons, gives each an onclick function
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML; // returns current button clicked
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML)
    });
}

//Detecting Keyboard Press
document.addEventListener("keydown", function(event){ //Higher Order Function: functions that take functions as input
    makeSound(event.key);  //Callback Function: function inputted
    
    buttonAnimation(event.key)
});

//Make Sound
function makeSound(key){
    switch (key){ //if else tree dpending on which button was clicked
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey); 
    
    activeButton.classList.add("pressed") //Adds CSS class 

    setTimeout(function(){
        activeButton.classList.remove("pressed"); //Removes CSS class 
    }, 100); //Set Timer to 0.1 seconds
}