var chocolateBars = ["snickers","hundred grand", "kitkat","skittles"];

function addElementToBeginningofArray(anArray, anElement) {
 return [anElement,...chocolateBars];
}

function destructivelyAddElementToBeginningOfArray() {
  return chocolateBars.unshift(anElement);
}

function addElementToEndOfArray (array,element) {
  return [...array,element];
}

function 