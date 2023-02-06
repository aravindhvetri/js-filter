//using filter method:

const employees=[
{name:"David Caelson", age:30},
{name:"John Cena", age:34},
{name:"Mike Sheridan", age:30},
{name:"John Certe", age:50},
];
 let employeVal = employees.filter(function(employee){
	 return employee.age > 30;
 });
 console.log(employeVal);