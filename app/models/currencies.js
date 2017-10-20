function CurrencyList(APIdata) {
	// Absent of travel data, I manually select Forex rates based on AirAsia's 2016 top country destinations
 	// https://japantoday.com/category/features/travel/airasias-travel-report-reveals-top-destinations-for-2016

 	let ratesList = APIdata.GetExternalRateListResult.ExternalRates.ExternalRate
 	ratesListMYRXXX = ratesList.filter(function(rates) {
 											return rates.QuotedCurrency === 'MYR'
 										})

 	return ratesListMYRXXX

 // 	for (let i = 0; i < 10; i++) {
	// 	currencyArray[i] = {
	// 		id: parseData[i].id,
	// 		name: parseData[i].name,
	// 		price: parseData[i].price,
	// 		qty: parseData[i].extension_attributes.stock_item.qty
	// 	}
	// }

 // 	(jsonData.GetExternalRateListResult.ExternalRates.ExternalRate[0])
}


module.exports = CurrencyList