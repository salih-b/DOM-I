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
let Links = document.getElementsByTagName('a');
let headLine =  document.querySelectorAll('.cta-text h1');
let bttn =  document.querySelectorAll('.cta-text button');
let headerImage =  document.getElementById('cta-img');
let subtitles =  document.querySelectorAll('.text-content h4');
let subtitlesContent =  document.querySelectorAll('.text-content p');
let midImg = document.getElementById('middle-img');
let contacts =  document.querySelectorAll('.contact h4');
let contactsContent =  document.querySelectorAll('.contact p');
let rightsReserved =  document.querySelectorAll('footer p');

Links[0].textContent = siteContent["nav"]["nav-item-1"];
Links[1].textContent = siteContent["nav"]["nav-item-2"];
Links[2].textContent = siteContent["nav"]["nav-item-3"];
Links[3].textContent = siteContent["nav"]["nav-item-4"];
Links[4].textContent = siteContent["nav"]["nav-item-5"];
Links[5].textContent = siteContent["nav"]["nav-item-6"];
headLine[0].textContent = siteContent["cta"]["h1"];
bttn[0].textContent = siteContent["cta"]["button"];
headerImage.setAttribute('src', siteContent["cta"]["img-src"])
subtitles[0].textContent = siteContent["main-content"]["features-h4"];
subtitlesContent[0].textContent = siteContent["main-content"]["features-content"];
subtitles[1].textContent = siteContent["main-content"]["about-h4"];
subtitlesContent[1].textContent = siteContent["main-content"]["about-content"];
subtitles[2].textContent = siteContent["main-content"]["services-h4"];
subtitlesContent[2].textContent = siteContent["main-content"]["services-content"];
subtitles[3].textContent = siteContent["main-content"]["product-h4"];
subtitlesContent[3].textContent = siteContent["main-content"]["product-content"];
subtitles[4].textContent = siteContent["main-content"]["vision-h4"];
subtitlesContent[4].textContent = siteContent["main-content"]["vision-content"];
midImg.src = siteContent["main-content"]["middle-img-src"];
contacts[0].textContent = siteContent["contact"]["contact-h4"];
contactsContent[0].textContent = siteContent["contact"]["address"];
contactsContent[1].textContent = siteContent["contact"]["phone"];
contactsContent[2].textContent = siteContent["contact"]["email"];
rightsReserved[0].textContent = siteContent["footer"]["copyright"];

let Parent = document.querySelector('nav');
let newItem = document.createElement('a');
let newItem1 = document.createElement('a');
Parent.appendChild(newItem);
Parent.prepend(newItem); 
Links[6].textContent = "NEW-NAV";
 
Parent.appendChild(newItem1);
// Parent.prepend(newItem1);
Links[7].textContent = "NEWer-NAV";
Array.from(Links).forEach((navText) => {
  navText.style.color = 'green';
});