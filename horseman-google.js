var Horseman = require('node-horseman');
var horseman = new Horseman();

console.log("Opening horseman");

horseman
  .log("Setting user-agent")
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .log("Opening www.google.com")
  .open('http://www.google.com')
  .log("Typing github")
  .type('input[name="q"]', 'github')
  .log("Clicking button")
  .click('[name="btnK"]')
//  .log("Typing keyboard")
//  .keyboardEvent('keypress', 123456)
  .log("Waiting for selector div.g")
  .waitForSelector('div.g')
  .log("Counting elements with selector div.g")
  .count('div.g')
  .log("Number of results:")
  .log() 
  .log("Taking screenshot")
  .screenshot("horseman-google.jpg")
  .log("Closing horseman")
  .close();