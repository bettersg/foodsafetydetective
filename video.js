// from:https://dev.to/juanbelieni/video-preview-on-hover-with-html-and-javascript-1b00

const video = document.getElementsByTagName("video");
const video_area = document.getElementsByClassName("card");
const overlay = document.getElementsByClassName("overlay");
const images = document.getElementsByTagName("img");

function startpreview(i) {
  video[i].muted = true;
  video[i].currentTime = 1;
  video[i].playbackRate = 2;
  overlay[i].style.visibility = "visible";
  images[i].style.visibility = "hidden";
  video[i].play();
}

function stopPreview(i) {
  video[i].currentTime = 0;
  video[i].playbackRate = 1;
  video[i].pause();
  images[i].style.visibility = "visible";
  overlay[i].style.zIndex = "-1";
  overlay[i].style.visibility = "hidden";
}

let previewTimeout = null;
//video_area.length;
for (let i = 0; i < video_area.length; i++) {
  video_area[i].addEventListener("mouseenter", () => {
    console.log(i);
    overlay[i].style.zIndex = "2";
    startpreview(i);
    // previewTimeout = setTimeout(stopPreview, 5000);
  });

  video_area[i].addEventListener("mouseleave", () => {
    clearTimeout(previewTimeout);
    // previewTimeout = null;
    stopPreview(i);
  });
}
