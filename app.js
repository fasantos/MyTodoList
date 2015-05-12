#!/usr/bin/env node

var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.listen(port,function() {
	console.log('Listening on port %d\nPress ctrl-c to quit.', port);
});

app.use(express.static(__dirname + '/app'));

var router = express.Router();

app.get('/todos', function(req, res) {
	setTimeout(function() {
		res.json(todos);	
	}, 500);
	
});

var todos= [
		{
			name: 'Do production app',
			completed: false
		},
		{
			name: 'Do training app',
			completed: true
		},
		{
			name: 'Learn router-ui',
			completed: true
		},
		{
			name: 'Learn angularjs',
			completed: true
		}
	];
