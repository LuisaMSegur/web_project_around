//llamado de clases del popup de editar perfil y función para editar texto del perfil

const popUp = document.querySelector(".popup");
const buttonEditProfile = document.querySelector(".profile__button");
const formProfile = document.querySelector(".form");
const textTitleProfile = document.querySelector(".profile__title");
const textSubtitleProfile = document.querySelector(".profile__subtitle");
const buttonClosePopUp = document.querySelector(".popup__close");
const inputName = document.querySelector("#name");
const inputAboutMe = document.querySelector("#aboutme");
const buttonSubmit = document.querySelector(".form__submit");

function openPopUpProfile() {
    popUp.classList.add("popup_open");
}

function closePopUpProfile() {
    popUp.classList.remove("popup_open");
}

buttonEditProfile.addEventListener("click", openPopUpProfile);
buttonClosePopUp.addEventListener("click", closePopUpProfile);

function handleFormPopUp(evt) {
    evt.preventDefault();
    textTitleProfile.textContent = inputName.value;
    textSubtitleProfile.textContent = inputAboutMe.value;
}
formProfile.addEventListener("submit", handleFormPopUp);

buttonSubmit.addEventListener("click", closePopUpProfile);

//llamado de clases del popup-add y función para abrir y cerrar el popup-add

const cardTemplate = document.querySelector("#card-template").content;
const cardsArea = document.querySelector(".cards");
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

function createCard(title, link) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    const cardTitle = document.querySelector(".card__name-place");
    const cardImage = document.querySelector(".card__photo");
    cardImage.src = link;
    cardTitle.textContent = title;
    cardsArea.append(card);
}

initialCards.forEach(function (item) {
    createCard(item.name, item.link);
});