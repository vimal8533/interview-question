## Q1.What is execution context.
## Ans.When the JavaScript engine scans a script file, it makes an environment called the Execution Context.there is for Synchronous Javascript
## 1.Global Execution Context:Global Execution Context is the first thing that is created when you write JavaScript code. It is the default context.
## 2.Function Execution context:A function execution context is created whenever a function is called, representing the function's local scope.
## 3.Memory Allocation:JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).
## 4. Code Execution: In the code execution the script code will execated after the memory allocation to the global variable
## 5. Call stack:The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle.

#




## Q2.What is an event loop and call stack:
## Ans.The call stack is used by JavaScript to keep track of multiple function calls. It is like a real stack in data structures where data can be pushed and popped and follows the Last In First Out (LIFO) principle. and event loop is used for moniter the micro task and callback queue to which one is firstly perform in call stack micro worl with promis res,resn nad callback queue is work with API DOM setTimeinterval() the event loop firstly giver the priority to microtask.


#



## Q3.What is creation phase and execution phase?
## Ans.Compiler runs through the entire code for 2 time before actually executing the code,In the first run, It picks all function declarations and stores them in memory with their reference.In the second run, It picks all variables and assign undefined to them. In the event of a conflict between variable and function declaration name then that variable is ignored. this called creation phase. and Variables assigned with values Functions executed it is called exuction phase.

#


## Q4.What is the spread operator?
## Ans.The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.


#


## Q5.What is the use of setTimeout
## Ans.The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.


#


## Q6.What are callbacks?
## Ans. A function is call to be call back function its take a function as a argument of an another function.


#

## Q7.What is callback hell?
## Ans. Multiple callback function is called  is callback hell we can also say that nested callback is called callback helland it build pyramid type sturture.

#



## Q8.Difference between undefined vs not defined vs NaN

## Ans.Undefined means when you declare a variable and not intilized the value to it then it is undefined when you not declare the variable and call that variabel the it give the error like not defind and if variable give in string and we used it as a number then  it is show Nan means not a number  