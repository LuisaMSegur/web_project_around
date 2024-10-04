export default class Popup {
    constructor(popupSelector) {
        this.popupElement = document.querySelector(popupSelector);
        this.closeButton = this.popupElement.querySelector(".popup__close");
        this._handleEsClose = this._handleEsClose.bind(this);
    }

    openPopup() {
        this.popupElement.classList.add("popup_open");
        document.addEventListener("keydown", this._handleEsClose);
    }
    closePopup() {
        this.popupElement.classList.remove("popup_open");
        document.removeEventListener("keydown", this._handleEsClose);
    }
    _handleEsClose(evt) {
        if (evt.key === "Escape") {
            this.closePopup();
        }
    }
    handleClickOutside(evt) {
        return evt.target.classList.contains("popup_open");
    }
    setEventListeners() {
        this.closeButton.addEventListener("click", () => {
            this.closePopup();
        });
        this.popupElement.addEventListener("click", (evt) => {
            if (this.handleClickOutside(evt)) {
                this.closePopup();
            }
        });
    }
}
