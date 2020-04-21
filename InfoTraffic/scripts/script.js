const loginLink  = document.querySelector('.lnk-login');
const signupLink = document.querySelector('.lnk-signup');
const overlay =document.querySelector('.overlay');
const container =document.querySelector('.container');
const login = document.querySelector('.login');
const signup = document.querySelector('.sign-up');
const closeSignUp = document.querySelector('.close-sign-up > svg ');
const closeLogin = document.querySelector('.close-login > svg ');

loginLink.addEventListener("click", () => {
   overlay.classList.add('overlay-activate');
   container.classList.add('container-activate');
   login.classList.add('login-activate');
});

signupLink.addEventListener("click", () => {
   overlay.classList.add('overlay-activate');
   container.classList.add('container-activate');
   signup.classList.add('sign-up-activate');
});

closeSignUp.addEventListener("click", () => {
   console.log('yeahhh');
   overlay.classList.remove('overlay-activate');
   container.classList.remove('container-activate');
   signup.classList.remove('sign-up-activate');
});

closeLogin.addEventListener("click", () => {
   console.log('yeahhh');
   overlay.classList.remove('overlay-activate');
   container.classList.remove('container-activate');
   login.classList.remove('login-activate');
});