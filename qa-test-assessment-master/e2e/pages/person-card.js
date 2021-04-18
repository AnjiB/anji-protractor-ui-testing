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
  
  getPersonName: () => {
    return personName.getText();
  },

  getGender: () => {
    return gender.getText();
  },

  getBirthYear: () => {
    return birthYear.getText();
  },

  getEyeColor: () => {
    return eyeColor.getText();
  },

  getSkinColor: () => {
    return skinColor.getText();
  }
}