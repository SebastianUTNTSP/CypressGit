const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 900,
  pageLoadTimeout: 9000,
  defaultCommandTimeout: 5000, 
  
  e2e: {
    testIsolation:false,
    hideXHRInCommandLog: true,
      projectId: "nej4xh",
    
    setupNodeEvents(on, config) {
      // implement node event listeners here.

    },
  },
});


