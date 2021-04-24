const video = document.getElementById("video");

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
  faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
  faceapi.nets.faceExpressionNet.loadFromUri("/models"),
]);

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    (stream) => (video.srcObject = stream),
    (err) => console.error(err)
  );
}
var exp;
video.addEventListener("play", () => {
  const canvas = faceapi.createCanvasFromMedia(video);
  let emotion = document.querySelector(".emotion");
  emotion.append(canvas);
  const displaySize = { width: video.width, height: video.height };
  faceapi.matchDimensions(canvas, displaySize);
  setInterval(async () => {
    const detections = await faceapi
      .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    ex = detections[0].expressions;
    exp = Object.keys(ex).reduce((a, b) => (ex[a] > ex[b] ? a : b));
    const resizedDetections = faceapi.resizeResults(detections, displaySize);
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
  }, 100);
});

video.addEventListener("timeupdate", function () {
  if (this.currentTime >= 5) {
    this.pause();
    detected(exp);
  }
});
function detected(exp) {
  if (exp == "happy") {
    location.replace("./emotions/happy.html");
  } else if (exp == "neutral") {
    location.replace("./emotions/neutral.html");
  } else if (exp == "sad") {
    location.replace("./emotions/sad.html");
  } else if (exp == "angry") {
    location.replace("./emotions/angry.html");
  } else {
    location.replace("./emotions/surprised.html");
  }
}
