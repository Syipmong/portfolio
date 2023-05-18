/* Get the contact button and modal
const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');

// Get the close button of the modal
const closeBtn = contactModal.querySelector('.close');

// Open the modal when the contact button is clicked
contactBtn.addEventListener('click', function() {
  contactModal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', function() {
  contactModal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = 'none';
  }
});
*/