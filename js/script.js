// Script.js - Tambahkan ini di file terpisah atau dalam tag <script> di akhir HTML

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Add reveal-on-scroll class to elements
    const galleryItems = document.querySelectorAll('.gallery-item');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    galleryItems.forEach(item => {
        item.classList.add('reveal-on-scroll');
    });
    
    blogPosts.forEach(post => {
        post.classList.add('reveal-on-scroll');
    });

    // Scroll reveal function
    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.8;
        
        document.querySelectorAll('.reveal-on-scroll').forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.classList.add('revealed');
            }
        });
    }

    // Initial check
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});