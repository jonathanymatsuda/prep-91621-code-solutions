function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  console.log('getGreeting Exercise: ' + 'Hello ' + name + '!');
}

getGreeting('World');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDividebBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise', multiplyAndDividebBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbersResult Exercise', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  console.log('getFullName Exercise ' + firstName + ' ' + lastName);
}

getFullName('Juan', 'Ramirez');

function cube(number) {
  return Math.pow(number, 3);
}

var cubeResult = cube(5);
console.log('cube exercise', cubeResult);
