$(".slider").slick({
  slidesToShow: 1,
  centerMode: true,
  dots: true,
  adaptiveHeight: true,
  prevArrow: "<img src='/image/svg/arrow-left.svg' class='prev' alt='1'>",
  nextArrow: "<img src='/image/svg/arrow-right.svg' class='next' alt='2'>",
});

$('.phone').on('input', function() {
    $(this).val($(this).val().replace(/[A-Za-zА-Яа-яЁё]/, ''))
});
