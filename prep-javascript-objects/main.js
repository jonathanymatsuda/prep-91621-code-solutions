var person = {
  firstName: 'Jonathan',
  lastName: 'Matsuda',
  hobby: 'Baseball'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName + '.');
person.job = 'LFZ Student';
console.log("The person's current job is: " + person.job + '.');
person.previousJob = 'Sales Engineer';
console.log("The person's previous job was: " + person.previousJob + '.');
console.log(person);
