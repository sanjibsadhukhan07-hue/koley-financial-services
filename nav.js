function loadHeader() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    const headerHTML = `
        <div class="logo">
            <a href="index.html"><img src="logo.png" alt="KFS Logo"></a>
        </div>
        
        <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>

        <nav id="nav-list">
            <ul>
                <li><a href="about.html" class="${currentPage === 'about.html' ? 'active' : ''}">About</a></li>
                <li><a href="designs.html" class="${currentPage === 'designs.html' ? 'active' : ''}">Designs</a></li>
                <li><a href="clients.html" class="${currentPage === 'clients.html' ? 'active' : ''}">Our Clients</a></li>
                <li><a href="pricing.html" class="${currentPage === 'pricing.html' ? 'active' : ''}">Pricing</a></li>
                <li><a href="blogs.html" class="${currentPage === 'blogs.html' ? 'active' : ''}">Blogs</a></li>
                <li class="dropdown">
                    <a href="#" class="${['goal-planning.html', 'retirement-planning.html', 'swp-calculator.html'].includes(currentPage) ? 'active' : ''}">Our Tools ▾</a>
                    <ul class="dropdown-menu">
                        <li><a href="goal-planning.html">Goal Planning</a></li>
                        <li><a href="retirement-planning.html">Retirement Planning</a></li>
                        <li><a href="investment-planning.html">Investment Planning</a></li>
                        <li><a href="insurance-planning.html">Insurance Planning</a></li>
                        <li><a href="swp-calculator.html">SWP Calculator</a></li>
                        <li><a href="financial-planning.html">Financial Planning</a></li>
                        <li><a href="mf-research.html">MF Research</a></li>
                        <li><a href="risk-profiler.html">Risk Profiler</a></li>
                        <li><a href="health-profiler.html">Health Profiler</a></li>
                    </ul>
                </li>
                <li><a href="contact.html" class="${currentPage === 'contact.html' ? 'active' : ''}">Contact</a></li>
                <li><a href="login.html" class="login-btn">Login</a></li>
            </ul>
        </nav>
    `;
    
    const headerElement = document.getElementById('main-header');
    if (headerElement) {
        headerElement.innerHTML = headerHTML;
        const menuToggle = document.getElementById('mobile-menu');
        const navList = document.getElementById('nav-list');
        
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
});