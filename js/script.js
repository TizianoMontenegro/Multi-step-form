
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
                <div class="box__item selected">
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
    {
        title: "Pick add-ons",
        desc: "Add-ons help enhance your gaming experience.",
        form: `
        <div class="checkboxs">
            <label for="check1" class="checkbox">
                <input id="check1" type="checkbox" name="Online service">
                <div class="description">
                    <h4>Online service</h4>
                    <p>Access to multiplayer games</p>
                </div>
                <p class="price">+$1/mo</p>
            </label>
            <label for="check2" class="checkbox">
                <input id="check2" type="checkbox" name="Larger storage">
                <div class="description">
                    <h4>Larger storage</h4>
                    <p>Extra 1TB of cloud save</p>
                </div>
                <p class="price">+$2/mo</p>
            </label>
            <label for="check3" class="checkbox">
                <input id="check3" type="checkbox" name="Customizable Profile">
                <div class="description">
                    <h4>Customizable Profile</h4>
                    <p>Custom theme on your profile</p>
                </div>
                <p class="price">+$2/mo</p>
            </label>
        </div>`
    }
];
const HTMLButtons = {
    1: "Next Step",
    2: "Confirm"
}
const formHTML = `
<div class="title">
    <h2>${HTMLOptions[0].title}</h2>
    <p>${HTMLOptions[0].desc}</p>
</div>
<div class="field">
    ${HTMLOptions[0].form}
</div>
<div class="buttons">
    <input class="next next1" type="button" value="${HTMLButtons[1]}">
</div>
`;

const formHTML2 = `
<div class="title">
    <h2>${HTMLOptions[1].title}</h2>
    <p>${HTMLOptions[1].desc}</p>
</div>
<div class="field">
    ${HTMLOptions[1].form}
</div>
<div class="buttons">
    <input class="back back2" type="button" value="Go Back">
    <input class="next next2" type="button" value="${HTMLButtons[1]}">
</div>
`;

const formHTML3 = `
<div class="title">
    <h2>${HTMLOptions[2].title}</h2>
    <p>${HTMLOptions[2].desc}</p>
</div>
<div class="field">
    ${HTMLOptions[2].form}
</div>
<div class="buttons">
    <input class="back back3" type="button" value="Go Back">
    <input class="next next3" type="button" value="${HTMLButtons[1]}">
</div>
`;

const formHTML4 = `
<div class="title">
    <h2>${HTMLOptions[1].title}</h2>
    <p>${HTMLOptions[1].desc}</p>
</div>
<div class="field">
    ${HTMLOptions[1].form}
</div>
<div class="buttons">
    <input class="back back4" type="button" value="Go Back">
    <input class="next next4" type="button" value="${HTMLButtons[1]}">
</div>
`;

const form = document.querySelector(".form");
form.innerHTML = formHTML;

const nameRequired = document.querySelector(".required--name");
const emailRequired = document.querySelector(".required--email");
const numberRequired = document.querySelector(".required--number");
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

function whatForm(attr) {
    if(attr.classList.contains("next1")) {  

        document.querySelector(".next1").addEventListener("click", () => {
            console.log("1")
            if(
            validName() == true &&
            validEmail() == true &&
            validNumber() == true
            ){
                form.innerHTML = formHTML2;
                whatForm(document.querySelector(".next2"))  
            }     
        });

    }else if(attr.classList.contains("next2")) {

        document.querySelector(".back2").addEventListener("click", () => {
            form.innerHTML = formHTML;
            whatForm(document.querySelector(".next1"))
        });
        document.querySelector(".next2").addEventListener("click", () => {
            form.innerHTML = formHTML3;
            whatForm(document.querySelector(".next3"))
        });
        console.log("2")

    }else if(attr.classList.contains("next3")){

        document.querySelector(".back3").addEventListener("click", () => {
            form.innerHTML = formHTML2;
            whatForm(document.querySelector(".next2"))
        });
        document.querySelector(".next3").addEventListener("click", () => {
            form.innerHTML = formHTML4;
            whatForm(document.querySelector(".next4"))
        });
        console.log("3")

    }else if(attr.classList.contains("next4")){

        document.querySelector(".back4").addEventListener("click", () => {
            form.innerHTML = formHTML3;
            whatForm(document.querySelector(".next3"))
        });
        document.querySelector(".next4").addEventListener("click", () => {
        });
        console.log("4")

    }
}


document.querySelector(".next1").addEventListener("click", () => {
    console.log("1")
    if(
    validName() == true &&
    validEmail() == true &&
    validNumber() == true
    ){
        form.innerHTML = formHTML2;
        whatForm(document.querySelector(".next2"))  
    }     
    // whatForm(document.querySelector(".next1"))  
});
document.querySelector(".back2").addEventListener("click", () => {
    whatForm(document.querySelector(".next1"))  
});
document.querySelector(".next2").addEventListener("click", () => {
    whatForm(document.querySelector(".next3"))  
});
document.querySelector(".back3").addEventListener("click", () => {
    whatForm(document.querySelector(".next2"))  
});
document.querySelector(".next3").addEventListener("click", () => {
    whatForm(document.querySelector(".next4"))  
});
document.querySelector(".back4").addEventListener("click", () => {
    whatForm(document.querySelector(".next3"))  
});
document.querySelector(".next4").addEventListener("click", () => {
    
});
