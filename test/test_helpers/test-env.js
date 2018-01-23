'use strict'
const path = require('path')
const envfile = require('envfile')

const TEST_ENV = envfile.parseFileSync(path.join(__dirname, '../test.env'))

if (TEST_ENV) {
  for (const property in TEST_ENV) {
    process.env[property] = TEST_ENV[property]
  }
}
