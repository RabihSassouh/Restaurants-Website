const loginBtn = document.getElementById("login");
const registerBtn = document.getElementById("register");
const remembermeCheckbox = document.getElementById("rememberMe");

const loginLink = document.getElementById("loginLink");
const signupLink = document.getElementById("signUpLink");

const loginContainer = document.getElementById("loginContainer");
const signupContainer = document.getElementById("signupContainer");

const incorrectCredentialsNote = document.getElementById("incorrectCredentialsNote");
const emptyCredentialsNote = document.getElementById("emptyCredentialsNote");

const requiredInputsNote = document.getElementById("requiredNote");
const usernameNote = document.getElementById("usernameNote");
const passwordNote = document.getElementById("passwordNote");

const adminsToAdd = [
    {
        username: "aya",
        password: "aya123"
    },
    {
        username: "rabih",
        password: "rabih123"
    },
    {
        username: "mhamad",
        password: "mhamad111"
    }
];

if (localStorage.getItem("admins") == null) {
    localStorage.setItem("admins", JSON.stringify(adminsToAdd));
}

const admins = JSON.parse(localStorage.getItem("admins")) || [];
const users = JSON.parse(localStorage.getItem("users")) || [];

function isValidAdmin(username, password) {
    return admins.some(admin => admin.username === username && admin.password === password);
}

function isValidUser(username, password) {
    return users.some(user => user.username === username && user.password === password);
}

function usernameExists(username) {
    return admins.some(admin => admin.username === username) || users.some(user => user.username === username);
}



const checkLoginCredentials = () => {
    incorrectCredentialsNote.classList.add("hide");

    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    if(inputUsername === "" || inputPassword === "")
        emptyCredentialsNote.classList.remove("hide")
    else if (isValidAdmin(inputUsername, inputPassword)) {
        localStorage.setItem("loggedIn", "yes");
        window.location.href = "../adminpanel.html";
    }
    else if (isValidUser(inputUsername, inputPassword)) {
        window.location.href = "../index.html";
        localStorage.setItem("loggedIn", "yes");
        const remember = remembermeCheckbox.checked;
        remember ? localStorage.setItem("remember", "yes") : localStorage.setItem("remember", "no");
    }
    else
        incorrectCredentialsNote.classList.remove("hide");  
};



const registerNewUser = () => {
    requiredInputsNote.classList.add("hide");
    usernameNote.classList.add("hide");
    passwordNote.classList.add("hide");

    const fullName = document.getElementById("fullName").value;
    const inputUsername = document.getElementById("newUsername").value;
    const email = document.getElementById("email").value;
    const inputPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const genderSelected = document.querySelector('input[name="gender"]:checked');

    if (fullName === "" || inputUsername === "" || email === "" || inputPassword === "" || confirmPassword === "" || !genderSelected) {
        requiredInputsNote.classList.remove("hide");
        return;
    }

    const gender = genderSelected.value;

    if (inputPassword !== confirmPassword) {
        passwordNote.classList.remove("hide");
        return;
    }

    if(usernameExists(inputUsername)) {
        usernameNote.classList.remove("hide");
        return;
    }
    
    const newUser = {
        username: inputUsername,
        password: inputPassword,
        name: fullName,
        email: email,
        gender: gender
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedIn", "yes");
    window.location.href = "../index.html";
};



function checkLoggedUser() {
    const userLoggedIn = localStorage.getItem("loggedIn");
    if (userLoggedIn == "yes" || userLoggedIn == null) {
        document.location.href = "../index.html";
    }
};



window.onload = checkLoggedUser();

loginBtn.addEventListener("click", checkLoginCredentials);

registerBtn.addEventListener("click", registerNewUser);

signupLink.addEventListener("click", () => {
    signupContainer.classList.toggle("hide");
    loginContainer.classList.toggle("hide");
});

loginLink.addEventListener("click", () => {
    signupContainer.classList.toggle("hide");
    loginContainer.classList.toggle("hide");
});
