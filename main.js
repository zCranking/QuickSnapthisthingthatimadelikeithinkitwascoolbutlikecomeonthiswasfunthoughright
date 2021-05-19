var APIthingy = window.webkitSpeechRecognition;
var newLittleHuman = new APIthingy();
    document.getElementById("textbox").innerHTML = "";
    newLittleHuman.start();
};
newLittleHuman.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
    if(content == "selfie"){
        console.log("selfie ---")
        speechthingy();
    }
};

function speechthingy() {
    var synth = window.speechSynthesis;
    var utterthis = new SpeechSynthesisUtterance("taking your selfie in 5 seconds");
    console.log(utterthis);
    synth.speak(utterthis);
    Webcam.attach(picthingy);
    setTimeout(function(){
        snapshot();
        save();
        
    }, 5000);

};


Webcam.set({
    width: 350,
    height: 250,
    image_format: 'png',
    png_quality: 100   
});
picthingy = document.getElementById("camera");
console.log("this is fun");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='selfie' src='" + data_uri + "'>";
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").src;
    link.href = image;
    link.click();
}