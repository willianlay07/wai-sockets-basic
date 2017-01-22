var socket = io();

socket.on('connect', function(){
	console.log('Connected to socket.io server from Front-end!');
});

socket.on('message', function(message){
	var momentTimestamp 		= moment.utc(message.timestamp);
	console.log('New message : ');
	console.log(message.text);

	jQuery('.messagesWrp').append('<p><strong>' + momentTimestamp.local().format("hh:mm a") + '</strong> : ' + message.text + '</p>');
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