const cardTemplate = document.querySelector("#card-template").content;

export default class Card {
    constructor(title, link, handleClickImage) {
        (this.title = title), (this.link = link);
        this.handleClickImage = handleClickImage;
    }

    getTemplate() {
        return cardTemplate.querySelector(".card").cloneNode(true);
    }

    toggleLike() {
        this.buttonLikeCard.classList.toggle("card__button-love_active");
    }

    removeCard() {
        this.htmlCard.remove();
    }

    closeOnEsc(evt) {
        if (evt.key === "Escape") {
            this.closePopUpImage();
        }
    }

    closeClickOutForm(popup, evt) {
        if (evt.target === popup) {
            this.closePopUpImage();
        }
    }
    openPopUpImage() {
        const popUpImage = document.querySelector("#popup-image");
        const popUpImageSrc = popUpImage.querySelector(".popup__photo");
        const PopUpTitleImage = popUpImage.querySelector(".popup__photo-title");

        popUpImage.classList.add("popup_open");
        PopUpTitleImage.textContent = this.title;
        popUpImageSrc.src = this.link;

        document.addEventListener("keydown", this.closeOnEsc.bind(this));
        document.addEventListener("click", (evt) =>
            this.closeClickOutForm(popUpImage, evt)
        );
    }
    closePopUpImage() {
        const popUpImage = document.querySelector("#popup-image");
        popUpImage.classList.remove("popup_open");

        document.removeEventListener("keydown", this.closeOnEsc.bind(this));
    }

    setEventListeners() {
        this.buttonLikeCard.addEventListener("click", () => {
            this.toggleLike();
        });
        this.buttonDeleteCard.addEventListener("click", () => {
            this.removeCard();
        });
        this.cardImage.addEventListener("click", () => {
            this.handleClickImage();
        });
    }

    setProperties() {
        this.htmlCard = this.getTemplate();
        this.cardImage = this.htmlCard.querySelector(".card__photo");
        this.cardTitle = this.htmlCard.querySelector(".card__name-place");
        this.buttonLikeCard = this.htmlCard.querySelector(".card__button-love");
        this.buttonDeleteCard = this.htmlCard.querySelector(
            ".card__button-trash"
        );
        this.cardTitle.textContent = this.title;
        this.cardImage.src = this.link;
    }
    setCard() {
        this.setProperties();
        this.setEventListeners();
        return this.htmlCard;
    }
}
