/**
 * 
 */
const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const signUP = document.querySelector('#signup')

let signUPpage = () => {
}
signUP.addEventListener('click', signUPpage);


console.log("hey wassup moe");
//Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

//show active menu when scrolling
const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPosition = window.scrollY

    //add 'highlights' class to my menu items
    if(window.innerWidth > 960 && scrollPosition < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollPosition < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }
    else if(window.innerWidth > 960 && scrollPosition < 2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }

    if((elem && window.innerWidth < 960 && scrollPosition < 600)|| elem){
        elem.classList.remove('highlight')
    } 


}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active')
        menu.links.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);


/* 
Sign up page

Get their phone number
Get their email address
Google

https://uigradients.com/#Timber

Nice landing page
capture contact information
Link to one of the promo youtube videos for freeStyleApp
Be able to connect to different manufacturers
Ecommerce site

Have a promo video or slide show that grabs user attention
*/