//llamado y función para editar nombre y "sibre mi"

let popUp = document.querySelector(".popup");
let formContainer = document.querySelector(".popup__container");
let formPopup = document.querySelector(".popup__form");
let buttonEdit = document.querySelector(".profile__button");
let textTitleProfile = document.querySelector(".profile__title");
let textSubtitleProfile = document.querySelector(".profile__subtitle");
let buttonClose = document.querySelector(".popup__close");
let inputName = document.getElementById("name");
let inputAboutMe = document.getElementById("aboutme");


function editTextProfile () {
    popUp.classList.toggle("popup_open");

inputName.value = textTitleProfile.textContent;
inputAboutMe.value = textSubtitleProfile.textContent;
}

buttonEdit.addEventListener('click', editTextProfile);
buttonClose.addEventListener('click', editTextProfile);

// function handleProfileFormSubmit(event) {
//    event.preventDefault();}
    
//formElement.addEventListener('submit', handleProfileFormSubmit)