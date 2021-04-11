// Your code here
function mapToNegativize(sourceArray) {
    let newArray = sourceArray.map(x => x * -1)
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = sourceArray
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = sourceArray.map(x => x * 2)
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = sourceArray.map(x => x ** 2)
    return newArray
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = sourceArray.reduce(reducer, startingPoint)
    return total
}

function reduceToAllTrue(sourceArray) {
    let total = sourceArray.reduce(reducer)
    if (total.includes('false')) {
        return false
    } else {
        return true
    }
}

function reduceToAnyTrue(sourceArray) {
    let total = sourceArray.reduce(reducer)
    if (total) {
        return true
    } else {
        return false
    }
}