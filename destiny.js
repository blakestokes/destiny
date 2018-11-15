document.addEventListener("DOMContentLoaded", function(event) {
    var parallaxEnabled = true;
    var mouseX = event.pageX;
    var mouseY = event.pageY;
console.log(window);
    // var windowWidth = window.innerWidth;
    // var	windowHeight = window.innerHeight;
    var windowWidth = window.screen.width;
    var	windowHeight = window.screen.height;

    document.querySelector('#lax').onchange = function() {
        // var checked = document.querySelector('#lax').checked;
        var checked = this.checked;
        if (checked == true) {
            parallaxEnabled = true;
            document.querySelectorAll('.character').forEach(function(character) {
                character.style.marginTop = '350px';
            });
        }
        else {
            parallaxEnabled = false;
            document.querySelectorAll('.content, .character').forEach(function(element) {
                // element.style.cssText = "-webkit-transform: translateX(0%) translateY(0%); -moz-transform: translateX(0%) translateY(0%); transform: translateX(0%) translateY(0%)";
                element.style.webkitTransform = "translateX(0%) translateY(0%)";
                element.style.MozTransform = "translateX(0%) translateY(0%)";
                element.style.transform = "translateX(0%) translateY(0%)";
            });
            document.querySelectorAll('.character').forEach(function(character) {
                character.style.marginTop = '0px';
            });
        }
    };
    document.onmousemove = function(event) {
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

        var cursor = document.querySelector('.cursor');
        cursor.style.webkitTransform = "translateX(" + mouseX + "px) translateY(" + mouseY + "px)";
        cursor.style.MozTransform = "translateX(" + mouseX + "px) translateY(" + mouseY + "px)";
        cursor.style.transform = "translateX(" + mouseX + "px) translateY(" + mouseY + "px)";

        if (parallaxEnabled == true) {
            var content = document.querySelector('.content');
            content.style.webkitTransform = "translateX(" + stringX + ") translateY(" + stringY + ")";
            content.style.MozTransform = "translateX(" + stringX + ") translateY(" + stringY + ")";
            content.style.transform = "translateX(" + stringX + ") translateY(" + stringY + ")";

            var character = document.querySelector('.character');
            character.style.webkitTransform = "translateX(" + stringCX + ") translateY(" + stringCY + ")";
            character.style.MozTransform = "translateX(" + stringCX + ") translateY(" + stringCY + ")";
            character.style.transform = "translateX(" + stringCX + ") translateY(" + stringCY + ")";
        }
    };

    var itemSelects = document.querySelectorAll('.item-select');
    for(var i = 0; i < itemSelects.length; i++) {
        var items = itemSelects[i].querySelectorAll('.item');
        for(var j = 0; j < items.length; j++) {
            items[j].setAttribute("data-item", j);
        }
    }

    document.querySelectorAll(".items-row, .stat").forEach(function(element) {
        element.onmouseover = function() {
            this.querySelectorAll(".cursor").forEach(function(cursor) {
                cursor.classList.add("focus");
            });
        }
    });
    document.querySelectorAll(".items-row, .stat").forEach(function(element) {
        element.onmouseout = function() {
            this.querySelectorAll(".cursor").forEach(function(cursor) {
                cursor.classList.remove("focus");
            });
        };
    });

    document.querySelectorAll(".item-select .item").forEach(function(element){
        element.onclick = function() {
            var current = this.parentNode.parentNode.querySelector(".equipped").innerHTML;
            var item = this.innerHTML;

            document.querySelectorAll(".item-info").forEach(function(elementToRemove) {
                elementToRemove.parentNode.removeChild(elementToRemove);
            });

            this.parentNode.parentNode.querySelectorAll(".equipped").forEach(function(element) {
                element.innerHTML = item;
            });

            this.innerHTML = current;
        }
    });
});


//  Original JQuery
// $(document).ready(function(event){

//     parallaxEnabled = true;

//       var mouseX = event.pageX;
//       var mouseY = event.pageY;
//       var windowWidth = $(window).width();
//       var	windowHeight = $(window).height();

//     $("#lax").on("change", function(){
//       var checked = $(this).prop("checked");
//       if( checked == true ){
//         parallaxEnabled = true;
//         $(".character").css("margin-top", "350px");
//       }else{
//         parallaxEnabled = false;
//         $(".content, .character").css({
//           "-webkit-transform": "translateX(0%) translateY(0%)",
//           "-moz-transform": "translateX(0%) translateY(0%)",
//           "transform": "translateX(0%) translateY(0%)",
//         });
//         $(".character").css("margin-top", "0px");
//       }
//     });

//       $(this).on("mousemove", function(event){

//           speed = 30;

//           mouseX = event.pageX;
//           mouseY = event.pageY;

//           percentX = ((mouseX/windowWidth) * speed) - (speed/0.75);
//           percentY = ((mouseY/windowHeight) * speed) - (speed/0.6);
//           stringX = (0-percentX-speed) + "%";
//           stringY = (0-percentY-speed) + "%";

//           percentCX = ((mouseX/windowWidth) * speed) - (speed/30);
//           percentCY = ((mouseY/windowHeight) * speed) - (speed/90);
//           stringCX = (0-percentCX-speed) + "%";
//           stringCY = (0-percentCY-speed) + "%";

//           $(".cursor").css({
//               "-webkit-transform": "translateX(" + mouseX + "px) translateY(" + mouseY + "px)",
//               "-moz-transform": "translateX(" + mouseX + "px) translateY(" + mouseY + "px)",
//               "transform": "translateX(" + mouseX + "px) translateY(" + mouseY + "px)",
//           });

//       if(parallaxEnabled == true){

//         $(".content").css({
//           "-webkit-transform": "translateX(" + stringX + ") translateY(" + stringY + ")",
//           "-moz-transform": "translateX(" + stringX + ") translateY(" + stringY + ")",
//           "transform": "translateX(" + stringX + ") translateY(" + stringY + ")",
//         });

//         $(".character").css({
//           "-webkit-transform": "translateX(" + stringCX + ") translateY(" + stringCY + ")",
//           "-moz-transform": "translateX(" + stringCX + ") translateY(" + stringCY + ")",
//           "transform": "translateX(" + stringCX + ") translateY(" + stringCY + ")",
//         });

//       }

//       });

//       $(".item-select").each(function(){
//           $(this).find(".item").each(function(i){
//               $(this).attr("data-item", i);
//           });
//       });

//       $(".items-row, .stat").on("mouseover", function(){

//           $(".cursor").addClass("focus");

//       }).on("mouseout", function(){

//           $(".cursor").removeClass("focus");

//       });

//       $(".item-select .item").click(function(){

//           var current = $(this).parent().parent().find(".equipped").html();
//           var item = $(this).html();

//           $(".item-info").remove();
//           $(this).parent().parent().find(".equipped").html(item);
//           $(this).html(current);

//       });

//   });

//   alsolike(
//     "dPmKjM", "Dying Light Loading Animation",
//     "MYBzyG", "CSS Only Pokeball",
//     "qEozjR", "Article Loading Animation"
//   )