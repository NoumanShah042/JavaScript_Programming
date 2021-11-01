console.log('The file is tutorial 51');
// Iterators
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators

// Every thing that we can loop over in python is an iterable.
// An iterator can be defined as an object that does iterations on iterable.



function fruitsIterator(values) {
    let nextIndex = 0;
    // we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {
                // We will return below object
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                // We will return below object with only done
                return {
                    done: true
                }
            }
        }
    }
}


const myArray = ['Apples', 'Grapes', 'Oranges', 'Bhindi'];
console.log("My array is ", myArray)

// Using the iterator
const fruits = fruitsIterator(myArray);   //  returned object will save as fruits
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)
console.log(fruits.next().value)

// **********************

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;

    const rangeIterator = {
        next: function () {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false }
                nextIndex += step;
                iterationCount++;
                return result;
            }
            // else part
            return { value: iterationCount, done: true }
        }
    };
    return rangeIterator;
}


// const it = makeRangeIterator(1, 10, 2);

// let result = it.next();
// while (!result.done) {
//     console.log(result.value); // 1 3 5 7 9
//     result = it.next();
// }

// console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
