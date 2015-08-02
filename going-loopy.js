#!/usr/bin/env node

/**
 * going-loopy - A guide on the JavaScript event loop.
 *
 * @author Zach Bruggeman <mail@bruggie.com>
 * @package going-loopy
 */

const workshopper = require('workshopper')

workshopper({
  name: 'going-loopy',
  appDir: __dirname,
  languages: [ 'en' ],
  footerFile: false
})
