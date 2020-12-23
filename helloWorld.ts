// console.log("Hello World");
// // running a typeScript file is same as the js file 
// // here the scope of the var variable is set to the parent block

// for (var index = 0; index < 10; index++) {
//     console.log("inside of for loop - ",index);
// }
// console.log("After the execution of the loop ",index);

// but if we use let instead of var the typeScript will throw error, but transpolation of  the js file in es5 format still takes place
// for (let index = 0; index < 10; index++) {
//     console.log("inside of for loop - ",index);
// }
// console.log("After the execution of the loop ",index);

// In this case if we try to assign string data type to a number data type it shows an error immedaitely but still it will create a .js
// let a = 5;
// a = "thos "


// type annotaions 
// let a : number;
// a = 56;
// a = "this is not allowed"; // string is not assignable to a number


// type Assertions

// let message  = "I am optimus prime and I send this message to all remaining autobots";
// console.log( typeof(message) );
//the ts compiler know this var as string 

// let data;
// when the variable is declared but not initialized the variable gets implicitly declared to any 

// data = "that we are here on this planet"

// after giving value the data type is given
// console.log("The variable type of data is "+ typeof(data));


// but instead if we want to assert the data type we can do it 

// let lenghtData = (<string>data).length;
//by using assertions we can tell the ts compiler that the data var is a string data type


// class and interface implements 

class draw {
    pen : boolean;
    pencil : boolean;
       constructor(){
           console.log("inside of constructor");
    }
    get getter(){
        return this.pencil;
    }
    set setPen(val1:boolean){
        this.pen = val1;
    }
    set setPencil(val2:boolean){
        this.pencil = val2;
    }
    whatToDrawWith(){
        if(this.pen == true)
        {
            console.log("This person will draw with pen");

        }
        else
        {
            console.log("This person will draw with pencil");

        }
    }
}
let child = new draw();
child.pencil = true;
child.whatToDrawWith()  

