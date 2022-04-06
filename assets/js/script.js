var cuisineList = document.querySelector(".cuisine-list-container");
var cuisineCards = document.querySelector(".cuisine-card");
var americanBtn = document.getElementById("american");
var asianBtn = document.getElementById("asian");
var italianBtn = document.getElementById("italian");
var latinBtn = document.getElementById("latin");
var medBtn = document.getElementById("med");
var restList = document.querySelector(".rest-list");



// Selects the city from the dropdown menu
function getList() {
    console.log(document.getElementById("cityList").value);
    cuisineList.classList.remove("hide");
    cuisineCards.classList.remove("hide");
    
}

// Submit btn
americanBtn.addEventListener("click", function() {
    console.log("clicked american");
    restList.classList.remove("hide");
    
})

asianBtn.addEventListener("click", function() {
    console.log("clicked asian");
    restList.classList.remove("hide");
})

italianBtn.addEventListener("click", function() {
    console.log("clicked italian");
    restList.classList.remove("hide");
})

latinBtn.addEventListener("click", function() {
    console.log("clicked latin");
    restList.classList.remove("hide");
})

medBtn.addEventListener("click", function() {
    console.log("clicked mediterranean");
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