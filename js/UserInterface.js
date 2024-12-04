'use strict'

class UserInterface {

    constructor() {
        // Getting elements (input, button, and table) from HTML.
        this.nameInput = document.getElementById("nameInput");
        this.surnameInput = document.getElementById("surnameInput");
        this.ageInput = document.getElementById("ageInput");
        this.phoneNumberInput = document.getElementById("phoneNumberInput");
        this.saveButton = document.getElementById("saveButton");
        this.tableContent = document.getElementById("tableContent");

        // Initializing new insureeRegistry with a localStorage.
        this.insureeRegistry = new InsureeRegistry();

        // Initializing the _registerHandlers method.
        this._registerHandlers();
    }

    /**
     * When the form button is clicked on, the input values are saved into an inputValues variable.
     * If all the input values are valid, new Insuree instance "record" is created out of them and added to the insureeRegistry localStorage
     * The tableContent is rewritten.
     */
    _registerHandlers() {
        this.saveButton.onclick = () => {
            const inputs = [this.nameInput, this.surnameInput, this.ageInput, this.phoneNumberInput]
            const inputValues = inputs.map(i => i.value);
            if (Insuree.validateInput(...inputValues)) {
                const record = new Insuree(...inputValues);
                this.insureeRegistry.addRecord(record);
            }
            this.presentRecords();
        };

    }

    /**
     * Empties the table content and fills it with rows of insurees (including details) from the insureeRegistry (localStorage)
     */
    presentRecords() {
        this.tableContent.innerHTML = "";
        for (const record of this.insureeRegistry.records) {
            const recordRow = document.createElement("tr");
            recordRow.innerHTML = `<th>${record}</th> <td>${record.age}</td> <td>${record.phoneNumber}</td>`;
            this.tableContent.appendChild(recordRow);
        }
    }
}