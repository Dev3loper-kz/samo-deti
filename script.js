// Global function to close Hartmann video modal
function closeModal() {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    if (videoModal) {
        videoModal.classList.remove('active');
        modalVideo.src = '';
        document.body.style.overflow = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburgerMenu');
    const dropdown = document.getElementById('dropdownMenu');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        dropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !dropdown.contains(e.target)) {
            hamburger.classList.remove('active');
            dropdown.classList.remove('show');
        }
    });

    // Dynamic header on scroll
    const header = document.querySelector('.main-header');
    let lastScrollTop = 0;
    let scrollThreshold = 5;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop <= 0) {
            header.classList.remove('header-hidden');
            return;
        }

        if (Math.abs(scrollTop - lastScrollTop) < scrollThreshold) {
            return;
        }

        if (scrollTop > lastScrollTop) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        lastScrollTop = scrollTop;
    });

    // Rotating photos in founder section
    const photos = document.querySelectorAll('.founder-photo');
    if (photos.length > 0) {
        let currentPhotoIndex = 0;

        setInterval(() => {
            photos[currentPhotoIndex].classList.remove('active');
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            photos[currentPhotoIndex].classList.add('active');
        }, 4000);
    }

    // HARTMANN VIDEO - Dedicated modal
    const videoContainer = document.getElementById('founderVideo');
    const videoPreview = document.getElementById('videoPreview');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.querySelector('.modal-overlay');

    const youtubeVideoId = 'Yhtz3nTXvcM';

    const observerOptions = {
        threshold: 0.5
    };

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                videoPreview.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}`;
            } else {
                videoPreview.src = '';
            }
        });
    }, observerOptions);

    if (videoContainer) {
        videoObserver.observe(videoContainer);
    }

    videoContainer?.addEventListener('click', () => {
        videoModal.classList.add('active');
        modalVideo.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=1`;
        document.body.style.overflow = 'hidden';
    });

    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Animated counters for SAMO stats
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current).toLocaleString();
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});


// Video CTA Section
const ctaVideoOverlay = document.getElementById('videoPlayOverlay');
const ctaVideoFrame = document.getElementById('ctaVideoFrame');
const ctaButton = document.getElementById('ctaButton');

if (ctaVideoOverlay) {
    ctaVideoOverlay.addEventListener('click', function () {
        this.classList.add('hidden');
        const iframe = document.getElementById('ctaVideo');
        const currentSrc = iframe.src;
        iframe.src = currentSrc.replace('mute=1', 'mute=0').replace('controls=0', 'controls=1');
    });
}

// Animate CTA button with anime.js
if (typeof anime !== 'undefined' && ctaButton) {
    anime({
        targets: ctaButton,
        translateY: [-5, 5],
        duration: 2000,
        easing: 'easeInOutSine',
        loop: true,
        direction: 'alternate'
    });

    ctaButton.addEventListener('mouseenter', function () {
        anime({
            targets: this,
            scale: 1.1,
            rotateX: [0, 5],
            rotateY: [0, -5],
            duration: 300,
            easing: 'easeOutQuad'
        });
    });

    ctaButton.addEventListener('mouseleave', function () {
        anime({
            targets: this,
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            duration: 300,
            easing: 'easeOutQuad'
        });
    });
}

// Animate floating shapes
if (typeof anime !== 'undefined') {
    const shapes = document.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
        anime({
            targets: shape,
            translateX: () => anime.random(-50, 50),
            translateY: () => anime.random(-50, 50),
            scale: [1, 1.2, 1],
            duration: 3000 + (index * 1000),
            easing: 'easeInOutQuad',
            loop: true,
            direction: 'alternate'
        });
    });
}


// ========================================================================
// UNIVERSAL VIDEO MODAL - Works with ANY videos on the site
// ========================================================================
// Supports both current testimonials (.video-testimonial-card) 
// and any future video sections (.universal-video-card)

const allVideoCards = document.querySelectorAll('.video-testimonial-card, .universal-video-card');
const universalVideoModal = document.getElementById('universalVideoModal');
const universalModalVideo = document.getElementById('universalModalVideo');
const universalModalClose = document.getElementById('universalModalClose');
const universalModalOverlay = document.getElementById('universalModalOverlay');

// Intersection Observer for autoplay
const videoCardObserverOptions = {
    threshold: 0.5
};

const videoCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const card = entry.target;
        // Support both old and new class names for iframe
        const preview = card.querySelector('.testimonial-video-preview, .video-preview');
        const videoId = card.getAttribute('data-video-id');

        if (entry.isIntersecting && videoId && preview) {
            // Load muted autoplay video
            preview.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
        } else if (preview) {
            // Stop video when not visible
            preview.src = '';
        }
    });
}, videoCardObserverOptions);

// Observe all video cards and setup click handlers
allVideoCards.forEach(card => {
    const preview = card.querySelector('.testimonial-video-preview, .video-preview');

    // Only observe if there's an iframe for autoplay
    if (preview) {
        videoCardObserver.observe(card);
    }

    // Click to open universal modal
    card.addEventListener('click', function () {
        const videoId = card.getAttribute('data-video-id');

        if (universalVideoModal && universalModalVideo && videoId) {
            universalModalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
            universalVideoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close universal modal
const closeUniversalModal = () => {
    if (universalVideoModal) {
        universalVideoModal.classList.remove('active');
        universalModalVideo.src = '';
        document.body.style.overflow = '';
    }
};

universalModalClose?.addEventListener('click', closeUniversalModal);
universalModalOverlay?.addEventListener('click', closeUniversalModal);

// Close on Escape key for universal modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && universalVideoModal?.classList.contains('active')) {
        closeUniversalModal();
    }
});


// ========================================================================
// APPLICATION FORM HANDLING
// ========================================================================

// Show/hide messenger contact field based on selection
const messengerSelect = document.getElementById('messenger');
const messengerContactGroup = document.getElementById('messengerContactGroup');
const messengerContactLabel = document.getElementById('messengerContactLabel');
const messengerContactInput = document.getElementById('messengerContact');

if (messengerSelect) {
    messengerSelect.addEventListener('change', function () {
        if (this.value) {
            messengerContactGroup.style.display = 'block';

            // Update label and placeholder based on messenger
            if (this.value === 'whatsapp') {
                messengerContactLabel.textContent = 'Номер WhatsApp';
                messengerContactInput.placeholder = '+7 (___) ___-__-__';
            } else if (this.value === 'telegram') {
                messengerContactLabel.textContent = 'Username в Telegram';
                messengerContactInput.placeholder = '@username';
            } else if (this.value === 'viber') {
                messengerContactLabel.textContent = 'Номер Viber';
                messengerContactInput.placeholder = '+7 (___) ___-__-__';
            }
        } else {
            messengerContactGroup.style.display = 'none';
        }
    });
}

// Form submission handler
const applicationForm = document.getElementById('applicationForm');

if (applicationForm) {
    applicationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect form data
        const formData = {
            parentName: document.getElementById('parentName').value,
            childName: document.getElementById('childName').value,
            childAge: document.getElementById('childAge').value,
            city: document.getElementById('city').value,
            phone: document.getElementById('phone').value,
            messenger: document.getElementById('messenger').value,
            messengerContact: document.getElementById('messengerContact').value,
            message: document.getElementById('message').value
        };

        console.log('Form data:', formData);

        const SERVER_URL = 'https://kindsofmillionkzxyz.onrender.com';

        fetch(`${SERVER_URL}/send-application`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                    applicationForm.reset();
                    if (typeof messengerContactGroup !== 'undefined') {
                        messengerContactGroup.style.display = 'none';
                    }
                } else {
                    alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Произошла ошибка при отправке заявки. Пожалуйста, попробуйте позже.');
            });
    });
}


// ========================================================================
// FAQ ACCORDION
// ========================================================================

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    });
});


// ========================================================================
// MAP MODAL
// ========================================================================

const addressBtn = document.getElementById('addressBtn');
const mapModal = document.getElementById('mapModal');
const mapModalClose = document.getElementById('mapModalClose');
const mapModalOverlay = document.getElementById('mapModalOverlay');

if (addressBtn) {
    addressBtn.addEventListener('click', () => {
        mapModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

const closeMapModal = () => {
    mapModal.classList.remove('active');
    document.body.style.overflow = '';
};

mapModalClose?.addEventListener('click', closeMapModal);
mapModalOverlay?.addEventListener('click', closeMapModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mapModal?.classList.contains('active')) {
        closeMapModal();
    }
});


// ========================================================================
// PHOTO SLIDER FOR ABOUT PAGE
// ========================================================================

let currentSlideIndex = 1;
let slideInterval;

// Initialize slider
function initSlider() {
    showSlide(currentSlideIndex);
    startAutoSlide();
}

// Show specific slide
function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (!slides.length) return;

    if (n > slides.length) {
        currentSlideIndex = 1;
    }
    if (n < 1) {
        currentSlideIndex = slides.length;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Remove active from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show current slide
    slides[currentSlideIndex - 1].classList.add('active');
    dots[currentSlideIndex - 1].classList.add('active');
}

// Move slide by n positions
function moveSlide(n) {
    stopAutoSlide();
    currentSlideIndex += n;
    showSlide(currentSlideIndex);
    startAutoSlide();
}

// Go to specific slide
function currentSlide(n) {
    stopAutoSlide();
    currentSlideIndex = n;
    showSlide(currentSlideIndex);
    startAutoSlide();
}

// Auto slide every 5 seconds
function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }, 5000);
}

// Stop auto slide
function stopAutoSlide() {
    clearInterval(slideInterval);
}

// Initialize slider when DOM is loaded
if (document.querySelector('.founders-photo-slider')) {
    initSlider();
}


