'use strict';

module.exports.handler = function(event, context, cb) {
  return cb(null, {
    message: 'Hello world!',
    apiversion: 'world/v1'
  });
};
