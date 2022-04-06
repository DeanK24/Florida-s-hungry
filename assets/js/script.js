var cuisineList = document.querySelector(".cuisine-list-container");
var cuisineCards = document.querySelector(".cuisine-card");
var americanBtn = document.getElementById("american");
var asianBtn = document.getElementById("asian");
var italianBtn = document.getElementById("italian");
var latinBtn = document.getElementById("latin");
var medBtn = document.getElementById("med");
var restList = document.querySelector(".rest-list");
var listContainer = document.getElementById("list-of-rest");



// Selects the city from the dropdown menu
function getList() {
    console.log(document.getElementById("cityList").value);
    cuisineList.classList.remove("hide");
    cuisineCards.classList.remove("hide");
}

// Submit btn for each cuisine
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
    
    //fetching Tampa API data
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
            'X-RapidAPI-Key': '92770b5242msh55597f4b80a9589p12300fjsn73394d0d3c5f'
        }
    };
    
    fetch('https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=27.9506&longitude=-82.4572&limit=30&currency=USD&distance=20&open_now=false&lang=en_US&min_rating=5', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            for (var i = 0; i < 5; i++) {
                var node = document.createElement("li")
                var textNode = document.createTextNode(response.data[i].name)
                node.appendChild(textNode)
                listContainer.appendChild(node);
            }
        })
        .catch(err => console.error(err));
    
    
getFood();





//fetch Jacksonville API    
// fetch('https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=30.3322&longitude=-81.6557&limit=30&currency=USD&distance=20&open_now=false&lang=en_US&min_rating=5', options)
// .then(response => response.json())
// .then(response => {
//     console.log(response)
//     for (var i = 0; i < 5; i++) {
//         var node = document.createElement("li")
//         var textNode = document.createTextNode(response.data[i].name)
//         node.appendChild(textNode)
//         listContainer.appendChild(node);
//     }
// })
// .catch(err => console.error(err));
// }



// var getRest = function (){
//     fetch("https://api.yelp.com/v3/transactions/delivery/search?latitude=37.786882&longitude=-122.399972", {
//         method: "get",
//         headers: new Headers({
//             "Authorization": "Bearer R7cXrDn0CyoQcZ9AzqBvDrpNx-yAN6ZrI29XvYQKbGPrerdjV3ZszR9R4_5KFOaslWEK6wAv3vVGKKAq-yydOQHeyivS2yCBKEJN_6c2HERr3nhTFd4zPGmENFBKYnYx",
//             "Content-Type": "application/json"
//         }),
//         mode: "no-cors"
//     })
//     .then(response => {
//         return response.json
//     })
//     .then(data => {
//         console.log(data);
//     })
    
// }
// getRest();