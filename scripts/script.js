//llamado de clases del popup de editar perfil y función para editar texto del perfil

const popUp = document.querySelector(".popup");
const buttonEditProfile = document.querySelector(".profile__button");
const formProfile = document.querySelector(".form");
const textTitleProfile = document.querySelector(".profile__title");
const textSubtitleProfile = document.querySelector(".profile__subtitle");
const buttonClosePopUp = document.querySelector(".popup__close");
const inputName = document.getElementById("#name");
const inputAboutMe = document.getElementById("#aboutme");
const buttonSubmit = document.querySelector(".form__submit");

function openPopUpProfile() {
    popUp.classList.add("popup_open");
}

function closePopUpProfile() {
    popUp.classList.remove("popup_open");
}

buttonEditProfile.addEventListener("click", openPopUpProfile);
buttonClosePopUp.addEventListener("click", closePopUpProfile);

formProfile.addEventListener("submit", function (evt) {
    evt.preventDefault();
    textTitleProfile.textContent = inputName.value;
    textSubtitleProfile.textContent = inputAboutMe.value;
    closePopUpProfile();
});

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

let buttonAddCard = document.querySelector(".profile__button-add");
let cards = document.querySelector(".cards");
let cardsPlaces = document.querySelector(".cards__places");
let cardPhoto = document.querySelector(".cards__photo");
let cardNamePlace = document.querySelector(".cards__name-place");
let template = document.querySelector("template").content;

initialCards.forEach(function (item) {
    const cloneTemplate = template.cloneNode(true);
    cardsPlaces.append(cloneTemplate);
});

/*for (let i = 0; i < 6; i++) {
  const contentCards = template.content.cloneNode(true);
    cardsPlaces.appendChild(contentCards);
}
*/
//function addCards(place, photo) {}

/*let popUpAddCard = document.querySelector(".popup-add");
let buttonAddCard = document.querySelector(".profile__button-add");
let buttonClosePopUpAdd = document.querySelector(".popup-add__close");

function openFormCard(evt) {
    evt.preventDefault();
    popUpAddCard.classList.add(".popup-add_open");
}
function closeFormCard() {
    popUpAddCard.classList.remove(".pop-add_open");
}

buttonAddCard.addEventListener("click", openFormCard);
buttonClosePopUpAdd.addEventListener("click", closeFormCard); */
