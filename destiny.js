var parallaxEnabled = true;
var mouseX = event.pageX;
var mouseY = event.pageY;
var windowWidth = window.innerWidth;
var	windowHeight = window.innerHeight;

document.querySelector('#lax').onchange = function() {
    // var checked = document.querySelector('#lax').checked;
    var checked = this.checked;
    if (checked == true) {
        parallaxEnabled = true;
        document.querySelector('.character').style.marginTop = '350px';
    }
    else {
        parallaxEnabled = false;
        document.querySelector('.content, .character').style.cssText = "-webkit-transform: translateX(0%) translateY(0%); -moz-transform: translateX(0%) translateY(0%); transform: translateX(0%) translateY(0%)";
        document.querySelector('.character').style.marginTop = '0px';
    }
}
document.onmousemove = function() {
    var speed = 30;

    mouseX = event.pageX;
    mouseY = event.pageY;

    var percentX = ((mouseX/windowWidth) * speed) - (speed/0.75);
    var percentY = ((mouseY/windowHeight) * speed) - (speed/0.6);
    var stringX = (0-percentX-speed) + "%";
    var stringY = (0-percentY-speed) + "%";

    var percentCX = ((mouseX/windowWidth) * speed) - (speed/30);
    var percentCY = ((mouseY/windowHeight) * speed) - (speed/90);
    var stringCX = (0-percentCX-speed) + "%";
    var stringCY = (0-percentCY-speed) + "%";
}


$(document).ready(function(event){

    parallaxEnabled = true;

      var mouseX = event.pageX;
      var mouseY = event.pageY;
      var windowWidth = $(window).width();
      var	windowHeight = $(window).height();

    $("#lax").on("change", function(){
      var checked = $(this).prop("checked");
      if( checked == true ){
        parallaxEnabled = true;
        $(".character").css("margin-top", "350px");
      }else{
        parallaxEnabled = false;
        $(".content, .character").css({
          "-webkit-transform": "translateX(0%) translateY(0%)",
          "-moz-transform": "translateX(0%) translateY(0%)",
          "transform": "translateX(0%) translateY(0%)",
        });
        $(".character").css("margin-top", "0px");
      }
    });

      $(this).on("mousemove", function(event){

          speed = 30;

          mouseX = event.pageX;
          mouseY = event.pageY;

          percentX = ((mouseX/windowWidth) * speed) - (speed/0.75);
          percentY = ((mouseY/windowHeight) * speed) - (speed/0.6);
          stringX = (0-percentX-speed) + "%";
          stringY = (0-percentY-speed) + "%";

          percentCX = ((mouseX/windowWidth) * speed) - (speed/30);
          percentCY = ((mouseY/windowHeight) * speed) - (speed/90);
          stringCX = (0-percentCX-speed) + "%";
          stringCY = (0-percentCY-speed) + "%";

          $(".cursor").css({
              "-webkit-transform": "translateX(" + mouseX + "px) translateY(" + mouseY + "px)",
              "-moz-transform": "translateX(" + mouseX + "px) translateY(" + mouseY + "px)",
              "transform": "translateX(" + mouseX + "px) translateY(" + mouseY + "px)",
          });

      if(parallaxEnabled == true){

        $(".content").css({
          "-webkit-transform": "translateX(" + stringX + ") translateY(" + stringY + ")",
          "-moz-transform": "translateX(" + stringX + ") translateY(" + stringY + ")",
          "transform": "translateX(" + stringX + ") translateY(" + stringY + ")",
        });

        $(".character").css({
          "-webkit-transform": "translateX(" + stringCX + ") translateY(" + stringCY + ")",
          "-moz-transform": "translateX(" + stringCX + ") translateY(" + stringCY + ")",
          "transform": "translateX(" + stringCX + ") translateY(" + stringCY + ")",
        });

      }

      });

      $(".item-select").each(function(){
          $(this).find(".item").each(function(i){
              $(this).attr("data-item", i);
          });
      });

      $(".items-row, .stat").on("mouseover", function(){

          $(".cursor").addClass("focus");

      }).on("mouseout", function(){

          $(".cursor").removeClass("focus");

      });

      $(".item-select .item").click(function(){

          var current = $(this).parent().parent().find(".equipped").html();
          var item = $(this).html();

          $(".item-info").remove();
          $(this).parent().parent().find(".equipped").html(item);
          $(this).html(current);

      });

  });

  alsolike(
    "dPmKjM", "Dying Light Loading Animation",
    "MYBzyG", "CSS Only Pokeball",
    "qEozjR", "Article Loading Animation"
  )