var cuisineList = document.querySelector(".cuisine-list-container");
var cuisineCards = document.querySelector(".cuisine-card");

// Selects the city from the dropdown menu
function getList() {
    console.log(document.getElementById("cityList").value);
    cuisineList.classList.remove("hide");
    cuisineCards.classList.remove("hide");

}