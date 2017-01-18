var socket = io();

socket.on('connect', function(){
	console.log('Connected to socket.io server!');
});

socket.on('message', function(message){
	console.log('New message : ');
	console.log(message.text);
});


// Handle Submitting of a new message;
var $form	= jQuery('#message-form');		// Jquery Instance of the element;

$form.on('submit', function(event){
	event.preventDefault();		// don't want to use old function way;

	var $message 		= $form.find('input[name=message]');

	socket.emit('message', {
		text : $message.val()
	});

	$message.val('');

	
});