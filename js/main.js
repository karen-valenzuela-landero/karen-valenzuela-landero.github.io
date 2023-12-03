const submit = document.getElementById("submit");
const emailRegEx = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
let messages = new Array();

function showErrorMessage (lblError, msj_error){
    lblError.style.border="solid thin red";
    lblError.focus();

    Swal.fire({
        position: "top-end",
        icon: "error",
        title: msj_error,
        showConfirmButton: false,
        timer: 1500
        });
}//show Error Message

function cleanWarnings(){
    txtName.style.border="";
    txtMail.style.border="";
    txtMessage.style.border="";
}//clean Warnings

function cleanForm(){
    txtName.style.border="";
    txtMail.style.border="";
    txtMessage.style.border="";
    txtName.value="";
    txtMail.value="";
    txtMessage.value="";
    txtName.focus();
}//clean Form

function successfulMsg (message){
    Swal.fire({
        title: "OK!",
        text: message,
        color: "#150549",
        imageUrl: "./src/mensaje-enviado.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "send",
        showConfirmButton: false,
        timer: 3000,
        backdrop: `#150549CC`
    });
}//message sent successful

function failedMsg(message){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
        footer: "Try again",
        color: "#150549",
        showConfirmButton: false,
        timer: 3000,
        backdrop: `#150549CC`
      });
}//message sent failed

function validate(txtName, txtMail, txtMessage){
    if (txtName.value.length == 0){
        msj_error = "Name can't be blank";
        showErrorMessage(txtName, msj_error);
        return false;
    } else if (txtName.value.trim().length < 7) {
        msj_error = "Please, Write your full name";
        showErrorMessage(txtName, msj_error);
        return false;
    } 
    if(txtMail.value.length == 0){
        msj_error = "Mail can't be blank";
        showErrorMessage(txtMail, msj_error);
        return false;
    } else if (!emailRegEx.test(txtMail.value) || txtMail.value.trim().length < 8){
        msj_error="Please, verify your email";
        showErrorMessage(txtMail, msj_error);
        return false;
    }
    if(txtMessage.value.length == 0){
        msj_error = "Message can't be blank";
        showErrorMessage(txtMessage, msj_error);
        return false;
    } else if (txtMessage.value.trim().length < 15) {
        msj_error = "Message must be greater than 15 characters";
        showErrorMessage(txtMessage, msj_error);
        return false;
    }
    return true;
}//validate contact form

const serviceID = 'outllok_service_ekle2qx';
const templateID = 'Portfolio_Contact_Form';

submit.addEventListener("click", function(event){
    event.preventDefault();
    cleanWarnings();
    const txtName = document.getElementById("txtName");
    const txtMail = document.getElementById("txtMail");
    const txtMessage = document.getElementById("txtMessage");
    
    const isValid = validate(txtName,txtMail,txtMessage);
    
    if (isValid){
        let newMessage = `{"name": "${txtName.value}",
            "mail": "${txtMail.value}", "message": "${txtMessage.value}"}`;
        messages.push(JSON.parse(newMessage));
        localStorage.setItem("messages", JSON.stringify(messages));
        
        (function () {
            emailjs.init('4KBe--5Op9om1VvvF');
        })();// init emailJS

        let form = document.getElementById("contact-form");
        console.log(form);
        emailjs.sendForm(serviceID, templateID, form)
            .then(function () {
                console.log('SUCCESS!');//
                successfulMsg("Your message have been sent"); 
                cleanForm();         
            }, function (error) {
                console.log('FAILED...', error);
                failedMsg( "Your message couldn't been sent. Please, Try again"); 
            });//emailJS
    }//isValid
});//submit button

const toTop =() => window.scrollTo(0,0);
//Scroll to the top