/* Code to make entire li item clickable not just text */
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
    var name = document.forms["myForm"]["name"].value;
    var phone = document.forms["myForm"]["phone"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["message"].value;

    // regEx validation for email field
    var filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

    // prevent the form from submitting before validation
    event.preventDefault();

    if (name == "") {
        document.getElementById("name-error").innerHTML = "Please enter your name";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.name.focus();
        return false;
    }
    else document.getElementById("name-error").innerHTML = "";


    if (phone == "") {
        document.getElementById("phone-error").innerHTML = "Please enter your phone number";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.phone.focus();
        return false;
    }
    else document.getElementById("phone-error").innerHTML = "";

    if (email == "") {
        document.getElementById("email-error").innerHTML = "Please enter your email address";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.email.focus();
        return false;
    }
    // further validating email field
    else if (!filter.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid e-mail address";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.email.focus();
        return false;
    }
    else document.getElementById("email-error").innerHTML = "";

    if (message == "") {
        document.getElementById("message-error").innerHTML = "Please enter your a message";
        document.getElementById("required-button").style.color = "red";
        document.getElementById("required-button").innerHTML = "<br>* Required Fields";
        myForm.message.focus();
        return false;
    }
    else document.getElementById("message-error").innerHTML = "";

    document.getElementById("required-button").style.color = "green";
    document.getElementById("required-button").innerHTML = "<br>Message Sent";
   
    // validation passed, submit form
    document.myForm.submit();
    
    return true;
}