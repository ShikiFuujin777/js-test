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
* getNumberByType: Return an array with the number that pass a test
* _array: Array info with only int numbers
* _type: Boolean value wich [ true ( to return even numbers ) | false ( to return odd numbers ) ]
*/
let getNumberByType = ( _array, _type ) => {
    try {
        if(!_array) throw "You must to enter the array";

        return _array.filter( ( _i ) => _i % 2 ? !_type : _type )
    } catch ( _e ) {
        console.error(_e);
        return [];
    }
};

let _arrayNumbers = arrayList(25, 1, 100);
let _arrayNumbersEven = getNumberByType(_arrayNumbers, true);
console.log(_arrayNumbers);
console.table(_arrayNumbersEven);
