document.addEventListener("DOMContentLoaded", function() {
    const footerHTML = `
    <footer>
        <div class="footer-container">
            <div class="footer-info">
                <h3>Koley Financial Services</h3>
                <p>Rooted in Trust • Protected by Excellence</p>
                <p>© 2026 Koley Financial Services. All rights reserved.</p>
            </div>
            <div class="footer-links">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
    </footer>

    <a href="https://wa.me/919434643120?text=Hi%20Avijit,%20I'm%20interested%20in%20your%20financial%20services." 
       class="whatsapp-float" 
       target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Support">
    </a>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
});