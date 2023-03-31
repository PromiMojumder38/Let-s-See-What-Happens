// Check if the user is logged in
if (userIsLoggedIn) {
  // Hide the login link
  document.querySelector('.login').style.display = 'none';

  // Show the profile link
  document.querySelector('.profile').style.display = 'inline-block';
} else {
  // Show the login link
  document.querySelector('.login').style.display = 'inline-block';

  // Hide the profile link
  document.querySelector('.profile').style.display = 'none';
}
