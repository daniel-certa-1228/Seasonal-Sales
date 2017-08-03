console.log( "loader.js" );

//Main IIFE
{

	var StoreInfo ={}

}

//LOADING FUNCTION - loads and parses the products.json
{
	
	let productObject = [];

		StoreInfo.loadProductInfo = () => {
			let productLoader = new XMLHttpRequest();
			productLoader.addEventListener("load", productLoaderComplete);
			productLoader.addEventListener("error", productLoaderFailed);

			function productLoaderComplete(event) {
	
				// console.log( "product info has loaded" );
				productObject = JSON.parse(event.target.responseText);
				// console.log( "productObject", productObject );
				StoreInfo.showProductInfo(productObject); //calling the display to DOM function
			}

			function productLoaderFailed (event) {
				console.log( "product load has failed" );
			}

			productLoader.open("GET", "../json/products.json");
			productLoader.send();
		}

		StoreInfo.loadProductInfo();
}

//LOADING FUNCTION - loads and parses the category.json
{
	let categoryObject =[];

		StoreInfo.loadCategoryInfo = () => {
			let categoryLoader = new XMLHttpRequest();
			categoryLoader.addEventListener("load", categoryLoaderComplete);
			categoryLoader.addEventListener("error", categoryLoaderFailed);

			function categoryLoaderComplete(event) {
				
				// console.log( "category info has loaded" );
				categoryObject = JSON.parse(event.target.responseText);
				// console.log( "categoryObject", categoryObject );
				StoreInfo.discount(categoryObject);  //calling the function to unpack the discounts to an array
			}

			function categoryLoaderFailed(event) {
				console.log( "category load has failed" );
			}

			categoryLoader.open("GET", "../json/categories.json");
			categoryLoader.send();
		}

		StoreInfo.loadCategoryInfo();
}