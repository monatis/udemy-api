# udemy-api
A simple Udemy API client in node.js

## Install
`npm install udemy-api --save`

##usage
```
const Udemy = require('udemy-api');
udemyApiClient = new Udemy('your Udemy API client ID', 'Your Udemy API client secret');
udemyApiClient.get('courses?language=en&price=price-free', function(err, res, body) {
    if(err) return console.error(err);
    console.log(body);
});