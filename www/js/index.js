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

var $$ = Dom7;
$$(document).on('page:init', '.page[data-name="page2"]', function () {
    // Page 2 fun here
    var map = new google.maps.Map(document.getElementById('map'),{

        zoom: 14,
        center: {}
    })
})

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {

    // Cordova is now initialized. Have fun!

    //Geolocation paramaters
    var geoOpts ={
        enableHighAccuracy: true //use satellite accuracy rather than network which is default
    }
    //get the location as soon as app loads
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOpts);

    function geoSuccess(position){
        console.log(position)
        var lat= position.coords.latitude
        var long=position.coords.longitude
        $("#currentPos").html(lat + "," + long)
    }
    function geoError(message){
        alert(message.message)
    }

    var watchID;

    $("#startWatch").on('click', function(){
       watchID= navigator.geolocation.watchPosition(geoSuccess, geoError, geoOpts)
       $(this).hide();
       $("#stopWatch").show()
    })

    $("#stopWatch").on('click', function(){
        navigator.geolocation.clearWatch(watchID)
        $(this).hide();
       $("#startWatch").show()
    })


}
