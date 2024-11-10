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
import { api } from "./scripts/api.js";
import PopupWithConfirmation from "./scripts/PopupWithConfirmation.js";

//instancia para obtener la información del usuario

const newUserInfo = new UserInfo({
    name: textTitleProfile,
    about: textSubtitleProfile,
    avatar: avatar,
});

api.getUser()
    .then((data) => {
        newUserInfo.setUserInfo(data.name, data.about, data._id);
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
            const newCard = new Card({
                data: item,
                handleClickImage: () => {
                    popupImage.openPopup({ name: item.name, link: item.link });
                },
                handleClickDelete: (cardId) => {
                    popupDeleteCard.openPopup();
                    popupDeleteCard.setAction(() => {
                        api.deleteCard(cardId).then(() => {
                            newCard.removeCard();
                            popupDeleteCard.closePopup();
                        });
                    });
                },
                handleLikes: (cardId, isLiked) => {
                    return api.toggleLike(cardId, isLiked).then((res)=>{
                        newCard.toggleLike(res.likes);
                        return res;
                    });
                },
                userId: newUserInfo.userId,
            });
            sectionCards.addCard(newCard.setCard());
        },
    },
    ".cards"
);

//instancia de creación de cartas con formulario

const popupCard = new PopupWithForm("#popup-card", (inputValues) => {
    api.createCard(inputValues.title, inputValues.link)
        .then((data) => {
            const newCard = new Card({
                data: data,
                handleClickImage: () => {
                    popupImage.openPopup(data.name, data.link);
                },
                handleClickDelete: (id) => {
                    popupDeleteCard.openPopup();
                    popupDeleteCard.setAction(() => {
                        api.deleteCard(id).then(() => {
                            newCard.removeCard();
                            popupDeleteCard.closePopup();
                        });
                    });
                },
                handleLikes: (id, isLiked) => {
                    return api.toggleLike(id, isLiked).then((res)=>{
                        newCard.toggleLike(res.likes);
                        return res;
                    });
                },
                userId: newUserInfo.userId,
            });
            sectionCards.addCard(newCard.setCard());
            popupCard.closePopup();
        })
        .catch(() => console.log("error al crear carta"));
});

const popupDeleteCard = new PopupWithConfirmation("#popup-deleteCard");
popupDeleteCard.setEventListeners();

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
