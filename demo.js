var phantom = require('phantom');

var sitepage = null;
var phInstance = null;

console.log("Creating phantom instance");
phantom.create()
    .then(instance => {
        console.log("Creating page");
        phInstance = instance;
        return instance.createPage();
    })
    .then(page => {
        console.log("Opening page: https://stackoverflow.com");
        sitepage = page;
        return page.open('https://stackoverflow.com');
    })
    .then(status => {
        console.log("Response status: " + status);
        console.log("Getting content");
        return sitepage.property('content');
    })
    .then(content => {
        console.log("Content length: " + content.length);
        console.log("Closing page and exit phantom");
        sitepage.close();
        phInstance.exit();
    })
    .catch(error => {
        console.log("Error: " + error);
        phInstance.exit();
    });