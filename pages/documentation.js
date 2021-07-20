const { I } = inject();

module.exports = {
    labels: {
        title: 'div.topic h2',
    },
    buttons: {
        logo: 'a[title="weatherstack Logo"] img',
    },

    async getPageTitle() {
        return await I.grabTextFrom(this.labels.title);
    },
    clickOnMainLogo(){
        I.click(this.buttons.logo);
    }
}
