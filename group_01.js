var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

var empBonuses = []; // bonuses of all employees
var employeeObjects = [];

for (var i = 0; i < employees.length; i++) {
	employeeObjects[i] = new Person(employees[i]);
}

for (var i = 0; i < employeeObjects.length; i++) {
	empBonuses.push(calcBonus(employeeObjects[i]));
}




function Person([name, employeeNumber, annualSalary, reviewRating]) {
	this.name = name;
	this.employeeNumber = employeeNumber;
	this.annualSalary = annualSalary;
	this.reviewRating = reviewRating;
};

console.log(empBonuses);

function calcBonus(employee) {
	var empBonus = {
		bonusPercent: 0
	};
	empBonus.name = employee.name;
	employee.annualSalary = Number(employee.annualSalary);
	switch (employee.reviewRating) {
	case 1, 2:
		empBonus.bonusPercent = 0;
		break;
	case 3:
		empBonus.bonusPercent = .04;
		break;
	case 4:
		empBonus.bonusPercent = .06;
		break;
	case 5:
		empBonus.bonusPercent = .1;
		break;
	default:
		empBonus.bonusPercent = 0;
	};
	if (employee.employeeNumber === 4) {
		empBonus.bonusPercent += .05;
	}

	if (employee.annualSalary > 65000) {
		empBonus.bonusPercent -= .01;
	}

	if (empBonus.bonusPercent > .13) {
		empbonus.bonusPercent = .13;
	} else if (empBonus.bonusPercent < 0) {
		empBonus.bonusPercent = 0;
	}

	empBonus.totalCompensation = employee.annualSalary * empBonus.bonusPercent + employee.annualSalary;

	empBonus.bonusAmount = Math.round(empBonus.bonusPercent * employee.annualSalary);

	return empBonus;
};
