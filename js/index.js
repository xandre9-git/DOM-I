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
console.log(logo)

let navi = document.querySelectorAll('nav a')
navi[0].innerHTML = siteContent['nav']['nav-item-1']
navi[1].innerHTML = siteContent['nav']['nav-item-2']
navi[2].innerHTML = siteContent['nav']['nav-item-3']
navi[3].innerHTML = siteContent['nav']['nav-item-4']
navi[4].innerHTML = siteContent['nav']['nav-item-5']
navi[5].innerHTML = siteContent['nav']['nav-item-6']

let ctaH1 = document.querySelector('.cta-text h1')
ctaH1.textContent = siteContent['cta']['h1']

let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = siteContent['cta']['button']

let ctaHeaderImg = document.getElementById("cta-img")
ctaHeaderImg.setAttribute('src', siteContent['cta']['img-src'])

let mainH4 = document.querySelectorAll('.text-content h4')
mainH4[0].innerHTML = siteContent['main-content']['features-h4']
mainH4[1].innerHTML = siteContent['main-content']['about-h4']
mainH4[2].innerHTML = siteContent['main-content']['services-h4']
mainH4[3].innerHTML = siteContent['main-content']['product-h4']
mainH4[4].innerHTML = siteContent['main-content']['vision-h4']
