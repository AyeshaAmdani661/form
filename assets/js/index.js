let register = document.querySelector('#register');
let register_portal = document.querySelector('#register-portal');
let login_portal = document.querySelector('#login-portal');
let login = document.querySelector('#login');
let createAccount = document.querySelector('#createAccount');
let signupEmail = document.querySelector('#email');
let signupPassword = document.querySelector('#password');
let loginEmail = document.querySelector('#loginEmail');
let loginPassword = document.querySelector('#loginPassword');
let loginBtn = document.querySelector('#loginBtn');
let skill = document.querySelector('#skill');


let dataOfEmail = [];
let dataOfPassword = [];

login.addEventListener('click', () => {
    login_portal.style.display = 'block';
    register_portal.style.display = 'none';
    signupEmail.value = "";
    signupPassword.value = "";
});

register.addEventListener('click', () => {
    login_portal.style.display = 'none';
    register_portal.style.display = 'block';
    loginEmail.style.borderColor = '#a3a3a3';
    loginEmail.nextElementSibling.innerText = '';
    loginEmail.value = "";
    loginPassword.style.borderColor = '#a3a3a3';
    loginPassword.nextElementSibling.innerText = '';
    loginPassword.value = "";
});

createAccount.addEventListener('click', () => {
    dataOfEmail.push(signupEmail.value);
    dataOfPassword.push(signupPassword.value);
    signupEmail.value = "";
    signupPassword.value = "";
});

loginBtn.addEventListener('click', () => {
    if (loginEmail.value !== '' && loginPassword !== '') {
        if (dataOfEmail.indexOf(loginEmail.value) === -1) {
            loginEmail.style.borderColor = 'red';
            loginEmail.nextElementSibling.innerText = 'Not registered';
        }
        else {
            loginEmail.style.borderColor = '#a3a3a3';
            loginEmail.nextElementSibling.innerText = '';
            loginEmail.value = "";

        }
        if (dataOfPassword.indexOf(loginPassword.value) === -1) {
            loginPassword.style.borderColor = 'red';
            loginPassword.nextElementSibling.innerText = 'The password you entered is wrong!';
        }
        else {
            loginPassword.style.borderColor = '#a3a3a3';
            loginPassword.nextElementSibling.innerText = '';
            loginPassword.value = "";
        }
    }
    else {
        loginEmail.style.borderColor = 'red';
        loginPassword.style.borderColor = 'red';
        loginPassword.nextElementSibling.innerText = 'Please fill both the fields';
    }
});