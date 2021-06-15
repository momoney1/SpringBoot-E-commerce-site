/**
 * 
 *///toggle menu
const signUP = document.querySelector('#signup')
const ProductImg = document.querySelector('#ProductImg')
//const SmallImg = document.querySelector('.small-img')
let SmallImg = document.getElementsByClassName("small-img");
let add_To_Cart = document.getElementById('addToCart');
let select_tag = document.getElementById('select');
let amount_val = document.getElementById('amount');
let cost = document.getElementById('price').innerHTML;
var url = 'http://path_to_your_html_files/next.html?name=' + encodeURIComponent(cost);

amount_val.onchange = function(){
    var totalAmount = parseInt(amount_val.value);
    var inputVal = parseFloat(select_tag.value);
    var total_cost = 0;
    if(inputVal == 1.7){
        console.log(cost);
        cost = 10.99 * totalAmount;
        cost = cost.toFixed(2);
        document.getElementById('price').innerHTML = "$"+ cost;
        localStorage.setItem('sizeData', JSON.stringify(1.7));
        localStorage.setItem('costData', JSON.stringify(totalAmount));
        localStorage.setItem('formData', JSON.stringify(cost));
        console.log(10.99 * totalAmount);
        console.log("1.7 was the size");

    }else if(inputVal == 2.7){
        cost = 14.99 * totalAmount;
        cost = cost.toFixed(2);
        document.getElementById('price').innerHTML = "$"+ cost;
        localStorage.setItem('sizeData', JSON.stringify(2.7));
        localStorage.setItem('costData', JSON.stringify(totalAmount));
        localStorage.setItem('formData', JSON.stringify(cost));
        console.log(14.99 * totalAmount);
        console.log("2.7 was the size");

    }else if(inputVal == 3.7){
        cost = 18.99 * totalAmount;
        cost = cost.toFixed(2);
        document.getElementById('price').innerHTML = "$"+ cost;
        localStorage.setItem('sizeData', JSON.stringify(3.7));
        localStorage.setItem('costData', JSON.stringify(totalAmount));
        localStorage.setItem('formData', JSON.stringify(cost));
        console.log(18.99 * totalAmount);
        console.log("3.7 was the size");
    }
    else if(select_tag.value == "Select Size"){
        cost = 0;
        document.getElementById('price').innerHTML = "$"+ cost;
        localStorage.setItem('formData', JSON.stringify(cost));
    }
}

select_tag.onchange = function(){
    var totalAmount = parseInt(amount_val.value);
    var inputVal = parseFloat(select_tag.value);
    var total_cost = 0;
    if(inputVal == 1.7){
        console.log(cost);
        cost = 10.99 * totalAmount;
        cost = cost.toFixed(2);
        document.getElementById('price').innerHTML = "$"+ cost;
        console.log(10.99 * totalAmount);
        console.log("1.7 was the size");

    }else if(inputVal == 2.7){
        cost = 14.99 * totalAmount;
        cost = cost.toFixed(2);
        document.getElementById('price').innerHTML = "$"+ cost;
        console.log(14.99 * totalAmount);
        console.log("2.7 was the size");

    }else if(inputVal == 3.7){
        cost = 18.99 * totalAmount;
        cost = cost.toFixed(2);
        document.getElementById('price').innerHTML = "$"+ cost;
        console.log(18.99 * totalAmount);
        console.log("3.7 was the size");
    }
    else if(select_tag.value == "Select Size"){
        cost = 0;
        document.getElementById('price').innerHTML = "$"+ cost;
    }
    console.log(amount_val.value);
    console.log("howdy fellas")
}

add_To_Cart.onclick = function(){

    if(localStorage.getItem('formData')){
        console.log(JSON.parse(localStorage.getItem('formData')) + " the form item is this");
        //console.log(" the form data was retrieved");
    }
    console.log(select_tag.value);
    console.log("howdy fellas");
    console.log(typeof select_tag.value);
    var totalAmount = parseInt(amount_val.value);
    var inputVal = parseFloat(select_tag.value);
    if(inputVal == 1.7){
        cost.innerText = 10.99 * totalAmount;
        console.log(10.99 * totalAmount);
        console.log("1.7 was the size");


    }else if(inputVal == 2.7){
        cost.innerText = 14.99 * totalAmount;
        console.log(14.99 * totalAmount);
        console.log("2.7 was the size");

    }else {
        cost.innerText = 18.99 * totalAmount;
        console.log(18.99 * totalAmount);
        console.log("3.7 was the size");


    }
}


let signUPpage = () => {
    alert(" Welcome to Moe's site");
}


ProductImg.addEventListener('click', signUPpage);
//SmallImg.addEventListener('click', signUPpage);
SmallImg[0].onclick = function(){
    alert("welcome fellas");
}

//product gallery


let firstImg = () => {
    alert("howdy MOe");
}

ProductImg.addEventListener('click', firstImg);

SmallImg[0].onclick = function(){
    alert("number 0");
}
SmallImg[1].onclick = function(){
    alert("number 1");
}
SmallImg[2].onclick = function(){
    alert("number 2");
}
SmallImg[3].onclick = function(){
    alert("number 3");
}
