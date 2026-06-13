document.addEventListener("DOMContentLoaded", function () {

    const footerHTML = `
<footer class="kfs-footer">
    <div class="footer-grid">
        <div class="footer-brand">
            <img src="logo.png" alt="KFS Logo">
            <div class="f-tagline">Rooted in Trust • Protected by Excellence</div>
            <p>Koley Financial Services provides expert Mutual Fund and Insurance advisory to families across Hooghly, West Bengal. AMFI Registered. IRDAI Licensed.</p>
        </div>
        <div class="footer-col">
            <h4>Services</h4>
            <ul>
                <li><a href="investment-planning.html">Mutual Fund Advisory</a></li>
                <li><a href="insurance-planning.html">Insurance Planning</a></li>
                <li><a href="swp-calculator.html">Retirement &amp; SWP</a></li>
                <li><a href="financial-planning.html">Financial Planning</a></li>
                <li><a href="contact.html">Loan Advisory</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Tools</h4>
            <ul>
                <li><a href="goal-planning.html">Goal Planner</a></li>
                <li><a href="retirement-planning.html">Retirement Calculator</a></li>
                <li><a href="insurance-planning.html">Insurance Gap Analyzer</a></li>
                <li><a href="swp-calculator.html">SWP Calculator</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Contact</h4>
            <ul>
                <li><a href="tel:9434643120">📞 +91-94346 43120</a></li>
                <li><a href="https://wa.me/919434643120">💬 WhatsApp</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="blogs.html">Financial Insights</a></li>
                <li><a href="pricing.html">Pricing</a></li>
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <span>© 2026 Koley Financial Services. All rights reserved. | Kaikala, Haripal, Hooghly, WB</span>
        <div class="footer-bottom-right">
            <span>AMFI Registered</span>
            <span>IRDAI Licensed</span>
        </div>
    </div>
</footer>

<a href="https://wa.me/919434643120" class="wa-float" target="_blank" aria-label="Chat on WhatsApp">💬</a>`;

    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Inject footer CSS if not already present
    if (!document.querySelector('style[data-kfs-footer]')) {
        const style = document.createElement('style');
        style.setAttribute('data-kfs-footer', '1');
        style.textContent = `
            .kfs-footer {
                background: var(--navy-dark, #002060);
                padding: 60px 6% 32px;
                color: rgba(255,255,255,0.6);
            }
            .kfs-footer .footer-grid {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr 1fr;
                gap: 40px;
                margin-bottom: 48px;
            }
            .kfs-footer .footer-brand img {
                height: 44px; margin-bottom: 16px;
                filter: brightness(0) invert(1); opacity: 0.8;
            }
            .kfs-footer .footer-brand p { font-size: 13px; line-height: 1.7; }
            .kfs-footer .f-tagline {
                color: var(--orange-light, #ff7a1a);
                font-weight: 600; font-size: 13px; margin-bottom: 12px;
            }
            .kfs-footer .footer-col h4 {
                color: #fff; font-size: 14px; font-weight: 700; margin-bottom: 16px;
            }
            .kfs-footer .footer-col ul {
                list-style: none; padding: 0; margin: 0;
                display: flex; flex-direction: column; gap: 8px;
            }
            .kfs-footer .footer-col a {
                color: rgba(255,255,255,0.55); text-decoration: none;
                font-size: 13px; transition: 0.2s;
            }
            .kfs-footer .footer-col a:hover { color: var(--orange-light, #ff7a1a); }
            .kfs-footer .footer-bottom {
                border-top: 1px solid rgba(255,255,255,0.08);
                padding-top: 24px;
                display: flex; justify-content: space-between; align-items: center;
                font-size: 12px; flex-wrap: wrap; gap: 12px;
            }
            .kfs-footer .footer-bottom-right { display: flex; gap: 20px; }
            .wa-float {
                position: fixed; bottom: 28px; right: 28px;
                width: 56px; height: 56px; border-radius: 50%;
                background: #25d366;
                display: flex; align-items: center; justify-content: center;
                box-shadow: 0 4px 16px rgba(0,0,0,0.25);
                z-index: 9999; transition: 0.3s;
                text-decoration: none; font-size: 26px;
            }
            .wa-float:hover { transform: scale(1.1); }
            @media(max-width:900px) {
                .kfs-footer .footer-grid { grid-template-columns: 1fr 1fr; }
            }
            @media(max-width:600px) {
                .kfs-footer .footer-grid { grid-template-columns: 1fr; }
            }
        `;
        document.head.appendChild(style);
    }
});
