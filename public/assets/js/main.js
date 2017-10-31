$(document).ready(function(){

  $(window).scroll(function(){
    if($(window).scrollTop() >= 300){
      $("header").addClass("floating");
    }else{
      $("header").removeClass("floating");
    }
  });

  $(".toggle-btn").on("click", function(){
    if($(".toggle-btn").hasClass("open")){
      $(".toggle-btn").removeClass("open");
      $(".menu").removeClass("menu-opened");
    }else{
      $(".toggle-btn").addClass("open");
      $(".menu").addClass("menu-opened");
    }
  });
  
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    if($(".toggle-btn").hasClass("open")){
      $(".toggle-btn").removeClass("open")
      $(".menu").removeClass("menu-opened");
    }

    var target = this.hash,
        menu = target;
    $target = $(target);
    $("html, body").stop().animate({
      "scrollTop": $target.offset().top+2
    }, 500, "swing", function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });

  });

});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(".menu li a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if(refElement.position().top   <= scrollPos + refElement.height() &&
        refElement.position().top + refElement.height() > scrollPos){
      $(".menu li a").removeClass("active");
      currLink.addClass("active");
    }else{
      currLink.removeClass("active");
    }
  });
}
