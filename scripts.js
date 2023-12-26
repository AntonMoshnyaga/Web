$(document).ready(function(){
  $('.slick-slider').slick({
      // Налаштування слайдера Slick Slider
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      prevArrow: '.slider-button.previous',  // Селектор для кнопки "Previous"
      nextArrow: '.slider-button.next'      // Селектор для кнопки "Next"
  });

  // Управління слайдером за допомогою кнопок
  $('.slider-button.previous').click(function(){
      $('.slick-slider').slick('slickPrev');
  });

  $('.slider-button.next').click(function(){
      $('.slick-slider').slick('slickNext');
  });
})