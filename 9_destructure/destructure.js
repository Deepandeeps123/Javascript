let ob = {
    name:"abc",
    age:20,
    skill:["python","html",'js']
}


console.log(ob);
console.log(ob.name);
console.log(ob.age);
console.log(ob.skill);





// ! object destructure 


let {name,age,skill} = ob
console.log(name);
console.log(age);




// ! array destructure



let arr = [10,20,30]

let [a,b,c] =arr

console.log(a);
console.log(b);
console.log(c);


