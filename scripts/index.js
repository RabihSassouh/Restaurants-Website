document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const restaurantCards = document.querySelectorAll(".restaurant-cards");
  const previous = document.getElementById("previous");
  const titleElement = document.getElementById("title");
  const descriptionElement = document.getElementById("description");
  let currentIndex = 0;
  let imageContainer = document.querySelector(".image-container");

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

restaurantCards.forEach(function (card) {
  card.addEventListener("click", function () {
    window.location.href = "/pages/singleRest.html";
  });
});
// restaurant-cards.addEventListener("click", function () {
//   localStorage.setItem("selectedRestaurant", JSON.stringify(restaurant));
//   window.location.href = "/pages/singleRest.html";
// });