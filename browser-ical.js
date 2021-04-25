const ical = require('./base-ical');
const {promiseCallback} = require('./util');

/**
 * @deprecated For browser environment
 * @see node-ical.js
 */
ical.async.parseFile = function (filename, cb) {
  return promiseCallback((resolve, reject) => {
    reject(new Error('Parsing file in browser is not supported'));
  }, cb);
};

/**
 * @deprecated For browser environment
 * @see node-ical.js
 */
ical.sync.parseFile = function () {
  throw new Error('Parsing file in browser is not supported');
};

module.exports = ical;
