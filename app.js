


// Define components
var Usagi = Vue.extend({
    template: '#usagi'
})

var Ami = Vue.extend({
    template: '#ami'
})

var Rei = Vue.extend({
  template: '#rei'
})

var Makoto = Vue.extend({
  template: '#makoto'
})
//
var Minako = Vue.extend({
  template: '#minako'
})



// The router needs a root component to render.
// For demo purposes, we will just use an empty one
// because we are using the HTML as the app template.
var App = Vue.extend({})

// Create a router instance.

var router = new VueRouter()

// Define some routes.
// Each route should map to a component.

router.map({
    '/usagi': {
        component: Usagi
    },
    '/ami': {
        component: Ami
    },

    '/rei': {
        component: Rei
    },

    '/makoto': {
        component: Makoto
    },

    '/minako': {
        component: Minako
    },
})

// Now we can start the app!
// The router will create an instance of App and mount to
// the element matching the selector #app.
router.start(App, '#app')

// new Vue({
//   el: '.picked',
//   data: {
//     picked: null
//   }
// });
//


$(function() {
  $('#smm').click(function() {
    if($(this).is(':checked'))
     $('#block').fadeIn('slow');
});

  $('#ssm').click(function() {
    if($(this).is(':checked'))
    $('#ssm-block').fadeIn('slow');
  });

  $('#esm').click(function() {
    if($(this).is(':checked'))
    $('#esm-block').fadeIn('slow');
  });

});


$(function() {
  $('.sm-attacks').on('click', function(){
  console.log("submitted");
  $('.sm-info').addClass('show');
});
});

$(function() {
  $('.sm-no').on('click', function(){
  console.log("submitted no");
  $('#block').fadeOut('slow');
});
});

$(function() {
  $('.sm-no').on('click', function(){
  console.log("submitted no");
  $('#ssm-block').fadeOut('slow');
});
});

// $(document).ready(function(){
//   $('#smm').change(function(){
//     if(this.checked)
//       $('#block').fadeIn('slow');
//     else(this.blur)
//       $('#block').fadeOut('slow');
//
// });
// });
//
// $(document).ready(function(){
//   $('#ssm').change(function(){
//     if(this.checked)
//       $('#ssm-block').fadeIn('slow');
//     else
//       $('#ssm-block').fadeOut('slow');
//
// });
// });
//
// $(document).ready(function(){
//   $('#esm').change(function(){
//     if(this.checked)
//       $('#esm-block').fadeIn('slow');
//     else
//       $('#esm-block').fadeOut('slow');
//
// });
// });
