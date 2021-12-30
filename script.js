const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const lanBar = document.getElementById("language-bar");
const navLt = document.getElementById('lt');
const navEn = document.getElementById('en');
const mainContainer = document.getElementById('main-container');
const mainEl =document.getElementById('main')
const aboutEl = document.getElementById('apie');
const priceEl =document.getElementById('table');
const contactsEl =document.getElementById('kontaktai');
const navList = [aboutEl, priceEl, contactsEl];

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


function toggleAnimation(el) {
      // toggles contaienr animation
      if(!el.classList.contains("slide-in-back"))    {
        el.classList.remove('slide-in-front');
        el.classList.add('slide-in-back');
    } else if (el.classList.contains("slide-in-back")){
        console.log('contains')
        el.classList.remove('slide-in-back');

        el.classList.add('slide-in-front');
    }
}

// add animation on click
function toggleNav(e) {
    // console.log(e.getAttribute('value'))
    let element = document.getElementById(`${e.getAttribute("value")}`).children[0]
    console.log(element)

    navList.forEach((el)=>{
        if(el.classList.contains('slide-in-back')) {
            toggleAnimation(el)
        }
        
    })
    

    toggleAnimation(element) 
    
    
    
}

document.body.setAttribute('lang', 'lt');


// event listeners

lanBar.addEventListener('click', toggleActiveLang);
// primaryNav.addEventListener('click', toggleNav)
