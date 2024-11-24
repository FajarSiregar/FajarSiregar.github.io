// Toggle Class Active

const navbarNav = document.querySelector('.navbar-nav');

// Perintah Ketika Hambuerger Menu di Klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Perintah Untuk Klik dimana Saja Untuk Menghilangkan Nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});