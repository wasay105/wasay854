//Global variables
var element;


//Custom cursor
(() => {

   const cursor = document.querySelector('.cursor');

   document.addEventListener('mousemove', e => {
      cursor.setAttribute('style', `top:  ${e.pageY - 25}px; left: ${e.pageX - 25}px;`);
   });

   document.addEventListener('click', () => {
      console.log("%c Click...!!!", "font-size: 20px; color:mediumspringgreen;");

      cursor.classList.add('cursor--expand');
      console.log(cursor.classList);

      setTimeout(() => {
         cursor.classList.remove('cursor--expand');
      }, 500);
   });
})();






//Detect onclick event
if (window.matchMedia("(max-width: 920px)").matches === false) {
    $(".ham").on("click", function(){
        $("menu").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","99");
    });

    $(".close").on("click", function(){
        $("menu").css("right", "-400px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });

    $(".overlay").on("click", function(){
        $("menu").css("right", "-400px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
} else {
    $(".ham").on("click", function(){
        $(".nav_content").css("right", "0px");
        $(".overlay").css("opacity","1");
        $(".overlay").css("z-index","1");
    });

    $(".close").on("click", function(){
        $(".nav_content").css("right", "-200px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });

    $(".overlay").on("click", function(){
        $(".nav_content").css("right", "-200px");
        $(".overlay").css("opacity","0");
        $(".overlay").css("z-index","-1");
    });
}


//Scroller Nav
window.onscroll = function() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("nav").css("background-color","var(--black)") ;
    } else {
        $("nav").css("background-color","transparent") ;
    }
}


