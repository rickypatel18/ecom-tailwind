document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const overlay = document.getElementById("video-overlay");
    const playButton = document.getElementById("play-button");

    // Play video when button is clicked and show controls
    playButton.addEventListener("click", function () {
      video.setAttribute("controls", ""); // Enable controls
      video.play();
      overlay.classList.add("opacity-0"); // Smooth fade-out
      setTimeout(() => {
        overlay.style.display = "none"; // Remove overlay completely
      }, 500);
    });

    // Also hide overlay when video starts playing (if user clicks elsewhere)
    video.addEventListener("play", function () {
      video.setAttribute("controls", ""); // Ensure controls appear
      overlay.classList.add("opacity-0");
      setTimeout(() => {
        overlay.style.display = "none";
      }, 500);
    });
  });