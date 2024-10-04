import "./styles/index.css";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import { initialCards, settings } from "./scripts/utils.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
import Section from "./scripts/Section.js";

const formProfile = document.querySelector("#form-profile");
const textTitleProfile = document.querySelector(".profile__title");
const textSubtitleProfile = document.querySelector(".profile__subtitle");
const inputName = document.querySelector("#name");
const inputAboutMe = document.querySelector("#aboutme");
const cardsArea = document.querySelector(".cards");
const formAddCard = document.querySelector("#form-card");
const inputNameCard = document.querySelector("#input-place");
const inputImageCard = document.querySelector("#input-image");
const buttonEditProfile = document.querySelector(".profile__button");
const buttonAddCard = document.querySelector(".profile__button-add");

//instancia de inicialización de las cartas

const sectionCards = new Section(
    {
        items: initialCards,
        renderer(item) {
            const newCard = new Card(item.name, item.link, () => {
                popupImage.openPopup(item.name, item.link);
            });
            cardsArea.append(newCard.setCard());
        },
    },
    cardsArea
);

sectionCards.renderItems();

//instancia datos del perfil (nombre y profesión)

const newUserInfo = new UserInfo({
    name: textTitleProfile,
    about: textSubtitleProfile,
});

newUserInfo.getUserInfo();
newUserInfo.setUserInfo(inputName.value, inputAboutMe.value);

//instancia del popupWithForm del perfil, eventos del formulario del perfil

const popupProfile = new PopupWithForm("#popup-profile", (data) => {
    const { name, about } = data;
    newUserInfo.setUserInfo(name, about);
});

buttonEditProfile.addEventListener("click", () => {
    popupProfile.openPopup();
});

//instancia de PopupWithForm para agregar cartas

const popupCard = new PopupWithForm("#popup-card", () => {
    const newCard = new Card(inputNameCard.value, inputImageCard.value, () => {
        popupImage.openPopup(inputNameCard.value, inputImageCard.value);
    });
    cardsArea.prepend(newCard.setCard());
    popupCard.closePopup();
});

buttonAddCard.addEventListener("click", () => {
    popupCard.openPopup();
});

//instancia para el popup de la imagen de las cartas

const popupImage = new PopupWithImage("#popup-image");

popupProfile.setEventListeners();
popupCard.setEventListeners();
popupImage.setEventListeners();

//instancias del validador de formularios

const validationprofile = new FormValidator(formProfile, settings);
const validationAddCards = new FormValidator(formAddCard, settings);
validationprofile.enableValidation();
validationAddCards.enableValidation();
