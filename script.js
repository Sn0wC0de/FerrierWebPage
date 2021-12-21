const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const lanBar = document.getElementById("language-bar")


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
function  toggleActiveLang(e) {
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

function toggleNav(e) {
    console.log(e.getAttribute("value"))
    let element = document.getElementById(`${e.getAttribute("value")}`)
    console.log(element)
    element.classList.add('slide-in');
    
    
}

document.body.setAttribute('lang', 'lt');


// event listeners

lanBar.addEventListener('click', toggleActiveLang);
// primaryNav.addEventListener('click', toggleNav)
