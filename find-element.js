'use strict'
/**
* arrayList: Return an array with a length fills with randoms numbers
* _l: Int number that specified the length of the returning array
* _min: Int number with the lowest number on the array to be generate randomly
* _max: Int number with the greatest number on the array to be generate randomly
*/
let arrayList = ( _l, _min, _max ) => {
    return [...Array( _l )].map( ( _i, _x ) => Math.floor(Math.random() * ( _max - _min)) + _min)
};

/**
* findElement: Return the index in an array where a element is at
* _array: Array info with only int numbers
* _element: the element to find
*/
let findElement = ( _array, _element ) => {
    try {
        if(!_array) throw "You must to enter the array";

        return _array.indexOf(_element)
    } catch ( _e ) {
        console.error(_e);
        return [];
    }
};

let _arrayNumbers = arrayList(25, 1, 100);
let _index = findElement(_arrayNumbers, 25);
console.table(_arrayNumbers);
console.log(_index >= 0 ? ("The element 25 is at the position " + _index) : "The element 25 it was not found");
