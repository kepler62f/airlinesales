# Airline Sales Analytics

This is a simple demo app showing the capability of the web for analyzing a Malaysian airline's product sales.

## Deployment 

The app is deployed on Heroku on: 

* https://airlinesales.herokuapp.com/

## Built With

The app is built with Node.js, Express.js for backend. The templating engine used is express-handlebars. Foundation Framework is used for styling the user interface. The MVC-style code scaffolding is generated using Yeoman.

## User Story

The latest product list and relevant currency exchange rates are displayed on the main page. This lets the sales and finance manager keep track of how fast individual product's stock is moving each time he or she enters the site. By observing the exchange rates, updated daily, the manager may move more products to flights/routes associated with a rising currencies. The assumption is that products could be sold in the foreign currencies and when translated back to home currency (i.e. MYR), profits could be made due to favourable currency translation.

## Improvements

* Reduce the threshold when table format will change due to resizing of browser window. 
* Obtain time series data so changes over time to products and currency rates could be plotted (For the 'Statistics' feature on left navigation menu).  