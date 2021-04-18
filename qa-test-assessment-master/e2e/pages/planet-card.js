'use strict';

let planetName, population, climate, gravity;

module.exports = {
  init: (planetParentRootElement) => {
    planetName = planetParentRootElement.element(by.css('.card-subtitle'));
    population = planetParentRootElement.element(by.css('.card-body div:nth-of-type(1) div:nth-of-type(2)'));
    climate = planetParentRootElement.element(by.css('.card-body div:nth-of-type(2) div:nth-of-type(2)'));
    gravity = planetParentRootElement.element(by.css('.card-body div:nth-of-type(3) div:nth-of-type(2)'));
  },
  
  getName: () => {
    return planetName.getText();
  },

  getPopulation: () => {
    return population.getText();
  },

  getClimate: () => {
    return climate.getText();
  },

  getGravity: () => {
    return gravity.getText();
  }
}