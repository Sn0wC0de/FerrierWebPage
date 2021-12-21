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

// function changeLanguage(el) {
//     document.body.setAttribute('lang', el.getAttribute('value'));
    
// }
function  toggleActive(e) {
    console.log(e.srcElement.innerText)
    document.body.setAttribute('lang', e.srcElement.innerText);
    if(e.srcElement.innerText === 'Lt') {
        navEn.classList.remove('active')
        navLt.classList.add('active');
        
    } else if (e.srcElement.innerText=== 'En') {
        navLt.classList.remove('active')
        navEn.classList.add('active');
        
    }
}
document.body.setAttribute('lang', 'lt');


// event listeners


navLt.addEventListener('click', toggleActive)
navEn.addEventListener('click', toggleActive)