// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current navigation item
const currentLocation = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
    }
});

// Animated counter for stats
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const value = entry.target.querySelector('.stat-value');
            if (value && !value.classList.contains('animated')) {
                const finalValue = parseInt(value.textContent);
                value.classList.add('animated');
                animateValue(value, 0, finalValue, 1500);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// Scroll to top button with enhanced animation
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    transform: scale(0);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.4);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.transform = 'scale(1)';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.transform = 'scale(0)';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', () => {
    scrollToTopBtn.style.transform = 'scale(1.1)';
    scrollToTopBtn.style.boxShadow = '0 12px 24px rgba(102, 126, 234, 0.5)';
});

scrollToTopBtn.addEventListener('mouseleave', () => {
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.boxShadow = '0 8px 16px rgba(102, 126, 234, 0.4)';
});

// Enhanced card animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100); // Stagger animation
        }
    });
}, observerOptions);

// Observe cards and sections for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.card, .platform-card, .recommendation-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Copy code to clipboard with animation
document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(codeBlock => {
        const button = document.createElement('button');
        button.className = 'copy-code-btn';
        button.textContent = 'Copy';
        button.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.5rem 1rem;
            background: #374151;
            color: white;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 600;
            transition: all 0.2s;
            opacity: 0;
        `;
        
        const pre = codeBlock.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);

        pre.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });

        pre.addEventListener('mouseleave', () => {
            if (button.textContent === 'Copy') {
                button.style.opacity = '0';
            }
        });
        
        button.addEventListener('click', () => {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(() => {
                button.textContent = '✓ Copied!';
                button.style.background = '#10b981';
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.style.background = '#374151';
                }, 2000);
            });
        });
        
        button.addEventListener('mouseenter', () => {
            if (button.textContent === 'Copy') {
                button.style.background = '#4b5563';
                button.style.transform = 'scale(1.05)';
            }
        });
        
        button.addEventListener('mouseleave', () => {
            if (button.textContent === 'Copy') {
                button.style.background = '#374151';
                button.style.transform = 'scale(1)';
            }
        });
    });
});

// Add hover effect to platform cards
document.querySelectorAll('.platform-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Table of contents generator with smooth scroll
function generateTOC() {
    const content = document.querySelector('.guide-content');
    const toc = document.querySelector('.toc ul');
    
    if (!content || !toc) return;
    
    const headings = content.querySelectorAll('h2, h3');
    headings.forEach((heading, index) => {
        const id = `section-${index}`;
        heading.id = id;
        
        const li = document.createElement('li');
        li.style.marginLeft = heading.tagName === 'H3' ? '1.5rem' : '0';
        li.style.transition = 'all 0.2s';
        
        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;
        a.style.transition = 'all 0.2s';
        
        a.addEventListener('mouseenter', () => {
            a.style.transform = 'translateX(4px)';
        });
        
        a.addEventListener('mouseleave', () => {
            a.style.transform = 'translateX(0)';
        });
        
        li.appendChild(a);
        toc.appendChild(li);
    });
}

// Run TOC generator on page load
if (document.querySelector('.toc')) {
    generateTOC();
}

// Mobile menu toggle
const createMobileMenu = () => {
    const nav = document.querySelector('.nav-links');
    if (!nav) return;
    
    const menuBtn = document.createElement('button');
    menuBtn.innerHTML = '☰';
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #374151;
        padding: 0.5rem;
    `;
    
    if (window.innerWidth <= 768) {
        menuBtn.style.display = 'block';
        const navContainer = document.querySelector('.nav-container');
        navContainer.appendChild(menuBtn);
        
        menuBtn.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
            nav.style.flexDirection = 'column';
            nav.style.position = 'absolute';
            nav.style.top = '64px';
            nav.style.right = '0';
            nav.style.background = 'white';
            nav.style.padding = '1rem';
            nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            nav.style.borderRadius = '0 0 0.5rem 0.5rem';
            nav.style.minWidth = '200px';
        });
    }
};

// Initialize mobile menu
window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Print functionality
function printGuide() {
    window.print();
}

// Add print button if on guide page
if (document.querySelector('.guide-content')) {
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '🖨️ Print Guide';
    printBtn.className = 'btn btn-secondary';
    printBtn.style.marginTop = '2rem';
    printBtn.onclick = printGuide;
    
    const guideContent = document.querySelector('.guide-content');
    if (guideContent) {
        guideContent.appendChild(printBtn);
    }
}

console.log('✨ Implementation Hub Guide loaded successfully!');

// Particle effect for hero section
function createParticles() {
    const heroParticles = document.querySelector('.hero-particles');
    if (!heroParticles) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 1;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = Math.random() * 20 + 15;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
            border-radius: 50%;
            left: ${startX}%;
            top: ${startY}%;
            animation: particleFloat ${duration}s ease-in-out ${delay}s infinite;
            pointer-events: none;
        `;
        
        heroParticles.appendChild(particle);
    }
}

// Particle float animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Add number counting animation for hero stats
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = stat.textContent;
        const isPlus = target.includes('+');
        const isK = target.includes('K');
        const numOnly = parseInt(target.replace(/[^0-9]/g, ''));
        
        if (isNaN(numOnly)) return;
        
        let current = 0;
        const increment = numOnly / 30;
        const timer = setInterval(() => {
            current += increment;
            if (current >= numOnly) {
                current = numOnly;
                clearInterval(timer);
            }
            let display = Math.floor(current);
            if (isK) display = display + 'K';
            if (isPlus) display = display + '+';
            stat.textContent = display;
        }, 50);
    });
}

// Trigger number animation when hero is visible
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateNumbers();
        }
    });
}, { threshold: 0.3 });

const hero = document.querySelector('.hero');
if (hero) {
    heroObserver.observe(hero);
}

// Smooth reveal for sections
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    revealObserver.observe(section);
});
