const ageCalculator = function(name, yearOfBirth, currentYear) {
  let string = '';
  let age = currentYear - yearOfBirth;
  string = name + ' is ' + age + ' years old.';
  return string;
};

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));