// ======================================
// COUNTDOWN TIMER CONFIGURATION
// ======================================
// UPDATE THESE VALUES WITH YOUR EVENT DATE AND TIME
const EVENT_DATE = new Date("December 26, 2025 5:00:00 PM").getTime();

// Optional: Update the display date in the info box
function updateEventDateDisplay() {
    document.getElementById('event-date').textContent = "December 26, 2025 From 5:00 PM Anytime";
}

// ======================================
// COUNTDOWN TIMER FUNCTION
// ======================================
function updateCountdown() {
    // Get current time
    const now = new Date().getTime();
    
    // Calculate time difference
    const distance = EVENT_DATE - now;
    
    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update DOM elements with padding zeros
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        
        // Optional: Show event started message
        const countdownSection = document.querySelector('.countdown-section h2');
        if (countdownSection) {
            countdownSection.textContent = 'Event is Live! 🎉';
        }
    }
}

// ======================================
// INITIALIZE AND START COUNTDOWN
// ======================================
let countdownInterval;

document.addEventListener('DOMContentLoaded', function() {
    // Update event date display
    updateEventDateDisplay();
    
    // Initial countdown update
    updateCountdown();
    
    // Update countdown every second
    countdownInterval = setInterval(updateCountdown, 1000);
    
    // Ensure smooth video looping
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        });
    }
});

// ======================================
// CTA BUTTON FUNCTIONALITY (Optional)
// ======================================
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Thank you for your interest! More details coming soon.');
            // You can replace this with your actual action
            // For example: window.location.href = 'https://example.com';
        });
    }
});

// ======================================
// SMOOTH SCROLL FOR MAP SECTION
// ======================================
document.addEventListener('DOMContentLoaded', function() {
    const mapNote = document.querySelector('.map-note');
    if (mapNote) {
        mapNote.style.cursor = 'pointer';
        mapNote.addEventListener('click', function() {
            const mapsContainer = document.querySelector('.maps-container');
            mapsContainer.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
