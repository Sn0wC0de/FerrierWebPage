const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const lanBar = document.getElementById("language-bar");
const navLt = document.getElementById('lt');
const navEn = document.getElementById('en');
const mainContainer = document.getElementById('main-container');

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


// toggles active language style
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

// add animation on click
function toggleNav(e) {
    console.log(e.getAttribute('value'))
    let element = document.getElementById(`${e.getAttribute("value")}`)
    // console.log(element)
    // element.children[0].classList.add('slide-in-front');
    if(!element.children[0].classList.contains("slide-in-back"))    {
        let arr = [...mainContainer.children]
        arr.map(el => {
            console.log(el.children[0].getAttribute('class'))
            // element.children[0] === el.children[0] ? null : el.children[0].classList.remove('slide-in-back')
        })
       

        // console.log([...mainContainer.children])
        element.children[0].classList.remove('slide-in-front');
        element.children[0].classList.add('slide-in-back');
    } else if (element.children[0].classList.contains("slide-in-back")){
        console.log('contains')
        element.children[0].classList.remove('slide-in-back');

        element.children[0].classList.add('slide-in-front');
    }
    
    
    
}

document.body.setAttribute('lang', 'lt');


// event listeners

lanBar.addEventListener('click', toggleActiveLang);
// primaryNav.addEventListener('click', toggleNav)
