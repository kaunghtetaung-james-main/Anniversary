// Get references to the elements
const showPopupBtn = document.getElementById('showPopupBtn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');

// Show the popup when the button is clicked
showPopupBtn.onclick = function() {
  popup.style.display = 'flex';
}

// Close the popup when the close button (x) is clicked
closeBtn.onclick = function() {
  popup.style.display = 'none';
}

// Close the popup if the user clicks anywhere outside the popup content
window.onclick = function(event) {
  if (event.target === popup) {
    popup.style.display = 'none';
  }
}
