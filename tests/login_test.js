Feature('login');

Scenario('Open Login form and try to login with empty values', ({ I, mainPage, loginPage }) => {
    I.amOnPage('/');
    mainPage.goToLogin();
    I.see("Don't have an account yet? Get your API key today — it's free ");
    loginPage.clickLogin();
    I.see("Please enter your account email and password.");
});
Scenario('Open Login form and try to reset password for unexisting user', ({ I, mainPage, loginPage }) => {
    I.amOnPage('/');
    mainPage.goToLogin();
    loginPage.goToResetPassword();
    I.see("Forgot Password");
    loginPage.enterEmailToRestore("test@test123.com");
    loginPage.submitResetRequest();
    I.see("Update has failed with the following error: The submitted credentials are not connected to an existing user.");
});
