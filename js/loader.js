console.log( "loader.js" );

{
	var StoreInfo ={}
	let productObject = [];
	let categoryObject =[];
		StoreInfo.loadProductInfo = () => {
			let productLoader = new XMLHttpRequest();
			productLoader.addEventListener("load", productLoaderComplete);
			productLoader.addEventListener("error", productLoaderFailed);

			function productLoaderComplete(event) {
	
				// console.log( "product info has loaded" );
				productObject = JSON.parse(event.target.responseText);
				// console.log( "productObject", productObject );
				StoreInfo.showProductInfo(productObject)
				return productObject;
			}

			function productLoaderFailed (event) {
				console.log( "product load has failed" );
			}

			productLoader.open("GET", "../json/products.json");
			productLoader.send();
		},

		StoreInfo.loadCategoryInfo = () => {
			let categoryLoader = new XMLHttpRequest();
			categoryLoader.addEventListener("load", categoryLoaderComplete);
			categoryLoader.addEventListener("error", categoryLoaderFailed);

			function categoryLoaderComplete(event) {
				
				// console.log( "category info has loaded" );
				categoryObject = JSON.parse(event.target.responseText);
				// console.log( "categoryObject", categoryObject );
				StoreInfo.discount(categoryObject);
				return categoryObject;
			}

			function categoryLoaderFailed(event) {
				console.log( "category load has failed" );
			}

			categoryLoader.open("GET", "../json/categories.json");
			categoryLoader.send();
		}

		StoreInfo.loadProductInfo();
		StoreInfo.loadCategoryInfo();
}