const submitButton = document.querySelector("button");
const emailField = document.querySelector("input");
const validationText = document.querySelectorAll("p")[1];
const errorIcon = document.querySelector("i");

submitButton.addEventListener("click", function() {

    let emailValue = document.querySelector("input").value;
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailValue.match(mailFormat))
    {
        emailField.value = "";
        emailField.style.border = "";
        validationText.innerHTML ="";
        errorIcon.style.visibility = "hidden"    
 
}   else {
 
    validationText.innerHTML = "Please provide a valid email";
    validationText.style.color = "red"
    errorIcon.style.visibility = "visible"
    emailField.style.border = "2px solid red"
}
}

)