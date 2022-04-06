var cuisineList = document.querySelector(".cuisine-list-container");
var cuisineCards = document.querySelector(".cuisine-card");
var submitBtnEl = document.getElementById("submit");
var restaurantsEL = document.getElementById("restaurants");
var americanBtn = document.querySelector("american");
var asianBtn = document.querySelector("asian");
var italianBtn = document.querySelector("italian");
var latinBtn = document.querySelector("latin");
var medBtn = document.querySelector("med");
var restList = document.querySelector(".rest-list")


// Selects the city from the dropdown menu
function getList() {
    console.log(document.getElementById("cityList").value);
    cuisineList.classList.remove("hide");
    cuisineCards.classList.remove("hide");

}

// Submit
americanBtn.addEventListener("click", function() {
    console.log("american");
    restList.classList.remove("hide");
})

asianBtn.addEventListener("click", function() {
    console.log("asian");
    restList.classList.remove("hide");
})

italianBtn.addEventListener("click", function() {
    console.log("italian");
    restList.classList.remove("hide");
})

latinBtn.addEventListener("click", function() {
    console.log("latin");
    restList.classList.remove("hide");
})

medBtn.addEventListener("click", function() {
    console.log("med");
    restList.classList.remove("hide");
})

var getFood = function() {

    // fetching API data
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '92770b5242msh55597f4b80a9589p12300fjsn73394d0d3c5f'
        }
    };

    fetch('https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=30.3322&longitude=-81.6557&limit=30&currency=USD&distance=20&open_now=false&lang=en_US&min_rating=5', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}
getFood();
