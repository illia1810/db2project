document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.querySelector("#sign-in");
    const signUpForm = document.querySelector("#sign-up");
    const resetPasswordForm = document.querySelector("#reset-password1");
    const createPassword = document.querySelector("#create-password");
    const headerSignIn = document.querySelector(".header-signin");
    const headerSignUp = document.querySelector(".header-signup");
    const headerLogIn = document.querySelector(".header-login");

    document.querySelector("#link-forgot-password").addEventListener("click", () => {
        signInForm.classList.add("hidden");
        resetPasswordForm.classList.remove("hidden");
        headerSignUp.classList.add("hidden");
        headerSignIn.classList.remove("hidden");
    });

    document.querySelector("#link-to-sign-in").addEventListener("click", () => {
        resetPasswordForm.classList.add("hidden");
        signInForm.classList.remove("hidden");
        headerSignUp.classList.remove("hidden");
        headerSignIn.classList.add("hidden");
    });

    document.querySelector("#link-to-sign-up").addEventListener("click", () => {
        signInForm.classList.add("hidden");
        signUpForm.classList.remove("hidden");
        headerSignUp.classList.add("hidden");
        headerLogIn.classList.remove("hidden");
    });

    document.querySelector("#link-to-log-in").addEventListener("click", () => {
        signUpForm.classList.add("hidden");
        signInForm.classList.remove("hidden");
        headerLogIn.classList.add("hidden");
        headerSignUp.classList.remove("hidden");
    });

    document.querySelector("#signup-btn").addEventListener("click", () => {
        signUpForm.classList.add("hidden");
        createPassword.classList.remove("hidden");
    })
    
})