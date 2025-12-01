document.addEventListener('DOMContentLoaded', () => {
    // ========================================================================
    // HEADER & NAVIGATION
    // ========================================================================
    const hamburger = document.getElementById('hamburgerMenu');
    const dropdown = document.getElementById('dropdownMenu');

    if (hamburger && dropdown) {
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
    }

    // Dynamic header on scroll
    const header = document.querySelector('.main-header');
    if (header) {
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
    }

    // ========================================================================
    // HERO / FOUNDER SECTION
    // ========================================================================
    // Rotating photos
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

    if (videoPreview) {
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
    }

    if (videoContainer) {
        videoContainer.addEventListener('click', () => {
            videoModal.classList.add('active');
            modalVideo.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&controls=1`;
            document.body.style.overflow = 'hidden';
        });
    }

    const closeModal = () => {
        if (videoModal) {
            videoModal.classList.remove('active');
            modalVideo.src = '';
            document.body.style.overflow = '';
        }
    };

    modalClose?.addEventListener('click', closeModal);
    modalOverlay?.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Animated counters for SAMO stats
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
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
    }
});


// ========================================================================
// VIDEO CTA SECTION
// ========================================================================
const ctaVideoOverlay = document.getElementById('videoPlayOverlay');
const ctaButton = document.getElementById('ctaButton');

if (ctaVideoOverlay) {
    ctaVideoOverlay.addEventListener('click', function () {
        this.classList.add('hidden');
        const iframe = document.getElementById('ctaVideo');
        if (iframe) {
            const currentSrc = iframe.src;
            iframe.src = currentSrc.replace('mute=1', 'mute=0').replace('controls=0', 'controls=1');
        }
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
// UNIVERSAL VIDEO MODAL
// ========================================================================
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
        const preview = card.querySelector('.testimonial-video-preview, .video-preview');
        const videoId = card.getAttribute('data-video-id');

        if (entry.isIntersecting && videoId && preview) {
            preview.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
        } else if (preview) {
            preview.src = '';
        }
    });
}, videoCardObserverOptions);

// Observe all video cards
allVideoCards.forEach(card => {
    const preview = card.querySelector('.testimonial-video-preview, .video-preview');
    if (preview) {
        videoCardObserver.observe(card);
    }

    card.addEventListener('click', function () {
        const videoId = card.getAttribute('data-video-id');
        if (universalVideoModal && universalModalVideo && videoId) {
            universalModalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0`;
            universalVideoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

const closeUniversalModal = () => {
    if (universalVideoModal) {
        universalVideoModal.classList.remove('active');
        universalModalVideo.src = '';
        document.body.style.overflow = '';
    }
};

universalModalClose?.addEventListener('click', closeUniversalModal);
universalModalOverlay?.addEventListener('click', closeUniversalModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && universalVideoModal?.classList.contains('active')) {
        closeUniversalModal();
    }
});


// ========================================================================
// APPLICATION FORM HANDLING (SEND TO SERVER)
// ========================================================================

const messengerSelect = document.getElementById('messenger');
const messengerContactGroup = document.getElementById('messengerContactGroup');
const messengerContactLabel = document.getElementById('messengerContactLabel');
const messengerContactInput = document.getElementById('messengerContact');

if (messengerSelect) {
    messengerSelect.addEventListener('change', function () {
        if (this.value) {
            messengerContactGroup.style.display = 'block';

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

// Отправка формы
const applicationForm = document.getElementById('applicationForm');

if (applicationForm) {
    applicationForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // 1. Блокируем кнопку, чтобы не нажимали много раз
        const submitBtn = applicationForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.innerText : 'Отправить';
        
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerText = 'Отправка...';
        }

        // 2. Собираем данные
        const formData = {
            parentName: document.getElementById('parentName')?.value || '',
            childName: document.getElementById('childName')?.value || '',
            childAge: document.getElementById('childAge')?.value || '',
            city: document.getElementById('city')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            messenger: document.getElementById('messenger')?.value || '',
            messengerContact: document.getElementById('messengerContact')?.value || '',
            message: document.getElementById('message')?.value || ''
        };

        console.log('Отправка данных:', formData);

        // 3. Отправляем на Render
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
                // Если сервер вернул success: true (значит Телеграм точно ушел)
                if (data.success) {
                    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
                    applicationForm.reset();
                    if (messengerContactGroup) {
                        messengerContactGroup.style.display = 'none';
                    }
                } else {
                    // Если сервер вернул success: false (значит и Телеграм и Амо упали)
                    alert('Произошла ошибка при отправке заявки. Пожалуйста, напишите нам напрямую.');
                }
            })
            .catch(error => {
                console.error('Ошибка сети:', error);
                alert('Проблема с соединением. Попробуйте позже или напишите нам в WhatsApp.');
            })
            .finally(() => {
                // 4. Возвращаем кнопку в исходное состояние
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalBtnText;
                }
            });
    });
}


// ========================================================================
// FAQ ACCORDION
// ========================================================================
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    }
});


// ========================================================================
// MAP MODAL
// ========================================================================
const addressBtn = document.getElementById('addressBtn');
const mapModal = document.getElementById('mapModal');
const mapModalClose = document.getElementById('mapModalClose');
const mapModalOverlay = document.getElementById('mapModalOverlay');

if (addressBtn && mapModal) {
    addressBtn.addEventListener('click', () => {
        mapModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

const closeMapModal = () => {
    if (mapModal) {
        mapModal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

mapModalClose?.addEventListener('click', closeMapModal);
mapModalOverlay?.addEventListener('click', closeMapModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mapModal?.classList.contains('active')) {
        closeMapModal();
    }
});
