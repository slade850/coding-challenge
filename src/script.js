const navList = document.getElementById('navList');
const burger = document.getElementById('burgerMenue');

burger.addEventListener('click', () => {
    navList.classList.toggle("active")
})