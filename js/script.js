
const HTMLOptions = [
    {
        title: "Personal info",
        desc: "Please provide your name, email address, and phone number.",
        form: `
        <div class="fields">
            <div class="label">
                <label for="name">Name</label>
                <p class="required required--name">This field is required</p>
            </div>
            <input type="text" name="name" id="name" required autocomplete="new-password">
            <br>
            <div class="label">
                <label for="email">Email Address</label>
                <p class="required required--email">This field is required</p>
            </div>
            <input type="email" name="email" id="email" required autocomplete="new-password">
            <br>
            <div class="label">
                <label for="number">Phone Number</label>
                <p class="required required--number">This field is required</p>
            </div>
            <input type="number" name="number" id="number" required autocomplete="off">
        </div>`
    },
    {
        title: "Select your plan",
        desc: "You have the option of monthly or yearly billing.",
        form: `
        <div class="plan">
            <div class="box__container">
                <div class="box__item">
                    <img src="../images/icon-arcade.svg"></img>
                    <div class="plan-select">
                        <h4>Arcade</h4>
                        <p>$9/mo</p>
                        <h5>2 months free</h5>
                    </div>
                </div>
                <div class="box__item">
                    <img src="../images/icon-advanced.svg"></img>
                    <div class="plan-select">
                        <h4>Arcade</h4>
                        <p>$12/mo</p>
                        <h5>2 months free</h5>
                    </div>
                </div>
                <div class="box__item">
                    <img src="../images/icon-pro.svg"></img>
                    <div class="plan-select">
                        <h4>Arcade</h4>
                        <p>$15/mo</p>
                        <h5>2 months free</h5>
                    </div>
                </div>
            </div>
        </div>`
    },
];
const HTMLButtons = {
    1: "Next Step",
    2: "Confirm"
}
let formHTML = `
<div class="title">
    <h2>${HTMLOptions[1].title}</h2>
    <p>${HTMLOptions[1].desc}</p>
</div>
<div class="field">
    ${HTMLOptions[1].form}
</div>
<div class="buttons">
    <input id="back" type="button" value="Go Back">
    <input id="next" type="button" value="${HTMLButtons[1]}">
</div>
`;

document.querySelector(".form").innerHTML = formHTML;

const nameRequired = document.querySelector(".required--name");
const emailRequired = document.querySelector(".required--email");
const numberRequired = document.querySelector(".required--number");

const Button = document.getElementById("next");

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputNumber = document.getElementById("number");

function validName() {
    let names = false;
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
        return names = true
    };
}
function validEmail() {
    let email = false;
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
        return email = true
    };
}
function validNumber() {
    let number = false;
    if(
        inputNumber.value.length < 10 ||
        inputNumber.value.length > 10 
    ){
        numberRequired.style.display = "block";
        inputNumber.style.border = "1px solid #E1384E";
    }else{
        numberRequired.style.display = "none";
        inputNumber.style.border = "1px solid #DDD";
        return number = true
    };
    if(number == true) return true
}

// inputName.addEventListener("keydown", () => {
//     if(
//         inputName.value == "" ||
//         !inputName.value.includes(" ") ||
//         inputName.value.length < 6 ||
//         inputName.value.length > 40 
//     ){}else{
//         nameRequired.style.display = "none";
//         inputName.style.border = "1px solid #DDD";
//     }
// });

// inputEmail.addEventListener("keydown", () => {
//     if(
//         inputEmail.value.includes(" ") ||
//         !inputEmail.value.includes("@") ||
//         !inputEmail.value.includes(".")
//     ){}else{
//         emailRequired.style.display = "none";
//         inputEmail.style.border = "1px solid #DDD";
//     }
// });

// inputNumber.addEventListener("keydown", () => {
//     if(
//         inputNumber.value.length < 9 ||
//         inputNumber.value.length > 9 
//     ){}else{
//         numberRequired.style.display = "none";
//         inputNumber.style.border = "1px solid #DDD";
//     }
// });

Button.addEventListener("click", () => {
    // console.log(validName())
    // console.log(validEmail())
    // console.log(validNumber())
    if(
    validName() == true &&
    validEmail() == true &&
    validNumber() == true
    ){
        alert("hola mundo")
    }else{}
});