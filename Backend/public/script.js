document.getElementById('application_form').addEventListener('submit', function (event) {
    const form = event.target;

    const name = form.name.value;
    const mail_id = form.mail_id.value;
    const dob = form.dob.value;
    const known_skills = form.known_skills.value;
    const mobile_no = form.mobile_no.value;

    // Validate the inputs
    if (!name || !mail_id || !dob || !known_skills || !mobile_no) {
        event.preventDefault(); // Prevent the form from submitting
        alert('Please fill out all fields');
        return;
    }
});
