const testimonialSlider = document.querySelector('.testimonial-slider');
        const dots = document.querySelectorAll('.slider-dot');
        const slidesToShow = 2; // Number of slides to show at a time
        let slideIndex = 0;
        let timer;
    
        // Function to show specific slide
        function showSlides(index) {
            const slideWidth = document.querySelector('.testimonial').offsetWidth + 10;
            const moveAmount = slidesToShow * slideWidth;
            testimonialSlider.style.transform = `translateX(-${index * moveAmount}px)`;
            slideIndex = index;
            updateDots(index);
        }
    
        // Function to update active dot
        function updateDots(index) {
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }
    
        // Auto slide function
        function autoSlide() {
            timer = setInterval(() => {
                slideIndex = (slideIndex + 1) % dots.length;
                showSlides(slideIndex);
            }, 5000); // Change slide every 5 seconds (5000ms)
        }
    
        // Start auto slide
        autoSlide();
    
        // Stop auto slide on dot click
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(timer); // Stop auto slide
                showSlides(index);
                autoSlide(); // Restart auto slide
            });
        });
    
        // Stop auto slide if user interacts with slider
        testimonialSlider.addEventListener('mouseenter', () => clearInterval(timer));
        testimonialSlider.addEventListener('mouseleave', autoSlide);


        //see more
        function toggleMessage(button) {
        const messageContent = button.previousElementSibling;
        messageContent.classList.toggle('show-full');
        if (messageContent.classList.contains('show-full')) {
            button.textContent = 'See less';
        } else {
            button.textContent = 'See more';
        }
    }

