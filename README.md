Proof of concept: PhantomJS

# Requirements
* Node.js

# Creating from scratch
To create `package.json`:

```
npm init

npm install phantom --save
```

For using horseman:

```
npm install node-horseman --save
```

# Executing demo scripts
## Demo 1: using phantomjs-node
Getting some parameters from stackoverflow
```
node phantomjs-node.js
```

## Demo 2: using horseman
Searching in Google and counting results
```
node horseman-google.js
```

Getting twitter followers for several users
```
node horseman-twitter.js
```

Evaluating function for getting dimensions of thumbimage in wikipedia
```
node horseman-wikipedia.js
```

Printing amazon to pdf and taking screenshot in jpg
```
node horseman-amazon.js
```

Working with cookies with httpbin
```
node horseman-httpbin.js
```