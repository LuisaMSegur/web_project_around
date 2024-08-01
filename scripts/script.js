//llamado de clases del popup de editar perfil y función para editar texto del perfil

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

//llamado de clases del popup-add y función para abrir y cerrar el popup-add

const initialCards = [
    {
        name: "Valle de Yosemite",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
    },
    {
        name: "Lago Louise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
    },
    {
        name: "Montañas Calvas",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    },
    {
        name: "Latemar",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    },
    {
        name: "Parque Nacional de la Vanoise",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    },
    {
        name: "Lago di Braies",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    },
];
