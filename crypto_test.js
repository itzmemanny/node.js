var crypto = require('crypto');

//var ciphers = crypto.getCiphers();
//console.log(ciphers);

var cipher = crypto.createCipher('aes256', 'password');
cipher.update('TestCipher','ascii','hex');
var cipherd = cipher.final('hex');
console.log(cipherd);

var hmac = crypto.createHmac('sha256','hash password');
var pass = hmac.update('TestHmac').digest('hex');
console.log(pass);
