export default class FormValidator {
    constructor(formElement, settings) {
        (this.formElement = formElement), (this.settings = settings);
        this.inputList = Array.from(
        this.formElement.querySelectorAll(this.settings.inputSelector)
        );
        this.buttonElement = this.formElement.querySelector(
            this.settings.submitButtonSelector
        );
    }
    showInputError(inputElement, errorMessage) {
        const errorElement = this.formElement.querySelector(
            `#${inputElement.id}-error`
        );
        inputElement.classList.add(this.settings.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this.settings.errorClass);
    }
    hideInputError(inputElement) {
        const errorElement = this.formElement.querySelector(
            `#${inputElement.id}-error`
        );
        inputElement.classList.remove(this.settings.inputErrorClass);
        errorElement.textContent = "";
        errorElement.classList.remove(this.settings.errorClass);
    }
    checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this.showInputError(inputElement, inputElement.validationMessage);
        } else {
            this.hideInputError(inputElement);
        }
    }

    hasInvalidInput() {
        return this.inputList.some((inputElement) => !inputElement.validity.valid);
    }

    toggleButtonState() {
        if (this.hasInvalidInput()) {
            this.buttonElement.disabled = true;
            this.buttonElement.classList.add(this.settings.inactiveButtonClass);
        } else {
            this.buttonElement.disabled = false;
            this.buttonElement.classList.remove(this.settings.inactiveButtonClass);
        }
    }
    setEventListeners() {
        this.toggleButtonState();

        this.inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this.checkInputValidity(inputElement);
                this.toggleButtonState();
            });
        });
    }
    enableValidation() {
        this.formElement.addEventListener("submit", function (evt) {
            evt.preventDefault();
        });
        this.setEventListeners();
    }
}
