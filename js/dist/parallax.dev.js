"use strict";

$(document).ready(function () {
  //PARALLAX DE ACERCA DE
  $(window).scroll(function () {
    var windowWidth = $(window).width();

    if (windowWidth > 800) {
      var scroll = $(window).scrollTop();
      $('header .textos').css({
        'transform': 'translate(0px,' + scroll / 3 + '% )'
      });
      $('.acerca-de article').css({
        'transform': 'translate(0px, -' + scroll / 4 + '% )'
      });
    }
  });
  $(window).resize(function () {
    var windowWidth = $(window).width();

    if (windowWidth < 800) {
      $('.acerca-de article').css({
        'transform': 'translate(0px, 0px)'
      });
    }
  });
});