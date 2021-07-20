const { I } = inject();

module.exports = {
    buttons: {
        login: 'li.action.login a',
        documentation: 'a[title="API Documentation"]',
    },

    goToLogin() {
        I.click(this.buttons.login);
    },
    goToDocumentation(){
        I.click(this.buttons.documentation);
    }
}
