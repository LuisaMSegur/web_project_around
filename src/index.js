import "./styles/index.css";
import Card from "./scripts/Card.js";
import FormValidator from "./scripts/FormValidator.js";
import {
    settings,
    formProfile,
    textTitleProfile,
    textSubtitleProfile,
    avatar,
    formEditAvatar,
    formAddCard,
    buttonEditProfile,
    buttonAddCard,
    buttonEditAvatar,
} from "./scripts/utils.js";
import PopupWithForm from "./scripts/PopupWithForm.js";
import PopupWithImage from "./scripts/PopupWithImage.js";
import UserInfo from "./scripts/UserInfo.js";
import Section from "./scripts/Section.js";
import Api from "./scripts/api.js";
import PopupWithConfirmation from "./scripts/PopupWithConfirmation.js";

//instancia de api para el proyecto

const api = new Api("https://around.nomoreparties.co/v1/web-es-cohort-15", {
    authorization: "80b5e925-605c-4006-ba50-cc4527fb2e95",
    "Content-Type": "application/json",
});

//instancia para obtener la información del usuario

const newUserInfo = new UserInfo({
    name: textTitleProfile,
    about: textSubtitleProfile,
    avatar: avatar,
});
api.getUser()
    .then((data) => {
        newUserInfo.setUserInfo(data.name, data.about, data.id);
        newUserInfo.setUserAvatar(data.avatar);
    })
    .catch((err) => {
        console.log(err);
    });

//instancias y eventos para editar el perfil (nombre, profesión y avatar)

const popupProfile = new PopupWithForm("#popup-profile", (inputValues) => {
    api.editUser(inputValues.name, inputValues.about)
        .then((data) => {
            newUserInfo.setUserInfo(data.name, data.about);
        })
        .catch((err) => {
            console.log(err);
        });
});
popupProfile.setEventListeners();
buttonEditProfile.addEventListener("click", () => {
    popupProfile.openPopup();
});

const popupAvatar = new PopupWithForm("#popup-avatar", (inputValues) => {
    api.editAvatar(inputValues.avatar)
        .then((data) => {
            newUserInfo.setUserAvatar(data.avatar);
        })
        .catch((err) => {
            console.log(err);
        });
});

popupAvatar.setEventListeners();

buttonEditAvatar.addEventListener("click", () => {
    popupAvatar.openPopup();
});

//obtener cartas con la api y agregarlas en la instancia de Section

api.getCards()
    .then((data) => {
        sectionCards.items = data;
        sectionCards.renderItems();
    })
    .catch((err) => {
        console.log(err);
    });

const sectionCards = new Section(
    {
        items: [],
        renderer: (item) => {
            const newCard = new Card(
                item,
                () => {
                    popupImage.openPopup(item.name, item.link);
                },
                (cardId) => {
                    popupDeleteCard.openPopup();
                    popupDeleteCard.setAction(() => {
                        api.deleteCard(cardId).then(() => {
                            newCard.removeCard();
                            popupDeleteCard.closePopup();
                        });
                    });
                },
                (cardId, isLiked) => {
                    if (isLiked) {
                        api.addLikeCard(cardId).then((updatedCard) => {
                            newCard.likes = updatedCard.likes;
                            newCard.showLikes();
                        });
                    } else {
                        api.removeLikeCard(cardId).then((updatedCard) => {
                            newCard.likes = updatedCard.likes;
                            newCard.showLikes();
                        });
                    }
                },
                newUserInfo.userId
            );
            sectionCards.addCard(newCard.setCard());
        },
    },
    ".cards"
);

const popupDeleteCard = new PopupWithConfirmation("#popup-deleteCard");
popupDeleteCard.setEventListeners();

//instancia para agregar nuevas cartas

const popupCard = new PopupWithForm("#popup-card", (inputValues) => {
    api.createCard(inputValues.title, inputValues.link).then((data) => {
        const newCard = new Card(
            data,
            () => {
                popupImage.openPopup(data.name, data.link);
            },
            (cardId) => {
                popupDeleteCard.openPopup();
                popupDeleteCard.setAction(() => {
                    api.deleteCard(cardId).then(() => {
                        newCard.removeCard();
                        popupDeleteCard.closePopup();
                    });
                });
            },
            (cardId, isLiked) => {
                if (isLiked) {
                    api.addLikeCard(cardId).then((updatedCard) => {
                        newCard.likes = updatedCard.likes;
                        newCard.showLikes();
                    });
                } else {
                    api.removeLikeCard(cardId).then((updatedCard) => {
                        newCard.likes = updatedCard.likes;
                        newCard.showLikes();
                    });
                }
            },
            newUserInfo.userId
        );
        sectionCards.addCard(newCard.setCard());
        popupCard.closePopup();
    });
});

popupCard.setEventListeners();
buttonAddCard.addEventListener("click", () => {
    popupCard.openPopup();
});

const popupImage = new PopupWithImage("#popup-image");
popupImage.setEventListeners();

//instancias del validador de formularios

const validationprofile = new FormValidator(formProfile, settings);
const validationAddCards = new FormValidator(formAddCard, settings);
const validationEditAvatar = new FormValidator(formEditAvatar, settings);
validationprofile.enableValidation();
validationAddCards.enableValidation();
validationEditAvatar.enableValidation();
