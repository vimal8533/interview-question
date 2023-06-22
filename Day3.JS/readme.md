## Q1.What are promises and why do we need them?
    Promises are use to handle async operation in js .it is easy to handle callback hell.
    promise have three step:
    1.Pending:-In the promise function firstly it  is in pending state.
    2.Resolve:-The second step is resolve state it is call with .then
    3.Rejected:- The third step is reject state it is call with .catch.

#
## Q2.What is promise chaining
    Its a technique to chain multiple async operations together using promise.
            function Display(num,timeout){
                return new promise((res,reg)=>{
                    setTimeout(()=>{
                         console.log(num);
                    res("promise resove");
                    },timeout)
                })
            }

            display(1,1000)
            .then(()=> display(2,2000))
            .then(()=> display(3,3000))
            .then(()=> display(4,4000))
            .then(()=> display(5,5000))
            .then(()=> display(6,6000))
            .then(()=> display(7,7000))

#
## Q3.What is the DOM?
    DOM stand for document object model with help of dom we will manupulate html element and or modified html element with help of javascript and DOM.
#
## Q4.What are closures? Give an example of closure
    A clouser is the combination of a function bundled together (enclosed ) with reffrence to its surronding state make laxical enviroment

        function outer(){
            let a=10;
            function inner(){
                return a;
            }
            inner()
        } 

        console.log(outer());


#
## Q5.How many operators do we have in JS ?
    1.Arithmetic operators
    2.Logical operators
    3.Bitwise operator
    4.compersion operator
    5.Assignment operator
    6.ternary operator
    7.typeof operator

#

## Q6.What are objects in javascript?
    An object is the unorderd pair of key and value 
    and it is non-premetive datatype
    store data in form of key and  value pair seprated bt colon. key is also called property

    const var={
        name:"vimal",
        class:"12",
        age:25
    } 

