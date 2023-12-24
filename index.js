

for( var i = 0 ; i<document.querySelectorAll("button").length; i++){
  //This will trigger the event on clicking
    document.querySelectorAll("button")[i].addEventListener("click", function(){
     
      makeSound(this.innerHTML);
      addAnimation(this.innerHTML);
    });
   }

   //This will trigger the event on pressig the buttons
   document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
   });


function makeSound(key){
    switch(key){
        case "w":
            var audioElement = new Audio("tom-1.mp3");
            audioElement.play();
         break;
         case "a":
            var audioElement = new Audio("tom-2.mp3");
            audioElement.play();
         break;
         case "s":
            var audioElement = new Audio("tom-3.mp3");
            audioElement.play();
         break;
         case "d":
            var audioElement = new Audio("tom-4.mp3");
            audioElement.play();
         break;
         case "j":
            var audioElement = new Audio("snare.mp3");
            audioElement.play();
         break;
         case "k":
            var audioElement = new Audio("crash.mp3");
            audioElement.play();
         break;
         case "l":
            var audioElement = new Audio("kick-bass.mp3");
            audioElement.play();
         break;
         default :
    }
}
//This function is to add Animation to the key when it will either be pressed or clicked
function addAnimation(currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");

    setTimeout(function(){
      document.querySelector("."+ currentKey).classList.remove("pressed")
    }, 100);
};



