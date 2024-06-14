
const CardsPath = '../HomePage/Cards/Card.html';

async function fetchHtmlCards() {
    try{
        const res = await fetch(CardsPath);
        if(!res.ok){
            throw new Error('Failed to load HTML content for Card');
        }
        return await res.text()
    }
        catch (error) {
        console.error(error);
        return ''; // Return an empty string in case of error
    }
}

export default async function Cards(){
    const htmlContent = await fetchHtmlCards();
    const cardElement = document.createElement('div');
    cardElement.innerHTML = htmlContent;
    return cardElement; 
}