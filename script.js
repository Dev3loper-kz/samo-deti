document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburgerMenu');
    const dropdown = document.getElementById('dropdownMenu');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from closing immediately
        hamburger.classList.toggle('active');
        dropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !dropdown.contains(e.target)) {
            hamburger.classList.remove('active');
            dropdown.classList.remove('show');
        }
    });

    // Dynamic header on scroll
    const header = document.querySelector('.main-header');
    let lastScrollTop = 0;
    let scrollThreshold = 5; // Minimum scroll distance to trigger hide/show

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Always show header at the top of the page
        if (scrollTop <= 0) {
            header.classList.remove('header-hidden');
            return;
        }

        // Check scroll direction
        if (Math.abs(scrollTop - lastScrollTop) < scrollThreshold) {
            return; // Don't do anything if scroll is too small
        }

        if (scrollTop > lastScrollTop) {
            // Scrolling down - hide header
            header.classList.add('header-hidden');
        } else {
            // Scrolling up - show header
            header.classList.remove('header-hidden');
        }

        lastScrollTop = scrollTop;
    });

    // Rotating photos in founder section
    const photos = document.querySelectorAll('.founder-photo');
    if (photos.length > 0) {
        let currentPhotoIndex = 0;

        setInterval(() => {
            // Remove active class from current photo
            photos[currentPhotoIndex].classList.remove('active');

            // Move to next photo
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;

            // Add active class to new photo
            photos[currentPhotoIndex].classList.add('active');
        }, 4000);
    }

    // Video functionality
    const videoContainer = document.getElementById('founderVideo');
    const videoPreview = document.getElementById('videoPreview');
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = document.querySelector('.modal-overlay');

    // Replace with actual YouTube video ID
    const youtubeVideoId = 'Yhtz3nTXvcM'; // ID видео с интервью Хартманна


    // Intersection Observer for auto-play
    const observerOptions = {
        threshold: 0.5
    };

    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Load muted autoplay video
                videoPreview.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${youtubeVideoId}`;
            } else {
                // Stop video when not visible
                videoPreview.src = '';
            }
        });
    }, observerOptions);

    if (videoContainer) {
        videoObserver.observe(videoContainer);
    }

    // Open modal on video click
    videoContainer?.addEventListener('click', () => {
        videoModal.classList.add('active');
        // Load full video with sound and controls
        modalVideo.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=1`;
        document.body.style.overflow = 'hidden';
    });

    // Close modal
    const closeModal = () => {
        videoModal.classList.remove('active');
        modalVideo.src = '';
        document.body.style.overflow = '';
    };

    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Animated counters for SAMO stats
    const statNumbers = document.querySelectorAll('.stat-number');

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
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

    // Intersection Observer for stat counters
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


