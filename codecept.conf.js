const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://weatherstack.com/',
      show: true,
      browser: 'chromium'
    },
    ChaiWrapper : {
      require: "codeceptjs-chai"
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main.js',
    loginPage: './pages/login.js',
    documentationPage: './pages/documentation.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptHomework',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
