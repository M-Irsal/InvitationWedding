// Create floating hearts
        document.addEventListener('DOMContentLoaded', function() {
            const heartsContainer = document.getElementById('hearts-container');
            const heartCount = 20;
            
            for (let i = 0; i < heartCount; i++) {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.style.left = `${Math.random() * 100}%`;
                heart.style.animationDelay = `${Math.random() * 15}s`;
                heart.style.animationDuration = `${15 + Math.random() * 10}s`;
                heart.style.width = `${10 + Math.random() * 20}px`;
                heart.style.height = heart.style.width;
                heartsContainer.appendChild(heart);
            }
            
            // Scroll animations
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const appearOnScroll = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        appearOnScroll.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            
            fadeElements.forEach(element => {
                appearOnScroll.observe(element);
            });

            // Parallax effect for hero section
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const hero = document.querySelector('.hero');
                const rate = scrolled * -0.5;
                hero.style.backgroundPosition = `0px ${rate}px`;
                
                // Parallax for 3D elements
                const ring3d = document.querySelector('.ring-3d');
                const heart3d = document.querySelector('.heart-3d');
                if (ring3d && heart3d) {
                    ring3d.style.transform = `rotate(${scrolled * 0.1}deg)`;
                    heart3d.style.transform = `rotate(45deg) translateY(${scrolled * -0.05}px)`;
                }
            });
            
            // Add bounce animation for scroll indicator
            const style = document.createElement('style');
            style.textContent = `
                @keyframes bounce {
                    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
                    40% {transform: translateY(-10px);}
                    60% {transform: translateY(-5px);}
                }
            `;
            document.head.appendChild(style);
        });

        // Backsound
       const openBtn = document.getElementById('openInvitation');
const opening = document.getElementById('opening');
const music = document.getElementById('bg-music');
const mainContent = document.getElementById('main-content');

openBtn.addEventListener('click', () => {
    // Play music
    music.play();

    // Fade out opening
    opening.classList.add('hide');

    // Show main content
    setTimeout(() => {
        opening.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 1000);
});


// scroll indikator
document.getElementById('scrollNext').addEventListener('click', () => {
    document.getElementById('kisah-kami').scrollIntoView({
        behavior: 'smooth'
    });
});

// countdown timer
const weddingDate = new Date("March 15, 2027 15:00:00").getTime();

const countdownFunction = setInterval(function () {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <span class="countdown-box">${days} Hari</span>
        <span class="countdown-box">${hours} Jam</span>
        <span class="countdown-box">${minutes} Menit</span>
        <span class="countdown-box">${seconds} Detik</span>
    `;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Acara Sedang Berlangsung 💍";
    }

}, 1000);

 /* =========================================
       EMAILJS INIT
    ========================================= */
    emailjs.init("SZoD1zqpx-oUAUZWQ");


    /* =========================================
       FORM SUBMIT (EMAILJS)
    ========================================= */
    const form = document.getElementById("wedding-rsvp");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_074g4cz",
            "template_t96cs2k",
            this
        )
        .then(function() {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch(function(error) {
            alert("Failed to send message.");
            console.log(error);
        });
    });

    

