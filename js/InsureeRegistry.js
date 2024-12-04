'use strict'

class InsureeRegistry {
    
    constructor() {
        // Takes saved records (list of insurees with their details) from the localStorage in JSON format.
        const storageRecords = localStorage.getItem("records");
        /* 
        Parses the storageRecords from JSON string to objects (each object is one insuree). 
        If there are no records saved in the localStorage, it creates an empty list.
        */
        const parsedRecords = storageRecords ? JSON.parse(storageRecords) : [];
        // Recreates Insuree instances out of the objects in parsedRecords.
        this.records = parsedRecords.map(
            record => Object.assign(new Insuree(), record)
        )
    }
    /**
     * Adds new record (Insuree instance) to the records and saves it to the localStorage.
     * @param {Object} record an instance of Insuree
     */
    addRecord(record) {
        this.records.push(record);
        this._saveRecord();
    }

    // Makes a JSON string out of the Insuree instances and saves them to localStorage under the "records" key.
    _saveRecord() {
        localStorage.setItem("records", JSON.stringify(this.records));
    }
}