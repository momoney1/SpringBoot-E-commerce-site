/**
 * 
 */

const submitButton = document.querySelector('.my__button');
window.onload = function(){	
	document.getElementById("product_1").innerHTML = JSON.parse(localStorage.getItem('productDetail'));
	document.getElementById("quantity").innerHTML = JSON.parse(localStorage.getItem('costData'));
	document.getElementById("product_price").innerHTML = JSON.parse(localStorage.getItem('unitCost'));
	document.getElementById("totalCost").innerHTML = "$" + JSON.parse(localStorage.getItem('totalData'));
}

