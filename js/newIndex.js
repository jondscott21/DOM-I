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
logo.setAttribute('src', siteContent["nav"]["img-src"]);


// ### Nav Bar ###
const navAnchors = Array.from(document.querySelectorAll('nav a'));
navAnchors.map((el, index) => el.textContent = `${siteContent['nav'][`nav-item-${index+1}`]}`);

// Adding color to nav bar

navAnchors.map(el => el.style.color = 'green');

// Adding elements to nav bar
const navBar = document.querySelector('nav');
const firstAnchor = document.createElement('a');
firstAnchor.textContent = `First`;
const lastAnchor = document.createElement('a');
lastAnchor.textContent = 'Last';
navBar.prepend(firstAnchor);
navBar.append(lastAnchor);

// ### CTA ###

const ctaTag = document.querySelector('.cta-text > h1');
ctaTag.textContent = siteContent['cta']['h1'];

const startedButton = document.querySelector('.cta-text > button');
startedButton.textContent = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

// ### Main Content ###

// Top paragraphs
const middleHeaders = Array.from(document.querySelectorAll('.text-content > h4'));
const middleParagraphs = Array.from(document.querySelectorAll('.text-content > p'));

middleHeaders[0].textContent = siteContent['main-content']['features-h4'];
middleHeaders[1].textContent = siteContent['main-content']['about-h4'];
middleParagraphs[0].textContent = siteContent['main-content']['features-content'];
middleParagraphs[1].textContent = siteContent['main-content']['about-content'];

// Middle image
const middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']["middle-img-src"])

// Bottom paragraphs
middleHeaders[2].textContent = siteContent['main-content']['services-h4'];
middleHeaders[3].textContent = siteContent['main-content']['product-h4'];
middleHeaders[4].textContent = siteContent['main-content']['vision-h4'];
middleParagraphs[2].textContent = siteContent['main-content']['services-content'];
middleParagraphs[3].textContent = siteContent['main-content']['product-content'];
middleParagraphs[4].textContent = siteContent['main-content']['vision-content'];

// ### Contact info ###

// Adjusting width of contact box
const contact = document.querySelector('.contact');
contact.style.width = '20%'; 

// Adding contact elements
const contactInfo = Array.from(document.querySelectorAll('.contact *'));
contactInfo[0].textContent = siteContent['contact']['contact-h4']
contactInfo[1].textContent = siteContent['contact']['address']
contactInfo[2].textContent = siteContent['contact']['phone']
contactInfo[3].textContent = siteContent['contact']['email']

// ### Copyright ###

const copyrightElem = document.querySelector('footer > p')
copyrightElem.textContent = siteContent['footer']['copyright'];

// contactInfo.forEach(el => {
//     // console.log(el.textContent)
//     if (el.textContent.length === 0){
//         console.log('hi')
//         Object.entries(siteContent['contact']).map(([key, value]) => el.textContent = value)
//     }
// });

// // Object.entries(siteContent['contact']).forEach(([key, value]) => {
//     // contactInfo.map(el => el.textContent += value);
// // })

// console.log(Object.entries(siteContent['contact']))