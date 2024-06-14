const htmlContactPath = '../HomePage/Contact/Contact.html';

// Function to fetch the HTML content
async function fetchHtmlContact() {
  try {
    const response = await fetch(htmlContactPath);
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
export default async function Contact() {
  const htmlContent = await fetchHtmlContact();
  const contactElement = document.createElement('div');
  contactElement.innerHTML = htmlContent;
  return contactElement;
}