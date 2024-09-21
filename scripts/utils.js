const popUp = document.querySelector("#popup-profile");
const popUpCard = document.querySelector("#popup-card");
const popUpImage = document.querySelector("#popup-image");

export const initialCards = [
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
export const settings = {
    formSelector: ".form",
    inputSelector: ".form__input",
    submitButtonSelector: ".form__submit",
    inactiveButtonClass: "form__submit_disabled",
    inputErrorClass: "form__input_type_error",
    errorClass: "form__error_visible",
};

export function openPopUpProfile() {
    popUp.classList.add("popup_open");
    document.addEventListener("keydown", closeOnEsc);
    document.addEventListener("click", closeClickOutForm);
}
export function openPopUpCard() {
    popUpCard.classList.add("popup_open");
    document.addEventListener("keydown", closeOnEsc);
    document.addEventListener("click", closeClickOutForm);
}

export function closePopUpProfile() {
    popUp.classList.remove("popup_open");
    document.removeEventListener("keydown", closeOnEsc);
    document.removeEventListener("click", closeClickOutForm);
}

export function closePopUpCard() {
    popUpCard.classList.remove("popup_open");
    document.removeEventListener("keydown", closeOnEsc);
    document.removeEventListener("click", closeClickOutForm);
}

export function closePopUpImage() {
    popUpImage.classList.remove("popup_open");
    document.removeEventListener("keydown", closeOnEsc);
    document.removeEventListener("click", closeClickOutForm);
}

export function closeAllPopUps() {
    closePopUpProfile();
    closePopUpCard();
    closePopUpImage();
}

export function closeOnEsc(evt) {
    if (evt.key === "Escape") {
        closeAllPopUps();
    }
}

export const closeClickOutForm = (evt) => {
    const popups = [popUp, popUpCard, popUpImage];
    popups.forEach((popup) => {
        if (evt.target === popup) {
            closeAllPopUps();
        }
    });
};
