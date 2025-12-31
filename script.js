// script.js — shared behavior for Techify site
document.addEventListener('DOMContentLoaded', () => {
    // mobile nav toggle
    const navToggle = document.getElementById('navToggle');
    const navs = document.querySelectorAll('.nav');
    navToggle && navToggle.addEventListener('click', () => {
        navs.forEach(n => {
            if (getComputedStyle(n).display === 'flex' || n.style.display === 'flex') {
                n.style.display = 'none';
            } else {
                n.style.display = 'flex';
            }
        });
    });

    // set current year in footers (multiple pages)
    const now = new Date().getFullYear();
    document.getElementById('year') && (document.getElementById('year').textContent = now);
    document.getElementById('year-2') && (document.getElementById('year-2').textContent = now);
    document.getElementById('year-3') && (document.getElementById('year-3').textContent = now);
    document.getElementById('year-4') && (document.getElementById('year-4').textContent = now);
    document.getElementById('year-5') && (document.getElementById('year-5').textContent = now);

    // enhance active nav link based on pathname
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        try {
            const href = new URL(link.href);
            if (href.pathname === location.pathname.split('/').pop() || (href.pathname === '/' && location.pathname.endsWith('index.html'))) {
                link.classList.add('active');
            }
        } catch (e) { }
    });
});

// Contact form simulation
function submitForm(e) {
    e.preventDefault();
    const name = document.getElementById('name') ? document.getElementById('name').value.trim() : '';
    const email = document.getElementById('email') ? document.getElementById('email').value.trim() : '';
    const msgEl = document.getElementById('formMsg');

    if (!name || !email) {
        if (msgEl) msgEl.textContent = 'Please fill name and email.';
        return false;
    }

    if (msgEl) msgEl.textContent = 'Sending…';

    // simulate send
    setTimeout(() => {
        if (msgEl) msgEl.textContent = 'Thanks! Your message was sent. We will reply within one business day.';
        const form = document.getElementById('contactForm');
        if (form) form.reset();
    }, 700);

    return false;
}

// Simple template downloader
function downloadTemplate(templateName) {
    let filePath = "";

    switch (templateName) {
        case "business":
            filePath = "templates/grocery-html.zip";
            break;
        case "portfolio":
            filePath = "templates/salon-website-template.zip";
            break;
        case "blog":
            filePath = "templates/grocery-reactjs.zip";
            break;
        default:
            alert("Template not found");
            return;
    }

    const link = document.createElement("a");
    link.href = filePath;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");

    navToggle.addEventListener("click", () => {
        mainNav.classList.toggle("show");
    navToggle.classList.toggle("open"); // icon change
    });



