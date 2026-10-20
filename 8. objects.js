
// Object Declaration (Type 1)
let obj1 = new Object()
obj1.id = 1
obj1.name = "guest"

// Object Declaration (Type 2)
let obj2 = {
    id: 1,
    name: "guest",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    sayHi: function () {
        console.log("Hello");
    },
}

console.log(obj2.name); // guest
console.log(obj2.techStack[0]); // HTML
obj2.sayHi() // Hello

