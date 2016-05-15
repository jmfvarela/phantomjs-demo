var Horseman = require('node-horseman');
var horseman = new Horseman();

horseman
  .viewport(1920, 543)
  .zoom(1)
  .log("Opening amazon.es")
  .open('http://www.amazon.es')
  //.log("Waiting 5 seconds to load images")
  //.wait(5000)
  .log("Taking screenshot")
  .screenshot("horseman-amazon.jpg")
  .log("Generating pdf")
  .pdf('amazon.pdf', {
    width: '1400px',
    height: '2000px',
    margin: '30px',
    /* format: 'A4',
    orientation: 'portrait',
    margin: '1cm', */
    header: {
      height: '1cm',
      contents: function(pageNum, numPages) {
        if (pageNum == 1) {
          return '';
        }
        return '<h3>Header ' + pageNum + ' / ' + numPages + '</h3>';
      }
    },
    footer: {
      height: '1cm',
      contents: function(pageNum, numPages) {
        if (pageNum == 1) {
          return '';
        }
        return '<h3>Footer ' + pageNum + ' / ' + numPages + '</h3>';
      }
    }
  })
  .close()