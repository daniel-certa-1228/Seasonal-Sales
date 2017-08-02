console.log( "seasonal-sales.js" );
/////////////////////////////////////////////////////////////
//public as of now
	let outputDiv = document.getElementById("product-div");


	let winter = false;
	let autumn = false;
	let spring = false;

	let seasonSelect = document.getElementById("season-select");

	let apparelSale = document.getElementById("apparel-sale");
	let hardwareSale = document.getElementById("hardware-sale");
	let furnitureSale = document.getElementById("furniture-sale");

	seasonSelect.addEventListener("change", (event) => {
		StoreInfo.loadProductInfo();
	let apparelSale = document.getElementById("apparel-sale");
	let hardwareSale = document.getElementById("hardware-sale");
	let furnitureSale = document.getElementById("furniture-sale");

		outputDiv.innerHTML="";
		
		
		if (seasonSelect.value === "1") {
			winter = true;
			autumn = false;
			spring = false;
		}
		if (seasonSelect.value === "2") {
			autumn = true;
			winter = false;
			spring = false;
		}
		if (seasonSelect.value === "3") {
			spring = true;
			autumn = false;
			winter = false;
		}  
		if  (seasonSelect.value === "") {

			winter = false;
			autumn = false;
			spring = false;
		}

	});

////////////////////////////////////////////////////////////

{

	let discounts= []
	console.log( "discounts", discounts );
	StoreInfo.discount = (categoryObject) => {

	let categories = categoryObject.categories;
	console.log( "categories", categories );

		for (let i = 0; i < categories.length; i++) {
		discounts.push(categories[i].discount)
		};
	}


	StoreInfo.showProductInfo = (productObject) => {
		console.log( "productObject", productObject );
		let products = productObject.products;
		let apparelCard = `<div class="product-card" id="apparel"><h2>Apparel</h2>`
		let furnitureCard = `<div class="product-card" id="furniture"><h2>Furniture</h2>`
		let hardwareCard = `<div class="product-card" id="hardware"><h2>Hardware</h2>`

		for (let i = 0; i < products.length; i++) {
			 if (products[i].category_id === 1) {
			 	//add logic here so if correct season is selected, display one price
			 	//else just send out the regular price
			 	//pull in the catgory object to get the discount
				 	if (winter) {

				 	apparelCard += `<section class="item" id="item--${i}">
				 					<h4>${products[i].name}</h4>
				 					<h5>Price - $${Math.round((products[i].price*100 - (products[i].price*100)* discounts[0]))/100}</h5>
				 					</section>`

				 	}  else  {

				 	apparelCard += `<section class="item" id="item--${i}">
				 					<h4>${products[i].name}</h4>
				 					<h5>Price - $${(products[i].price)}</h5>
				 					</section>`
				 	}
			 }  else if  (products[i].category_id === 2) {

				 	if (autumn) {

				 	furnitureCard += `<section class="item" id="item--${i}">
				 					<h4>${products[i].name}</h4>
				 					<h5>Price - $${Math.round((products[i].price*100 - (products[i].price*100)* discounts[1]))/100}</h5>
				 					</section>`

				 	}  else  {

				 	furnitureCard += `<section class="item" id="item--${i}">
				 					<h4>${products[i].name}</h4>
				 					<h5>Price - $${products[i].price}</h5>
				 					</section>`
				 	}
	
			 }  else if (products[i].category_id === 3) {

			 		if (spring) {

				 	hardwareCard += `<section class="item" id="item--${i}">
				 					<h4>${products[i].name}</h4>
				 					<h5>Price - $${Math.round((products[i].price*100 - (products[i].price*100)*discounts[1]))/100}</h5>
				 					</section>`

			 		}  else  {

			 		hardwareCard += `<section class="item" id="item--${i}">
				 					<h4>${products[i].name}</h4>
				 					<h5>Price - $${products[i].price}</h5>
				 					</section>`

			 		}


			 }
		};

				apparelCard += `<h3 class="hidden red" id="apparel-sale">SALE! 10% OFF!</h3></div>`
				outputDiv.innerHTML += apparelCard
				furnitureCard += `<h3 class="hidden red" id="furniture-sale">SALE! 25% OFF!</h3></div>`
				outputDiv.innerHTML += furnitureCard
				hardwareCard += `<h3 class="hidden red" id="hardware-sale">SALE! 15% OFF!</h3></div>`
				outputDiv.innerHTML += hardwareCard
			}

}



