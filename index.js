function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

 function logWhisper(string) {
   console.log(string.toLowerCase())
 }

 function sayHiToGrandma(string) {
    for(var i=0; i<string.length; i++) {
      if (string===string.toLowerCase()){
      return ("I can\'t hear you!");
  }
 }
}
