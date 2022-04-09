// var cityList = document.querySelector(".city-list-container");
// var cityCards = document.querySelector(".city-card");
var jacksonvilleBtn = document.getElementById("jacksonville");
var orlandoBtn = document.getElementById("orlando");
var miamiBtn = document.getElementById("miami");
var tallahasseeBtn = document.getElementById("tallahassee");
var tampaBtn = document.getElementById("tampa");
var restList = document.querySelector(".rest-list");
var mapWeather = document.querySelector(".map-weather");
var listEl = document.querySelector(".list");
var weatherBox = document.querySelector(".weather-box");


// Submit btn for each cuisine
jacksonvilleBtn.addEventListener("click", function() {
    document.getElementById("input-box").value = "";
    document.getElementById("input-box").value = "Jacksonville";
    getJaxFood();
    restList.classList.remove("hide");
    mapWeather.classList.remove('hide');
    weatherBox.classList.remove("hide");
    listEl.classList.remove("hide");
    document.querySelector(".map").innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440729.51651678846!2d-81.9632966213798!3d30.345283956447123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b716f1ceafeb%3A0xc4cd7d3896fcc7e2!2sJacksonville%2C%20FL!5e0!3m2!1sen!2sus!4v1649385488166!5m2!1sen!2sus" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
    
    
})

orlandoBtn.addEventListener("click", function() {
    document.getElementById("input-box").value = "";
    document.getElementById("input-box").value = "Orlando";
    getOrlandoFood();
    restList.classList.remove("hide");
    mapWeather.classList.remove('hide');
    weatherBox.classList.remove("hide");
    listEl.classList.remove("hide");
    document.querySelector(".map").innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156405.32205820302!2d-81.43697875387006!3d28.503071492868465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e773d8fecdbc77%3A0xac3b2063ca5bf9e!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1649385232651!5m2!1sen!2sus" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})

miamiBtn.addEventListener("click", function() {
    document.getElementById("input-box").value = "";
    document.getElementById("input-box").value = "Miami";
    getMiamiFood();
    restList.classList.remove("hide");
    mapWeather.classList.remove('hide');
    weatherBox.classList.remove("hide");
    listEl.classList.remove("hide");
    document.querySelector(".map").innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38943768624!2d-80.29949876361637!3d25.7825453114265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sMiami%2C%20FL!5e0!3m2!1sen!2sus!4v1649385602465!5m2!1sen!2sus" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})

tallahasseeBtn.addEventListener("click", function() {
    document.getElementById("input-box").value = "";
    document.getElementById("input-box").value = "Tallahassee";
    getTallahasseeFood();
    restList.classList.remove("hide");
    mapWeather.classList.remove('hide');
    weatherBox.classList.remove("hide");
    listEl.classList.remove("hide");
    document.querySelector(".map").innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110044.69809812971!2d-84.32690328513473!3d30.46736059428571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ec8a5187124b53%3A0xebee077ad4fdb1f8!2sTallahassee%2C%20FL!5e0!3m2!1sen!2sus!4v1649385697960!5m2!1sen!2sus" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})

tampaBtn.addEventListener("click", function() {
    document.getElementById("input-box").value = "";
    document.getElementById("input-box").value = "Tampa";
    getTampaFood();
    restList.classList.remove("hide");
    mapWeather.classList.remove('hide');
    weatherBox.classList.remove("hide");
    listEl.classList.remove("hide");
    document.querySelector(".map").innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225470.28811533237!2d-82.59436588351026!3d27.99471474428446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1649385742328!5m2!1sen!2sus" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
})

var getJaxFood = function() {
    Cities(30.3322, -81.6557);
}
    
var getTampaFood = function() {
    Cities(27.9506, -82.4572);
}

var getOrlandoFood = function() {
    Cities(28.5384, -81.3789);
}

var getMiamiFood = function() {
    Cities(25.7617, -80.1918);
}

var getTallahasseeFood = function() {
    Cities(30.4383, -84.2807);
}

var Cities = function(latitude, longitude) {
       
        var apiUrl = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude='+latitude+'&longitude='+longitude+'&limit=15&currency=USD&distance=20&open_now=false&lang=en_US&min_rating=5';
    
        //fetching API data
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '4e636db79bmshd261239b808ed5bp1c3423jsn64092567f321'
            }
        };
    
        document.querySelector(".rest-list").innerHTML = "";
    
        fetch(apiUrl, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
    
                let listdata = response.data;
                listdata.forEach(restaurant => {
                    // console.log(restaurant);
    
                    if (restaurant.num_reviews >= 2 && restaurant.rating >= 4.0 && !restaurant.phone == "") {
                            document.querySelector(".rest-list").innerHTML +=  
                                `<div class="cards2 card-align">
                                <div><b> ${restaurant.name} </b></div>
                                <div class="text">${restaurant.address}</div>
                                <div class="text">Ph: ${restaurant.phone}</div>
                                </div>`;    
                            };
                });

                var apiUrl2 = 'https://api.openweathermap.org/data/2.5/onecall?lat='+latitude+'&lon='+longitude+'&units=imperial&exclude=minutely,hourly,alerts&appid=7f371e4052b1c98d236355c1a3d79224'
                ;

                    //make a request to the url for the lat/lon
                    fetch(apiUrl2)
                    .then(response => response.json())
                    .then(response => {
                        console.log(response.current); 
                            
                        var weatherBox = document.querySelector(".weather-box");

                            const {temp, wind_speed, humidity, uvi} = response.current;
                            const {icon} = response.current.weather[0];

                            console.log(temp, wind_speed, humidity, uvi, icon);

                                weatherBox.innerHTML = `<div class="w-box"><b>Today's Weather:</b>
                                                        <div class="icon-img"><img src="https://openweathermap.org/img/w/${icon}.png"></div>
                                                        <div>Temp:&nbsp ${temp}°F</div>
                                                        <div>Humidity:&nbsp ${humidity}%</div>
                                                        <div>Wind:&nbsp ${wind_speed}%</div>
                                                        <div>UVI:&nbsp ${uvi}%</div>
                                                        </div>`;
                                
                            }) 
                   
            })
            .catch(err => console.error(err));
      
}

