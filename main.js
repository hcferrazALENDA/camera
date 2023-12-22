var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    if(Content == "selfie"){
        speak();
    }
    
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "TIRANDO SUA SELFIE EM 5 SEGUNDOS";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_selfie();
        save();
    },5000);

    
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

function take_selfie(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="selfie_image" scr"'+data_uri+'"/>';
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src ;
    link.href = image;
    link.click();
}














