var express = require('express');
	app	= express();
	app
		.use(express.static('./public'))
		.get('*', function (req, res) {
			res.sendfile('public/views/order.html')
		})
		.listen(8080);

	console.log("Server listen on port 8080");
