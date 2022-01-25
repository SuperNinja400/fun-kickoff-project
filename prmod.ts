/***Profile Model Ticket
 * I feel like a model could be best represented with a class template.
 * 
 * Important dogSitter properties:
 * availability: Wanted to represent the availability of the dog sitter as a dictionary type data structure.
 * *keys: Date of the day (yyyy-mm-dd)
 * *values: Array of two elements, containing a start time and end time (likely hh:mm)
 */

class dogSitter{
    availability = new Map(); //See above
    firstName; //Type String
    lastName; //Type String
    address; //Type String
    description; //String? This will store a very long string though.

    serviceRate; //Float (Preferably) 
    paymentInfo; //String, 

    /**Constructor for dogSitter class */
    constructor(nameFirst, nameLast, place, info, hours, salary, cardNumber){
        this.firstName = nameFirst;
        this.lastName = nameLast;
        this.address = place;
        this.description = info;
        this.availability = hours;
        this.serviceRate = salary;
        this.paymentInfo = cardNumber;
    }

    /**Could possibly add potential methods like setFirstName() or getRate() */
}