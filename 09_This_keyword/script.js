// "use strict";

// this in global sapce

console.log(this);  // global object but have diffrent in browser and node envoirement.

function x() {
    // the value dependes on strict / non-strict mode 
    // useing "use strict" mode then value is undefined
    // not useing "use strict" mode then value is global object
    console.log(this);
}
x()

// this in strict mode - (this substitution)

// the value dependes on strict / non-strict mode
// useing "use strict" mode then value is undefined
// not useing "use strict" mode then value is global object


// this keyword value depends on how the function is called 

x() // undefined
window.x() // window 


// this inside a object's method 

const obj = {
    a: 10,
    x: function () { // x terate to method of obj object 
        console.log(this.a);
    }
}

obj.x()
