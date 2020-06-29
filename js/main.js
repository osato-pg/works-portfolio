// get dom
const open = document.getElementById("menu-btn");
const sp = document.getElementById("sp-content");
const spNav = document.querySelectorAll(".sp-list > li");

// humburger menu
open.addEventListener("click", () => {
  open.classList.toggle("active");
  sp.classList.toggle("visible");
});

spNav.forEach((spnav) => {
  spnav.addEventListener("click", () => {
    sp.classList.remove("visible");
    open.classList.remove("active");
  });
});

window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.effect-fade').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('effect-scroll');
    }
   });
  }
};