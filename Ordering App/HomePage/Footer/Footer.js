const htmlFootherContect = "../HomePage/Footer/Footer.html";

async function fetchHtmlFooter () {
    try{
        const res = await fetch(htmlFootherContect);

        if(!res.ok){
            throw new Error('Failed to load HTML content for Footer');
        }
        return await res.text();
    }
    catch (error) {
        console.error(error)
        return '';
    }
}

export default async function Footer() {
    const htmlFooter = await fetchHtmlFooter();
    const FooterElement = document.createElement('div');
    FooterElement.innerHTML = htmlFooter;
    return FooterElement;
}