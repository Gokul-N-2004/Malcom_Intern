document.getElementById('add_btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const mail_id = document.getElementById('mail_id').value;
    const dob = document.getElementById('dob').value;
    const known_skills = document.getElementById('known_skills').value;
    const mobile_no = document.getElementById('mobile_no').value;

    // Validate the inputs
    if (!name || !mail_id || !dob || !known_skills || !mobile_no) {
        alert('Please fill out all fields');
        return;
    }

    // Submit the form using the default form action
    alert('Data submitted successfully!');
    document.querySelector('form').submit(); // Submit the form
    document.querySelector('form').reset(); // Reset the form to its initial state
});
