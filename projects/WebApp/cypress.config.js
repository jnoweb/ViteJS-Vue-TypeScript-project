const { nxE2EPreset } = require('@nx/cypress/plugins/cypress-preset');

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, { cypressDir: 'cypress' }),
    baseUrl: 'http://127.0.0.1',
  },
});
