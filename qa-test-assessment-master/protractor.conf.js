  // Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

exports.config = {
  debug: false,
  allScriptsTimeout: 11000,
  specs: [
    './e2e/features/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  allScriptsTimeout: 45000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    strict: true,
    require: [
      './e2e/steps/*.steps.ts'
    ],
    format: "json:tmp/results.json",
    plugins: [
      {
        package: "protractor-simple-cucumber-html-reporter-plugin",
        options: {
          // read the options part
        }
      }
    ]
  },
  onPrepare() {
    browser.driver.manage().window().maximize();
    require('ts-node').register({
      project: require('path').join(__dirname, './e2e/tsconfig.e2e.json')
    });

    const {Given, Then, When, Before} = require('cucumber');
    global.Given = Given;
    global.When = When;
    global.Then = Then;
    global.Before = Before;
  }
  
};
