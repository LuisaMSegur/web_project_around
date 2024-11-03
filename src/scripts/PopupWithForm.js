import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
constructor(popupSelector, handleFormSubmit){
    super(popupSelector);
    this.formElement = this.popupElement.querySelector(".form");
    this.inputList = this.formElement.querySelectorAll(".form__input");
    this.handleFormSubmit = handleFormSubmit;  
    this.buttonSubmit = this.formElement.querySelector(".form__submit");
}

 getInputValues(){
 this.formValues = {};
 this.inputList.forEach((input)=>{
     this.formValues[input.name] = input.value;
 });
 return this.formValues;  
 }


setEventListeners(){
    super.setEventListeners();

    this.formElement.addEventListener("submit", (evt)=>{
        evt.preventDefault();
        this.handleFormSubmit(this.getInputValues());
        this.closePopup();
    });
    this.buttonSubmit.addEventListener("click", ()=>{
        this.buttonSubmit.textContent = "Cargando...";
    });
 }

 closePopup(){
     super.closePopup();
     this.formElement.reset();
}

}

