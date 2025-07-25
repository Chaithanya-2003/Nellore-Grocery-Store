function validate_form() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var pincode = document.getElementById("pincode").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    if (name.length < 3) {
        error_message.innerHTML = "Please enter a valid Name";
        return false;
    }

    if (isNaN(phone) || phone.length != 10) {
        error_message.innerHTML = "Please enter a valid Phone Number";
        return false;
    }

    if (isNaN(pincode) || pincode.length != 6) {
        error_message.innerHTML = "Please enter a valid Pincode";
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 6) {
        error_message.innerHTML = "Please enter a valid Email ID";
        return false;
    }

    // ✅ All validations passed → redirect
    window.location.href = "Payment HTML.html";
    return false; // Prevent actual form submission
}
