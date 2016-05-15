var Horseman = require('node-horseman');
var horseman = new Horseman();

horseman
  .cookies({
    name: 'test',
    value: 'cookie',
    domain: 'httpbin.org'
  })
  .open('http://httpbin.org/cookies')
  .cookies()
  .then(function(cookies){
    console.log(cookies);
    return horseman.close();
  });
