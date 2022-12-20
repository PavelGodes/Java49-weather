import { showErrorMessage } from "./errorMessage.js"
export class DataForm {
    //TODO
    #formElement
    #dateFromElement
    #dateToElement
    #hoursFromElement
    #hoursToElement
    #errorMessageElement
    constructor(params) {
        this.#formElement = document.getElementById(params.idForm)
        this.#dateFromElement = document.getElementById(params.idDateFrom)
        this.#dateToElement = document.getElementById(params.idDateTo)
        this.#hoursFromElement = document.getElementById(params.idHourFrom)
        this.#hoursToElement = document.getElementById(params.idHourTo)
        this.#errorMessageElement = document.getElementById(params.idErrorMessage);

    }
    addSubmitHandler(processData) {
        this.#formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const weatherObj = { hoursFromElement: this.#hoursFromElement, hoursToElement: this.#hoursToElement };
            processData(weatherObj);
        })


    }
    validateHours(element) {
        const value = +element.value;
        if (value > this.#hoursFromElement  value == this.#hoursToElement) {
            'hour must be ${this.#hoursFromElement} or greater' :
                'hour must be ${this.#hoursToElement} or less';
            showErrorMessage(element, message, this.#errorMessageElement)
        }
    }
    validateDate(element) {
        const value = +element.value.slice(0, 4);
        if (value < this.#dateFromElement  value > this.#dateToElement) {
            const message = value < this.#dateFromElement ? 'date must be ${this.#dateFromElement} or greater' :
                'date must be ${this.#dateToElement} or less';
            showErrorMessage(element, message, this.#errorMessageElement);

        }
    }
}


// export class DataForm {
//     //TODO
//     #formElement
//     #dateFromElement
//     #dateToElement
//     #hoursFromElement
//     #hoursToElement
//     #errorMessageElem
//     //......
//     constructor (params) {
//         //TODO
//     }
//     addHandler(processFun) {
//         //TODO
//     }
// }