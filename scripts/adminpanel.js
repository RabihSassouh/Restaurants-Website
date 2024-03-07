const addRestBtn = document.getElementById("add-rest");
const restModal = document.getElementById("restModal");
const modalAddRest = document.getElementById("modalAddRest");
const closeModal = document.getElementsByClassName("close")[0];
const requiredNote = document.getElementById("requiredNote");
const menuContainer = document.getElementById("menuContainer");
const restTable = document.getElementById("restTable");
const logoutBtn = document.getElementById("logout");




let menus = [
    "<b>Appetizers</b><br>Bruscheta - 10$<br>Calamari - 5$<br>Mozarella Sticks - 3$<br>Buffalo Wings - 7$",
    "<b>Sandwiches and Burgers</b><br>Classic Cheese Burger - 9$<br>Grilled Chicken Sandwich - 8$<br>Veggie Burger - 7$<br>Turkey Club Sandwich - 10$<br>Fish Sandwish - 7.5$",
    "<b>Soups and Salads</b><br>Caesar Salad - 4$<br>Gardeb Salad - 4$<br>French Onion Soap - 3.5$<br>Clam chowder - 7$"
];

localStorage.getItem("menus") != null ? menus = JSON.parse(localStorage.getItem("menus")) : localStorage.setItem("menus", JSON.stringify(menus));

let restaurants = [
    {
        id: 1,
        name: "Master Chef",
        description: "Our restaurant offers a fusion of flavors, combining traditional techniques with modern" +
            "innovation. Our menu features a diverse selection of dishes crafted with fresh, locally-sourced" +
            " ingredients to create an unforgettable dining experience.",
        location: "Beirut, Sursock, 20631111",
  
        instagram: "MasterChef",
        Opening: "11 am till 1 am",
        phone: "+961 70708090",
        website: "www.masterchef.lb",
        Image1: "../assets/imgs/masterChef1.jpg",
        Image2: "../assets/imgs/masterChef2.jpg",
        Image3: "../assets/imgs/masterChef2.jpg",
        menu: ""
    },
    {
        id: 2,
        name: "Wendy's",
        description: "Put Down The Pizza Bagel. Pick Up The Burger. Stay hungry my friends!",
        location: "Mansourieh, Moutazah",
        instagram: "Wendy's-lb",
        Opening: "7 am till 10 pm",
        phone: "+961 04 409 737",
        website: "www.wendys.lb",
        Image1: "../assets/imgs/wendy's1.jpg",
        Image2: "../assets/imgs/wendy's2.jpg",
        Image3: "../assets/imgs/wendy's3.jpg",
        menu: ""
    },
    {
        id: 3,
        name: "Chuyax",
        description: "Step into the vibrant and lively atmosphere of Chuyax Restaurant,"
            + "where the warmth of Mexican hospitality meets modern elegance.",
        location: "Ghanem Street, Ain Mreisse, Beirut",
        instagram: "Chuyax-lb",
        Opening: "9 am till 12 am",
        phone: "+961 01 013 737",
        website: "www.chuyax.lb",
        Image1: "../assets/imgs/chuyax1.jpg",
        Image2: "../assets/imgs/chuyax2.jpg",
        Image3: "../assets/imgs/chuyax3.jpg",
        menu: ""
    },
    {
        id: 4,
        name: "Burgitos",
        description: "Sink your teeth into our signature Burgitos Burger, featuring a succulent"
            + " beef patty topped with melted cheese, crisp lettuce, ripe tomatoes, and tangy pickles,"
            + " all nestled between a toasted brioche bun. ",
        location: "Mar Mikhael, Pharaon Street, Beirut",
        instagram: "burgitos-lb",
        Opening: "10 am till 12 am",
        phone: "+961 01 502244",
        website: "www.burgitos.lb",
        Image1: "../assets/imgs/burgitos1.jpg",
        Image2: "../assets/imgs/burgitos2.jpg",
        Image3: "../assets/imgs/burgitos3.jpg",
        menu: ""
    },
    {
        id: 5,
        name: "BurgerKing",
        description: "Burger King is renowned for its flame-grilled burgers, delicious sandwiches,"
            + " and flavorful sides. Our menu offers a wide variety of options, including classic Whopper burgers,"
            + " crispy chicken sandwiches, savory salads, and indulgent sides like onion rings and fries",
        location: "Beirut, Forn El Chebbak",
        instagram: "burgerking-lb",
        Opening: "10 am till 1 am",
        phone: "+961 01 771266",
        website: "www.burgerking.lb",
        Image1: "../assets/imgs/burgerking1.jpg",
        Image2: "../assets/imgs/burgerking2.jpg",
        Image3: "../assets/imgs/burgerking3.jpg",
        menu: ""
    },
    {
        id: 6,
        name: "Sushi",
        description: "Sushi restaurant offers a delightful array of Japanese cuisine, with a focus on expertly"
            + " crafted sushi and sashimi dishes.",
        location: "Beirut, Al Raouche",
        instagram: "sushi-lb",
        Opening: "9 am till 1 am",
        phone: "+961 01 255811",
        website: "www.sushi.lb",
        Image1: "../assets/imgs/sushi1.jpg",
        Image2: "../assets/imgs/sushi2.jpg",
        Image3: "../assets/imgs/sushi3.jpg",
        menu: ""
    }
];

localStorage.getItem("restaurants") != null ? restaurants = JSON.parse(localStorage.getItem("restaurants")) : localStorage.setItem("restaurants", JSON.stringify(restaurants));




function generateRestaurantRow(rest) {
    return `<tr>
                <td>${rest.name}</td>
                <td>${rest.description}</td>
                <td>${rest.location}</td>
                <td>${rest.phone}</td>
                <td>${rest.website}</td>
                <td><button class="delete-rest-btn white-bg" id="${rest.id}"><i class="fa-solid fa-minus"></i></button></td>
            </tr>`;
}

function loadRestaurants() {
    for (let i = 0; i < restaurants.length; i++) {
        const restItem = generateRestaurantRow(restaurants[i]);
        restTable.innerHTML += restItem;
    }
    const deleteRestBtns = document.querySelectorAll(".delete-rest-btn");
    for (let i = 0; i < deleteRestBtns.length; i++) {
        deleteRestBtns[i].onclick = function() {
            const restId = deleteRestBtns[i].id;
            deleteRestaurant(restId);
        };
    }
}

function generateMenuItem(menuItem) {
    return `<label class="menu">
                <input type="checkbox"/>${menuItem}
            </label>`;
}

function launchNewRestModal() {
    restModal.classList.remove("hide");

    for (let i = 0; i < menus.length; i++) {
        const menuItem = generateMenuItem(menus[i]);
        menuContainer.innerHTML += menuItem;
    }
}

function generateUniqueId(rest) {
    const existingIds = rest.map(obj => obj.id);
    const maxId = Math.max(...existingIds);
    return maxId + 1;
}

function addRestaurant() {
    requiredNote.classList.add("hide");

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const openingHours = document.getElementById("openingHours").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const webLink = document.getElementById("webLink").value;
    const instagram = document.getElementById("instagram").value;
    
    const checkMenus = restModal.querySelectorAll('input[type="checkbox"]');
    const checkedCheckMenus = Array.from(checkMenus).filter(checkMenu => checkMenu.checked);
    const checkedMenusValues = checkedCheckMenus.map(checkMenu => checkMenu.innerHTML);

    if (name === "" || description === "" || location === "" || openingHours === "" || phoneNumber === "" || webLink === "" || instagram === "" ||  checkedMenusValues.length == 0) {
        requiredNote.classList.remove("hide");
        return;
    }

    const restaurant = {
        id: generateUniqueId(restaurants),
        name: name,
        description: description,
        location: location,
        instagram: instagram,
        Opening: openingHours,
        phone: phoneNumber,
        website: webLink,
        menu: [...checkedMenusValues]
    };

    restaurants.push(restaurant);
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
}

function deleteRestWithId(restaurants, id, idValue) {return restaurants.filter(obj => obj[id] != idValue);}

function deleteRestaurant(restId) {
    const newRestList = deleteRestWithId(restaurants, 'id', restId);
    localStorage.setItem("restaurants", JSON.stringify(newRestList));
    restaurants = newRestList;
}

function checkLoggedUser() {
    const userLoggedIn = localStorage.getItem("loggedIn");
    if (userLoggedIn == "no" || userLoggedIn == null) {
        document.location.href = "../pages/login-signup.html";
    }
};





modalAddRest.onclick = () => { addRestaurant(); }

addRestBtn.onclick = () => { launchNewRestModal() }

closeModal.onclick = () => { restModal.classList.add("hide"); }

window.onclick = (event) => {
  if (event.target == restModal) {
    restModal.classList.add("hide");
  }
}

window.onload = () => {
    loadRestaurants();
    checkLoggedUser();
};

window.addEventListener('beforeunload', function (e) {
    const remember = localStorage.getItem("remember");
    if (remember == "no" || remember == null)
        localStorage.setItem("loggedIn", "no");
});

logoutBtn.addEventListener("click", function () {
    localStorage.setItem("loggedIn", "no");
    localStorage.setItem("remember", "no");
    document.location.href = "./login-signup.html";
});