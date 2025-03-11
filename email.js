document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.init("g6IWWbNMJULo7mk0v");

    let templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_yr51wa8", "template_3gzqw1p", templateParams)
    .then(function(response) {
        alert("Email sent successfully!");
    }, function(error) {
        alert("Error sending email: " + error.text);
    });
});