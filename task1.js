var Event = require('events').EventEmitter;
var date; // registering date & time of event
var user = 'User';

var logger = new Event();

logger.on('logIn', function() {
	date = new Date;
	console.log(date.toLocaleDateString() + '. ' + date.toLocaleTimeString() + ' ' + user + ' Log in');
});

logger.on('sendFile', function() {
	date = new Date;
	console.log(date.toLocaleDateString() + '. ' + date.toLocaleTimeString() + ' ' + user + ' Send file');
});

logger.on('logOut', function() {
	date = new Date;
	console.log(date.toLocaleDateString() + '. ' + date.toLocaleTimeString() + ' ' + user + ' Log Out');
});

setTimeout(function() {logger.emit('logIn')}, 500);
setTimeout(function() {logger.emit('sendFile')}, 1500);
setTimeout(function() {logger.emit('logOut')}, 2500);