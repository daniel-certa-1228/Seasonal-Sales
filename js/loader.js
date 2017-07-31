console.log( "loader.js" );

var StoreInfo =(function () {

	return {
		loadProductInfo: (callbackFucntion) => {
			let productLoader = new XMLHttpRequest();
			productLoader.addEventListener("load", productLoaderComplete);
			productLoader.addEventListener("error", productLoaderFailed);

			function productLoaderComplete(event) {
				let productObject = [];
				console.log( "product info has loaded" );
				productObject = JSON.parse(event.target.responseText);
				console.log( "productObject", productObject );
			}

			function productLoaderFailed (event) {
				console.log( "product load has failed" );
			}

			productLoader.open("GET", "../json/products.json");
			productLoader.send();
		},

		loadCategoryInfo: (callbackFucntion) => {
			let categoryLoader = new XMLHttpRequest();
			categoryLoader.addEventListener("load", categoryLoaderComplete);
			categoryLoader.addEventListener("error", categoryLoaderFailed);

			function categoryLoaderComplete(event) {
				let categoryObject =[];
				console.log( "product info has loaded" );
				categoryObject = JSON.parse(event.target.responseText);
				console.log( "categoryObject", categoryObject );
			}

			function categoryLoaderFailed(event) {
				console.log( "category load has failed" );
			}

			categoryLoader.open("GET", "../json/categories.json");
			categoryLoader.send();
		}
	}
})();