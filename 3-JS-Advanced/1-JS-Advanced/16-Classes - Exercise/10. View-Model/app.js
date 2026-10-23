class Textbox {
    constructor(selector, regex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
        this._value = '';

        Array.from(this._elements).forEach(element => {
            element.addEventListener('input', () => {
                this.value = element.value;
            });
        });
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return  this._value;
    }

    set value(newValue) {
        this._value = newValue;

        Array.from(this._elements).forEach(element => {
            element.value = newValue;
        });
    }

    isValid() {
        return !Array.from(this._elements).some(element => this._invalidSymbols.test(element.value));
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click',function(){console.log(textbox.value);});
