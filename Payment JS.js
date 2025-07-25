// Update card number live and validate only digits
document.querySelector('.card-number-input').oninput = () => {
    const input = document.querySelector('.card-number-input');
    const errorDivId = 'card-number-error';

    // Create error message div if it doesn't exist
    if (!document.getElementById(errorDivId)) {
        const errorDiv = document.createElement('div');
        errorDiv.id = errorDivId;
        errorDiv.style.color = 'red';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.paddingTop = '5px';
        input.parentNode.appendChild(errorDiv);
    }

    const errorDiv = document.getElementById(errorDivId);

    // If non-numeric characters found
    if (/\D/.test(input.value)) {
        errorDiv.innerText = "Only numbers are allowed in the card number field.";
        input.value = input.value.replace(/\D/g, ""); // Remove non-numeric
    } else {
        errorDiv.innerText = ""; // Clear error
    }

    // Update card preview
    document.querySelector('.card-number-box').innerText = input.value || "################";
};

// Update name on card preview
document.querySelector('.card-holder-input').oninput = () => {
    document.querySelector('.card-holder-name').innerText =
        document.querySelector('.card-holder-input').value || "Name of card holder";
};

// Update expiry month on preview
document.querySelector('.month-input').oninput = () => {
    document.querySelector('.exp-month').innerText =
        document.querySelector('.month-input').value || "mm";
};

// Update expiry year on preview
document.querySelector('.year-input').oninput = () => {
    document.querySelector('.exp-year').innerText =
        document.querySelector('.year-input').value || "yyyy";
};

// Flip card to back on CVV focus
document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
};

// Flip card to front on CVV blur
document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
};

// Update CVV on preview
document.querySelector('.cvv-input').oninput = () => {
    document.querySelector('.cvv-box').innerText =
        document.querySelector('.cvv-input').value;
};
