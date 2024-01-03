function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Reset error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
  
    let count = 0;
    // Validate Name
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required';
    } else {
      count++;
    }
  
    // Validate Email
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required';
    } else if (!isValidEmail(email)) {
      document.getElementById('emailError').textContent = 'Invalid email format';
    } else {
      count++;
    }
  
    // Validate Password
    if (password === '') {
      document.getElementById('passwordError').textContent = 'Password is required';
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    } else {
      count++;
    }

    if(count === 3){
      redirector();
    }
  }
  
  function isValidEmail(email) {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  

  function redirector(){
    location.assign("https://www.google.com");
  }