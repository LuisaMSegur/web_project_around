const cardTemplate = document.querySelector("#card-template").content;

export default class Card {
    constructor({
        data,
        handleClickImage,
        handleClickDelete,
        handleLikes,
        userId,
    }) {
        this.name = data.name;
        this.link = data.link;
        this.owner = data.owner;
        this.likes = data.likes || [];
        this.isLiked = this.isLikedByUser();
        this.id = data._id;
        this.userId = userId;
        this.handleClickImage = handleClickImage;
        this.handleClickDelete = handleClickDelete;
        this.handleLikes = handleLikes;
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
        this.buttonDeleteCard = this.htmlCard.querySelector(
            ".card__button-trash"
        );
        this.counterLikes = this.htmlCard.querySelector(".card__like");
        this.cardTitle.textContent = this.name;
        this.cardImage.src = this.link;
        this.counterLikes.textContent = this.likes.length;
        this.updateLikeButton();

        if (this.owner._id === this.userId) {
            this.buttonDeleteCard.style.display = "block";  
        } else {
            this.buttonDeleteCard.style.display = "none";  
        }
    }

    isLikedByUser() { 
        const likedByUser = this.likes.some((like) => like._id === this.userId);
        return likedByUser;
    }

    toggleLike(likes) {
        this.likes = likes;
        this.isLiked = this.isLikedByUser();
        this.counterLikes.textContent = likes.length;
        this.updateLikeButton();
    }

    updateLikeButton() {
        this.isLiked = this.isLikedByUser();
        this.buttonLikeCard.classList.toggle("card__button-love_active", this.isLiked);
    }

    removeCard() {
        this.htmlCard.remove();
    }

    setEventListeners() {
        this.cardImage.addEventListener("click", () => {
            this.handleClickImage();
        });
        this.buttonDeleteCard.addEventListener("click", () => {
            this.handleClickDelete(this.id);
        });
        this.buttonLikeCard.addEventListener("click", () => {
            this.handleLikes(this.id, this.isLiked)
    .then((res) => {
        this.toggleLike(res.likes); 
    })
    .catch((err) => console.error("Error al hacer toggleLike:", err));
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
