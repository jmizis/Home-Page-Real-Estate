// var myIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.getElementsByClassName("film-carousel");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     myIndex++;
//     if (myIndex > x.length) { myIndex = 1 }
//     x[myIndex - 1].style.display = "block";
//     setTimeout(carousel, 1500);
// }

// $(window).scroll(function(){
//     if ($(window).scrollTop() >= 300) {
//         $('nav').addClass('fixed-header');
//         $('nav div').addClass('visible-title');
//     }
//     else {
//         $('nav').removeClass('fixed-header');
//         $('nav div').removeClass('visible-title');
//     }
// });


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}