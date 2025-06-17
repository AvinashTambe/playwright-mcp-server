export enum LoginPageLocators {
    loginText = "//h2[.='Login to your account']",
    loginEmail ="input[data-qa='login-email']",
    loginPassword = "input[data-qa='login-password']",
    loginButton = "button[data-qa='login-button']",
    orText = ".or",
    signupText = "//h2[.='New User Signup!']",
    signupName = "input[data-qa='signup-name']",
    signupEmail = "input[data-qa='signup-email']",
    signupButton = "button[data-qa='signup-button']",
    logoutButton = "a[href='/logout']",
    loginCredentialsToaster = "p[style='color: red;']",
    loggedInText = "a:has(i.fa-user)",
}