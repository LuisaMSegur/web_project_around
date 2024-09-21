import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
    initialCards,
    openPopUpProfile,
    closePopUpProfile,
    openPopUpCard,
    closePopUpCard,
    closePopUpImage,
    settings,
    closeOnEsc,
    closeClickOutForm,
    closeAllPopUps,
} from "./utils.js";

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
const buttonClosePopUp = document.querySelectorAll(".popup__close");
const buttonAddCard = document.querySelector(".profile__button-add");
const buttonSubmit = document.querySelector(".form__submit");

buttonEditProfile.addEventListener("click", openPopUpProfile);
buttonAddCard.addEventListener("click", openPopUpCard);

formProfile.addEventListener("submit", function (evt) {
    handleFormPopUp(evt);
    closePopUpProfile();
});

buttonSubmit.addEventListener("click", function (evt) {
    handleFormPopUp(evt);
    closePopUpProfile();
});

buttonClosePopUp.forEach((button) => {
    button.addEventListener("click", closeAllPopUps);
});

function handleFormPopUp(evt) {
    evt.preventDefault();
    textTitleProfile.textContent = inputName.value;
    textSubtitleProfile.textContent = inputAboutMe.value;
}

initialCards.forEach(function (item) {
    const newCard = new Card(item.name, item.link);
    cardsArea.append(newCard.setCard());
});

formAddCard.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const newCard = new Card(inputNameCard.value, inputImageCard.value);
    cardsArea.prepend(newCard.setCard());
    closePopUpCard();
});

const validationprofile = new FormValidator(formProfile, settings);
const validationAddCards = new FormValidator(formAddCard, settings);
validationprofile.enableValidation();
validationAddCards.enableValidation();
