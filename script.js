document.getElementById('pan-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const pan = document.getElementById('pan').value;
    const errorMessage = document.getElementById('error-message');
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

    if (panRegex.test(pan)) {
        errorMessage.textContent = 'Valid PAN Number';
        errorMessage.style.color = 'green';
    } else {
        errorMessage.textContent = 'Invalid PAN Number';
        errorMessage.style.color = 'red';
    }
});