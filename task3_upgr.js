var needle = require('needle'); // needs module 'needle' be installed: https://www.npmjs.com/package/needle

var URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3';

needle.get(URL, function(err, res){
    if (err) throw err;
    var exchange = res.body;
    // structured response, if we know what's inside
    var currency;
    for(var prop in exchange) {
    	currency = (exchange[prop]);
   		console.log(currency['ccy'] + ' : ' + currency['buy'] + ' ' + currency['base_ccy'] + ', ' + currency['sale'] + ' ' + currency['base_ccy'] + ';');
    }
});