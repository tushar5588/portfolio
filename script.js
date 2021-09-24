$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });
  function createBox() {

    let span = document.createElement('span');

    span.classList.add('animated-box');

    let size = Math.random() * 80;

    span.style.height = 40 + size + 'px';
    span.style.width = 40 + size + 'px';

    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    document.querySelector('.gradient-background').appendChild(span);

    setTimeout(() =>{
        span.remove();
    },3000)

}
var typed = new Typed(".typing", {
  strings: ["Developer", "Programmer", "Pen-Tester", "Writer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

setInterval(createBox, 400);

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});