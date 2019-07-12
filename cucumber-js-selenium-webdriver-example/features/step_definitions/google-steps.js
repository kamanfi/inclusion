'use strict';

var { defineSupportCode } = require('cucumber');
var { By, until, Key } = require('selenium-webdriver');
var { expect } = require('chai');

defineSupportCode(function ({ When, Then }) {

  When(/^I search Google for "([^"]*)"$/, function (searchQuery, next) {
    this.driver.get('http://www.google.co.uk/webhp?complete=0');
    this.driver.findElement(By.name('q'))
      .sendKeys(searchQuery);
    this.driver.findElement(By.name('q'))
      .sendKeys(Key.ENTER)
      .then(function () {
        next();
      });
  });

  Then(/^I should see some results$/, function (next) {
    this.driver.wait(until.elementLocated(By.css('div.g')));
    this.driver.findElements(By.css('div.g'))
      .then(function (elements) {
        expect(elements.length).to.not.equal(0);
        next();
      });
  });

  // When(/^I search cats for "([^"]*)"$/, function (searchQuery, next) {
  //   this.driver.get('http://www.google.co.uk/webhp?complete=0');
  //   this.driver.findElement(By.name('q'))
      // .sendKeys(searchQuery);
  //   this.driver.findElement(By.name('q'))
  //     .sendKeys(Key.ENTER)
  //       .then(function() {
  //         next();
  //       });
  // });

  Then(/^I should see at least 8 results$/, function (next) {
    this.driver.wait(until.elementLocated(By.css('div.g')));
    this.driver.findElements(By.css('div.g'))
      .then(function (elements) {
        expect(elements.length).to.not.lessThan(8);
        next();
      });
  });

  Then(/^I should be able to click image button and see images of cats$/, function (next) {
    this.driver.wait(until.elementLocated(By.css('a.q.qs')));
    this.driver.findElements(By.css('a.q.qs'))
      .then(elements => {
        (elements[0]).click();
        this.driver.wait(until.elementLocated(By.css('a.rg_l')));
        this.driver.findElements(By.css('a.rg_l'))
          .then(elements => elements.length.to.not.lessThan(8));
        next();
      });
  });


});

