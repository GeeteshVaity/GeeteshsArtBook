// Log a message to the console to confirm the script is connected
console.log("script.js loaded successfully!");

// Get the contact form element
const contactForm = document.getElementById('contact-form');

// Add a submit event listener to the form
contactForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // In a real application, you would send the form data to a backend here.
    // Since this is a static site, we will just show a confirmation message.
    
    // Get the user's name from the input field
    const nameInput = document.getElementById('name');
    const userName = nameInput.value;
    
    // Create a simple custom confirmation message
    const confirmationMessage = document.createElement('div');
    confirmationMessage.classList.add('bg-green-100', 'border', 'border-green-400', 'text-green-700', 'px-4', 'py-3', 'rounded', 'relative', 'mt-4');
    confirmationMessage.setAttribute('role', 'alert');
    confirmationMessage.innerHTML = `
        <strong class="font-bold">Thank you, ${userName}!</strong>
        <span class="block sm:inline">Your message has been received. I will get back to you shortly.</span>
    `;

    // Append the message to the form container
    contactForm.parentNode.insertBefore(confirmationMessage, contactForm.nextSibling);

    // Reset the form after a short delay
    setTimeout(() => {
        contactForm.reset();
        confirmationMessage.remove();
    }, 5000); // Message will disappear after 5 seconds
});