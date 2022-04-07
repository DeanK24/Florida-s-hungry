var cuisineList = document.querySelector(".cuisine-list-container");
var cuisineCards = document.querySelector(".cuisine-card");
var jacksonvilleBtn = document.getElementById("jacksonville");
var orlandoBtn = document.getElementById("orlando");
var miamiBtn = document.getElementById("miami");
var tallahasseeBtn = document.getElementById("tallahassee");
var tampaBtn = document.getElementById("tampa");
var restList = document.querySelector(".rest-list");



// Selects the city from the dropdown menu
function getList() {
    console.log(document.getElementById("cityList").value);
    cuisineList.classList.remove("hide");
    cuisineCards.classList.remove("hide");
}

// Submit btn for each cuisine
jacksonvilleBtn.addEventListener("click", function() {
    console.log("clicked Jacksonville");
    restList.classList.remove("hide");
})

orlandoBtn.addEventListener("click", function() {
    console.log("clicked Orlando");
    restList.classList.remove("hide");
})

miamiBtn.addEventListener("click", function() {
    console.log("clicked Miami");
    restList.classList.remove("hide");
})

tallahasseeBtn.addEventListener("click", function() {
    console.log("clicked Tallahassee");
    restList.classList.remove("hide");
})

tampaBtn.addEventListener("click", function() {
    console.log("clicked tampa");
    restList.classList.remove("hide");
})


var getFood = function() {
    var apiTampa = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=27.9506&longitude=-82.4572&limit=10&currency=USD&distance=20&open_now=false&lang=en_US&min_rating=5';

    var apiJax = 'https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=30.3322&longitude=-81.6557&limit=30&currency=USD&distance=20&open_now=false&lang=en_US&min_rating=5';

    //fetching Tampa API data
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '92770b5242msh55597f4b80a9589p12300fjsn73394d0d3c5f'
        }
    };
    
    fetch(apiTampa, options)
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
                            </div>`;    
                        };
  
            }); 
               
        })
        .catch(err => console.error(err));


}

    
getFood();


