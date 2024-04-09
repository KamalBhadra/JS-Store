
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('header nav ul');
    const mobileMenu = document.createElement('ul');
    mobileMenu.className = 'mobile-menu';

    menu.querySelectorAll('li').forEach(function (item) {
        const newItem = item.cloneNode(true);
        mobileMenu.appendChild(newItem);
    });

    hamburgerMenu.addEventListener('click', function () {
        menu.parentNode.insertBefore(mobileMenu, menu.nextSibling);
        mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'flex' : 'none';
    });
    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('li').forEach(function (item) {
        item.addEventListener('click', function () {
            mobileMenu.style.display = 'none';
        });
    });
});


// Smooth scrolling for header links to product section
document.querySelectorAll('header nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        const headerHeight = document.querySelector('header').offsetHeight;
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight + 20, // Adjusted for margin
                behavior: 'smooth'
            });
            // Trigger animation for product section
            animateProductSection();
        }
    });
});

// Scroll animation for product section
window.addEventListener('scroll', function () {
    const productSection = document.getElementById('products');
    const windowHeight = window.innerHeight;
    const productSectionTop = productSection.getBoundingClientRect().top;
    if (productSectionTop < windowHeight * 0.75) { // Adjust threshold as needed
        animateProductSection();
    }
});

// Animation for product section
function animateProductSection() {
    const productItems = document.querySelectorAll('.product');
    productItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 200); // Adjust delay as needed
    });
}

// Scroll animation for blog section
window.addEventListener('scroll', function () {
    const blogSection = document.getElementById('blog');
    const windowHeight = window.innerHeight;
    const blogSectionTop = blogSection.getBoundingClientRect().top;
    if (blogSectionTop < windowHeight * 0.75) { // Adjust threshold as needed
        animateBlogSection();
    }
});

// Scroll animation for blog section
window.addEventListener('scroll', function () {
    const blogSection = document.getElementById('blog');
    const windowHeight = window.innerHeight;
    const blogSectionTop = blogSection.getBoundingClientRect().top;
    const blogContent = document.querySelector('.blog-content');
    if (blogSectionTop < windowHeight * 0.75) { // Adjust threshold as needed
        blogContent.style.opacity = 1;
        blogContent.style.transform = 'translateX(0)';
    }
});

// Scroll animation for about section
window.addEventListener('scroll', function () {
    const aboutSection = document.getElementById('about');
    const windowHeight = window.innerHeight;
    const aboutSectionTop = aboutSection.getBoundingClientRect().top;
    const aboutContent = document.querySelector('.about-content');
    if (aboutSectionTop < windowHeight * 0.75) { // Adjust threshold as needed
        aboutContent.style.opacity = 1;
        aboutContent.style.transform = 'translateX(0)';
    }
});


