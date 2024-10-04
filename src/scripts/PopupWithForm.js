import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
constructor(popupSelector, handleFormSubmit){
    super(popupSelector);
    this.formElement = this.popupElement.querySelector(".form");
    this.inputList = this.formElement.querySelectorAll(".form__input");
    this.handleFormSubmit = handleFormSubmit;  
    this.buttonSubmit = this.popupElement.querySelector(".form__submit")
}

 _getInputValues(){
 this.formValues = {};
 this.inputList.forEach((input)=>{
     this.formValues[input.name] = input.value;
 });
 return this.formValues;  
 }


setEventListeners(){
    super.setEventListeners();

    this.popupElement.querySelector(".form").addEventListener("submit", (evt)=>{
        evt.preventDefault();
        this.handleFormSubmit(this._getInputValues());
        this.closePopup();
    });
 }

 closePopup(){
     super.closePopup();
     this.formElement.reset();
}

}

