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
  useAllAngular2AppRoots: true,
  allScriptsTimeout: 45000,
  baseUrl: 'http://localhost:4200/',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    monochrome: true,
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
  },
  onComplete: () => {
    var reporter = require('cucumber-html-reporter');
    var options = {
      theme: 'bootstrap',
      jsonFile: 'tmp/results.json',
      output: 'tmp/results.html',
      reportSuiteAsScenarios: true,
      launchReport: true
    };
    reporter.generate(options);
  }
};
