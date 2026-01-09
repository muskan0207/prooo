// Global variables
let currentPage = 0;
const pages = ['landing-page', 'gallery-page', 'wishes-page', 'surprise-page'];
let musicPlaying = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    createFloatingElements();
    animateTitle();
    animateSubtitle();
    setupAudio();
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Title Animation
function animateTitle() {
    const title = "🎉 Happy Birthday! 🎉";
    const titleElement = document.getElementById('animated-title');
    let index = 0;
    
    function typeChar() {
        if (index < title.length) {
            titleElement.textContent += title.charAt(index);
            index++;
            setTimeout(typeChar, 100);
        }
    }
    
    setTimeout(typeChar, 500);
}

// Subtitle Animation
function animateSubtitle() {
    const subtitle = "Get ready for an amazing celebration!";
    const subtitleElement = document.getElementById('subtitle-text');
    let index = 0;
    
    function typeSubtitle() {
        if (index < subtitle.length) {
            subtitleElement.textContent += subtitle.charAt(index);
            index++;
            setTimeout(typeSubtitle, 50);
        }
    }
    
    setTimeout(typeSubtitle, 2000);
}

// Create floating elements
function createFloatingElements() {
    createFloatingHearts();
    createSparkles();
    createConfetti();
}

function createFloatingHearts() {
    const hearts = ['💖', '💕', '💗', '💓', '💝'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-element heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
            animation: floatAnimation ${Math.random() * 10 + 8}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
            opacity: 0.7;
        `;
        document.body.appendChild(heart);
    }
}

function createSparkles() {
    const sparkles = ['✨', '⭐', '🌟', '💫', '⚡'];
    
    for (let i = 0; i < 20; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'floating-element sparkle';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 15 + 10}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            z-index: 1;
            animation: sparkleAnimation ${Math.random() * 6 + 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 3}s;
        `;
        document.body.appendChild(sparkle);
    }
}

function createConfetti() {
    const confetti = ['🎊', '🎉', '🎈', '🎁', '🎂'];
    
    for (let i = 0; i < 10; i++) {
        const piece = document.createElement('div');
        piece.className = 'floating-element confetti';
        piece.textContent = confetti[Math.floor(Math.random() * confetti.length)];
        piece.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 25 + 20}px;
            left: ${Math.random() * 100}%;
            top: -50px;
            pointer-events: none;
            z-index: 1;
            animation: confettiAnimation ${Math.random() * 8 + 6}s linear infinite;
            animation-delay: ${Math.random() * 4}s;
        `;
        document.body.appendChild(piece);
    }
}

// Add CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes floatAnimation {
        0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
        50% { transform: translateY(-30px) rotate(180deg); opacity: 1; }
        100% { transform: translateY(0) rotate(360deg); opacity: 0.7; }
    }
    
    @keyframes sparkleAnimation {
        0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
        50% { transform: scale(1) rotate(180deg); opacity: 1; }
    }
    
    @keyframes confettiAnimation {
        0% { transform: translateY(-50px) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Audio setup
function setupAudio() {
    const audio = document.getElementById('bgMusic');
    audio.volume = 0.3;
    
    // Try to play music when user interacts
    document.addEventListener('click', function() {
        if (!musicPlaying) {
            audio.play().catch(e => console.log('Audio autoplay blocked'));
            musicPlaying = true;
        }
    }, { once: true });
}

// Page navigation
function showPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= pages.length) return;
    
    // Hide current page
    const currentPageElement = document.getElementById(pages[currentPage]);
    currentPageElement.classList.add('hidden');
    
    // Show new page
    setTimeout(() => {
        const newPageElement = document.getElementById(pages[pageIndex]);
        newPageElement.classList.remove('hidden');
        
        // Update navigation dots
        updateNavigationDots(pageIndex);
        
        // Trigger page-specific animations
        triggerPageAnimations(pageIndex);
        
        currentPage = pageIndex;
    }, 300);
}

function updateNavigationDots(activeIndex) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
}

function triggerPageAnimations(pageIndex) {
    switch(pageIndex) {
        case 1: // Gallery page
            animateGalleryPhotos();
            break;
        case 2: // Wishes page
            animateWishCards();
            break;
        case 3: // Surprise page
            animateSurprisePage();
            break;
    }
}

// Start journey function
function startJourney() {
    // Create celebration burst
    createCelebrationBurst();
    
    // Play music
    const audio = document.getElementById('bgMusic');
    audio.play().catch(e => console.log('Audio autoplay blocked'));
    musicPlaying = true;
    
    // Navigate to gallery
    setTimeout(() => {
        showPage(1);
    }, 1000);
}

function createCelebrationBurst() {
    const button = document.querySelector('.start-btn');
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const emojis = ['🎉', '🎊', '✨', '💖', '🌟', '🎈'];
    
    for (let i = 0; i < 20; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 1000;
            animation: burstAnimation 1s ease-out forwards;
        `;
        
        const angle = (i / 20) * 2 * Math.PI;
        const distance = Math.random() * 200 + 100;
        
        emoji.style.setProperty('--end-x', `${Math.cos(angle) * distance}px`);
        emoji.style.setProperty('--end-y', `${Math.sin(angle) * distance}px`);
        
        document.body.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 1000);
    }
}

// Add burst animation CSS
const burstStyle = document.createElement('style');
burstStyle.textContent = `
    @keyframes burstAnimation {
        0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(var(--end-x), var(--end-y)) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(burstStyle);

// Gallery animations
function animateGalleryPhotos() {
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8) rotateY(90deg)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) rotateY(0deg)';
        }, index * 200);
    });
}

// Wishes animations
function animateWishCards() {
    const wishCards = document.querySelectorAll('.wish-card');
    
    wishCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-100px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateX(0)';
        }, index * 300);
    });
}

// Surprise page animations
function animateSurprisePage() {
    const giftBox = document.querySelector('.gift-box');
    
    // Add pulse animation to gift box
    giftBox.style.animation = 'giftPulse 2s ease-in-out infinite';
}

// Gift opening function
function openGift() {
    const giftBox = document.querySelector('.gift-box');
    const surpriseMessage = document.getElementById('surprise-message');
    
    // Add opened class
    giftBox.classList.add('opened');
    
    // Create gift opening effect
    createGiftOpeningEffect();
    
    // Show surprise message
    setTimeout(() => {
        surpriseMessage.classList.remove('hidden');
        surpriseMessage.classList.add('show');
        
        // Animate gift items
        const giftItems = document.querySelectorAll('.gift-item');
        giftItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
}

function createGiftOpeningEffect() {
    const giftBox = document.querySelector('.gift-box');
    const rect = giftBox.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const celebrationEmojis = ['🎊', '🎉', '✨', '🌟', '💖', '🎈', '🎁'];
    
    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement('div');
        emoji.textContent = celebrationEmojis[Math.floor(Math.random() * celebrationEmojis.length)];
        emoji.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: ${Math.random() * 15 + 15}px;
            pointer-events: none;
            z-index: 1000;
            animation: giftBurstAnimation 2s ease-out forwards;
        `;
        
        const angle = (i / 30) * 2 * Math.PI;
        const distance = Math.random() * 300 + 150;
        
        emoji.style.setProperty('--burst-x', `${Math.cos(angle) * distance}px`);
        emoji.style.setProperty('--burst-y', `${Math.sin(angle) * distance}px`);
        
        document.body.appendChild(emoji);
        
        setTimeout(() => emoji.remove(), 2000);
    }
}

// Add gift burst animation CSS
const giftBurstStyle = document.createElement('style');
giftBurstStyle.textContent = `
    @keyframes giftBurstAnimation {
        0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
        }
        50% {
            transform: translate(calc(var(--burst-x) * 0.7), calc(var(--burst-y) * 0.7)) scale(1.2) rotate(180deg);
            opacity: 1;
        }
        100% {
            transform: translate(var(--burst-x), var(--burst-y)) scale(0) rotate(360deg);
            opacity: 0;
        }
    }
    
    @keyframes giftPulse {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(giftBurstStyle);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPage > 0) showPage(currentPage - 1);
            break;
        case 'ArrowRight':
            if (currentPage < pages.length - 1) showPage(currentPage + 1);
            break;
        case ' ':
            e.preventDefault();
            if (currentPage === 0) startJourney();
            break;
    }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0 && currentPage < pages.length - 1) {
            // Swipe left - next page
            showPage(currentPage + 1);
        } else if (diff < 0 && currentPage > 0) {
            // Swipe right - previous page
            showPage(currentPage - 1);
        }
    }
}

// Add smooth transitions for better UX
function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: transform 0.3s ease, opacity 0.3s ease;
        }
        
        .page-container {
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);
}

// Initialize smooth transitions
addSmoothTransitions();

// Performance optimization - lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
lazyLoadImages();