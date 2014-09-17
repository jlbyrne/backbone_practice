var es = require('event-stream');
var template = require('lodash.template');
var extend = require('xtend');

function tmpl(data, options) {
  options = extend({
    compilerOptions: {}
  }, options);

  var compile = function(contents) {
    var result = template(contents.toString(), data, options.compilerOptions);
    if (data) {
      return result;
    }
    return result.source;
  };

  return es.map(function(data, cb) {
    cb(null, compile(data.contents));
  });
}

tmpl.precompile = tmpl.bind(this, false);

module.exports = tmpl;
