// Example model


// function Articles (opts) {
//   if(!opts) opts = {};
//   this.title = opts.title || '';
//   this.url = opts.url || '';
//   this.text = opts.text || '';
// }

const fs = require('fs')

function ProductList () {
	let rawdata = fs.readFileSync(__dirname + '/product.json');
	// this.products = JSON.parse(rawdata)	
	return JSON.parse(rawdata)	
}

// let rawdata = fs.readFileSync(__dirname + '/product.json'); 
// const Articles = JSON.parse(rawdata);
	

module.exports = ProductList;

