import { Before, Then } from "cucumber";

const searchPage = require('../pages/search-page.js');
const planetCardPage = require('../pages/planet-card.js');
const personCardPage = require('../pages/person-card.js');
const { Given } = require('cucumber');
const { browser, by } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

Before(function(){
    searchPage.init();
})


Given('The app is open on {string}', { timeout: 25 * 1000 }, async (string) => {
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
    await chai.expect(browser.element(by.id('query')).isDisplayed()).to.eventually.be.true;
});

Given('User search for person {string}', { timeout: 25 * 1000 }, async (personName) => {
    await searchPage.selectPerson();
    await searchPage.setQuery(personName);
    await searchPage.clickOnSearch();
    await browser.sleep(2000);
});

Given('User search for planet {string}', { timeout: 25 * 1000 }, async (planetName) => {
    await searchPage.selectPlanet();
    await searchPage.setQuery(planetName);
    await searchPage.clickOnSearch();
    await browser.sleep(2000);
});

Then('Page shold have valid header', { timeout: 25 * 1000 }, async () => {
    await chai.expect(searchPage.getPageHeader()).to.eventually.equal('The Star Wars Search');
});

Then('User gets message {string}', { timeout: 25 * 1000 }, async (notFoundMessage) => {
    await chai.expect(searchPage.getNotFoundElementMessage()).to.eventually.equal(notFoundMessage);
});

Then('User gets planet count {int}', { timeout: 25 * 1000 }, async (count) => {
    await chai.expect(searchPage.getPlanetCount()).to.eventually.equal(count);
});

Then('The Planet at {int} name should be {string}', { timeout: 25 * 1000 }, async (index, planetName) => {
    console.log("Index: " + index);
    console.log("PlanetName: " + planetName);
    var planetCardRootElement = await searchPage.getPlanetElementByIndex(index);
    planetCardPage.init(planetCardRootElement);
    await chai.expect(planetCardPage.getName()).to.eventually.equal(planetName);
});

Then('The Population should be {string}', { timeout: 25 * 1000 }, async (population) => {
    await chai.expect(planetCardPage.getPopulation()).to.eventually.equal(population);
});

Then('The Climate should be {string}', { timeout: 25 * 1000 }, async (climate) => {
    await chai.expect(planetCardPage.getClimate()).to.eventually.equal(climate);
});

Then('The Gravity should be {string}', { timeout: 25 * 1000 }, async (gravity) => {
    await chai.expect(planetCardPage.getGravity()).to.eventually.equal(gravity);
});

// person card step definitions

Then('User gets person count {int}', { timeout: 25 * 1000 }, async (count) => {
    await chai.expect(searchPage.getPeopleCount()).to.eventually.equal(count);
});

Then('The Person at {int} name should be {string}', { timeout: 25 * 1000 }, async (index, personName) => {
    console.log("Index: " + index);
    console.log("PlanetName: " + personName);
    var personCardRootElement = await searchPage.getPersonElementByIndex(index);
    personCardPage.init(personCardRootElement);
    await chai.expect(personCardPage.getPersonName()).to.eventually.equal(personName);
});

Then('The Gender should be {string}', { timeout: 25 * 1000 }, async (gender) => {
    await chai.expect(personCardPage.getGender()).to.eventually.equal(gender);
});

Then('The Birth Year should be {string}', { timeout: 25 * 1000 }, async (birthYear) => {
    await chai.expect(personCardPage.getBirthYear()).to.eventually.equal(birthYear);
});

Then('The Eye color should be {string}', { timeout: 25 * 1000 }, async (iColor) => {
    await chai.expect(personCardPage.getEyeColor()).to.eventually.equal(iColor);
});

Then('The Skin color should be {string}', { timeout: 25 * 1000 }, async (skinClor) => {
    await chai.expect(personCardPage.getSkinColor()).to.eventually.equal(skinClor);
});