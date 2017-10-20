require('dotenv').config()


var express = require('express'),
  router = express.Router(),
  ProductList = require('../models/products'),
  CurrencyList = require('../models/currencies')

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {

	// Get Products Information
	var products = new ProductList()

	// Get Currencies Exchange Rates
	var request = require("request");
	var options = { 
		method: 'GET',
	 	url: 'https://hsoku7bkm0.execute-api.ap-southeast-1.amazonaws.com/Production',
	 	headers: {'x-api-key': process.env.CURRENCY_API_KEY },
	 	
	 	// have to specify json=true so that return string could be parsed to JSON obj subsequently
	 	json:true 

	};
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
		var currencies = new CurrencyList(JSON.parse(body))

		res.render('index', {
			productList : products,
			currencyList : currencies
		})
	})  
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
		res.setHeader('Content-Type', 'application/json');
	  res.send(JSON.parse(body));
	});	
})
