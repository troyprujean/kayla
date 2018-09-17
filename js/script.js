/* Code to make entire navbar items clickable not just the text */
let hover = Array.from(document.querySelectorAll('li'));

console.log(hover)

hover.map(m => {
    m.addEventListener('mouseover', function (){
    this.children[0].classList.add('hovertext')
    })
    m.addEventListener('mouseout', function () {
        this.children[0].classList.remove('hovertext')
    })
    m.addEventListener('click', function () {
    window.location.href = `${this.children[0].getAttribute('href')}`;
    })
})

/* Form submission validation */
function Validate() {

    // Prevent the form from submitting before validation
    event.preventDefault();

    // Assigning the required form fields to variables
    var name = document.forms["myForm"]["name"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;

    // Object array for storing validation states for each field
    var validated = [{
        name: false,
        phone: false,
        email: false,
        message: false
    }];

    // regular expression validation for email field
    var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    // If the name field is blank display an error, otherwise remove the error and set its validated state to "true"
    if (name == "") {
        document.getElementById("name-error").innerHTML = "Please enter your name";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.name.focus();
    }
    else {
        document.getElementById("name-error").innerHTML = "";
        validated.name = true;
    }

    // If the phone field is blank display an error, otherwise remove the error and set its validated state to "true"
    if (phone == "") {
        document.getElementById("phone-error").innerHTML = "Please enter your phone number";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.phone.focus();
    }
    else {
        document.getElementById("phone-error").innerHTML = "";
        validated.phone = true;
    }

    // If the email field is blank or does not match the regular expression format - display an error, otherwise remove the error and set its validated state to "true"
    if (email == "") {
        document.getElementById("email-error").innerHTML = "Please enter your email address";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.email.focus();
    }
    else if (!filter.test(email)) { // Checking to see if the email field matches the template of the regular expression variable called filter
        document.getElementById("email-error").innerHTML = "Please enter a valid e-mail address";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.email.focus();
    }
    else {
        document.getElementById("email-error").innerHTML = "";
        validated.email = true;
    }

    // If the message field is blank display an error, otherwise remove the error and set its validated state to "true"
    if (message == "") {
        document.getElementById("message-error").innerHTML = "Please enter your a message";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.message.focus();
    }
    else {
        document.getElementById("message-error").innerHTML = "";
        validated.message = true;
    }
   
    // Checking the validation state of the object array, if all states are true - submit the form
    if(validated.name && validated.phone && validated.email && validated.message == true) {
        document.getElementById("required-button").style.color = "green";
        document.getElementById("required-button").innerHTML = "<br>Message Sent";
        document.myForm.submit();
    }
}