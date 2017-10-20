// Example model


// function Articles (opts) {
//   if(!opts) opts = {};
//   this.title = opts.title || '';
//   this.url = opts.url || '';
//   this.text = opts.text || '';
// }

const fs = require('fs')

function ProductList () {
	let rawData = fs.readFileSync(__dirname + '/product.json');
	let parseData = JSON.parse(rawData).items
	let productArray = []

	for (let i = 0; i < parseData.length; i++) {
		productArray[i] = {
			id: parseData[i].id,
			name: parseData[i].name,
			price: parseData[i].price,
			qty: parseData[i].extension_attributes.stock_item.qty
		}
	}
	
	return productArray 
}

// let rawdata = fs.readFileSync(__dirname + '/product.json'); 
// const Articles = JSON.parse(rawdata);
	

module.exports = ProductList;

