document.getElementById('add_btn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const heading = document.getElementById('heading').value;
  const content = document.getElementById('content').value;
  // Validate the inputs
  if (!heading || !content) {
      alert('Please fill out all fields');
      return;
  }

  // Submit the form using the default form action
  alert('Email sent successfully!');
  document.querySelector('form').submit(); // Submit the form
  document.querySelector('form').reset(); // Reset the form to its initial state
});
