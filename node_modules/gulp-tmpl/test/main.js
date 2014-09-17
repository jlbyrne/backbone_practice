var tpl = require('../');
var should = require('should');
var gutil = require('gulp-util');
var os = require('os');
var fs = require('fs');
var path = require('path');
var tmpl = require('lodash.template');
require('mocha');


describe('gulp-tmpl', function() {
  it('should precompile lodash templates', function(cb) {
    var stream = tpl();

    var tmplString = '<h1><%= test %></h1>';

    stream.on('data', function (file) {
      should.equal(file.path, 'test/fixture/fixture.js');
      should.equal(file.relative, 'fixture/fixture.js');
      should.equal(file.contents.toString(), tmpl(tmplString).source);
      cb();
    });

    stream.write(new gutil.File({
      base: __dirname,
      path: __dirname + '/fixture/fixture.html',
      contents: new Buffer(tmplString)
    }));
  });
});
