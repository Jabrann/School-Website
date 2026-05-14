(function($) {

  $(document).ready(function() {
    $('body').addClass('js');
    var $menu = $('#menu'),
        $menulink = $('.menu-link');
    
    $menulink.click(function() {
      $menulink.toggleClass('active');
      $menu.toggleClass('active');
      return false;
    });

    // PASTIKAN content-hide ketutup dulu
    $("div.features-post div.content-hide").hide();
  });

  // videoPopup(); // biarkan kalau ada

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:30,
      nav:false,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      responsive:{
          0:{ items:1 },
          550:{ items:2 },
          750:{ items:3 },
          1000:{ items:4 },
          1200:{ items:5 }
      }
  });

  $(".Modern-Slider").slick({
      autoplay:true,
      autoplaySpeed:10000,
      speed:600,
      slidesToShow:1,
      slidesToScroll:1,
      pauseOnHover:false,
      dots:true,
      pauseOnDotsHover:true,
      cssEase:'fade',
      draggable:false,
      prevArrow:'<button class="PrevArrow"></button>',
      nextArrow:'<button class="NextArrow"></button>', 
  });

// === FIX FEATURES HOVER / TAP ===
  const isTouch = !window.matchMedia('(hover: hover)').matches;

  // Desktop: hover
  $("div.features-post").on('mouseenter', function() {
    if (!isTouch) {
      $(this).find("div.content-hide").stop(true,true).slideDown("medium");
      $(this).find("div.content-show").fadeOut(100);
      $(this).find(".features-content").addClass('active');
    }
  }).on('mouseleave', function() {
    if (!isTouch) {
      $(this).find("div.content-hide").stop(true,true).slideUp("medium");
      $(this).find("div.content-show").fadeIn(100);
      $(this).find(".features-content").removeClass('active');
    }
  });

  // HP/Tablet: tap to toggle
  $("div.features-post").on('click', function(e) {
    if (isTouch) {
      const $this = $(this);
      const $content = $this.find(".features-content");
      const isOpen = $content.hasClass('active');

      // tutup semua dulu
      $("div.features-post .content-hide").stop(true,true).slideUp("medium");
      $("div.features-post .content-show").fadeIn(100);
      $("div.features-post .features-content").removeClass('active');

      // kalau tadi ketutup, buka. kalau tadi kebuka, biarin ketutup
      if (!isOpen) {
        $this.find("div.content-hide").slideDown("medium");
        $this.find("div.content-show").fadeOut(100);
        $content.addClass('active');
      }
      e.preventDefault(); // biar ga lompat
    }
  });

  $("#tabs").tabs();

  // countdown tetap sama
  (function init() {
    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      return {
        'total': t,
        'days': Math.floor(t / (1000*60*60*24)),
        'hours': Math.floor((t/(1000*60*60))%24),
        'minutes': Math.floor((t/1000/60)%60),
        'seconds': Math.floor((t/1000)%60)
      };
    }
    function initializeClock(endtime){
      var timeinterval = setInterval(function(){
        var t = getTimeRemaining(endtime);
        document.querySelector(".days > .value").innerText=t.days;
        document.querySelector(".hours > .value").innerText=t.hours;
        document.querySelector(".minutes > .value").innerText=t.minutes;
        document.querySelector(".seconds > .value").innerText=t.seconds;
        if(t.total<=0){ clearInterval(timeinterval); }
      },1000);
    }
    initializeClock(((new Date()).getFullYear()+1) + "/1/1")
  })()

})(jQuery);