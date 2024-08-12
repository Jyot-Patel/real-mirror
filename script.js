
var btn=document.getElementById("toggleBtn");

var bool=true;
function Toggle(){
    if(bool){
        bool=false;
        video.classList.add("mirror");
    }else{
        bool=true;
        video.classList.remove("mirror");
    }
}



// Select the video element
const video = document.getElementById('videoElement');

// Access the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
        // Set the video source to the stream
        video.srcObject = stream;
    })
    .catch((error) => {
        alert("Please allow camera access!!");
        console.error('Error accessing the camera: ', error);
    });
