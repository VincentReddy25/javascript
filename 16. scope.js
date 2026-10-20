
function myFun() {
    var a = 10; // function scope

    if (1 > 0) {
        let x = a; // block scope
        console.log(x);
    }
    console.log(x); // error - x is not defined
}

myFun();
