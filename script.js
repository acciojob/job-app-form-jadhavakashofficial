document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const genderSelected = document.querySelector('input[name="gender"]:checked');
  const laptop = document.getElementById('laptop').value;
  const age = document.getElementById('age').value.trim();
  const password = document.getElementById('password').value.trim();
  const portfolio = document.getElementById('portfolio').value.trim();

  if (!name || !email || !genderSelected || !laptop || !age || !password || !portfolio) {
    event.preventDefault();
    alert('Please fill out all required fields.');
    return;
  }

  alert('Form submitted successfully!');
});
