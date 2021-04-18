'use strict';

let personName, gender, birthYear, eyeColor, skinColor;

module.exports = {
  init: (myElement) => {

    console.log("text..");
    console.log(await myElement.getText());

    personName = myElement(by.css('.card-subtitle'));
    gender = myElement(by.css('.card-body div:nth-of-type(1) div:nth-of-type(2)'));
    birthYear = myElement(by.css('.card-body div:nth-of-type(2) div:nth-of-type(2)'));
    eyeColor = myElement(by.css('.card-body div:nth-of-type(3) div:nth-of-type(2)'));
    skinColor = myElement(by.css('.card-body div:nth-of-type(4) div:nth-of-type(2)'));
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