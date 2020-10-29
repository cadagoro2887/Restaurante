"use strict";

$(document).ready(function () {
  //--------------- ANIMACIÓN DEL MENU
  $('.menu a').each(function (index, elemento) {
    {
      $(this).css({
        'top': '-200px'
      });
      $(this).animate({
        top: '0'
      }, 2000 + index * 500);
    }
  }); //--------------- ANIMACIÓN DEL HEADER  

  if ($(window).width() > 800) {
    $('header .textos').css({
      opacity: '0',
      marginTop: '0'
    });
    $('header .textos').animate({
      opacity: '1',
      marginTop: '-52px'
    }, 1500);
  } //--------------- SCROLL ACERCA DE


  var acercaDe = $('#acerca-de').offset().top,
      menu = $('#platillos').offset().top,
      galeria = $('#galeria').offset().top,
      ubicacion = $('#ubicacion').offset().top; // ACERCA DE

  $('#btn-acerca').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: acercaDe - 200
    }, 500);
  }); // MENÚ

  $('#btn-menu').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: menu
    }, 500);
  }); // GALERÍA

  $('#btn-galeria').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: galeria
    }, 500);
  }); // UBICACIÓN

  $('#btn-ubicacion').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: ubicacion
    }, 500);
  });
});