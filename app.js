async function fetchQuote() {
    var quoteContainer = document.getElementById('quote');
    var response = await fetch('https://api.quotable.io/random');
    var data = await response.json();
    quoteContainer.innerHTML = `<p>"${data.content}"</p><p>- ${data.author}</p>`;
}

async function copyQuote() {
    var quoteContainer = document.getElementById('quote');
    var quoteText = quoteContainer.textContent;
        navigator.clipboard.writeText(quoteText);
        alert('Quote copied to clipboard!');
   
}

async function convertToVoice() {
    var quoteContainer = document.getElementById('quote');
    var quoteText = quoteContainer.textContent;

}

async function shareOnWhatsApp() {
    var quoteContainer = document.getElementById('quote');
    var quoteText = quoteContainer.textContent;
    var whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(quoteText)}`;
    window.open(whatsappUrl);
}
