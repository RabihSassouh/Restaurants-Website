document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const restaurantCards = document.querySelectorAll(".restaurant-cards");
  const previous = document.getElementById("previous");
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");
  let currentIndex = 0;
  let imageContainer = document.querySelector(".image-container");

  let restaurant = [
    {
      id: 1,
      name: "Master Chef",
      description:
        "Our restaurant offers a fusion of flavors, combining traditional techniques with modern" +
        "innovation. Our menu features a diverse selection of dishes crafted with fresh, locally-sourced" +
        " ingredients to create an unforgettable dining experience.",
      location: "Beirut, Sursock, 20631111",

      instagram: "MasterChef",
      Opening: "Opening hours: 11 am till 1 am",
      phone: "Phone number: +961 70708090",
      website: "www.masterchef.lb",
      Image1: "../assets/imgs/masterChef1.jpg",
      Image2: "../assets/imgs/masterChef2.jpg",
      Image3: "../assets/imgs/masterChef2.jpg",
    },
    {
      id: 2,
      name: "Wendy's",
      description:
        "Put Down The Pizza Bagel. Pick Up The Burger. Stay hungry my friends!",
      // "KFC is renowned for its iconic Southern-inspired cuisine, featuring world-famous fried"+
      // " chicken seasoned with a proprietary blend of herbs and spices.",
      location: "Mansourieh, Moutazah",
      instagram: "Wendy's-lb",
      Opening: "Opening hours: 7 am till 10 pm",
      phone: "Phone number: +961 04 409 737",
      website: "www.wendys.lb",
      Image1: "../assets/imgs/wendy's1.jpg",
      Image2: "../assets/imgs/wendy's2.jpg",
      Image3: "../assets/imgs/wendy's3.jpg",
    },
    {
      id: 3,
      name: "Chuyax",
      description:
        "Step into the vibrant and lively atmosphere of Chuyax Restaurant," +
        "where the warmth of Mexican hospitality meets modern elegance.",
      location: "Ghanem Street, Ain Mreisse, Beirut",
      instagram: "Chuyax-lb",
      Opening: "Opening hours: 9 am till 12 am",
      phone: "Phone number: +961 01 013 737",
      website: "www.chuyax.lb",
      Image1: "../assets/imgs/chuyax1.jpg",
      Image2: "../assets/imgs/chuyax2.jpg",
      Image3: "../assets/imgs/chuyax3.jpg",
    },
    {
      id: 4,
      name: "Burgitos",
      description:
        "Sink your teeth into our signature Burgitos Burger, featuring a succulent" +
        " beef patty topped with melted cheese, crisp lettuce, ripe tomatoes, and tangy pickles," +
        " all nestled between a toasted brioche bun. ",
      location: "Mar Mikhael, Pharaon Street, Beirut",
      instagram: "burgitos-lb",
      Opening: "Opening hours: 10 am till 12 am",
      phone: "Phone number: +961 01 502244",
      website: "www.burgitos.lb",
      Image1: "../assets/imgs/burgitos1.jpg",
      Image2: "../assets/imgs/burgitos2.jpg",
      Image3: "../assets/imgs/burgitos3.jpg",
    },
    {
      id: 5,
      name: "BurgerKing",
      description:
        "Burger King is renowned for its flame-grilled burgers, delicious sandwiches," +
        " and flavorful sides. Our menu offers a wide variety of options, including classic Whopper burgers," +
        " crispy chicken sandwiches, savory salads, and indulgent sides like onion rings and fries",
      location: " Beirut, Forn El Chebbak",
      instagram: "burgerking-lb",
      Opening: "Opening hours: 10 am till 1 am",
      phone: "Phone number: +961 01 771266",
      website: "www.burgerking.lb",
      Image1: "../assets/imgs/burgerking1.jpg",
      Image2: "../assets/imgs/burgerking2.jpg",
      Image3: "../assets/imgs/burgerking3.jpg",
    },
    {
      id: 6,
      name: "Sushi",
      description:
        "Sushi restaurant offers a delightful array of Japanese cuisine, with a focus on expertly" +
        " crafted sushi and sashimi dishes.",
      location: " Beirut, Al Raouche",
      instagram: "sushi-lb",
      Opening: "Opening hours: 9 am till 1 am",
      phone: "Phone number: +961 01 255811",
      website: "www.sushi.lb",
      Image1: "../assets/imgs/sushi1.jpg",
      Image2: "../assets/imgs/sushi2.jpg",
      Image3: "../assets/imgs/sushi3.jpg",
    },
  ];

  let images = [
    {
      url: "/assets/imgs/foodbackground1.jpg",
      title: "EASTER FEAST",
      description:
        "Happy Easter from the Barbecrew! Enjoy our ready-to-heat Greek-inspired feast, featuring herb-rub smoked lamb shoulder, spinach + feta pie, lemon roasted potatoes, pistachio-olive oil cake, and more! Place your order by 3/27 for pickup or delivery on 3/30.",
    },
    {
      url: "/assets/imgs/foodbackground2.jpg",
      title: "SPECIAL SAUCE",
      description:
        "New Specials just dropped! Try the Lary David pastrami sandwich, Pork Belly Bao Buns, and pitmaster Rob's che's special ",
    },
    {
      url: "/assets/imgs/foodbackground3.jpg",
      title: "SUNDAY BRUNCH",
      description:
        "Join us for a delightful Sunday brunch experience. Indulge in our mouth-watering dishes, from fluffy pancakes and crispy bacon to freshly squeezed juices. Bring your friends and family for a relaxing and delicious start to your Sunday.",
    },
  ];

  function changeBackground(index) {
    currentIndex = (currentIndex + index + images.length) % images.length;
    imageContainer.style.backgroundImage =
      "url('" + images[currentIndex].url + "')";
    titleElement.innerText = images[currentIndex].title;
    descriptionElement.innerText = images[currentIndex].description;
  }
  setInterval(function () {
    navigate(1);
  }, 15000);

  function navigate(direction) {
    changeBackground(direction);
  }

  previous.addEventListener("click", () => {
    navigate(-1);
  });

  next.addEventListener("click", () => {
    navigate(+1);
  });

  restaurantCards.forEach(function (card) {
    card.addEventListener("click", function () {
      const restaurantId = card.dataset.restaurantId;
      const selectedRestaurant = findRestaurantById(restaurantId);
      // window.location.href = "/pages/singleRest.html";

      if (selectedRestaurant) {
        // Save the selected restaurant information to localStorage
        localStorage.setItem(
          "selectedRestaurant",
          JSON.stringify(selectedRestaurant)
        );

        // Redirect to singleRest.html
        window.location.href = "/pages/singleRest.html";
      }
    });
  });
  function findRestaurantById(id) {
    return restaurant.find((restaurant) => restaurant.id === parseInt(id));
  }

  restaurant.forEach(function (restaurant) {
    console.log(restaurant.name);
  });

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      const searchValue = searchInput.value.toLowerCase();

      restaurantCards.forEach(function (card) {
        const restaurantName = card.querySelector("h2");

        if (restaurantName) {
          const nameText = restaurantName.innerText.toLowerCase();

          if (nameText.includes(searchValue)) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        }
      });
    });
  }
});


// let item=localStorage.getItem("item");
// if (item){
//   let favorites=document.getElementById("favorites");
//   let newFavorite=document.createElement("div");
//   newFavorite.textContent=item;
//   favorites.appendChild(newFavorite);
// }

// let urlParams = new URLSearchParams(window.location.search);
// let favIconStatus= urlParams.get("favIconStatus");
// if (favIconStatus){
//   let favorites=document.getElementById("favorites");
//   let newFavorite= document.createElement("div");
//   favorites.append()
// }