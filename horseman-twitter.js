const Horseman = require('node-horseman');
const users = ['PhantomJS', 'nodejs', 'jmfvarela'];

users.forEach((user) => {
    const horseman = new Horseman();
    horseman
        .log(`Opening twitter for user ${user}`)
        .open(`http://twitter.com/${user}`)
        .text('.ProfileNav-item--followers .ProfileNav-value')
        .then((text) => {
            console.log(`${user} followers: ${text}`);
        })
        .log("Taking screenshot")
        .screenshot(`horseman-twitter-${user}.jpg`)
        .close();
});