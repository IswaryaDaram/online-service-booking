document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get values from the form
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Show confirmation section
    const confirmation = document.getElementById('confirmation');
    confirmation.classList.remove('hidden');

    // Display booking details
    const bookingDetails = document.getElementById('booking-details');
    bookingDetails.innerText = `You have booked a ${service} service on ${date} at ${time}.`;

    // Clear the form (optional)
    document.getElementById('booking-form').reset();
});
