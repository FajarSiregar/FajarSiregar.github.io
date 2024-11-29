// Toggle Class Active Untuk Hamburger Menu

const navbarNav = document.querySelector('.navbar-nav');

// Perintah Ketika Hamburger Menu di Klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Defenisi Toggle Class Active Untuk Search Form, Search Box dan Shopping Cart
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const shoppingCart = document.querySelector(".shopping-cart");

// Toggle Class Active Untuk Search Box
document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle Class Active Untuk Shopping Cart
document.querySelector("#shopping-cart-button").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
}

// Perintah Untuk Klik dimana Saja Untuk Menghilangkan Element
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const scb = document.querySelector("#shopping-cart-button");


document.addEventListener("click", function (e) {
    //Element Navbar
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }

    // Element Search Box
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove("active");
    }

    // Element Shopping Cart
    if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove("active");
    }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".card__button");

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
})


// Klik Tombol Close Untuk Keluar Modal
document.querySelector(".modal .close-icon").onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
};

// Perintah Klik Diluar Element Agar Close dari Modal Box
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
};
