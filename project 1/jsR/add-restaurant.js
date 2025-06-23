document.getElementById('restaurantForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const location = document.getElementById('location').value.trim();
  const image = document.getElementById('image').value.trim();
  const description = document.getElementById('description').value.trim();

  if (name && location) {
    // Simulate saving data
    document.getElementById('successMessage').textContent = `✅ "${name}" added successfully!`;
    this.reset();
  } else {
    document.getElementById('successMessage').textContent = '❌ Please fill in all required fields.';
    document.getElementById('successMessage').style.color = 'red';
  }
});
