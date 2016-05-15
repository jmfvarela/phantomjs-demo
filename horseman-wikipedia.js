var Horseman = require('node-horseman');
var horseman = new Horseman();

horseman
  .open('http://en.wikipedia.org/wiki/Headless_Horseman')
  .log("Taking screenshot")
  .screenshot("horseman-wikipedia.jpg")
  .log("Evaluating function for getting dimensions of .thumbimage")
  .evaluate( function(selector){
      // This code is executed inside the browser.
      // It's sandboxed from Node, and has no access to anything
      // in Node scope, unless you pass it in, like we did with 'selector'.
      //
      // You do have access to jQuery, via $, automatically.
      return {
        height : $( selector ).height(),
        width : $( selector ).width()
      }
    }, '.thumbimage')
  .then(function(size){
    console.log(size);
    return horseman.close();
  });