"use strict";

var dest = new Date("April 30, 2022 10:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  var diff = dest - now;

  var days = Math.floor(diff / (86400 * 1000));
  //   console.log(days);

  var hours = Math.floor((diff % (1000 * 86400)) / (1000 * 60 * 60));
  //   console.log(hours);

  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  //   console.log(minutes);
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
  console.log(seconds);

  document.querySelector(".demo").innerHTML =
    days + " d : " + hours + " h : " + minutes + " m : " + seconds + " s";
}, 1000);

const nav = document.querySelector(".nav-list");
