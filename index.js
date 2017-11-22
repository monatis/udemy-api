const request = require('request');
const Base64 = require('js-base64').Base64;

module.exports = class Udemy {
constructor(cId, cSecret) {
this.clientId = cId;
this.clientSecret = cSecret;
this.baseUrl = 'https://www.udemy.com/api-2.0/';
}

get(path, cb) {
let options = {
url: this.baseUrl + path,
'auth': {
'user': this.clientId,
'pass': this.clientSecret,
'sendImmediately': true
},
headers: {
'Authorization': 'Basic ' + Base64.encode(this.clientId + ':' + this.clientSecret)
}
};
request(options, function(err, res, body) {
return cb(err, res, body);
});
}
}