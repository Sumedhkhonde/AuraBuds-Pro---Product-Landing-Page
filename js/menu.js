const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){

        menuIcon.innerHTML = '<i class="fas fa-times"></i>';

    }else{

        menuIcon.innerHTML = '<i class="fas fa-bars"></i>';

    }

});