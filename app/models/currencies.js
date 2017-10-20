function CurrencyList(APIdata) {

 	let ratesList = APIdata.GetExternalRateListResult.ExternalRates.ExternalRate
 	ratesListMYRXXX = ratesList.filter(function(rates) {
 											return rates.QuotedCurrency === 'MYR'
 										})
 	ratesListMYRXXX.forEach(function(rate,i) {
 		ratesListMYRXXX[i].ExchangeRate = parseFloat(rate.ExchangeRate).toFixed(4)
 	})

 	return ratesListMYRXXX
}

module.exports = CurrencyList