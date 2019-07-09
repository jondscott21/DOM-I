const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// #### NAV BAR ####
let navA = document.querySelectorAll('nav a');
navA.forEach((el, index) => {
  console.log(siteContent['nav'][`nav-item-${index + 1}`]);
  return el.textContent = siteContent['nav'][`nav-item-${index + 1}`];
});
navA.forEach(el => el.style.color = 'green');


let nav = document.querySelector('nav');
let firstA = document.createElement("a");
firstA.textContent = 'First'
firstA.style.color = 'green'
let lastA = document.createElement("a");
lastA.textContent = 'Last'
lastA.style.color = 'green'
nav.appendChild(lastA);

nav.prepend(firstA);
console.log(nav);

// #### CTA ####
let ctaH1 = document.querySelector('h1');
ctaH1.textContent = siteContent['cta']['h1'];
console.log(ctaH1);

let circleImg = document.getElementById('cta-img');
circleImg.setAttribute('src', siteContent['cta']['img-src']);

let btn = document.getElementsByTagName('button')[0];
console.log(btn);
btn.textContent = siteContent['cta']['button'];

// #### MAIN CONTENT ####

// Top content
let topContentH4 = Array.from(document.querySelectorAll('.main-content .top-content h4'));
topContentH4[0].textContent = siteContent['main-content']['features-h4']
topContentH4[1].textContent = siteContent['main-content']['about-h4']
let topContentP = Array.from(document.querySelectorAll('.main-content .top-content p'));
topContentP[0].textContent = siteContent['main-content']['features-content'];
topContentP[1].textContent = siteContent['main-content']['about-content'];

// Middle Img
let middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

// Bottom content
let bottomContentH4 = Array.from(document.querySelectorAll('.main-content .bottom-content .text-content h4'));
bottomContentH4[0].textContent = siteContent['main-content']['services-h4']
bottomContentH4[1].textContent = siteContent['main-content']['product-h4']
bottomContentH4[2].textContent = siteContent['main-content']['vision-h4']
let bottomContentP = Array.from(document.querySelectorAll('.main-content .bottom-content .text-content p'));
bottomContentP[0].textContent = siteContent['main-content']['services-content'];
bottomContentP[1].textContent = siteContent['main-content']['product-content'];
bottomContentP[2].textContent = siteContent['main-content']['vision-content'];


let contactInfoH4 = document.querySelector('.contact h4');
contactInfoH4.textContent = siteContent['contact']['contact-h4'];

// #### FOOTER ####

let contactInfoP = Array.from(document.querySelectorAll('.contact p'));
console.log(contactInfoP);
contactInfoP[0].textContent = siteContent['contact']['address'];
contactInfoP[1].textContent = siteContent['contact']['phone'];
contactInfoP[2].textContent = siteContent['contact']['email'];


let footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];




