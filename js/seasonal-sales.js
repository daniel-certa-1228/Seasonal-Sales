console.log( "seasonal-sales.js" );

let outputDiv = document.getElementById("product-div");

{
	StoreInfo.showProductInfo = (productObject) => {
		// console.log( "productObject", productObject );
		let products = productObject.products;
		// console.log( "products", products );
		let apparelCard = `<div class="product-card" id="apparel"><h2>Apparel</h2>`
		let furnitureCard = `<div class="product-card" id="furniture"><h2>Furniture</h2>`
		let hardwareCard = `<div class="product-card" id="hardware"><h2>Hardware</h2>`
		for (let i = 0; i < products.length; i++) {
			 if (products[i].category_id === 1) {
			 	
			 	apparelCard += `<section class="item" id="item--${i}">
			 					<h4>${products[i].name}</h4>
			 					<h5>Price - $${products[i].price}</h5>
			 					</section>`
			 	
			 }  else if  (products[i].category_id === 2) {

			 	furnitureCard += `<section class="item" id="item--${i}">
			 					<h4>${products[i].name}</h4>
			 					<h5>Price - $${products[i].price}</h5>
			 					</section>`

	
			 }  else if (products[i].category_id === 3) {
			 	
			 	hardwareCard += `<section class="item" id="item--${i}">
			 					<h4>${products[i].name}</h4>
			 					<h5>Price - $${products[i].price}</h5>
			 					</section>`
			 }
		};

				apparelCard += `<h3 class="hidden red" id="apparel-sale">SALE! 15% OFF!</h3></div>`
				outputDiv.innerHTML += apparelCard
				furnitureCard += `<h3 class="hidden red" id="furniture-sale">SALE! 15% OFF!</h3></div>`
				outputDiv.innerHTML += furnitureCard
				hardwareCard += `<h3 class="hidden red" id="hardware-sale">SALE! 15% OFF!</h3></div>`
				outputDiv.innerHTML += hardwareCard
	}
}


StoreInfo.loadProductInfo();
StoreInfo.loadCategoryInfo();