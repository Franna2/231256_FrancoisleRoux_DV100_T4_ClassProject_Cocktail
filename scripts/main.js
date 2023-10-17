$(document).ready(function() {
    //----------------------------------------
    // Sign Up Form Submission Handling
    //----------------------------------------

    // On form submission, prevent the default behavior and do the following
    $('#signupform').submit(function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        if (this.checkValidity() === false) {
            event.stopPropagation(); // Prevent further propagation if the form is not valid
        } else {
            // Add your code for form submission handling here
            // For example, sending data to the server or displaying a success message
        }

        $(this).addClass('was-validated'); // Mark the form as validated
    });
});
