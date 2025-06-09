// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top button functionality
const backToTopButton = document.createElement('button');
backToTopButton.id = 'back-to-top';
backToTopButton.textContent = '↑';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.backgroundColor = '#FF6F61';
backToTopButton.style.color = '#FFFFFF';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Lazy load images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});

// Form validation
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        const email = form.querySelector('input[type="email"]');
        if (email && !email.value.includes('@')) {
            e.preventDefault();
            alert('Please enter a valid email address.');
        }
    });
}

// Add a fade-in effect for page load
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Schema.org JSON-LD markup
document.addEventListener('DOMContentLoaded', () => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "url": "https://blog.mcr.ae",
        "name": "MCR.AE Blog",
        "description": "Explore the latest blog posts from MCR.AE.",
        "blogPost": [
            // Replace this block with server-side rendering logic
            {
                "@type": "BlogPosting",
                "headline": "Sample Blog Post",
                "description": "This is a sample blog post description.",
                "url": "https://blog.mcr.ae/sample-blog-post",
                "datePublished": "2025-06-09"
            }
        ]
    });
    document.head.appendChild(script);
});