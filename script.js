const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLt = document.getElementById('lt');
const navEn = document.getElementById('en');


navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", "true")
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute('aria-expanded', false);

        
    }
});

function changeLanguage(el) {
    document.body.setAttribute('lang', el.getAttribute('value'));
    
}
function  toggleActive(el) {
    console.log(el)
    if(el === 'lt') {
        navLt.classList.add('active');
        navEn.classList.remove('active')
    } else if (el= 'en') {
        navEn.classList.add('active');
        navLt.classList.remove('active')
    }
}
document.body.setAttribute('lang', 'lt');


// event listeners


navLt.addEventListener('click', toggleActive('lt'))
navEn.addEventListener('click', toggleActive('en'))