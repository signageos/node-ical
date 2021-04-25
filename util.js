
// Utility to allow callbacks to be used for promises
function promiseCallback(fn, cb) {
  const promise = new Promise(fn);
  if (!cb) {
    return promise;
  }

  promise
    .then(returnValue => {
      cb(null, returnValue);
    })
    .catch(error => {
      cb(error, null);
    });
}

module.exports = {
  promiseCallback
};
