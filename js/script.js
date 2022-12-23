const nameRequired = document.querySelector(".required--name");
const emailRequired = document.querySelector(".required--email");
const numberRequired = document.querySelector(".required--number");
const submitButton = document.getElementById("next");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputNumber = document.getElementById("number");

submitButton.addEventListener("click", () => {
    if(
        inputName.value == "" ||
        !inputName.value.includes(" ") ||
        inputName.value.length < 6 ||
        inputName.value.length > 40 
    ){
        nameRequired.style.display = "block";
        inputName.style.border = "1px solid #E1384E";
    }else{
        nameRequired.style.display = "none";
        inputName.style.border = "1px solid #DDD";
    }
    //----------------------------------------------------
    if(
        inputEmail.value.includes(" ") ||
        !inputEmail.value.includes("@") ||
        !inputEmail.value.includes(".")
    ){
        emailRequired.style.display = "block";
        inputEmail.style.border = "1px solid #E1384E";
    }else{
        emailRequired.style.display = "none";
        inputEmail.style.border = "1px solid #DDD";
    }
    //----------------------------------------------------
    if(
        inputNumber.value.length < 10 ||
        inputNumber.value.length > 10 
    ){
        numberRequired.style.display = "block";
        inputNumber.style.border = "1px solid #E1384E";
    }else{
        numberRequired.style.display = "none";
        inputNumber.style.border = "1px solid #DDD";
    }
});