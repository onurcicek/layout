var uplNav = document.querySelector(".bg-modal");
var openPopup = document.querySelector("#nav-upl");
openPopup.addEventListener('click', function (e) {
    e.preventDefault();


    uplNav.style.display = "flex";

});

var closePopUp = document.querySelector(".closerr");
closePopUp.addEventListener('click', function (e) {
    e.preventDefault();

    uplNav.style.display = "none";
});
