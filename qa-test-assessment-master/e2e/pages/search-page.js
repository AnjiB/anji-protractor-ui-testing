'use strict';

var pplRadio, planetRadio, queryInputBox, searchButton, listOfPeople, listOfPlanets, notFoundMessage;

module.exports = {
  init: () => {
    pplRadio = element(by.id('people'));
    planetRadio = element(by.id('planets'));
    queryInputBox = element(by.id('query'));
    searchButton = element(by.css('.btn-primary'));
    listOfPeople = element.all(by.css('app-character .card'));
    listOfPlanets = element.all(by.css('app-planet .card'));
    notFoundMessage = element(by.xpath('(//div[@class="col"] //div[@_ngcontent-c0])[1]'));
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

  getPeopleCount: () => {
    return listOfPeople.count();
  },

  getPlanetCount: () => {
    return listOfPlanets.count();
  },

  getPlanetElementByIndex: (index) => {
    return listOfPlanets.get(index);
  },

  getPersonElementByIndex: (index) => {
    return listOfPeople.get(index);
  },

  getPeople: () => {
    return listOfPeople;
  },

  getPlanet: () => {
    return listOfPlanets;
  },

  getNotFoundElementMessage: () => {
     return notFoundMessage.getText();
  }
}