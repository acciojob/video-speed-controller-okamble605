// Select the video and speed elements
const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');

speed.addEventListener('mousemove', function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.5;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;

  speedBar.style.height = height;
  speedBar.textContent = playbackRate.toFixed(1) + '×';
  video.playbackRate = playbackRate;
});
