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
});
