// script for the typing texts on splash screen

var eachLetter = 0;
var adding = 0;
var openTo = ['Conversation.','Acceptance.','Assistance.','Ipsum.'];
var speed = 200;

setTimeout(typingTexts, speed);

//typing 
function typingTexts() {
    if(eachLetter < openTo[adding].length){
        document.getElementById("demo").innerHTML += openTo[adding].charAt(eachLetter);
        eachLetter++;
        setTimeout(typingTexts, speed);
    }else{
        setTimeout(erase, speed+10);
    }
}

//deleting each letter then retyping again
function erase() {
	if (eachLetter >= 0) {
      var str=openTo[adding].toString().substring(0, eachLetter);
      document.getElementById("demo").innerHTML = str;
      eachLetter--;
      setTimeout(erase, speed-25);
    } else {
        adding++;
      if(adding>=openTo.length) 
        adding=0;
      setTimeout(typingTexts, speed);
    }
}



