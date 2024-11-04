$(function () {
   AOS.init();
   /*   function scrollToSection(event) {
        event.preventDefault();
        let $section = $($(this).attr('href'));
        $('html, body').animate({
           scrollTop: $section.offset().top
        }, 500);
     }
     $('[data-scroll]').on('click', scrollToSection); */


   //con1 클릭 이벤트 
   $("main .con1 .back_ground>div").click(function () {
      $(this).addClass('on')
   });




   //con1 글자 페이드인아웃
   $("main .con1 .container h2").on("click", function () {
      $("main .con1 .container h2").fadeTo(200, 0.2);
      $("main .con1 .container h2").fadeTo(200, 0.5);
      $("main .con1 .container h2").fadeTo(500, 1);
   });

   //con2 가로 스크롤 
   /* let x,left,down;
   $(".con2").on({
       mousedown: function(e){
           e.preventDefault();
           down = true;
           x = e.pageX;
           left = $(this).scrollLeft();
       },
       mousemove: function(e){
           if(down){
               let newX = e.pageX;
               $(this).scrollLeft(left - newX + x);
           }
       },
       mouseup: function(e){
           down = false;
       },
    }); */


   //con2 앨범 제목, 동그라미 클릭하면 텍스트 튀어나옴 

   $("main .con2 .chronicle article").on("click", function () {
      // $('main .con2 .chronicle article .txt').addClass('on')

      $(this).find('.txt').toggleClass('on');
   });




  





   // con3 svg 배경

   const content3 = document.querySelector('.con3');

   const path1920 = document.querySelector('.svg_wrap .path4');
   const path1024 = document.querySelector('.svg_wrap2 .path4');

   const path1920Length = path1920.getTotalLength();
   const path1024Length = 7283;


   path1920.style.strokeDasharray = path1920Length;
   path1920.style.strokeDashoffset = path1920Length;

   path1024.style.strokeDasharray = path1024Length;
   path1024.style.strokeDashoffset = path1024Length;



   function calcDashoffset(scrollY, element, length) {

      const ratio = (scrollY - element.offsetTop) / element.offsetHeight
      const value = length - (length * ratio)

      return value < 0 ? 0 : value > length ? length : value
   }

   function scrollHandler() {
      const scrollY = window.scrollY + (window.innerHeight * 0.8);

      const mq = window.matchMedia("(max-width: 1024px)");
      if (mq.matches) {
         path1024.style.strokeDashoffset = calcDashoffset(scrollY, content3, path1024Length)
         // console.log(path1024.style.strokeDashoffset)
      } else {
         path1920.style.strokeDashoffset = calcDashoffset(scrollY, content3, path1920Length)
         // console.log(path1920.style.strokeDashoffset);
      }

   }


   window.addEventListener('scroll', scrollHandler);


   $('header .container .right .ham').click(function () {
      $('.hambuger_menu').animate({ left: 0 }, 300);
  });


  $('.hambuger_menu .menu_top .close').click(function () {
      $('.hambuger_menu').animate({ left: '-70%' }, 300);
  });


});



