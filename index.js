const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
    }

};
let popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup");
};

function closePopup() {
    popup.classList.remove("open-popup");
};
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.close__shopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
})
let products = [{
        id: 1,
        title: "Electrical Cable Organizer",
        url: "assets household/img1.webp",
        price: 10.00,
    }, {
        id: 2,
        title: "3 in 1 Outlet Adapter",
        url: "assets household/img2.webp",
        price: 15.00,
    }, {
        id: 3,
        title: "4PC Adhesive Hooks",
        url: "assets household/img3.webp",
        price: 18.00,
    }, {
        id: 4,
        title: "Drain Cleaner",
        url: "assets household/img4.webp",
        price: 20.00,
    }, {
        id: 5,
        title: "Adhesive Toilet Holder",
        url: "assets household/img5.webp",
        price: 22.00,
    }, {
        id: 6,
        title: "Christmas Theme ",
        url: "assets household/img6.webp",
        price: 22.00,
    }, {
        id: 7,
        title: "super Glue",
        url: "assets household/img7.webp",
        price: 17.00,
    }, {
        id: 8,
        title: "Slim Silicone Toilet Brush",
        url: "assets household/img8.webp",
        price: 28.00,
    }, {
        id: 9,
        title: "Adhesive Vinyl",
        url: "assets household/img9.webp",
        price: 25.00,
    }, {
        id: 10,
        title: "Multi Functional Adhesive Shelf",
        url: "assets household/img10.webp",
        price: 30.00,
    }, {
        id: 11,
        title: "2PC Stove Liners",
        url: "assets household/img11.webp",
        price: 32.00,
    }, {
        id: 12,
        title: "Adhesive Toothbrush",
        url: "assets household/img12.webp",
        price: 40.00,
    },
    {
        id: 13,
        title: "2 Slice Toaster",
        url: "assets household/2 Slice Motorized Toaster.jpg",
        price: 198.00,
    },
    {
        id: 14,
        title: "2-in-1 Waffle Maker",
        url: "assets household/2-in-1 Waffle Maker with Removable Plates.jpg",
        price: 328.00,
    },
    {
        id: 15,
        title: "4-Slice Toaster",
        url: "assets household/4-Slice Motorized Toaster.jpg",
        price: 223.00,
    },
    {
        id: 16,
        title: "Air fryer",
        url: "assets household/Air fryer.webp",
        price: 178.00,
    },
    {
        id: 17,
        title: "bakewar",
        url: "assets household/bakewar.webp",
        price: 22.00,
    },
    {
        id: 18,
        title: "Bistro Flatware",
        url: "assets household/Bistro Flatware.png",
        price: 17.00,
    },
    {
        id: 19,
        title: "casserole With Glass",
        url: "assets household/casseroleWithGlass.png",
        price: 40.00,
    },
    {
        id: 20,
        title: "castIron",
        url: "assets household/castIron.webp",
        price: 37.00,
    },
    {
        id: 21,
        title: "colanders And Strainers",
        url: "assets household/colandersAndStrainers.jpeg",
        price: 14.00,
    },
    {
        id: 22,
        title: "Cuisinart Hand Blender",
        url: "assets household/Cuisinart Cordless Hand Blender.webp",
        price: 65.00,
    }, {
        id: 23,
        title: "Cuisinart Mini Food Processor",
        url: "assets household/Cuisinart Mini Food Processor.webp",
        price: 400.00,
    }, {
        id: 24,
        title: "cuting Board",
        url: "assets household/cutingBoard.jpeg",
        price: 29.00,
    }, {
        id: 25,
        title: "dinner plates",
        url: "assets household/dinner plates.png",
        price: 30.00,
    }, {
        id: 26,
        title: "Double-Wall Coffee Glasses",
        url: "assets household/Double-Wall Coffee Glasses, Set of 4.png",
        price: 10.00,
    }, {
        id: 27,
        title: "Duralex Picardie Tumbler",
        url: "assets household/Duralex Picardie Tumbler.png",
        price: 10.00,
    }, {
        id: 28,
        title: "Popcorn Maker",
        url: "assets household/EasyPop® Hot Air Popcorn Maker.jpg",
        price: 900,
    }, {
        id: 29,
        title: "Ember Mug",
        url: "assets household/Ember Mug.png",
        price: 10.00,
    }, {
        id: 30,
        title: "espresso maker",
        url: "assets household/espresso maker.jpg",
        price: 600.00,
    }, {
        id: 31,
        title: "glass Storage",
        url: "assets household/glassStorage.webp",
        price: 40.00,
    }, {
        id: 32,
        title: "measuring Spoons",
        url: "assets household/measuringCupsAndSpoons.jpeg",
        price: 10.00,
    }, {
        id: 33,
        title: "Microwave with Sensor",
        url: "assets household/Microwave with Sensor Cook & Inverter Technology.jpg",
        price: 322.00,
    }, {
        id: 34,
        title: "pizza oven",
        url: "assets household/pizza oven.webp",
        price: 189.00,
    }, {
        id: 35,
        title: "teka cooker",
        url: "assets household/teka cooker top 30 Cm.webp",
        price: 541.00,
    }, {
        id: 36,
        title: "Tesla AC Inverter",
        url: "assets household/Tesla AC Inverter 9000 BTU.webp",
        price: 399.00,
    }, {
        id: 37,
        title: "Xper Fridge 395 Liters",
        url: "assets household/Xper Fridge 395 Liters.webp",
        price: 800.00,
    }, {
        id: 38,
        title: "Personalizable Dual",
        url: "assets household/Personalizable Dual Color 8 Layer Muslin Gauze.webp",
        price: 100.00,
    }, {
        id: 39,
        title: "Soft Muted colored 4",
        url: "assets household/Soft Muted colored 4 Layers Gauze.webp",
        price: 150.00,
    }, {
        id: 40,
        title: "griddler Five",
        url: "assets household/griddler Five.jpg",
        price: 900.00,
    },
];
let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.url}">
            <div class="title">${value.title}</div>
            <div class="price">${value.price.toLocaleString()}$</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.url}"/></div>
                <div>${value.title}</div>
                <div>${value.price.toLocaleString()}$</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})"class="-__btn">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}