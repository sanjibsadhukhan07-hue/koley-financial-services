(function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    function isActive(page) {
        return currentPage === page ? 'active' : '';
    }

    const toolPages = ['goal-planning.html','retirement-planning.html','investment-planning.html',
                       'insurance-planning.html','swp-calculator.html','financial-planning.html',
                       'mf-research.html','risk-profiler.html','health-profiler.html'];
    const servicePages = ['insurance-planning.html','investment-planning.html','swp-calculator.html','financial-planning.html'];

    const topbarHTML = `
<div class="topbar">
    <div>📍 Kaikala, Haripal, Hooghly, West Bengal</div>
    <div class="topbar-right">
        <a href="tel:9434643120">📞 +91-94346 43120</a>
        <a href="https://wa.me/919434643120">💬 WhatsApp</a>
    </div>
</div>`;

    const navHTML = `
<nav class="navbar">
    <div class="nav-logo">
        <a href="index.html" style="display:flex;align-items:center;gap:12px;text-decoration:none;">
            <img src="logo.png" alt="KFS Logo">
            <div class="nav-logo-text">
                <div class="brand">KOLEY FINANCIAL SERVICES</div>
                <div class="tagline">Rooted in Trust • Protected by Excellence</div>
            </div>
        </a>
    </div>

    <button class="nav-hamburger" id="nav-hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
    </button>

    <ul class="nav-links" id="nav-links">
        <li><a href="index.html" class="${isActive('index.html')}">Home</a></li>
        <li><a href="about.html" class="${isActive('about.html')}">About</a></li>
        <li>
            <a href="#" class="${servicePages.includes(currentPage) ? 'active' : ''}">Services ▾</a>
            <div class="nav-dropdown">
                <a href="insurance-planning.html">🛡️ Insurance Planning</a>
                <a href="investment-planning.html">📈 Investment Planning</a>
                <a href="swp-calculator.html">💰 SWP &amp; Pension</a>
                <a href="financial-planning.html">🗂️ Financial Planning</a>
            </div>
        </li>
        <li>
            <a href="#" class="${toolPages.includes(currentPage) ? 'active' : ''}">Tools ▾</a>
            <div class="nav-dropdown">
                <a href="goal-planning.html">🎯 Goal Planning</a>
                <a href="retirement-planning.html">🏖️ Retirement Calculator</a>
                <a href="insurance-planning.html">🔍 Insurance Gap Analyzer</a>
                <a href="swp-calculator.html">📊 SWP Calculator</a>
            </div>
        </li>
        <li><a href="designs.html" class="${isActive('designs.html')}">Strategies</a></li>
        <li><a href="blogs.html" class="${isActive('blogs.html')}">Insights</a></li>
        <li><a href="pricing.html" class="${isActive('pricing.html')}">Pricing</a></li>
        <li><a href="contact.html" class="nav-cta">Book Consultation</a></li>
    </ul>
</nav>`;

    // Inject topbar before body's first child
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    document.body.insertAdjacentHTML('afterbegin', topbarHTML);

    // Mobile hamburger toggle
    document.addEventListener('DOMContentLoaded', function () {
        const btn = document.getElementById('nav-hamburger');
        const links = document.getElementById('nav-links');
        if (btn && links) {
            btn.addEventListener('click', function () {
                links.classList.toggle('nav-open');
                btn.classList.toggle('is-active');
            });
        }
    });

    // Inject shared CSS variables + navbar styles if not already present (for non-index pages)
    if (!document.querySelector('style[data-kfs-nav]')) {
        const style = document.createElement('style');
        style.setAttribute('data-kfs-nav', '1');
        style.textContent = `
            :root {
                --navy: #003580;
                --navy-dark: #002060;
                --orange: #E85D04;
                --orange-light: #ff7a1a;
                --white: #ffffff;
                --off-white: #f5f7fa;
                --text-dark: #0d1b2e;
                --text-mid: #4a5568;
                --text-light: #8a9ab0;
                --border: rgba(0,53,128,0.12);
            }
            .topbar {
                background: var(--navy-dark);
                padding: 8px 6%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-size: 13px;
                color: #aac0e0;
            }
            .topbar a { color: #aac0e0; text-decoration: none; }
            .topbar a:hover { color: #fff; }
            .topbar-right { display: flex; gap: 24px; }
            .navbar {
                background: #fff;
                padding: 0 6%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 3px solid var(--orange);
                position: sticky;
                top: 0;
                z-index: 1000;
                box-shadow: 0 2px 16px rgba(0,32,96,0.10);
                height: 72px;
            }
            .nav-logo img { height: 48px; }
            .nav-logo-text { line-height: 1.2; }
            .nav-logo-text .brand { font-size: 15px; font-weight: 700; color: var(--navy); letter-spacing: 0.5px; }
            .nav-logo-text .tagline { font-size: 11px; color: var(--orange); letter-spacing: 0.3px; }
            .nav-links { display: flex; align-items: center; gap: 4px; list-style: none; margin: 0; padding: 0; }
            .nav-links li { position: relative; }
            .nav-links li a {
                display: block; padding: 10px 14px;
                color: var(--text-dark); text-decoration: none;
                font-size: 14px; font-weight: 500;
                border-radius: 4px; transition: 0.2s;
            }
            .nav-links li a:hover { color: var(--orange); background: rgba(232,93,4,0.06); }
            .nav-links li a.active { color: var(--orange); }
            .nav-dropdown {
                display: none; position: absolute; top: 100%; left: 0;
                background: #fff; border: 1px solid var(--border);
                border-top: 2px solid var(--orange);
                min-width: 240px; box-shadow: 0 8px 24px rgba(0,32,96,0.12);
                border-radius: 0 0 8px 8px; z-index: 100;
            }
            .nav-links li:hover .nav-dropdown { display: block; }
            .nav-dropdown a {
                padding: 10px 18px; font-size: 13px;
                color: var(--text-mid) !important;
                border-bottom: 1px solid var(--border); display: block;
            }
            .nav-dropdown a:hover { color: var(--orange) !important; background: rgba(232,93,4,0.05); }
            .nav-dropdown a:last-child { border-bottom: none; }
            .nav-cta {
                background: var(--orange); color: #fff !important;
                padding: 9px 22px !important; border-radius: 6px !important;
                font-weight: 600 !important; font-size: 14px;
            }
            .nav-cta:hover { background: #c94e00 !important; color: #fff !important; }
            .nav-hamburger {
                display: none; flex-direction: column; gap: 5px;
                background: none; border: none; cursor: pointer; padding: 4px;
            }
            .nav-hamburger span {
                display: block; width: 24px; height: 2px;
                background: var(--navy); border-radius: 2px; transition: 0.3s;
            }
            @media(max-width:900px) {
                .topbar { display: none; }
                .nav-hamburger { display: flex; }
                .nav-links {
                    display: none; flex-direction: column; align-items: flex-start;
                    position: absolute; top: 72px; left: 0; right: 0;
                    background: #fff; border-top: 2px solid var(--orange);
                    padding: 16px 6%; gap: 0;
                    box-shadow: 0 8px 24px rgba(0,32,96,0.10);
                }
                .nav-links.nav-open { display: flex; }
                .nav-links li { width: 100%; }
                .nav-links li a { padding: 12px 0; border-radius: 0; border-bottom: 1px solid var(--border); }
                .nav-dropdown { position: static; box-shadow: none; border: none; border-radius: 0; display: none !important; }
                .nav-links li:hover .nav-dropdown { display: none !important; }
            }
        `;
        document.head.appendChild(style);
    }
})();
