/**
 * 
 */

var q1 = document.getElementById("quantity1");
//var price_1 = 
var price_1;
var priceTax;
var small_Price = 0;
var product_Type = document.getElementById("cocoa5000");
var sub_Total = document.getElementById("subTot").innerHTML;
var tax_Info = document.getElementById("tax").innerHTML;
var total_Cost = document.getElementById("tot").innerHTML;
var toTal = document.getElementById("tot").innerHTML + 7.99;
var quantity_1;





window.onload = function(){
	price_1 = document.getElementById("tot").innerHTML;
	document.getElementById("subTot").innerHTML = "$" + price_1;
	//product_Type = document.getElementById("cocoa5000").innerHTML;
	q1 = document.getElementById("quantity1");
	quantity_1 = q1.value;
	//toTal = document.getElementById("tot").innerHTML;
	
    console.log(JSON.parse(localStorage.getItem('costData')) + " this is the costData");
    
    
    //document.getElementById("subTot").innerHTML = "$" + price_1;
    document.getElementById("tax").innerHTML = "$" + 7.45;
    toTal = parseFloat(price_1) + 7.99;
    document.getElementById("tot").innerHTML = "$"+ toTal;
    console.log(product_Type);
    console.log(typeof price_1);

    if(JSON.parse(localStorage.getItem('sizeData')) == "1.7"){
        document.getElementById("cocoa5000").innerHTML = "Cocoa Butter 1.7 Ounces";
        localStorage.setItem('productDetail', JSON.stringify("Cocoa Butter 1.7 Ounces"));
        localStorage.setItem('unitCost', JSON.stringify("$10.99"));
        //localStorage.setItem('productPrice', JSON.stringify(price_1));
        small_Price = 10.99;
        console.log(" it is 1.7 OUnces");
    }else if(JSON.parse(localStorage.getItem('sizeData')) == "2.7"){
        document.getElementById("cocoa5000").innerHTML = "Cocoa Butter 2.7 Ounces";
        localStorage.setItem('productDetail', JSON.stringify("Cocoa Butter 2.7 Ounces"));
        small_Price = 14.99;
        localStorage.setItem('unitCost', JSON.stringify("$14.99"));
        console.log(" it is 1.7 OUnces");
    }else if(JSON.parse(localStorage.getItem('sizeData')) == "3.7"){
        document.getElementById("cocoa5000").innerHTML = "Cocoa Butter 3.7 Ounces";
        localStorage.setItem('productDetail', JSON.stringify("Cocoa Butter 3.7 Ounces"));
        small_Price = 18.99;
        localStorage.setItem('unitCost', JSON.stringify("$18.99"));
        console.log("it is 1.7 OUnces");
    }

    price_1 = JSON.parse(localStorage.getItem('formData'));
    price_1 = parseFloat(price_1);
    price_1 = price_1.toFixed(2);

    document.getElementById("smallPrice").innerHTML = "Price: $"+ small_Price;
    document.getElementById("price1").innerHTML = "$"+ price_1;
    document.getElementById("subTot").innerHTML = "$"+ price_1;
    document.getElementById("tot").innerHTML = "$" + price_1;
    price_1 = parseFloat(price_1);
    tax_Info = parseFloat(tax_Info);
    priceTax = price_1 + tax_Info;
    
    //document.getElementById("tot").innerHTML = "$"+ priceTax;
    q1.value = JSON.parse(localStorage.getItem('costData'));
    quantity_1 = q1.value;
    
    q1.onchange = function(){
    	if(q1.value > quantity_1 && q1.value <= 15){
    		price_1 = parseFloat(price_1) + parseFloat(small_Price);
    		document.getElementById("price1").innerHTML = "$"+ price_1.toFixed(2);
    		document.getElementById("subTot").innerHTML = "$" + price_1.toFixed(2);
    		
    		toTal = price_1 + 7.45;
    		toTal = toTal.toFixed(2);
    		localStorage.setItem('totalData', JSON.stringify(toTal));
    		document.getElementById("tot").innerHTML = "$"+ toTal;
    		quantity_1 = q1.value;
    		
    		
    	}else if(q1.value < quantity_1 && q1.value >= 0){
    		price_1 = parseFloat(price_1) - parseFloat(small_Price);
    		document.getElementById("price1").innerHTML = "$"+ price_1.toFixed(2);
    		document.getElementById("subTot").innerHTML = "$" + price_1.toFixed(2);
    		toTal = price_1 + 7.45;
    		toTal = toTal.toFixed(2);
    		ocalStorage.setItem('totalData', JSON.stringify(toTal));
    		document.getElementById("tot").innerHTML = "$"+ toTal;
    		quantity_1 = q1.value;
    		
    	}
    	
    }
 
    
}
