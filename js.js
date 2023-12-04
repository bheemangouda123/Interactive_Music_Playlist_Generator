let mysong=document.getElementById("mysong")
let icon=document.getElementById("icon")
icon.onclick=function(){
    if(mysong.paused){
        mysong.play();
        icon.src="Sound webpage_img/pause.png"
    }else{
            mysong.pause();
            icon.src="Sound webpage_img/play.png"
    }
}

function sendMSG(){
    alert("Opps!,you are already in Home page")
}

function currentlyWorking(){
    alert("Currently working on it!")
}

var audio=document.getElementById("mysong")
var seekbar=document.getElementById("seekbar")
if(!audio || !seekbar){
    console.error("either seekbar or audio not found")
}

function updateSeekBar() {
    if (audio) {
        var value = seekbar.value;
        var duration = audio.duration;
        var currentTime = (value * duration) / 100;
        audio.currentTime = currentTime;
        console.log(Math.floor(duration))
    }
  }

  if (audio) {
    audio.addEventListener("timeupdate", function() {
      var currentTime = audio.currentTime;
      var duration = audio.duration;
      var percentage = (currentTime / duration) * 100;
      seekbar.value = percentage;
      // let t=(Math.round(currentTime * 100) / 100).toFixed(0);
    });
  } else {
    console.error("Audio element not found.");
  }


let ss=document.querySelector("source")
ss.src="Soul Of Doctor.mp3"
console.log(ss.src)
ss.append("Soul Of Doctor.mp3")
