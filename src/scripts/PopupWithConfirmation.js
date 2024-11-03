import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
constructor(popupSelector){
    super(popupSelector);
    this.action = ()=>{};
}
setAction(action){
    this.action = action;
}
setEventListeners(){
    super.setEventListeners();
    const confirmButton = this.popupElement.querySelector("#buttonConfirmation");
    if (confirmButton) {
        confirmButton.addEventListener("click", () => {
            this.action();
        });
    } else {
        console.error("El botón de confirmación no se encontró en el popup.");
    }
}
}