//abrir y cerrar el popup del perfil, función para editar el perfil

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
    document.addEventListener("keydown", closeOnEsc);
    document.addEventListener("click", closeClickOutForm);
}

function closePopUpProfile() {
    popUp.classList.remove("popup_open");
    document.removeEventListener("keydown", closeOnEsc);
    document.removeEventListener("click", closeClickOutForm);
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

//desplegar cartas iniciales y funcion crear carta, dar like, eliminar carta y abrir imagen grande

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
    const buttonDeleteCard = card.querySelector(".card__button-trash");
    buttonLikeCard.addEventListener("click", function () {
        buttonLikeCard.classList.toggle("card__button-love_active");
    });
    buttonDeleteCard.addEventListener("click", function () {
        const cardItem = buttonDeleteCard.closest(".card");
        cardItem.remove();
    });
    cardImage.addEventListener("click", function () {
        openPopUpImage(title, link);
    });
    cardImage.src = link;
    cardTitle.textContent = title;
    return card;
}

initialCards.forEach(function (item) {
    const newCard = createCard(item.name, item.link);
    cardsArea.append(newCard);
});

//formulario para generar las cartas nuevas

const popUpCard = document.querySelector("#popup-card");
const buttonAddCard = document.querySelector(".profile__button-add");
const formAddCard = document.querySelector("#form-card");
const inputNameCard = document.querySelector("#input-place");
const inputImageCard = document.querySelector("#input-image");
const buttonCloseFormCard = popUpCard.querySelector(".popup__close");

function openPopUpCard() {
    popUpCard.classList.add("popup_open");
    document.addEventListener("keydown", closeOnEsc);
    document.addEventListener("click", closeClickOutForm);
}

function closePopUpCard() {
    popUpCard.classList.remove("popup_open");
    document.removeEventListener("keydown", closeOnEsc);
    document.removeEventListener("click", closeClickOutForm);
}

buttonAddCard.addEventListener("click", openPopUpCard);
buttonCloseFormCard.addEventListener("click", closePopUpCard);

formAddCard.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const newCard = createCard(inputNameCard.value, inputImageCard.value);
    cardsArea.prepend(newCard);
    closePopUpCard();
});

//abrir imagen de tarjeta

const popUpImage = document.querySelector("#popup-image");
const popUpImageSrc = document.querySelector(".popup__photo");
const PopUpTitleImage = document.querySelector(".popup__photo-title");
const buttonCloseImage = document.querySelector("#close-image");

function openPopUpImage(title, link) {
    popUpImage.classList.add("popup_open");
    PopUpTitleImage.textContent = title;
    popUpImageSrc.src = link;
    document.addEventListener("keydown", closeOnEsc);
    document.addEventListener("click", closeClickOutForm);
}

function closePopUpImage() {
    popUpImage.classList.remove("popup_open");
    document.removeEventListener("keydown", closeOnEsc);
    document.removeEventListener("click", closeClickOutForm);
}

buttonCloseImage.addEventListener("click", closePopUpImage);

//cerrar popup con la tecla esc y con click fuera del formulario o imagen

const closeOnEsc = (evt) => {
    if (evt.key === "Escape") {
        closePopUpCard();
        closePopUpProfile();
        closePopUpImage();
    }
};

const closeClickOutForm = (evt) => {
    if (evt.target.classList.contains("popup_open")) {
        closePopUpCard();
        closePopUpProfile();
        closePopUpImage();
    }
};
