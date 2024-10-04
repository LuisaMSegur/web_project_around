import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector)
        this.imageElement = this.popupElement.querySelector(".popup__photo");
        this.titleElement = this.popupElement.querySelector(".popup__photo-title");

    }
    openPopup(title, link){
        super.openPopup();
        this.titleElement.textContent = title;
        this.imageElement.src = link;
    }
}