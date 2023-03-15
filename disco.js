// Comment form submit event listener
document.getElementById('comment-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  const commentText = event.target.querySelector('input[type="text"]').value;
  if (commentText.trim() !== '') {
    const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = '<div class="author">You:</div><div class="text">' + commentText + '</div><button class="reply">Reply</button><div class="comment-section"></div>';

  document.getElementById('comments-container').appendChild(newComment);
  event.target.reset();
  }
  else {
    alert('Please enter a comment.'); // Show an alert message if comment text is empty
  }
  
});

// Reply button click event listener
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('reply')) {
    event.preventDefault(); // prevent button click

    const comment = event.target.closest('.comment');
    const commentSection = comment.querySelector('.comments-container');

    // Check if comment section already exists
    if (commentSection) {
      // Toggle the display of the comment section
      commentSection.style.display = commentSection.style.display === 'none' ? 'block' : 'none';
    } else {
      // Create a new comment section and append it to the comment
      const commentSection = document.createElement('div');
      commentSection.classList.add('comments-container');
      comment.appendChild(commentSection);

      // Create a new nested comment form and append it to the comment section
      const commentForm = document.createElement('form');
      commentForm.classList.add('comment-form');
      commentForm.innerHTML = '<input type="text" placeholder="Write a reply..."><button type="submit">Submit</button>';
      commentSection.appendChild(commentForm);
    }
  }
});

// Nested comment form submit event listener
document.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission

  const commentText = event.target.querySelector('input[type="text"]').value;
  if (commentText.trim() !== '') {
    const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = '<div class="author">You:</div><div class="text">' + commentText + '</div><button class="reply">Reply</button><div class="comment-section"></div>';

  document.getElementById('comments-container').appendChild(newComment);
  event.target.reset();
  }
  else {
    alert('Please enter a comment.'); // Show an alert message if comment text is empty
  }
});
