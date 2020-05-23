"use strict";

$('.question-one .label , .question-two label ,.question-three label ,.question-four label , .question-five label').click(function () {
  var current = $(this).parents('.question'),
      next = current.next();
  setTimeout(function () {
    current.fadeOut(300);
  }, 300);
  setTimeout(function () {
    next.fadeIn(500);
  }, 600);
});
$('.question-six label').click(function () {
  setTimeout(function () {
    $('.screen--4').fadeOut(200);
  }, 300);
  setTimeout(function () {
    $('.screen--5').fadeIn(1000);
  }, 500); // setTimeout(
  //   function(){
  //     $('footer').toggleClass("fixed-bottom");
  //     $('.screen--5').fadeOut(100);
  //     $('.screen--6').fadeIn(1000);
  //   }, 6000
  // );
});
var minute = 5;
var sec = 14;
setInterval(function () {
  document.getElementById('time-min').innerHTML = minute;
  document.getElementById('time-sec').innerHTML = sec;
  sec--;
  document.getElementById('time-sec').innerHTML = sec;

  if (document.getElementById('time-sec').innerHTML == 0) {
    document.getElementById('time-min').innerHTML = minute;
    minute--;
  }

  if (sec == 0 && minute > 0) {
    sec = 14;
  }

  if (minute == 0 && sec == 0) {
    clearInterval();
  }
}, 1000);
$('.matgr').mouseover(function () {
  $('.elec').fadeIn(100);
});
$('.matgr').mouseout(function () {
  $('.elec').fadeOut(100);
});
$('.mob').mouseover(function () {
  $('.mob2').fadeIn(100);
});
$('.mob').mouseout(function () {
  $('.mob2').fadeOut(100);
});
$('.int2').mouseover(function () {
  $('.int').fadeIn(100);
});
$('.int2').mouseout(function () {
  $('.int').fadeOut(100);
});
var width = 0;
var i = 1;

function frame() {
  var elem = document.getElementById("myBar");

  if (i == 1) {
    if (width >= 99) {
      i = 0;
    }

    if (width == 70) {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
      setTimeout(function () {
        $('.li').fadeIn(100);
      }, 200);
      setTimeout(function () {
        $('.li2').fadeIn(200);
      }, 700);
      setTimeout(function () {
        $('.li3').fadeIn(300);
      }, 1200);
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerHTML = width + "%";
    }
  }
}

setInterval(frame, 100);

if (width == 100) {
  clearInterval(frame);
}