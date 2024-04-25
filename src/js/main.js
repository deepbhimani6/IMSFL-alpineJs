import $ from "jquery";
import "@popperjs/core";
import "bootstrap/dist/js/bootstrap";
import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
Alpine.plugin(collapse)
window.Alpine = Alpine
Alpine.start()

import { App } from "./parts/app.js";
import { Plugins } from "./parts/plugins.js";
import { Parts } from "./parts/parts.js";
require("select2/dist/js/select2.min.js");

// ===========================================================================

// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {
  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");
  window.isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");
  window.isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

  //Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();
});

// ===========================================================================

// Select2 JS
$(document).ready(function () {
  $(".select-dropdown").select2();
  $(".product-option, .disable-search").select2({
    minimumResultsForSearch: -1,
  });
});

// ===========================================================================

// fancy box
require("@fancyapps/ui/src/Fancybox/Fancybox");

// ===========================================================================

//header
$(window).scroll(function () {
  var sticky = $("header"),
    scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass("header-fixed");
  else sticky.removeClass("header-fixed");
});

$(document).ready(function () {

  $(".close-btn").click(function () {
    $("body").removeClass("fixed-bg");
  });
});

// ===========================================================================

// scroll none
$(".scroll-none").click(function () {
  $("body").addClass("fixed-bg");
});

// scroll add
$(".scroll-add").click(function () {
  $("body").removeClass("fixed-bg");
});

// ===========================================================================

// read more/less
$(document).ready(function () {
  $(".read-more-less").click(function () {
    if (innerWidth > 991) {
      if ($(this).parent("#readMoreLess").children("div").hasClass("read-more"))
        $(this)
          .parent("#readMoreLess")
          .children("div")
          .removeClass("read-more");
      else
        $(this).parent("#readMoreLess").children("div").addClass("read-more");
    } else {
      if ($(this).parent("#readMoreLess").children("div").hasClass("read-less"))
        $(this)
          .parent("#readMoreLess")
          .children("div")
          .removeClass("read-less");
      else
        $(this).parent("#readMoreLess").children("div").addClass("read-less");
    }

    $(this).text() == "Read More"
      ? $(this).text("Read Less")
      : $(this).text("Read More");
  });
});

// ===========================================================================

// tab filter js
$(document).ready(function () {
  $(".filter-tab-btn").click(function () {
    var value = $(this).attr("data-filter");
    if (value == "all") {
      $(".filter").show("700");
    } else {
      $(".filter")
        .not("." + value)
        .hide("2000");
      $(".filter")
        .filter("." + value)
        .show("2000");
    }
    var filterOpen = $(this).hasClass("active");
    if (filterOpen) {
      $(".filter-tab-btn").removeClass("active");
    } else {
      var siblings = $(".filter-tab-nav").find(".active");
      siblings.removeClass("active");
      $(this).addClass("active");
    }
  });
});

// ===========================================================================
