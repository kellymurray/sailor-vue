

// Define some components
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
// You can pass in additional options here, but let's
// keep it simple for now.
var router = new VueRouter()

// Define some routes.
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
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


new Vue({
  el: '#editor',
  data: {
    input: 'hello'
  }
})
