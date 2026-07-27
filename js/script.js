// Navbar shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        header.style.boxShadow = "none";
    }
});


// Change product image

function changeImage(image) {
    const productImage = document.getElementById("productImage");

    productImage.src = image;
}
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

};