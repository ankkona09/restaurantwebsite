const navItems = document.querySelectorAll('.navItem');

// Get menu containers
const menus = document.querySelectorAll('.menuGrid');
//menu
let openMenu = document.getElementById('openmenu');
let closeMenu = document.getElementById('closemenu');
let navSections = document.querySelector('.nav2');

let scrolltoTop = document.getElementById('scrolltoTop');
// Add click event listeners to the navigation items
navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        // Hide all menus
        menus.forEach(menu => {
            menu.style.display = 'none';
        });

        // Remove 'selected' class from all navigation items
        navItems.forEach(item => {
            item.classList.remove('selected');
        });

        // Show the selected menu
        const menuId = navItem.getAttribute('data-menu');
        document.getElementById(menuId).style.display = 'grid';

        // Add 'selected' class to the clicked navigation item
        navItem.classList.add('selected');
    });
});



openMenu.addEventListener('click', () => {
    navSections.classList.toggle('shownav');
    openMenu.classList.add('closemenuicon');
    closeMenu.classList.add('showmenuicon2');
});
closeMenu.addEventListener('click', () => {
    navSections.classList.remove('shownav');
    closeMenu.classList.remove('showmenuicon2');
    openMenu.classList.remove('closemenuicon');
});

scrolltoTop.addEventListener('click', function () {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".heroimg");
    let currentIndex = 0;

    function showImage() {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = i === currentIndex ? "block" : "none";
        }
    }
    setInterval(nextImage, 3000);
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    }
  
});


