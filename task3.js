var needle = require('needle'); // needs module 'needle' be installed: https://www.npmjs.com/package/needle

var URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

needle.get(URL, function(err, res){
	if (err) throw err;
    console.log(res.body);
});