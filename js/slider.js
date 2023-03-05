var prevArrow = document.getElementById('feature-arrow-left');
var nextArrow = document.getElementById('feature-arrow-right');

$('.feature-items').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow
});

var prevArrow = document.getElementById('seller-arrow-left');
var nextArrow = document.getElementById('seller-arrow-right');

$('.seller-items-slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: prevArrow,
  nextArrow: nextArrow
});


// let prevArrow = document.getElementById('feature-arrow-left');
// let nextArrow = document.getElementById('feature-arrow-right');
// $('.feature-for').each(function (){
//   $('.feature-items').slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     prevArrow: prevArrow,
//     nextArrow: nextArrow,
//     asNavFor:
//   });
// });

