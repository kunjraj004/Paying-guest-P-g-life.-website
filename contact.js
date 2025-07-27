<script>
  // Select all input elements within the form
  const inputs = document.querySelectorAll("form input[required], form textarea[required]");

  // Add 'invalid' event listener to each input
  inputs.forEach(input => {
    input.addEventListener("invalid", function(event) {
      event.preventDefault(); // Prevent the default browser validation message
      const errorMessage = document.getElementById("error_message");
      errorMessage.style.padding = "10px";

      // Display a custom error message based on the invalid input
      if (input.validity.valueMissing) {
        errorMessage.innerHTML = `${input.placeholder} is required.`;
      } else if (input.validity.typeMismatch) {
        errorMessage.innerHTML = `Please enter a valid ${input.placeholder}.`;
      } else if (input.validity.tooShort) {
        errorMessage.innerHTML = `${input.placeholder} must be at least ${input.minLength} characters long.`;
      }
    });
  });

  // Handle form submission
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    let isValid = true;
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        isValid = false;
      }
    });

    if (!isValid) {
      event.preventDefault(); // Prevent form submission if any input is invalid
      alert("Please fill out all required fields correctly.");
    } else {
      alert("Form submitted successfully!");
    }
  });
</script>
