'use strict'

// var casper = require('casper').create();

casper.test.begin('testing blog', 2, function suite(test) {
  casper.start('http://awesome-sauce-blog.herokuapp.com/', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function() {
    test.assertTitle('JJB Blog', 'title is good');
  });

  casper.then(function() {
    this.captureSelector('screenshot.png', 'article');
  });

  casper.run(function() {
    test.done();
  });
});
