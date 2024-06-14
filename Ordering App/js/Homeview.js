// Example usage of Carousel component
import Carousel from '../HomePage/Carousel/Carousel.js';
import Contact from '../HomePage/Contact/Contact.js';
import Card from '../HomePage/Cards/Card.js';
import Footer from '../HomePage/Footer/Footer.js';
import cardItems from './indexFunc.js';

function showPage(id){
    var allSec = document.getElementsByClassName("secDisplay");
    for(let i = 0 ; i < allSec.length ; i ++){
        allSec[i].style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

async function renderCarousel() {
    const carouselContainer = document.getElementById('homeCarousel');
    //console.log('carouselContainer:', carouselContainer); // Add this line for debugging
    const carouselElement = await Carousel();
    if (carouselContainer) {
        carouselContainer.appendChild(carouselElement);
    } else {
        console.error('Carousel container not found.');
    }
            // Add event listener to navigate to the contact section
    document.getElementById("CallAction").onclick = () => {
    showPage('ContactUsSection');
    };
}

async function renderContact() {
    const contactContainer = document.getElementById('contact');
    //console.log('contactContainer:', contactContainer); // Add this line for debugging
    const contactElement = await Contact();
    if (contactContainer) {
        contactContainer.appendChild(contactElement);
    } else {
        console.error('Contact container not found.');
    }
}

async function renderCards(){
    const cardsContainer = document.getElementById('homeCards');
    //console.log('cardContainer:', cardsContainer);
    const cardElememt = await Card()
    if(cardsContainer) {
        cardsContainer.appendChild(cardElememt);
    } else{
        console.error('Card container not found')
    }
        document.querySelector(".storedCard").innerHTML = cardItems();
    
}

async function renderFooter(){
    const footerContainer = document.getElementById('homeFooter');
    //console.log('footerContainer:', footerContainer);
    const footerElement = await Footer();
    if(footerContainer){
        footerContainer.appendChild(footerElement);
    }else{
        console.error('Footer container not found')
    }
}
// async function CalltoAction(){
//     const contactContainer = document.getElementById('contact');
//     console.log('contactContainer:', contactContainer); // Add this line for debugging
//     const contactElement = await Contact();
//     if (contactContainer) {
//         contactContainer.appendChild(contactElement);
//     } else {
//         console.error('Contact container not found.');
//     }
// }

document.addEventListener('DOMContentLoaded', () => {

    renderCarousel();
    renderContact();    
    renderCards();
    renderFooter();
});
