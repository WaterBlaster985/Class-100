webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
var recognition= new window.webkitSpeechRecognition()
//var speech = window.speechSynthesis
//console.log(speech)
function selfie(){
    document.getElementById("voice").innerHTML=""
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event)
    document.getElementById("voice").textContent=event.results[0][0].transcript
    if(document.getElementById("voice").textContent=="take my selfie"){
        Webcam.attach('#webcam');
        speak();
        setTimeout(takePic, 5000)
    }
}
function speak(){
    var speech= new SpeechSynthesisUtterance("taking your selfie in 5 seconds")
    console.log(speech)
    speechSynthesis.speak(speech)
}
function takePic(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('selfie').innerHTML = 
        '<img src="'+data_uri+'"/>';
      } );
}