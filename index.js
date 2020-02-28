'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Return unmodified input value. 
 * 
 * @param {Any Datatype} value: Any value, any datatype to be returned as 
 * itself.
 * 
 * @return {Any Datatype} Any value, any datatype as determined from our 
 * input value.
 * 
 */
 
function identity(value) {
    //return the value unchanged
    return value;
}
module.exports.identity = identity;


/**
 * typeOf: Return the datatype of a value as a string. Fixes for issues 
 * in typeof operand by correctly identifying arrays and null values.
 * 
 * @param {Any Datatype} value: Any value, to check the datatype on.
 *  
 * @return {String} A string corresponding to the datatype of <value>. 
 * Will be one of the following:
 * 
 * "string"
 * "array"
 * "object"
 * "undefined"
 * "number" 
 * "boolean"
 * "null"
 * "function".
 * 
 */
 
function typeOf (value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;


/**
 * first: Returns the first <number> of items in an array. Will return an empty 
 * array if no array is given or if the number is a negative integer. Will 
 * return just the first item in the array if no number if given or if the 
 * number given is 1. If the number is larger than the length of the array, 
 * will return the enire array as was input. 
 * 
 * @param {Array} array: the array from which the items will be returned.
 * 
 * @param {Number} number: the number of items to be returned from the array.
 * 
 * @return {Array} An array containing the first <number> of items in the array.
 * 
 */

function first(array, number) {
    
    let result = [];
    
    if (typeOf(array) === "array" && typeOf(number) === "number") {
        if (number < 0) {
            return result;
        } else if (number < 2) {
            return array[0];
        } else if (array.length < number) {
            return array;
        } else {
            for (let i = 0; i < number; i++) {
                    result.push(array[i]);
                }
            return result;
        }
    } else if (typeOf(array) === "array" && typeOf(number) !== "number") {
        return array[0];
    } else {
        return result;
    }
}
module.exports.first = first;


/**
 * last: Returns the last <number> of items in an array. Will return an empty 
 * array if no array is given or if the number is a negative integer. Will 
 * return just the last item in the array if no number if given or if the 
 * number given is 1. If the number is larger than the length of the array, 
 * will return the enire array as was input. 
 * 
 * @param {Array} array: the array from which the items will be returned.
 * 
 * @param {Number} number: the number of items to be returned from the array.
 * 
 * @return {Array} An array containing the last <number> of items in the array.
 * 
 */
 
function last(array, number) {
    let result = [];
    if (typeOf(array) === "array" && typeOf(number) === "number") {
        if (number < 0) {
            return result;
        } else if (number < 2) {
            return array[array.length - 1]; 
        } else if (array.length < number) {
            return array;
        } else {
            for (let i = array.length - 1; i >= number - 1; i--) {
                    result.unshift(array[i]);
                }
            return result; 
    }
    } else if (typeOf(array) === "array" && typeOf(number) !== "number") {
        return array[array.length - 1]; 
    }  else {
        return result; 
    }
}
module.exports.last = last;


/**
 * indexOf: Returns the index of <array> that is the first occurrance of 
 * <value>. The function will stop running after returning the first match, and 
 * therefore will not indicate how many instances of <value> occur in the given 
 * array.
 * 
 * @param {Array} array: the array from which the index will be returned.
 * 
 * @param {Any Datatype} value: Any value, any datatype to be located in the 
 * given array.
 * 
 * @return {Number} A number representing the index location of the matched 
 * value, or a -1 if there was no occurance of <value> in the given array.
 * 
 */
 
function indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;


/**
 * contains: Returns true if the given array contains the given value. The 
 * function uses the indexOf function which will stop running after finding the 
 * first match, and therefore will not indicate how many instances of <value> 
 * occur in the given array. Will return false if no match is found or if no 
 * number is given. 
 * 
 * @param {Array} array: the array that will be checked for a given value.
 * 
 * @param {Any Datatype} value: Any value, any datatype to be located in the 
 * given array.
 * 
 * @return {Boolean} A boolean representing the occurance of <value> in the 
 * given array, true if the value is in the given array, false if the value 
 * is not in the given array.
 * 
 */
 
 function contains(array, value) {
    return (indexOf(array, value) !== -1 ? true : false);
}
module.exports.contains = contains;


/**
 * each: Calls a given function once for each element in the given parameters. 
 * Will run the function on each item in an array, it's index, an on the array 
 * as a whole. For objects, it will run the function on the property's value, 
 * it's key, and the object as a whole.
 * 
 * @param {Object or Array} collection: the collection that will have the 
 * function called on itself and it's contents.
 * 
 * @param {Function} test: the function that will be invoked on the collection 
 * and each element in the collection.
 * 
 */
 
function each(collection, test) {
    
    if (typeOf(collection) === "array") {
        for (let i = 0; i < collection.length; i++) {
            test(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            test(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * unique: Returns a new array of all the elements in a given array with 
 * duplicates removed.
 * 
 * @param {Array} array: the array from which only unique values will be pulled.
 * 
 * @return {Array} An array of unique values from the given array.
 * 
 * 
 */
 
 function unique(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (indexOf(result, array[i]) === -1) {
            result.push(array[i]);
        }
    }
    return result;
}
module.exports.unique = unique;
 
 /**
 * filter: Calls a function for each element in an array, passing <element>, 
 * <index>, and <array> through as arguments. Returns a new array with only the 
 * elements that returned a true from the test.
 * 
 * @param {Array} array: An array that will have the function run on itself and 
 * it's elements and indices.
 * 
 * @param {Functiomn} test: A function that will be run on the given array.
 * 
 * @return {Array} Returns a new array of elements for which calling <function> 
 * returned true.
 * 
 * 
 */
 
function filter(array, test) {
    let newArr = [];
    each(array, function(element, index, array) {
         if(test(element, index, array)){
             newArr.push(element);
         }
     });
     return newArr;
}
module.exports.filter = filter;
 
 
 /**
 * reject: Calls a given function for each element in a given array, passing 
 * the following arguments: the element, it's index, and the array. Returns a 
 * new array with only the elements that returned false from the test.
 *
 * 
 * @param {Array} array: The array upon which the given fuction will be run.
 * 
 * @param {Function} test: The given test to run on each element in the array.
 * 
 * @return {Array} Returns a new array of elements for which calling the given 
 * function returns a false
 * 
 * 
 */
 
function reject(array, test) {
    let result = [];
    let rejectFunc = function(element, index, array) {
        if (!test(element, index, array)) {
            result.push(element);
        }
    }
    filter(array, rejectFunc);
    return result;
}
module.exports.reject = reject; 
 
 
 /**
 * partition: Calls a given function for each element in a given array, passing 
 * the following arguments: element, index, array. Returns an array that has two 
 * sub-arrays: one with all the values for which <function> returned a truthy 
 * value, and one with all the values for which <function> returned a falsey 
 * value.
 * 
 * @param {Array} array: The array on which the given function will run.
 * 
 * @param {Function} test: The test that will be passed through to each element 
 * of the array.
 * 
 * @return {Array} Returns and array of arrays, one array for truthy results, 
 * one array for falsey results.
 * 
 * 
 */
 
 function partition(array, test) {
    let truthyArr = filter(array, test);
    let falseyArr = reject(array, test);
    let result = [];
    result.push(truthyArr);
    result.push(falseyArr);
    return result;
}
module.exports.partition = partition; 
 

 /**
 * map: Calls a given function on each element in a given collection, using 
 * each() to pass the proper arguments for objects or arrays. Returns an array 
 * of the results of the given function.
 * 
 * @param {Object or Array} collection: Any object or array upon which a 
 * function will be run.
 * 
 * @param {Function} test: The given test to run on the given collection and 
 * it's elements.
 * 
 * @return {Array} Returns an array of the results of running the given 
 * function on each element in the collection. 
 * 
 */
 
function map(collection, test) {
    let resultArr = [];
    each(collection, function(element, index, collection) {
        resultArr.push(test(element, index, collection));
    })
    return resultArr;
}
module.exports.map = map; 
 
 
 /**
 * pluck: Returns an array containing all the values of the keys <property>.
 * 
 * @param {Array} array: An array of objects with key/value pairs, from which 
 * values will be plucked.
 * 
 * @param {String} property: A string value for the key to locate in each 
 * object.
 * 
 * @return {Array} Returns an array of values plucked from a given array of 
 * objects.
 * 
 */
 
function pluck(array, property) {
    return map(array, function(element, index, array) {
      return element.name;  
    })
}
module.exports.pluck = pluck; 
 
 
 /**
 * every: Returns a boolean value based on the result of running a given function
 * over a given collection and it's elements. A false result means at least one
 * of the tests returned a falsey result. A true result means that no test
 * was falsey, or all the tests were truthy.
 * 
 * @param {Object or Array} collection: Any object or array upon which a 
 * function will be called and the results evaluated.
 * 
 * @param {Function} test: Any function to run on a given collection and its 
 * elements. The result of this function will be cooerced into a boolean value.
 * 
 * @return {Boolean} Returns a boolean value, false if at least one result was
 * false, true if all the results were true.
 * 
 */
 
  function every(collection, test) {
    if (typeOf(test) === "function") {
        let arrWFunc = map(collection, function(e, i , c){
        return test(e, i, c)
        })
        if (contains(arrWFunc, false)) {
            return false;
        } else {
            return true;
        }
    } else {
        let arrWOFunc = map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })
         if (contains(arrWOFunc, false)) {
            return false;
        } else {
            return true;
        }
    }
}
module.exports.every = every; 
 
 /**
 * some: Returns a boolean value based on the result of running a given function
 * over a given collection and it's elements. A true result means at least one
 * of the tests returned a truthy result. A false result means that no test
 * was truthy, or all the tests were falsey.
 * 
 * @param {Object or Array} collection: Any object or array upon which a 
 * function will be called and the results evaluated.
 * 
 * @param {Function} test: Any function to run on a given collection and its 
 * elements. The result of this function will be cooerced into a boolean value.
 * 
 * @return {Boolean} Returns a boolean value, true if at least one result was
 * true, false if all the results were false.
 * 
 */
 
function some(collection, test) {
    if (typeOf(test) === "function") {
        let arrWFunc = map(collection, function(e, i , c){
        return test(e, i, c)
        })
        if (contains(arrWFunc, true)) {
            return true;
        } else {
            return false;
        }
    } else {
        let arrWOFunc = map(collection, function(e, i, c){
            if(e){
                return true;
            } else {
                return false;
            }
        })
         if (contains(arrWOFunc, true)) {
            return true;
        } else {
            return false;
        }
    }
}
module.exports.some = some; 
 
 /**
 * reduce: Will iteratively run a given function on each element in a given 
 * array, logging the result of the previous iteration, and passing it thru in
 * the next iteration. Returns the final result.
 * 
 * @param {Array} array: Any array and its elements on which the given function 
 * will run.
 * 
 * @param {Function} test: A given function to run on each element in the array.
 * 
 * @param{Any Datatype} seed: A starting value of any datatype that will be used 
 * in the given function and updated on every pass through the given array's 
 * elements.
 * 
 * @return {Any Datatype} Returns any datatype that is the final result of 
 * running the given function iteratively over all of the array's elements.
 * 
 */
 
function reduce(array, test, seed) {
    let prevResult;
    if (seed !== undefined) {
        prevResult = seed;
        each(array, function(e, i, a) {
            prevResult = test(prevResult, e, i, a);
        })
    } else {
        prevResult = array[0];
        for (let i = 1; i < array.length; i++) {
            prevResult = test(prevResult, array[i], i, array);
        }
    }
    return prevResult;
}
module.exports.reduce = reduce; 
 
 /**
 * extend: Copies properties from any number objects into an initial object 
 * and return that updated object.
 * 
 * @param {Object} object1: An initial object that will be updated by extend().
 * 
 * @param {Object} objectArr: Using the rest parameter before objectArr, this 
 * will create an array of any number of other objects. These objects' 
 * properties will be used to update object1's properties.
 * 
 * @return {Object} The first object argument, passed through as object1, will
 * be returned will all of the properties from the other objects used as
 * arguments.
 * 
 * 
 */
 
function extend(object1,...objectArr) {
    for (let i = 0; i < objectArr.length; i++) {
        for (var key in objectArr[i]) {
            object1[key] = objectArr[i][key];
        }
    }
    return object1;
}
module.exports.extend = extend; 