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

    const closeModal = () => {
        videoModal.classList.remove('active');
        modalVideo.src = '';
        document.body.style.overflow = '';
    };

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


// UNIVERSAL VIDEO MODAL - For testimonials and future videos
const videoTestimonials = document.querySelectorAll('.video-testimonial-card');
const universalVideoModal = document.getElementById('universalVideoModal');
const universalModalVideo = document.getElementById('universalModalVideo');
const universalModalClose = document.getElementById('universalModalClose');
const universalModalOverlay = document.getElementById('universalModalOverlay');

// Click to open universal modal
videoTestimonials.forEach(card => {
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









