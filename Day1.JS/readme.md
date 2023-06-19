## Q1.Difference between “ == “ and “ === “ operators.
## Ans:Both the opeartors are used to check the is variable    is  equal or not == is compare only the variable value and === is used to compare to the variable value or variable datatypes. == is called equaly and === is called strictly.
#
## Q2.What are the differences between var, let and const?
## Ans.Main diffrence between  var let and const is its scope ans assignblity .
## var:-its can be redeclare and reinitilized and its have global and function scope its support hosting used before introduce of ES6.
## let:- its cannot be redeclare and only it reinitilized it doesn't supoort hosting and it have block scope and global scope introduce in ES6.
## const:-its cannot be redeclare and can not be reinitilizedit doesn't supoort hosting and it have block scope and global scope introduce in ES6.


#




## Q3.What is hoisting?
## Ans.Hosting is a mechanism in the javascript in which the the function and the variable is called before declration in the hosting the var is only supprot and let and const doesnot support ex:console.log(name); var name="Vimal"; 

#

## Q4.What is a Temporal Dead Zone? 
## Ans.A temporal dead zone (TDZ) is the area of a block where a variable is inaccessible until the moment the computer completely initializes it with a value.it is the draw back of the hosting .when trying before its declaration with let and const keyword.this is introduce to improve the code quality.

#

## Q5.What is meant by first class functions?
## And.First-class functions are functions that are treated as variables. They can also be parsed into other functions as arguments.const foo = () => {console.log("foobar");};foo();


#


## Q6.What are pure functions?
## Ans.A pure function in JavaScript is a function that returns the same result if the same arguments(input) are passed in the function.


