document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    const responseMessage = `Thank you, ${name}! We have received your message.`;

    // Display response
    document.getElementById('form-response').innerText = responseMessage;

    // Clear form
    document.getElementById('contact-form').reset();
});
