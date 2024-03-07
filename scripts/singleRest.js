const favIcon = document.getElementById("favIcon");
const restName=document.getElementById("restName");

  // Retrieve the selected restaurant information from localStorage
  const selectedRestaurant = JSON.parse(
    localStorage.getItem("selectedRestaurant")
  );

const container=document.querySelector(".container");
const description=document.getElementById("description");
let favIconStatus = false;
let restaurant=[
    {
    id:1,
    name: "Master Chef",
    description: "Our restaurant offers a fusion of flavors, combining traditional techniques with modern"+ 
    "innovation. Our menu features a diverse selection of dishes crafted with fresh, locally-sourced"+
    " ingredients to create an unforgettable dining experience.",
    location: "Beirut, Sursock, 20631111",
  
    instagram: "MasterChef",
    Opening: "Opening hours: 11 am till 1 am",
    phone: "+961 70708090",
    website: "www.masterchef.lb",
    Image1: "../assets/imgs/masterChef1.jpg",
    Image2: "../assets/imgs/masterChef2.jpg",
    Image3: "../assets/imgs/masterChef2.jpg",
    },
    {
    id:2,
    name: "Wendy's",
    description: "Put Down The Pizza Bagel. Pick Up The Burger. Stay hungry my friends!",
    location: "Mansourieh, Moutazah",
    instagram: "Wendy's-lb",
    Opening: "Opening hours: 7 am till 10 pm",
    phone: "+961 04 409 737",
    website: "www.wendys.lb", 
    Image1: "../assets/imgs/wendy's1.jpg",
    Image2: "../assets/imgs/wendy's2.jpg",
    Image3: "../assets/imgs/wendy's3.jpg",
    },
    {
      id:3,
      name: "Chuyax",
      description: "Step into the vibrant and lively atmosphere of Chuyax Restaurant,"
      + "where the warmth of Mexican hospitality meets modern elegance.",
      location: "Ghanem Street, Ain Mreisse, Beirut",
      instagram: "Chuyax-lb",
      Opening: "Opening hours: 9 am till 12 am",
      phone: "+961 01 013 737",
      website: "www.chuyax.lb", 
      Image1: "../assets/imgs/chuyax1.jpg",
      Image2: "../assets/imgs/chuyax2.jpg",
      Image3: "../assets/imgs/chuyax3.jpg",
    },
    {
      id:4,
      name: "Burgitos",
      description: "Sink your teeth into our signature Burgitos Burger, featuring a succulent"
      + " beef patty topped with melted cheese, crisp lettuce, ripe tomatoes, and tangy pickles,"
      + " all nestled between a toasted brioche bun. ",
      location: "Mar Mikhael, Pharaon Street, Beirut",
      instagram: "burgitos-lb",
      Opening: "Opening hours: 10 am till 12 am",
      phone: "+961 01 502244",
      website: "www.burgitos.lb", 
      Image1: "../assets/imgs/burgitos1.jpg",
      Image2: "../assets/imgs/burgitos2.jpg",
      Image3: "../assets/imgs/burgitos3.jpg",
    },
    {
      id:5,
      name: "BurgerKing",
      description: "Burger King is renowned for its flame-grilled burgers, delicious sandwiches,"
      + " and flavorful sides. Our menu offers a wide variety of options, including classic Whopper burgers,"
      + " crispy chicken sandwiches, savory salads, and indulgent sides like onion rings and fries",
      location: " Beirut, Forn El Chebbak",
      instagram: "burgerking-lb",
      Opening: "Opening hours: 10 am till 1 am",
      phone: "+961 01 771266",
      website: "www.burgerking.lb", 
      Image1: "../assets/imgs/burgerking1.jpg",
      Image2: "../assets/imgs/burgerking2.jpg",
      Image3: "../assets/imgs/burgerking3.jpg",
    },
    {
      id:6,
      name: "Sushi",
      description: "Sushi restaurant offers a delightful array of Japanese cuisine, with a focus on expertly"
      + " crafted sushi and sashimi dishes.",
      location: " Beirut, Al Raouche",
      instagram: "sushi-lb",
      Opening: "Opening hours: 9 am till 1 am",
      phone: "+961 01 255811",
      website: "www.sushi.lb", 
      Image1: "../assets/imgs/sushi1.jpg",
      Image2: "../assets/imgs/sushi2.jpg",
      Image3: "../assets/imgs/sushi3.jpg",
    }

]


// favIcon.addEventListener("click", function()  {
//   if (favIconStatus) {
//     alert("Removed from favorites");
//     // window.location.href="../index.html?favorites="+ `${restaurant.id}`;
//   } else {
//     alert("Added to favorites");
//   }


//     const restaurantDescription = document.createElement("p");
//     restaurantDescription.textContent = selectedRestaurant.description;

//     restaurantInfo.appendChild(restaurantName);
//     restaurantInfo.appendChild(restaurantDescription);
//   }
// });

favIcon.addEventListener("click", () => {
  if (favIconStatus) {
    alert("Removed from favorites");
  } else {
    alert("Added to favorite");
  }
  favIconStatus = !favIconStatus;
})
    // localStorage.setItem("item","test")
    // window.location.href="../index.html"
    // ?favorites="+ `${data-restaurant.id}`;
  
  // if (favIconStatus) {
    // Save the selected restaurant information to localStorage
    // localStorage.setItem(
    //   "favIconStatus",
    //   JSON.stringify(favIconStatus)
    // );
//   window.location.href="../index.html?favorites="+ encodeURIComponent(favIconStatus);
// }


// function restaurantLoader(){
//     for (let i=0; i<restaurant.length;i++){
//         const restObject=restaurant[i];
        
//         const restCard = restaurantInfo(restObject);
//     }
// }

// function restaurantInfo(restaurant) {
//     restName.innerHTML=`${restaurant.name}`;
    // container.style.backgroundImage=`url("${restaurant.Image1}")`;
    // container.style.backgroundSize = "cover";
    // description.innerHTML=`${restaurant.description}`;
// }

// restCardsButtons=document.querySelectorAll(".restaurant-cards");
// console.log(restCardsButtons)
// restCardsButtons.forEach(function (card) {
//   const restaurantName = card.querySelector("h2")
  
// console.log(restaurantName);
// })

// for (let i = 0; i < restCardsButtons.length; i++) {
//     const button = restCardsButtons[i];

//     button.addEventListener("click", function () {
//       console.log(button.classList);
//     //   button.classList.add("class");
//     //   button.classList.remove("class");
//     //   button.classList.toggle("class");
//     //   button.getAttribute("product-id");
//       // console.log(products[i]);
//     });
//   }

// restaurantLoader()
document.addEventListener("DOMContentLoaded", function () {
  const selectedRestaurant = JSON.parse(localStorage.getItem("selectedRestaurant"));

  // Display restaurant details on the singleRest.html page
  const restName = document.getElementById("restName");
  const description = document.getElementById("description");
  const location = document.getElementById("location");
  const instagram = document.getElementById("instagram");
  const openingHours = document.getElementById("openingHours");
  const phoneNumber = document.getElementById("phoneNumber");
  const website = document.getElementById("website");
  const image1= document.getElementById("image1");
  const image2= document.getElementById("website");
  const Image3= document.getElementById("website");

  restName.textContent = selectedRestaurant.name;
  description.textContent = selectedRestaurant.description;
  location.textContent = "Location: " + selectedRestaurant.location;
  instagram.textContent = "Instagram: " + selectedRestaurant.instagram;
  openingHours.textContent = selectedRestaurant.Opening;
  phoneNumber.textContent = selectedRestaurant.phone;
  website.textContent = selectedRestaurant.website;
  image1.src= selectedRestaurant.Image1;
  image2.src= selectedRestaurant.Image2;
  image3.src= selectedRestaurant.Image3;
  
});
