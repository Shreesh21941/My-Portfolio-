// ===================================
// SMOOTH SCROLLING & NAVIGATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navbar = document.querySelector('.navbar');

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===================================
    // CONTACT FORM HANDLING
    // ===================================

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Basic validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        // Email validation
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email', 'error');
            return;
        }

        // Simulate form submission
        showNotification('Message sent successfully! I will get back to you soon.', 'success');
        contactForm.reset();

        // In production, you would send this to a backend service
        console.log('Form Data:', { name, email, message });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 8px;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            max-width: 90vw;
        `;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideInLeft 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // ===================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ===================================

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = getAnimationForElement(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll(
        '.skill-category, .project-card, .experience-card, .education-card'
    ).forEach(el => {
        observer.observe(el);
    });

    function getAnimationForElement(element) {
        if (element.classList.contains('skill-category')) {
            return 'fadeInUp 0.6s ease forwards';
        } else if (element.classList.contains('project-card')) {
            return 'fadeInUp 0.6s ease forwards';
        } else if (element.classList.contains('experience-card')) {
            return 'fadeInUp 0.6s ease forwards';
        } else if (element.classList.contains('education-card')) {
            return 'fadeInUp 0.6s ease forwards';
        }
        return 'fadeInUp 0.6s ease forwards';
    }

    // ===================================
    // SCROLL TO TOP BUTTON
    // ===================================

    const scrollToTopBtn = createScrollToTopButton();

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    function createScrollToTopButton() {
        const btn = document.createElement('button');
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        btn.className = 'scroll-to-top';
        btn.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            border: none;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
            transition: all 0.3s ease;
        `;

        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-5px)';
            btn.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.6)';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)';
        });

        document.body.appendChild(btn);
        return btn;
    }

    // ===================================
    // SMOOTH LINK NAVIGATION
    // ===================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // PARALLAX EFFECT
    // ===================================

    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const parallaxSpeed = 0.5;
            hero.style.backgroundPosition = `center ${scrollY * parallaxSpeed}px`;
        });
    }

    // ===================================
    // SKILL COUNTER ANIMATION
    // ===================================

    function animateSkillTags() {
        const skillTags = document.querySelectorAll('.skill-tag');
        let delay = 0;

        skillTags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.animation = 'fadeInUp 0.5s ease forwards';
            }, delay);
            delay += 50;
        });
    }

    // Trigger animation when skills section is visible
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const skillsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillTags();
                    skillsObserver.unobserve(entry.target);
                }
            });
        });
        skillsObserver.observe(skillsSection);
    }

    // ===================================
    // ACTIVE NAVIGATION LINK HIGHLIGHTING
    // ===================================

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink);

    // ===================================
    // STAGGER ANIMATION FOR PROJECT CARDS
    // ===================================

    function staggerProjectCards() {
        const projects = document.querySelectorAll('.project-card');
        projects.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.style.animation = 'fadeInUp 0.6s ease forwards';
        });
    }

    // Initialize stagger when projects are visible
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
        const projectsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    staggerProjectCards();
                    projectsObserver.unobserve(entry.target);
                }
            });
        });
        projectsObserver.observe(projectsSection);
    }

    // ===================================
    // LAZY LOADING FOR IMAGES
    // ===================================

    if ('IntersectionObserver' in window) {
        const imageElements = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        imageElements.forEach(img => imageObserver.observe(img));
    }

    // ===================================
    // RESPONSIVE TABLE HELPER
    // ===================================

    function makeResponsive() {
        const width = window.innerWidth;
        const isMobile = width <= 768;
        const isSmallMobile = width <= 480;

        // Adjust spacing for small mobile devices
        if (isSmallMobile) {
            document.body.style.fontSize = '14px';
        } else if (isMobile) {
            document.body.style.fontSize = '15px';
        } else {
            document.body.style.fontSize = '16px';
        }
    }

    makeResponsive();
    window.addEventListener('resize', makeResponsive);

    // ===================================
    // INITIALIZE TOOLTIP (Optional)
    // ===================================

    document.querySelectorAll('[title]').forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });

    function showTooltip(e) {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = e.target.getAttribute('title');
        tooltip.style.cssText = `
            position: absolute;
            background: rgba(0, 0, 0, 0.9);
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.85rem;
            z-index: 1000;
            white-space: nowrap;
            pointer-events: none;
        `;
        document.body.appendChild(tooltip);

        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 8) + 'px';

        e.target._tooltip = tooltip;
    }

    function hideTooltip(e) {
        if (e.target._tooltip) {
            e.target._tooltip.remove();
            delete e.target._tooltip;
        }
    }

    // ===================================
    // PRINT STYLES INITIALIZATION
    // ===================================

    const printStyle = document.createElement('style');
    printStyle.textContent = `
        @media print {
            .navbar, .scroll-to-top, .hero-buttons {
                display: none !important;
            }
            body {
                font-size: 12pt;
            }
        }
    `;
    document.head.appendChild(printStyle);

    console.log('Portfolio website initialized successfully!');
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance optimization
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
