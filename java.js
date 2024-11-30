// Function to trigger the fade animation
function fadeText() {
  const textElement = document.getElementById('dynamic-text');

  // Fade out the text
  textElement.style.opacity = 0;

  // After 2 seconds, fade it back in
  setTimeout(() => {
    textElement.style.opacity = 1;
  }, 2000);
}

// Trigger the fade effect every 4 seconds
setInterval(fadeText, 4000);
