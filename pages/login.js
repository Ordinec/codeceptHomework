const { I } = inject();

module.exports = {
    fields: {
        email: '#email',
    },
    buttons: {
        login: 'label:has-text("Log in")',
        resetPassword: 'a[title="Reset your password"]',
        submitReset: 'label[for="submit"]',
    },

    clickLogin() {
        I.click(this.buttons.login);
    },
    goToResetPassword(){
        I.click(this.buttons.resetPassword);
    },
    enterEmailToRestore(value){
        I.fillField(this.fields.email, value);
    },
    submitResetRequest(){
        I.click(this.buttons.submitReset);
    }
}
