Feature('Main');

Scenario('Open Documentation section', async ({ I, mainPage, documentationPage }) => {
    I.amOnPage('/');
    mainPage.goToDocumentation();
    const title = await documentationPage.getPageTitle();
    I.assertEqual(title, "API Documentation");
});
Scenario('Check navigation using Logo', async ({ I, mainPage, documentationPage }) => {
    I.amOnPage('/');
    mainPage.goToDocumentation();
    documentationPage.clickOnMainLogo();
    const pageUrl = await I.grabCurrentUrl();
    I.assertEqual(pageUrl, 'https://weatherstack.com/');
});
