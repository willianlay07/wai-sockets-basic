var moment 		= require('moment');
var now 		= moment();

//console.log(now.format());
//console.log(now.format('X'));		// Timestamp;
//console.log(now.format('x'));		// Millisecond Timestamp
//console.log(now.valueOf());			// Javascript Timestamp;


var timestamp 	= 1484973996186;
var timestampMoment	= moment.utc(timestamp);

console.log(timestampMoment.local().format("hh:mm a"));


//now.subtract(1, 'year');
//console.log(now.format());
//console.log(now.format("MMM Do YYYY, h:mm a"));

// Wai - Example;
/*
console.log(now.format('x'));
var mycurrent_time 	= now.format('x');
mycurrent_time 		= parseInt(mycurrent_time);

var timestampMoment 	= moment.utc(mycurrent_time);
console.log("UTC Time : " + timestampMoment.format("hh:mm A"));
console.log("My Local Time : " + timestampMoment.local().format("hh:mm a"));
*/