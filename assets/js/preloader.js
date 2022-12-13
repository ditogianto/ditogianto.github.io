/*--------------------- Copyright (c) 2018 -----------------------
[Master Javascript]

Project: Portfolio Responsive HTML Template
Version: 1.0.0
Assigned to: ThemeForest
-------------------------------------------------------------------*/
(function($){
    "use strict";
      
      // Preloader Js
      jQuery(window).on('load', function() {
          jQuery("#status").fadeOut();
          jQuery("#preloader").delay(200).fadeOut("slow");
      });
      
      // ready function
      jQuery(document).ready(function($){
             var $this = $(window);
      
      //bg window height Js
      var window_height = window.innerHeight;
          $(".prt_home_wrapper").css("height", window_height);
      
      //Portfolio Load More
      $(".prt_loadmore").slice(0, 3).show();
      $("#loadMore").on('click', function (e) {
          e.preventDefault();
          $(".prt_loadmore:hidden").slice(0, 5).slideDown();
          if ($(".prt_loadmore:hidden").length == 0) {
              $("#load").fadeOut('slow');
          }
      });
      
      // for counter 
      $('.timer').appear(function() {
          $(this).countTo();
      });
      
          
      });
      
  })();