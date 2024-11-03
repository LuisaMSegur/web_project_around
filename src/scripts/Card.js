const cardTemplate = document.querySelector("#card-template").content;

export default class Card {
    constructor(data, handleClickImage, handleClickDelete, handleLikeUpdate, userId) {
        this.name = data.name;
        this.link = data.link;
        this._id = data._id;
        this.likes = Array.isArray(data.likes) ? data.likes : [];
        this.userId = userId;
        this.handleClickImage = handleClickImage;
        this.handleClickDelete = handleClickDelete;
        this.handleLikeUpdate = handleLikeUpdate;
        this.setProperties();
    }

    getTemplate() {
        return cardTemplate.querySelector(".card").cloneNode(true);
    }

    setProperties() {
        this.htmlCard = this.getTemplate();
        this.cardImage = this.htmlCard.querySelector(".card__photo");
        this.cardTitle = this.htmlCard.querySelector(".card__name-place");
        this.buttonLikeCard = this.htmlCard.querySelector(".card__button-love");
        this.buttonDeleteCard = this.htmlCard.querySelector(".card__button-trash");
        this.cardLikes = this.htmlCard.querySelector(".card__like")
        this.cardTitle.textContent = this.name;
        this.cardImage.src = this.link;
        this.showLikes();
    }

    showLikes() {
        this.cardLikes.textContent = this.likes.length; 
        this.buttonLikeCard.classList.toggle("card__button-love_active", this.likes.includes(this.userId));
    }

    handleLikes() {
        const isLiked = this.likes.includes(this.userId);
        if (isLiked) {
            this.likes = this.likes.filter(id => id !== this.userId);
            this.handleLikeUpdate(this._id, false);
        } else {
            this.likes.push(this.userId);
            this.handleLikeUpdate(this._id, true);
        }

        this.showLikes(); 
    }

    removeCard() {
        this.htmlCard.remove();
    }

    setEventListeners() {
        this.cardImage.addEventListener("click", () => {
            this.handleClickImage();
        });
        this.buttonDeleteCard.addEventListener("click", () => {
            this.handleClickDelete(this._id);
        });
        this.buttonLikeCard.addEventListener("click", () => {
            this.handleLikes();
        });
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
        PopUpTitleImage.textContent = this.name;
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

    setCard() {
        this.setProperties();
        this.setEventListeners();
        return this.htmlCard;
    }
}
