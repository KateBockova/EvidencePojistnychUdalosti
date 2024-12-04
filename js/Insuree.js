'use strict'

class Insuree {
    /**
     * Static method that confirms a presence of an input
     * @param {text} name 
     * @param {text} surname 
     * @param {number} age 
     * @param {tel} pohoneNumber // 9 numbers and 2 spaces in a format phone number format
     * @returns true, if all parameters are filled and phone number has 11 characters, otherwise false  
     */
    static validateInput(name, surname, age, pohoneNumber) {
        if (name.length === 0) {
            return false;
        }
        if (surname.length === 0) {
            return false;
        }
        if (age.length === 0) {
            return false;
        }
        if (pohoneNumber.length !== 11) {
            return false;
        }
        return true;
    }
    
    constructor(name, surname, age, phoneNumber) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.phoneNumber = phoneNumber;
    }

    // returns a full name of the insuree
    toString() {
        return `${this.name} ${this.surname}`;
    }
}