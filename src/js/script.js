const overlayNavigation = $(`.up-header__overlay-navigation`);
const overlayCart = $(`.up-header__overlay-cart`);
const mainSlider = $(`.main-slider`)
const upHeader = $(`.up-header`)
const botHeader = $(`.bot-header`)
const scrollBtn = $(`.scroll-btn__itself`)
const contactIcon = $(`.contact__button`)
const contactForm = $(`.contact__form`)
const mapBtn = $(`.map-button`)
const mapItself = $(`.map`)
const isOverlaySubmenu = $(`.is-overlay-submenu`)
const upFooterSubmenu = $(`.up-footer__submenu`)
const limitedOverlayOffers = $(`.limited-overlay-offers`)


//Timer
function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}
function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector(`.limited-offers__days`);
  const hoursSpan = clock.querySelector(`.limited-offers__hours`);
  const minutesSpan = clock.querySelector(`.limited-offers__minutes`);
  const secondsSpan = clock.querySelector(`.limited-offers__seconds`);
  function updateClock() {
    const t = getTimeRemaining(endtime);
    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = (`0` + t.hours).slice(-2);
    minutesSpan.innerHTML = (`0` + t.minutes).slice(-2);
    secondsSpan.innerHTML = (`0` + t.seconds).slice(-2);
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }
  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}
const deadlineF = new Date(Date.parse(new Date()) + 604800000);
const deadlineS = new Date(Date.parse(new Date()) + 302400000);
initializeClock(`limited-offers__timer-buds`, deadlineF);
initializeClock(`limited-overlay-offers__timer-buds`, deadlineF);
initializeClock(`limited-offers__timer-watch`, deadlineS);
initializeClock(`limited-overlay-offers__timer-watch`, deadlineS);

//Contact Form
$(`.contact-button`).click(function(e) {
  e.preventDefault();
  contactForm.stop(true, false, true).fadeToggle(150);
  $(`#name`).focus();
})
function sendEmail () {
  Email.send({
    SecureToken : `9247458c-4d9f-4c09-8544-c378891ac569`,
    To : `dzhusoleksiy@gmail.com`,
    From : document.getElementById(`email`).value,
    Subject : `New Filled Form`,
    Body : `Name: ` + document.getElementById(`name`).value
    + `<br> Phone Number: ` + document.getElementById(`phone`).value
    + `<br> Message: ` + document.getElementById(`message`).value
}).then(
  function () { 
    $(`.form-message`).fadeIn(150);
    setTimeout(() => {
      $(`.form-message`).fadeOut(150);
      contactForm.stop(true, false, true).fadeOut(150);
    }, `3000`);
  })
}

//Up-Header Menu
$(`.up-header__menu-item`).hover(function() {
  $(this).children(`ul`).stop(true, false, true).slideToggle(150);
})

//Bot-Header Cart 
$(`.bot-header__cart-wrapper`).hover(function() {
  $(`.bot-header__cart-menu`).stop(true, false, true).fadeToggle(150);
  contactForm.stop(true, false, true).fadeOut(100);
})

//Phrase Slider
$(`#phrase-slider`).slick({
  arrows: false,
  autoplay: true,
  pauseOnHover: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  autoplaySpeed: 4000,
  mobileFirst: true,
  responsive: [
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
})

//Main Slider
$(`#main-slider`).slick({
  arrows: true,
  dots: false,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 6000,
  pauseOnHover: true,
  appendArrows: `.main-slider__arrows`,
  prevArrow: `<div class="main-slider__arrow main-slider__arrow_prev"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></div>`,
  nextArrow: `<div class="main-slider__arrow main-slider__arrow_next"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg></div>`,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerMode:true,
        centerPadding:`10%` 
      }
    },
    {
      breakpoint: 1199,
      settings: {
        swipe: false,
        centerMode:true,
        centerPadding:`15%` 
      }
    },
    {
      breakpoint: 1399,
      settings: {
        swipe: false,
        centerMode:true,
        centerPadding:`20%` 
      }
    },
    {
      breakpoint: 1920,
      settings: {
        swipe: false,
        centerMode:false
      }
    },
  ]
})

//Map
const map = L.map(`map`).setView([25.805641172241018, -80.31348203377674], 13);
L.tileLayer(`https://tile.openstreetmap.org/{z}/{x}/{y}.png`, {
    maxZoom: 19,
}).addTo(map);
const marker = L.marker([25.805641172241018, -80.31348203377674]).addTo(map).bindPopup(`72nd Ave, Miami, FL 33122`);
if ($(window).width() < 1200) {
  mapBtn.click(function(e) {
    e.preventDefault();
    mapItself.slideToggle(300);
    map.invalidateSize();
    setTimeout(() => {
      overlayNavigation.removeClass(`visible`);
    }, `400`);
  });
} else {
  mapBtn.click(function(e) {
    e.preventDefault();
    mapItself.fadeToggle(150);
    map.invalidateSize();
  });
}

//Phone Menu Opening
$(`.up-header__compr-menu-button`).click(function(e) {
  e.preventDefault();
  overlayNavigation.toggleClass(`visible`);
  $(`.ul-overlay-submenu`).css(`display`, `none`);
  isOverlaySubmenu.removeClass(`opened`);
})
$(`.scroll-to`).click(function() {
  overlayNavigation.removeClass(`visible`);
})

//Phone Cart Opening
$(`.up-header__compr-cart-button`).click(function(e) {
  e.preventDefault();
  overlayCart.toggleClass(`visible`);
})

//Categories Menu
$(`.bot-header__categories-wrapper`).hover(function() {  
  mapItself.fadeOut(100); 
  $(`.bot-header__categories-list`).stop(true, false, true).fadeToggle(150);
})
$(`.bot-header__has-submenu`).hover(function() {
  $(this).children(`ul`).stop(true, false, true).fadeToggle(150);
})

//Continue Shopping Button in Cart
$(`.up-header__cart-buttons_shopping`).click(function() {
  overlayCart.toggleClass(`visible`);
})

//Phone Menu Navigation
isOverlaySubmenu.click(function(e) {
  e.preventDefault();
  const $this = $(this);
  $this.next(`ul`).slideToggle(300, function () {});
  $this.toggleClass(`opened`);
  $this.closest(`li`).siblings(`li`).find(`ul`).slideUp(300, function () {});
  $this.closest(`li`).siblings(`li`).find(`div`).removeClass(`opened`);
})

//Limited Overlay Offers
$(`.limited-overlay-offers__button`).click(function(e) {
  e.preventDefault();
  limitedOverlayOffers.stop(true, false, true).fadeOut(150);
})
$(`.limited-offers__quick-view_camera`).click(function(e) {
  e.preventDefault();
  $(`.limited-overlay-offers_camera`).stop(true, false, true).fadeToggle(150);
})
$(`.limited-offers__quick-view_mouse`).click(function(e) {
  e.preventDefault();
  $(`.limited-overlay-offers_mouse`).stop(true, false, true).fadeToggle(150);
})

//Up-Footer Menu
function handleFooter () { 
  $(this).children(`.up-footer__header`).toggleClass(`up-footer__opened`);
  $(this).children(`ul`).stop(true, false, true).slideToggle(300);
}

//Fixed Header
function UpHeaderFix () {
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    if (scroll >= 45) { 
      upHeader.addClass(`fixed`).css(`box-shadow`,`0px 15px 20px -5px rgba(0, 0, 0, 0.24)`); 
      botHeader.css(`margin-top`, `71px`);
      }
    else {
      upHeader.removeClass(`fixed`);
      botHeader.css(`margin-top`, `0`);
    }
  });
}
function BotHeaderFix () {
  $(window).scroll(function() {
    scroll = $(window).scrollTop();
    if (scroll >= 115) { 
      botHeader.addClass(`fixed`); 
      mainSlider.css(`margin-top`, `81.08px`);
      }
    else {
      botHeader.removeClass(`fixed`);
      mainSlider.css(`margin-top`, `15px`);
    }
  });
}

//Scroll Button
function ScrollBtnApp () {
  $(window).scroll(function(e) {
    e.preventDefault();
    scroll = $(window).scrollTop();
    if (scroll >= 115) {
      scrollBtn.stop(true, false, true).fadeIn(150);
    } else {
      scrollBtn.stop(true, false, true).fadeOut(150);
    }
  })
}
function ScrollToTop () {
  scrollBtn.click(function() {
    $(document.body).scrollTop(0);
    $(document.documentElement).scrollTop(0);
  })
}
function ScrollBtnShadow () {
$(window).scroll(function () {
  if (scrollBtn.offset().top < ($(`.bot-footer`).offset().top - 52)) {
      scrollBtn.css(`box-shadow`, `none`);
      contactIcon.css(`box-shadow`, `none`);
  } else {
      scrollBtn.css(`box-shadow`, `3px 2px 22px 1px rgba(0, 0, 0, 0.24)`);
      contactIcon.css(`box-shadow`, `3px 2px 22px 1px rgba(0, 0, 0, 0.24)`);
  }
});
}


ssm.addStates([
  {
    id: `phone`,
    query: `(max-width: 599px)`,
    onEnter: function () {
      upFooterSubmenu.css(`display`, `none`)
      $(document).on(`click`, `.up-footer__item`, handleFooter);
    },
    onLeave: function () {
      $(`.up-footer__wrapper`).find(`.up-footer__opened`).removeClass(`up-footer__opened`);
      upFooterSubmenu.css(`display`, `block`)
      $(document).off(`click`, `.up-footer__item`, handleFooter);
    }
  },
  {
    id: `tablet`,
    query: `(max-width: 1199px)`,
    onEnter: function () {
      $(window).off(`scroll`);
      $(window).on(`scroll`, UpHeaderFix);
    },
    onLeave: function () {
      upHeader.removeClass(`fixed`).css(`box-shadow`,`none`);
      botHeader.css(`margin-top`, `0`);
      overlayNavigation.removeClass(`visible`);
      overlayCart.removeClass(`visible`);
    }
  },
  {
    id: `desktop`,
    query: `(min-width: 1200px)`,
    onEnter: function () {
      $(window).off(`scroll`);
      $(window).on(`scroll`, BotHeaderFix);
      ScrollBtnApp ();
      ScrollToTop ();
      ScrollBtnShadow ();
      mapItself.css(`display`, `none`)
    },
    onLeave: function () {
      botHeader.removeClass(`fixed`);
      mainSlider.css(`margin-top`, `15px`);
      scrollBtn.css(`display`, `none`)
      limitedOverlayOffers.css(`display`, `none`)
      mapItself.css(`display`, `none`)
      contactForm.css(`display`, `none`)
    }
  },
]);


