
$(document).ready(function () {
   $('.panel-email-form__input').on("keyup", function () {
      // alert("dfds");
      let email = $(".panel-email-form__input").val();
      if ((email.length > 0 && (email.match(/.+?\@.+/g) || []).length !== 1) || email == '') {
         $(".panel-email-form__input-btn").prop('disabled', true);
      } else {
         $(".panel-email-form__input-btn").prop('disabled', false);
      }
   });
   $('.panel-email-form__input-btn').on('click', function () {
      $(".panel-email-form").slideUp(800);
   });






   $('.js-star-item').mouseover(function () {
      count = 0;
      var i = 0;
      var j = 0;
      var thisParent = $(this).closest('.js-star-block');
      var thisItem = thisParent.find('.js-star-item');

      $(thisItem).each(function () {
         if ($(this).hasClass('active')) {
            count++;
         }
      })
      $(thisItem).each(function () {
         $(this).removeClass('active');
      })
      $(this).addClass('js-prov');
      $(thisItem).each(function () {
         $(this).removeClass('js-hover');
      })
      $(thisItem).each(function (index) {
         if ($(this).hasClass('js-prov')) {
            i = index;
         }
      })
      $(thisItem).each(function (index) {
         if (index < i + 1) {
            $(this).addClass('js-hover');
         }
      })
   })
   $('.js-star-item').mouseout(function () {
      var thisParent = $(this).closest('.js-star-block');
      var thisItem = thisParent.find('.js-star-item');

      $(this).removeClass('js-prov');
      $(thisItem).each(function () {
         $(this).removeClass('js-hover');
      })
      $(thisItem).each(function (index) {
         if (index < count) {
            $(this).addClass('active');
         }
      })
   })
   $('.js-star-item').on('click', function () {
      var count_star = 0;
      count = 0;
      var i = 0;
      var thisParent = $(this).closest('.js-star-block');
      var thisItem = thisParent.find('.js-star-item');
      $(this).addClass('active');
      $(thisItem).each(function (index) {
         if ($(this).hasClass('active')) {
            i = index;
         }
      })
      $(thisItem).each(function () {
         $(this).removeClass('active');
      })
      $(thisItem).each(function (index) {
         if (index < i + 1) {
            $(this).addClass('active');
            count_star++;
         }
      })
      if (count_star > 3) {
         // window.location.href = "result.html";
         setTimeout(function () {
            window.location.href = "result.html";
         }, 1000);
      } else if (count_star < 4) {
         setTimeout(function () {
            window.location.href = "review.html";
         }, 1000);
         // window.location.href = "review.html";
      }
   });
});