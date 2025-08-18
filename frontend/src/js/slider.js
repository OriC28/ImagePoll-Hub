$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
  });
});

$(".variable-width").slick({
  variableWidth: true,
  adaptiveHeight: true,
});

$(".responsive").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
