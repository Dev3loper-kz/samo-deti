/**
 * New Year Festive Modal Logic
 * Powered by tsParticles & Canvas-Confetti
 */

(function () {
    // 1. Session check - only show once per session
    if (sessionStorage.getItem('nyModalShown')) return;

    // 2. Constants & Configuration
    const LIBS = [
        'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.2/dist/confetti.browser.min.js',
        'https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js'
    ];

    const CONTENT = {
        title: 'Волшебного Нового года от команды «Дети на миллион»! ✨',
        body: `
            <p>Дорогие родители и наши будущие миллионеры! 🎄 Пусть этот праздник принесет в ваш дом тепло, уют и веру в настоящие чудеса. Мы знаем: главное чудо — это безграничный потенциал ваших детей.</p>
            <p>Желаем родителям мудрости и гордости за успехи своих детей. А юным лидерам — смелости мечтать по-крупному, энергии для открытий и упорства в достижении целей! 🚀</p>
            <p>Пусть 2026 год станет для вашей семьи мощной стартовой площадкой для самых амбициозных проектов и блестящих побед. Инвестируйте в главное — в себя, в знания и в своё будущее. 📈</p>
        `,
        button: 'К новым вершинам! 🏔️'
    };

    // 3. Helper: Load external scripts
    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    // 4. Initialization Logic
    async function init() {
        try {
            // Load libs in parallel
            await Promise.all(LIBS.map(loadScript));
            createModal();
            startSnow();
            fireworksShow();
        } catch (err) {
            console.warn('Festive libs failed to load, falling back to basic modal.', err);
            createModal();
        }
    }

    let tsInstance = null;

    // 5. Create DOM Elements
    function createModal() {
        const overlay = document.createElement('div');
        overlay.id = 'ny-modal-overlay';
        overlay.innerHTML = `
            <div id="ny-modal-content">
                <h2 class="ny-title">${CONTENT.title}</h2>
                <div class="ny-text">${CONTENT.body}</div>
                <button class="ny-button" id="ny-close-btn">${CONTENT.button}</button>
            </div>
        `;

        document.body.appendChild(overlay);

        // Transition in
        setTimeout(() => overlay.classList.add('active'), 100);

        document.getElementById('ny-close-btn').addEventListener('click', closeEverything);
    }

    // 6. Animation: Snow/Sparkles (tsparticles)
    function startSnow() {
        if (!window.confetti) return;

        // Simple ambient snow using tsparticles wrapper
        const duration = 15 * 1000,
            animationEnd = Date.now() + duration,
            defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 99999 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    // 7. Animation: Big Opening Fireworks (canvas-confetti)
    function fireworksShow() {
        if (!window.confetti) return;

        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
            zIndex: 100000
        };

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, { spread: 26, startVelocity: 55, });
        fire(0.2, { spread: 60, });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45, });
    }

    // 8. Cleanup Logic
    function closeEverything() {
        const overlay = document.getElementById('ny-modal-overlay');
        if (overlay) {
            overlay.classList.remove('active');
            setTimeout(() => {
                overlay.remove();
                // Clean up any canvas elements leftover by libraries if necessary
                const canvases = document.querySelectorAll('canvas');
                canvases.forEach(c => {
                    if (c.style.zIndex >= 99998) c.remove();
                });
            }, 500);
        }

        // Mark as shown to prevent reappearing
        sessionStorage.setItem('nyModalShown', 'true');
    }

    // Start the engine
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
