var name 	= getQueryVariable('name') || 'Anonymous';
var room 	= getQueryVariable('room');
var socket 	= io();

console.log(name + ' wants to join ' + room);

jQuery('.room-title').text(room);

socket.on('connect', function(){
	console.log('Connected to socket.io server from Front-end!');

	socket.emit('joinRoom', {
		name : name,
		room : room
	});

});

socket.on('message', function(message){
	var momentTimestamp 	= moment.utc(message.timestamp);
	var $messages 			= jQuery('.messagesWrp');
	var $message 			= jQuery('<li class="list-group-item"></li>'); 			

	console.log('New message : ');
	console.log(message.text);
	//console.log(message.name);

	$message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format("hh:mm a") + '</strong></p>');
	$message.append('<p>' + message.text + '</p>');

	$messages.append($message);
});


// Handle Submitting of a new message;
var $form	= jQuery('#message-form');		// Jquery Instance of the element;

$form.on('submit', function(event){
	event.preventDefault();		// don't want to use old function way;

	var $message 		= $form.find('input[name=message]');

	socket.emit('message', {
		name : name,
		text : $message.val()
	});

	$message.val('');
});