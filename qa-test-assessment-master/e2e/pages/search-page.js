'use strict';

let pplRadio, planetRadio, queryInputBox, searchButton, listOfPeople, listOfPlanets, notFoundMessage, pageHeader;

module.exports = {
  init: () => {
    pplRadio = element(by.id('people'));
    planetRadio = element(by.id('planets'));
    queryInputBox = element(by.id('query'));
    searchButton = element(by.css('.btn-primary'));
    listOfPeople = element.all(by.css('app-character .card'));
    listOfPlanets = element.all(by.css('app-planet .card'));
    notFoundMessage = element(by.xpath('(//div[@class="col"] //div[@_ngcontent-c0])[1]'));
    pageHeader = element(by.xpath('//div[@class="col"]//h1'));
  },
  setQuery: (query) => {
    return queryInputBox.sendKeys(query);
  },
  
  selectPerson: () => {
    return pplRadio.click();
  },

  selectPlanet: () => {
    return planetRadio.click();
  },

  clickOnSearch: () => {
    return searchButton.click();
  },

  getPeopleCount: async() => {
    return await listOfPeople.count();
  },

  getPlanetCount: async() => {
    return await listOfPlanets.count();
  },

  getPlanetElementByIndex: async(index) => {
    return await listOfPlanets.get(index);
  },

  getPersonElementByIndex: async(index) => {
    return await listOfPeople.get(index);
  },

  getPeople: async() => {
    return await listOfPeople;
  },

  getPlanet: async() => {
    return await listOfPlanets;
  },

  getNotFoundElementMessage: async() => {
     return await notFoundMessage.getText();
  },

  getPageHeader: async() => {
    return await pageHeader.getText();
 }
}