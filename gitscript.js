// script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission response
    document.getElementById('form-response').textContent = `Thank you, ${name}! Your message has been received.`;
    
    // Clear the form
    document.getElementById('contact-form').reset();
});
