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

  /*
    Returns the element of input query text box
  */
  queryInputBox: () => {
    return queryInputBox;
  },

  /*
    Returns the text present in the input query text box
  */
  getQueryInput: async() => {
    return await queryInputBox.getAttribute('value');
  },

  /*
    Sends the input to query text box
  */
  setQuery: (query) => {
    return queryInputBox.sendKeys(query);
  },
  
  /*
    Selects the person
  */
  selectPerson: () => {
    return pplRadio.click();
  },

  /*
    Selects the planet
  */
  selectPlanet: () => {
    return planetRadio.click();
  },

  /*
    Clicks on search button
  */
  clickOnSearch: () => {
    return searchButton.click();
  },

  /*
    Returns the count of people resuled due to search
  */
  getPeopleCount: async() => {
    return await listOfPeople.count();
  },

  /*
    Returns the count of planet resuled due to search
  */
  getPlanetCount: async() => {
    return await listOfPlanets.count();
  },

  /*
    Returns the root element of the planet at given index
  */
  getPlanetElementByIndex: async(index) => {
    return await listOfPlanets.get(index);
  },

  /*
    Returns the root element of the person at given index
  */
  getPersonElementByIndex: async(index) => {
    return await listOfPeople.get(index);
  },

   /*
    Returns the list of people elements
  */
  getPeople: async() => {
    return await listOfPeople;
  },

  /*
    Returns the list of planet elements
  */
  getPlanet: async() => {
    return await listOfPlanets;
  },

  /*
    Returns the Not Found. message
  */
  getNotFoundElementMessage: async() => {
     return await notFoundMessage.getText();
  },

  /*
    Returns the page header.
  */
  getPageHeader: async() => {
    return await pageHeader.getText();
 }
}