const { I } = inject();

module.exports = {
    buttons: {
        login: 'li.action.login a',
    },

    goToLogin() {
        I.click(this.buttons.login);
    },
}
