console.log( "sale-toggle.js" );


let seasonSelect = document.getElementById("season-select");

{
	let seasonSelect = document.getElementById("season-select");
	seasonSelect.addEventListener("change", (event) => {
		let apparelSale = document.getElementById("apparel-sale");
		let hardwareSale = document.getElementById("hardware-sale");
		let furnitureSale = document.getElementById("furniture-sale");

		if (seasonSelect.value === "1"){
			hardwareSale.className = "hidden red"
			furnitureSale.className = "hidden red"
			apparelSale.classList.toggle("hidden")


		}  else if (seasonSelect.value === "2"){
			hardwareSale.className = "hidden red"
			apparelSale.className = "hidden red"
			furnitureSale.classList.toggle("hidden")


		}  else if (seasonSelect.value === "3"){
			furnitureSale.className = "hidden red"
			apparelSale.className = "hidden red"
			hardwareSale.classList.toggle("hidden")


		}  else {
			furnitureSale.className = "hidden red"
			apparelSale.className = "hidden red"
			hardwareSale.className = "hidden red"

			
		}
	});
}