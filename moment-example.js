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