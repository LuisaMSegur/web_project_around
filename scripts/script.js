//abrir y cerrar el popup, función para editar el perfil

const popUp = document.querySelector("#popup-profile");
const buttonEditProfile = document.querySelector(".profile__button");
const formProfile = document.querySelector("#form-profile");
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

//desplegar cartas iniciales y funcion crear carta

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
    const cardTitle = card.querySelector(".card__name-place");
    const cardImage = card.querySelector(".card__photo");
    const buttonLikeCard = card.querySelector(".card__button-love");
    buttonLikeCard.addEventListener("click", function () {
        buttonLikeCard.classList.add(".card__button-love_active");
    });
    cardImage.src = link;
    cardTitle.textContent = title;
    return card;
}

initialCards.forEach(function (item) {
    const newCard = createCard(item.name, item.link);
    cardsArea.append(newCard);
});

//formulario para crear cartas

const popUpCard = document.querySelector("#popup-card");
const buttonAddCard = document.querySelector(".profile__button-add");
const buttonClosePopUpCard = document.querySelector("#popup-button-close");
const formAddCard = document.querySelector("#form-card");
const inputNameCard = document.querySelector("#input-place");
const inputImageCard = document.querySelector("#input-image");

function openPopUpCard() {
    popUpCard.classList.add("popup_open");
}

function closePopUpCard() {
    popUpCard.classList.remove("popup_open");
}

buttonAddCard.addEventListener("click", openPopUpCard);
buttonClosePopUpCard.addEventListener("click", closePopUpCard);

formAddCard.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const newCard = createCard(inputNameCard.value, inputImageCard.value);
    cardsArea.prepend(newCard);
    closePopUpCard();
});

//boton de basura, funcion para eliminar tarjeta

const buttonDeleteCard = document.querySelector(".card__button-trash");

function deleteCard() {
    const card = buttonDeleteCard.closest(".card");
    card.remove();
}

buttonDeleteCard.addEventListener("click", deleteCard);
