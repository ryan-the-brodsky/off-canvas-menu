var sideMenuOpenButton = document.querySelector("#side-menu-open");

function toggleSideMenu(){
    console.log('hello im opening the side menu');
    var sideMenu = document.querySelector("#side-menu");
    sideMenu.classList.toggle("hidden");
    sideMenuOpenButton.classList.toggle("opened")
}

sideMenuOpenButton.addEventListener("click", toggleSideMenu)