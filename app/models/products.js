const fs = require('fs')

function ProductList () {
	let rawData = fs.readFileSync(__dirname + '/product.json');
	let parseData = JSON.parse(rawData).items
	let productArray = []

	for (let i = 0; i < parseData.length; i++) {
		productArray[i] = {
			id: parseData[i].id,
			name: parseData[i].name,
			imgURL: 'https://bdfapp.bigdutyfree.com/pub/media/catalog/product'+parseData[i].custom_attributes.small_image.value,
			price: parseData[i].price,
			qty: parseData[i].extension_attributes.stock_item.qty
		}
	}
	
	return productArray 
}

module.exports = ProductList

