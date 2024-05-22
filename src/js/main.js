$('.autoplay').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,

  responsive: [
    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,

      }
    }
  ]
});