'use strict';

let personName, gender, birthYear, eyeColor, skinColor;

module.exports = {
  init: (personCardRootElement) => {
    personName = personCardRootElement.element(by.css('.card-subtitle'));
    gender = personCardRootElement.element(by.css('.card-body div:nth-of-type(1) div:nth-of-type(2)'));
    birthYear = personCardRootElement.element(by.css('.card-body div:nth-of-type(2) div:nth-of-type(2)'));
    eyeColor = personCardRootElement.element(by.css('.card-body div:nth-of-type(3) div:nth-of-type(2)'));
    skinColor = personCardRootElement.element(by.css('.card-body div:nth-of-type(4) div:nth-of-type(2)'));
  },
  
  /*
    Returns the name of the person
  */
  getPersonName: async() => {
    return await personName.getText();
  },

  /*
    Returns the gender of the person
  */
  getGender: async() => {
    return await gender.getText();
  },

  /*
    Returns the birth year of the person
  */
  getBirthYear: async() => {
    return await birthYear.getText();
  },

  /*
    Returns the eye color of the person
  */
  getEyeColor: async() => {
    return eyeColor.getText();
  },

  /*
    Returns the skin color of the person
  */
  getSkinColor: async() => {
    return await skinColor.getText();
  }
}