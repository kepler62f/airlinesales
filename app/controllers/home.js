require('dotenv').config()


var express = require('express'),
  router = express.Router(),
  ProductList = require('../models/products');

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
	var products = new ProductList().items
  res.send(products);
});


router.get('/api', function(req, res, next) {
	var request = require("request");
	var options = { 
		method: 'GET',
	 	url: 'https://hsoku7bkm0.execute-api.ap-southeast-1.amazonaws.com/Production',
	 	headers: {'x-api-key': process.env.CURRENCY_API_KEY } 
	};
	request(options, function (error, response, body) {
	 if (error) throw new Error(error);

	//res.render('api', body);
	 res.setHeader('Content-Type', 'application/json');
     res.send(JSON.parse(body));

     // res.send(JSON.stringify(body));

	 //console.log(body)
	});	
})





//////////////////////////

// router.get('/', function (req, res, next) {
//   var articles = [new Article(), new Article()];
//     res.render('index', {
//       title: 'Generator-Express MVC',
//       articles: articles
//     });
// });
