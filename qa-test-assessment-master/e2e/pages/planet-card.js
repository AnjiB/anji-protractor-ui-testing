'use strict';

let planetName, population, climate, gravity;

module.exports = {
  init: (planetParentRootElement) => {
    planetName = planetParentRootElement.element(by.css('.card-subtitle'));
    population = planetParentRootElement.element(by.css('.card-body div:nth-of-type(1) div:nth-of-type(2)'));
    climate = planetParentRootElement.element(by.css('.card-body div:nth-of-type(2) div:nth-of-type(2)'));
    gravity = planetParentRootElement.element(by.css('.card-body div:nth-of-type(3) div:nth-of-type(2)'));
  },
  
  /*
    Returns the name of the planet
  */
  getName: async() => {
    return await planetName.getText();
  },

  /*
    Returns the population of the planet
  */
  getPopulation: async() => {
    return await population.getText();
  },

  /*
    Returns the climate of the planet
  */
  getClimate: async() => {
    return await climate.getText();
  },

   /*
    Returns the gravity of the planet
  */
  getGravity: async() => {
    return await gravity.getText();
  }
}