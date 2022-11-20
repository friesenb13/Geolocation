var app = new Framework7({
    // App root element
    el: '#app',
    routes: [
        {
            path: '/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html',
        },
    ],
    // ... other parameters
});
var mainView = app.views.create('.view-main')

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    // Cordova is now initialized. Have fun!

    var $$ = Dom7;
    $$(document).on('page:init', '.page[data-name="page2"]', function () {
        // Page 2 fun here

    })

}
