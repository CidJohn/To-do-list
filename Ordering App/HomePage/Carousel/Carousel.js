// Carousel.js

// Path to your HTML file
const htmlCarouselPath = '../HomePage/Carousel/Carousel.html';

// Function to fetch the HTML content
async function fetchHtmlCarousel() {
  try {
    const response = await fetch(htmlCarouselPath);
    if (!response.ok) {
      throw new Error('Failed to load HTML content for carousel');
    }
    return await response.text();
  } catch (error) {
    console.error(error);
    return ''; // Return an empty string in case of error
  }
}

// Exporting the carousel component
export default async function Carousel() {
  const htmlContent = await fetchHtmlCarousel();
  const carouselElement = document.createElement('div');
  carouselElement.innerHTML = htmlContent;
  return carouselElement;
}

