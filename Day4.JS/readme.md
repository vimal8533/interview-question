## Q1.What are function constructors?
    A function constructors to a way to create a object using a function as a blue print or template.It allow you to define a reusable structure for creating mulltiple object with similar this is used to reffered the current object.

        functio person(name,age,course){
            this.Name=name;
            this.Age=age;
            this.course=course;
        }

        let person1= new person("Vimal",25,"MERN");


#

## Q2.Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()
    These all three method are used to invoke a function where we are supposed to pass an object as first argument and at the time of definations we don't have mention this object as a parameter and we can the values of object by using this keyword in function defination.
    call:-The call method is used to invoked a function with specific 'this' value, and argument provide definition.
    Apply:-Apply is similar with call, but take argument as an array.
    Bind:- Bind is function that helps you to create another function that you can execute later with the new context of this that is provided.

#

## Q3.What is the purpose of async/await keywords?
    The async keyword is used to declare a function as asynchronous, which means that it will return a promise. Inside an async function, the await keyword can be used to pause the execution of the function until a promise is resolved. 

        async function fetchData(){
    const response = await fetch('https://example.com/data');
    const data = await response.json();
    return data;
}