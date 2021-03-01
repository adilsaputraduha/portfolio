// Show menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');



// Remove menu mobile
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active-link'))
    this.classList.add('active-link')

    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



// Scroll section active link
// const sections = document.querySelectorAll('section[id]');

// function scrollActive() {
//     const scrollY = window.pageYOffset;

//     sections.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50
//         sectionId = current.getAttribute('id');

//         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
//         } else {
//             document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     });
// }
// window.addEventListener('scroll', scrollActive)



// Change background header
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);



// Show scroll top
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);



// Mixitup filter
const mixer = mixitup('.portfolio-container', {
    selectors: {
        target: '.portfolio-content'
    },
    animation: {
        duration: 400
    }
});



// Link active portfolio
const linkPortfolio = document.querySelectorAll('.portfolio-item');

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'));
        this.classList.add('active-portfolio');
    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio));



// Swiper
const mySwiper = new Swiper('.testimonial-container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
})



// Gsap
gsap.from('.home-img', {
    opacity: 0,
    duration: 2,
    delay: .5,
    x: 60
})
gsap.from('.home-data', {
    opacity: 0,
    duration: 2,
    delay: .8,
    y: 25
})
gsap.from('.home-greeting, .home-name, .home-profession, .home-button', {
    opacity: 0,
    duration: 2,
    delay: 1,
    y: 25,
    ease: 'expo.out',
    stagger: .2
})
gsap.from('.nav-logo, .nav-toggle', {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    y: 25,
    ease: 'expo.out',
    stagger: .2
})
gsap.from('.nav-item', {
    opacity: 0,
    duration: 2,
    delay: 1.8,
    y: 25,
    ease: 'expo.out',
    stagger: .2
})
gsap.from('.home-social-icon', {
    opacity: 0,
    duration: 2,
    delay: 2.3,
    y: 25,
    ease: 'expo.out',
    stagger: .2
})