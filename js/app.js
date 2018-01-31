	//setup globals
var store;
var vm;
var viewModel;
	//store list will later be in database and much longer
var mySearch = [
	{name: "eBay", type: "Online", webLink: {https://www.ebay.com/}},
	{name: "O'Reilly's", type: "In-Store", webLink: {https://www.oreillyauto.com/}},
];
							 
	//load clicked store to main content
function initShow() {
	store = new ???({ //getting back to this
	});

	//makes list clickable & ties together with prices
	var Pin = function(data) {
		this.name = ko.observable(data.name);
		this.type = ko.observable(data.type);
	};

	var ViewModel = function() {
		var self = this;

		this.url = ko.observable();
		this.title = ko.observable();
		this.placeLinks = ko.observable();
		this.pinList = ko.observableArray([]);
		this.currentPin = ko.observable(this.pinList()[0]);
	// Modified filter function, original by Blake Watson on codepen
		self.myStores = myStores;
		self.selectedType = ko.observable("Both");
		self.filteredmyStores = ko.computed(function(pinItem) {
			var type = self.selectedType();
			console.log(self.selectedType);
			if(type === "Both") {
				console.log(type);
				self.myStores.forEach(function(myStores) {
					if(myStores.prices)myStores.prices.setVisible(true);
				});

	// iterate over self.myStores & set prices to visible
				return self.myStores;
			} else {
				var tempList = self.myStores.slice();
				return tempList.filter(function(myStore) {
					var match = myStore.type === type;
					console.log(myStore);
					myStore.price.setVisible(match);
					return match;
				});
			}
		});							 
