// 

$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get form input values
      var name = $('#exampleFormControlInput2').val();
      var email = $('#exampleFormControlInput1').val();
      var message = $('#exampleFormControlTextarea1').val();
  
      // Validate form inputs (you can add more validation logic here)
      if (!name || !email || !message) {
          alert('Please fill out all fields.');
          return;
      }
  
      // Create a JSON object with the form data
      var formData = {
          name: name,
          email: email,
          message: message
      };
  
      // Convert the JSON object to a string
      var formDataString = JSON.stringify(formData);
  
      // Store the JSON string in localStorage (you can use other storage methods if needed)
      localStorage.setItem('contactFormData', formDataString);
  
      // Redirect to index.html
      window.location.href = 'index.html';
    });
  });
  