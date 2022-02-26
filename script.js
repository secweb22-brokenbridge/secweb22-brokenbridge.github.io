var video = null;

window.addEventListener('load',function(event) {
  startup();
});

function startup() {
  video = document.getElementById('video');
  startbutton = document.getElementById('startbutton');
  html = document.getElementsByTagName('html')[0];

  html.addEventListener('click', function(event) {
      video.play();
  });

  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(function(stream) {
      video.srcObject = stream;
  })
  .catch(function(err) {
      console.log("An error occurred: " + err);
  });
}