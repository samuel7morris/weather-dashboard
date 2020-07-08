var apiKey = "3f9272344feab0ee315f47a4a4234647"
var cityName = ""
//five day forcast
var currentUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey

$.ajax({
url: currentUrl,
method: "GET",
}).then(function(response){
    console.log(response)
})

$.ajax({
url: fiveDayUrl,
method: "GET",
}).then(function(response){
    console.log(response)
})