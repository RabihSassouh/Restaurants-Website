document.addEventListener("DOMContentLoaded", function () {
  const restaurantInfo = document.getElementById("restaurantInfo");

  // Retrieve the selected restaurant information from localStorage
  const selectedRestaurant = JSON.parse(
    localStorage.getItem("selectedRestaurant")
  );

  // Display information about the selected restaurant
  if (selectedRestaurant) {
    const restaurantName = document.createElement("h1");
    restaurantName.textContent = selectedRestaurant.name;

    const restaurantDescription = document.createElement("p");
    restaurantDescription.textContent = selectedRestaurant.description;

    restaurantInfo.appendChild(restaurantName);
    restaurantInfo.appendChild(restaurantDescription);
  }
});
