# QA Engineer Assessment Solution

* [Introduction to Framework](#Introduction-to-Framework)

* [How to run tests](#How-to-run-tests)

* [Problems I am facing with Environment](#Problems)

* [Reporting](#Reports)

* [Test Coverage](#Test-Coverage)

* [Findings](#Fidings)

* [My Contact Details](#my-contact-details)

## Introduction to Framework
* Framework follows modular approach
* Framework is implemented using Page Object Model
* Framework captures screenshots on failure
* Framework generates a nice HTML report and contains all the information related to test run. This report also contains screenshots of
failures.

## How to run tests
* Clone the [repository](https://github.com/AnjiB/anji-protra-assignment)
* Go to the folder qa-test-assessment-master
* Being in root folder, run the command `npm install` [It downloads all the dependencies into node_modules folder]
* run the command `ng serve` to start the application. Please check if application is running on port 4200 or 
launch http://localhost:4200/
* Open another terminal and go to the folder `qa-test-assessment-master`
* To trigger the tests, being in root of the test project `qa-test-assessment-master`, run the command `protractor protractor.conf.js`
* If you see any issue related to driver, please update webdriver manager using `webdriver-manager update`

## Problems
* I am not able to run the tests using ng e2e angular lifecyele command. I am getting some weird errors but I believe they are related environment setup.
However you can still run the tests using `protractor protractor.conf.js` command

## Reporting
* Once the test run is complete, and HTML report will be generated and opened automatically in the browser (I am attaching this to an email as well )
* Report contains screenshots of the failures

## Test Coverage (#Test-Coverage)
* Functional Tests (please read feature files for the scnearios)
* Web Page performance testing using light-house plugin
* Accessibility testing using Axe/WAVE
* Api testing (I would love to write tests but dont have time)
    Application is making GET call for every search we make -> https://swapi.dev/api/planets/?search=Darth
    Returns JSON Response:  `{"count":0,"next":null,"previous":null,"results":[]}` in case of no results
    Returns JSON Response: ```
{
"count":1,
"next":null,
"previous":null,
"results":[
{
"name":"Alderaan",
"rotation_period":"24",
"orbital_period":"364",
"diameter":"12500",
"climate":"temperate",
"gravity":"1 standard",
"terrain":"grasslands, mountains",
"surface_water":"40",
"population":"2000000000",
"residents":[
"http://swapi.dev/api/people/5/",
"http://swapi.dev/api/people/68/",
"http://swapi.dev/api/people/81/"
],
"films":[
"http://swapi.dev/api/films/1/",
"http://swapi.dev/api/films/6/"
],
"created":"2014-12-10T11:35:48.479000Z",
"edited":"2014-12-20T20:58:18.420000Z",
"url":"http://swapi.dev/api/planets/2/"
}
]
}
{
"count":1,
"next":null,
"previous":null,
"results":[
{
"name":"Alderaan",
"rotation_period":"24",
"orbital_period":"364",
"diameter":"12500",
"climate":"temperate",
"gravity":"1 standard",
"terrain":"grasslands, mountains",
"surface_water":"40",
"population":"2000000000",
"residents":[
"http://swapi.dev/api/people/5/",
"http://swapi.dev/api/people/68/",
"http://swapi.dev/api/people/81/"
],
"films":[
"http://swapi.dev/api/films/1/",
"http://swapi.dev/api/films/6/"
],
"created":"2014-12-10T11:35:48.479000Z",
"edited":"2014-12-20T20:58:18.420000Z",
"url":"http://swapi.dev/api/planets/2/"
}
]
}``` for positive response.

## Fidings
* There are four functional issues I found.
    1. There is no validation in the applicaton if user launches the page with invalid Type. 
    For ex: http://localhost:4200/?searchType=plates&query=Alderaan
    Api is returning Page Not Found 404 error which is wrong and UI says `Loading...` all the time
    Note: A test is failing due to the same issue.
    2. When user searches for something & gets positive response, and clearing search box and searchig again resulting the same.
    Ideally it should refresh the browser with `query=`(empty query). Basically, when input query is empty, search is not making 
    any calls.
    Note: A test is failing due to the same issue.
    3. No validation on input query min length
    4. No validation on input query max length
* Performance Using Lighthouse: Lighthouse reports lot of performance issues (I will attach screenshots in email) and suggesting lot of 
improvements to work on.
* Accessibilty: Axe is reporting 3 isues and one with level - Serious and that is `Elements must have sufficient color contrast`. Search button does not have proper color contrast
* Responsiveness: Page is not broken or does not look ugly on smaller screens. Tested with mobile views as well.

## My Contact Details
* Name: Anjaiah Boddupally
* Email: boddupally.anji@gmail.com
* Contact: 0683087744 (mobile)
