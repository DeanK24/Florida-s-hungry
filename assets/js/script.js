var cuisineList = document.querySelector(".cuisine-list-container");
var cuisineCards = document.querySelector(".cuisine-card");
var jacksonvilleBtn = document.getElementById("jacksonville");
var orlandoBtn = document.getElementById("orlando");
var miamiBtn = document.getElementById("miami");
var tallahasseeBtn = document.getElementById("tallahassee");
var tampaBtn = document.getElementById("tampa");
var restList = document.querySelector(".rest-list");



var clearContent = function() {
    document.querySelector(".rest-list").value = "";
}

// Submit btn for each cuisine
jacksonvilleBtn.addEventListener("click", function() {
    
    getJaxFood();
    console.log("clicked Jacksonville");
    restList.classList.remove("hide");
})

orlandoBtn.addEventListener("click", function() {
    getOrlandoFood();
    console.log("clicked Orlando");
    restList.classList.remove("hide");
})

miamiBtn.addEventListener("click", function() {
    getMiamiFood();
    console.log("clicked Miami");
    restList.classList.remove("hide");
})

tallahasseeBtn.addEventListener("click", function() {
    getTallahasseeFood();
    console.log("clicked Tallahassee");
    restList.classList.remove("hide");
})

tampaBtn.addEventListener("click", function() {
    getTampaFood();
    console.log("clicked tampa");
    restList.classList.remove("hide");
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

var Cities = function( latitude, longitude) {
       
        var apiUrl = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude='+latitude+'&longitude='+longitude+'&limit=10&currency=USD&distance=20&open_now=false&lang=en_US&min_rating=5';
    
        //fetching Jacksonville API data
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '92770b5242msh55597f4b80a9589p12300fjsn73394d0d3c5f'
            }
        };
    
        document.querySelector(".rest-list").innerHTML = "";
    
        fetch(apiUrl, options)
            .then(response => response.json())
            .then(response => {
                console.log(response)
    
                let listdata = response.data;
                listdata.forEach(restaurant => {
                    console.log(restaurant);
    
                    if (restaurant.num_reviews >= 1 && restaurant.rating >= 4.0) {
                            document.querySelector(".rest-list").innerHTML +=  
                                `<div class="cards card-align">
                                <div>Name:&#160 ${restaurant.name} </div>
                                <div>Address:&#160 ${restaurant.address}</div>
                                <div>Phone:&#160 ${restaurant.phone}</div>
                                <div><img src=${restaurant.photo.images.small.url}></div>
                                </div>`;    
                            };
                }); 
                   
            })
            .catch(err => console.error(err));
    

}