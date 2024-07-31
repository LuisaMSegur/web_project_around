//llamado de clases del popup y función para editar texto del perfil

let popUp = document.querySelector(".popup");
let buttonEdit = document.querySelector(".profile__button");
let textTitleProfile = document.querySelector(".profile__title");
let textSubtitleProfile = document.querySelector(".profile__subtitle");
let buttonClose = document.querySelector(".popup__close");
let inputName = document.getElementById("name");
let inputAboutMe = document.getElementById("aboutme");
let buttonSubmit = document.querySelector(".popup__botton-submit");

function editTextProfile() {
    popUp.classList.toggle("popup_open");

    inputName.value = textTitleProfile.textContent;
    inputAboutMe.value = textSubtitleProfile.textContent;
}

buttonEdit.addEventListener("click", editTextProfile);
buttonClose.addEventListener("click", editTextProfile);

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    textTitleProfile.textContent = inputName.value;
    textSubtitleProfile.textContent = inputAboutMe.value;
    popUp.classList.toggle("popup_open");
}

buttonSubmit.addEventListener("click", handleProfileFormSubmit);
