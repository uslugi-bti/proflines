document.addEventListener("DOMContentLoaded", () => {

    AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true, // анимация только один раз
        offset: 100
    });

    if (document.querySelector(".partners")) {
        const track = document.querySelector('.partners__list');
        const speed = 60;

        function updateAnimation() {
            const width = track.scrollWidth / 2;
            const duration = width / speed;
            track.style.animationDuration = `${duration}s`;
        }

        window.addEventListener('resize', updateAnimation);
        updateAnimation();
    }

    function initTestimonialsSwiper() {
        const testimonialsSwiper = new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
        });
    }

    function initPortfolioSwiper() {
        const portfolioSwiper = new Swiper('.portfolio-swiper', {
            slidesPerView: 1,
            spaceBetween: 25,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 35,
                },
            },
        });
    }

    function initFAQAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-item__question');
            const answer = item.querySelector('.faq-item__answer');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });

                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.faq-item')) {
                faqItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                faqItems.forEach(item => {
                    item.classList.remove('active');
                });
            }
        });
    }

    function initTeamSwiper() {
        if (document.querySelector(".team-swiper")) {
            const teamSwiper = new Swiper('.team-swiper', {
                slidesPerView: 1,
                spaceBetween: 25,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    dynamicBullets: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                },
            });
        }
    }

    if (document.querySelector(".home-page")) {
        //initTestimonialsSwiper();
        initPortfolioSwiper();
    }

    initFAQAccordion();

    function initProofCarousel() {
        const proofCarousel = document.querySelector('.proof-carousel');
        if (!proofCarousel) return;

        // Если нужно сделать автоматическую прокрутку
        // В данном случае просто анимируем появление элементов
        const proofItems = proofCarousel.querySelectorAll('.proof-item');

        proofItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';

            setTimeout(() => {
                item.style.transition = 'all 0.6s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Инициализация карусели
    initProofCarousel();

    function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.report-sample-card, .finding-card, .stat-item, .sector-bar, .barrier-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Анимация заполнения прогресс-баров
    function animateProgressBars() {
        const bars = document.querySelectorAll('.sector-bar-fill');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const width = entry.target.getAttribute('data-width');
                    entry.target.style.width = width + '%';
                }
            });
        }, {
            threshold: 0.5
        });

        bars.forEach(bar => {
            observer.observe(bar);
        });
    }

    animateProgressBars();
    initScrollAnimations();
    initTeamSwiper();

    if (document.querySelector(".principles-swiper")) {
        const swiper = new Swiper('.principles-swiper', {
            // Параметры
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,
            
            // Адаптивность
            breakpoints: {
                640: {
                    slidesPerView: 1.5,
                    centeredSlides: true,
                },
                768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 2.5,
                    centeredSlides: false,
                },
                1280: {
                    slidesPerView: 3,
                    centeredSlides: false,
                }
            },
            
            // Навигация
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            
            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            
            // Эффекты
            effect: 'slide',
            speed: 600,
        });
    }

    if (document.querySelector(".blog-swiper")) {
        const blogSwiper = new Swiper('.blog-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                }
            }
        });
    }

    if (document.querySelector(".testimonials-swiper")) {
        const testimonialsSwiper = new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 6000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });

        const toggleButtons = document.querySelectorAll('.testimonial-card__toggle');
        
        toggleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.testimonial-card');
                const content = card.querySelector('.testimonial-card__content');
                const toggleText = this.querySelector('.testimonial-card__toggle-text');
                const toggleIcon = this.querySelector('.testimonial-card__toggle-icon');
                
                if (content.classList.contains('testimonial-card__content--collapsed')) {
                    // Раскрываем
                    content.classList.remove('testimonial-card__content--collapsed');
                    toggleText.textContent = 'Zobraziť menej';
                    this.classList.add('testimonial-card__toggle--active');
                } else {
                    // Скрываем
                    content.classList.add('testimonial-card__content--collapsed');
                    toggleText.textContent = 'Čítať viac';
                    this.classList.remove('testimonial-card__toggle--active');
                }
            });
        });
        
        // Инициализация - все отзывы сначала свернуты
        const allContents = document.querySelectorAll('.testimonial-card__content');
        allContents.forEach(content => {
            content.classList.add('testimonial-card__content--collapsed');
        });
    }
});