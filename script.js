let firstNameInputNode = document.querySelector(".first-name");
let lastNameInputNode = document.querySelector(".last-name");
let ageInputNode = document.querySelector(".age");
let btnResult = document.querySelector(".btn-result");
let display = document.querySelector(".display");

function ageInDays(obj, callback) {
  let fullName = `${obj.firstName} ${obj.lastName}`;
  let ageInDays = obj.age * 365;
  return callback(fullName, ageInDays);
}

function callback(name, age) {
  display.textContent = `The person's full name is ${name} and their age in days is ${age}`;
}

btnResult.addEventListener("click", () => {
  let person = {
    firstName: firstNameInputNode.value,
    lastName: lastNameInputNode.value,
    age: ageInputNode.value,
  };
  ageInDays(person, callback);
});
