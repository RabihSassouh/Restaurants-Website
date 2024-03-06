const favIcon = document.getElementById("favIcon");
const restName=document.getElementById("restName");

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
    phone: "Phone number: +961 70708090",
    website: "www.masterchef.lb",
    Image1: "../assets/imgs/masterChef1.jpg",
    },
    {
    id:2,
    name: "KFC",
    description: "KFC is renowned for its iconic Southern-inspired cuisine, featuring world-famous fried"+
    " chicken seasoned with a proprietary blend of herbs and spices.",
    location: "Beirut, Achrafieh",
    instagram: "KFC-lb",
    Opening: "Opening hours: 10 am till 10 pm",
    phone: "Phone number: +961 01202054",
    website: "www.kfc.lb", 
    }
]

favIcon.addEventListener("click", () => {
  if (favIconStatus) {
    alert("Removed from favorites");
  } else {
    alert("Added to favorite");
  }
  favIconStatus = !favIconStatus;
})

function restaurantLoader(){
    for (let i=0; i<restaurant.length;i++){
        const restObject=restaurant[i];
        
        const restCard = restaurantInfo(restObject);
    }
}

function restaurantInfo(restaurant) {
    restName.innerHTML=`${restaurant.name}`;
    // container.style.backgroundImage=`url("${restaurant.Image1}")`;
    // container.style.backgroundSize = "cover";
    // description.innerHTML=`${restaurant.description}`;
}

restCardsButtons=document.querySelectorAll(".restaurant-cards");
console.log(restCardsButtons)

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


restaurantLoader()