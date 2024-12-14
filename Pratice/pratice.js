// let a=10
// console.log(a);


// let b=200
// console.log(a)


//! let num=10
// let num1=10.10
// console.log(num);
// console.log(typeof num);

// console.log(num1);
// console.log(typeof num1);

// let num3=Number(30)
// console.log(typeof num3);




// let str=true
// console.log(str);
// console.log(typeof str);


// let str1 = false
// console.log(str1);
// console.log(typeof str1);



// var  str='Hello'
// console.log(str);
// console.log(typeof str);

// var str="Hello"
// console.log(str);
// console.log(typeof str);


// var str=`Hello`
// console.log(str);
// console.log(typeof str);



// let str = new String('Hello')
// console.log(str);
// console.log(typeof str);


// let a
// console.log(a);
// console.log(typeof a);


// let b = null
// console.log(b);
// console.log(typeof b);




// let str=1234567889900097654,ll,kk
// console.log(str);
// console.log(typeof str);




// let arr = [1,1.0,true,undefined]
// console.log(arr);
// console.log(typeof arr);





// function add()
// {
//     console.log('I am add function');   
// }
// add()




// let student = {
//     name:'Dinga',
//     age:22,
//     ph:1234567890,
//     skills:['html','css','js']

// }
// console.log(student);






// string



// // !  touppercase


// let a ='hello'
// let upper = a       .toUpperCase()
// console.log(upper);


// let str
// str='hello'
// console.log(str.toUpperCase());


// // ! toLowerCase

// let str="HELLO"
// console.log(str.toLowerCase())


// let num="HELLO"
// let lower=num.toLowerCase()
// console.log(lower);

// let a
// a='HELLO'
// console.log(a.toLowerCase());


// // !3,indexof

// let str="Hello every one"
// console.log(str.indexOf('n'));


// let str1="Hello every one"
// let index=str1.indexOf('y')
// console.log(index);

// let str2
// str2="Hello every one"
// console.log(str2.indexOf('z'));



// // !4.charAt

// let str="Hello every one"
// console.log(str.charAt(4));

// let str1
// str1="Hello every one"
// let charAt = str1.charAt(-8)
// console.log(charAt);


// let str2="hello every one"
// console.log(str2.charAt(100));

// ! 5.concat


// let str="hello"
// let str1="every"
// let str2="one"
// console.log(str.concat(" ",str1," ",str2));



// !6.trim


// let str = "   hello   "
// let length =str.length

// console.log(length)
// let trim = str.trim()
// console.log(trim)
// console.log(trim.length);



// let str1="@@Hello@@"
// console.log(str1.trim());



// !7.includes

// let str="hello"
// console.log(str.includes('l'))


// let str1="hello"
// let includes=str1.includes('h')
// console.log(includes);

// let str2
// str2="hello"
// console.log(str2.includes('z'));



// // !8.split()


// let str="i am fine"
// console.log(str.split(" "));


// let str1="i am fine"
// let split= str1.split(",")
// console.log(split)


// let str2="i.am.fine"
// let split2= str2.split(",")
// console.log(split)


// ! 9.slice()


// let str="hello every one"
// console.log(str.slice());
// console.log(str.slice(0));
// console.log(str.slice(1));
// console.log(str.slice(2));
// console.log(str.slice(3));


// console.log(str.slice(0,8));
// console.log(str.slice(1,8));
// console.log(str.slice(2,8));
// console.log(str.slice(3,8));
// console.log(str.slice(3,8));


// console.log(str.slice(1,-1));
// console.log(str.slice(2,-2));
// console.log(str.slice(3,-3));
// console.log(str.slice(4,-4));
// console.log(str.slice(5,-5));


// console.log(str.slice(-1));
// console.log(str.slice(-2));
// console.log(str.slice(-10));
// console.log(str.slice(-1,0));
// console.log(str.slice(8,0));



// ! 10.substring



// let str="hello every one"
// console.log(str.substring());
// console.log(str.substring(1));
// console.log(str.substring(2))


// console.log(str.slice(-1))
// console.log(str.substring(-1))

// console.log(str.slice(9));
// console.log(str.slice(9,0));
// console.log(str.substring(9,0));




// ! 11.startswith,endswith


// let str="Javascript"
// console.log(str.startsWith('J'));


// console.log(str.endsWith('J'))



// ! 12.replace()

// let str="hello"
// console.log(str.replace('hello','Hello'));





// ! Function


// *Syntax

// function sample()
// {
//     console.log("Sample");
    
// }
// sample()




// ! Function without parameters


// function add()
// {
//     let a=10
//     let b=20
//     console.log(a+b)
// }
// add()


// function add1()
// {
//     let a=10,b=20
//     console.log(a+b);
    
// }
// add1()


// ! function with parameter


// function add(a,b){
//     console.log(a+b)

// }
// add(10,20)




// return

// function add (a,b){
//     return a+b
// }
// (add(100,20));



// function (a,b){

// }
// (10)


// let a = function(a,b){
//     console.log(a+b);
    
// }
// a(10,20)


// Arrow

// function (a,b) =>{

// }


// let add = (a,b)=>{
//     console.log(a+b);
    
// }
// add(10,200)





// ! Prime Number



// function prime(n){
//     let count=0
//     for (let i=1;i<=n;i++){
//         if (n%i==0){
//             count=count+1
//         }
//     }
// if (count==2){
//     console.log("prime");
    
// }
// else{
//     console.log("not prime");
    
// }

// }
// prime(51)





// let str="racecar"
// let a=""
// let length=str.length
// for (let i=length;i>=0;i--){
//     a=a+str.charAt(i)
// }
// console.log(a);


// let a="racecar"
// let b=""
// let c=a.length
// for (let i=c;i>=0;i--){
//     b=b+a.charAt(i)
// }
// console.log(b);



// function palindrome(n){
//     let a=n
//     let b=""
//     let c=a.length
//     for (let i=c;i>=0;i--){

//         b=b+a.charAt(i)
//     }
//     console.log(b);
    

// }

// palindrome("racecar")




// function palindrome(n){
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
        
//     }
//     return b


// }
// console.log(palindrome("racecar"));





// function palindrome(n){
//     let a=n
//     let b=""
//     let c=a.length
//     for (let i=c;i>=0;i--){
//         b=b+a.charAt(i)

//     }
//     return b
// }
// console.log(palindrome("racecar"));



// function palindrome(n){
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     if (a==b){
//         console.log("palindrome");
        
//     }
//     else{
//         console.log("Not");
        
//     }
// }
// palindrome("racecar")




// function palindrome(n){
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     if(a==b){
//         return "Palindrome"
//     }
//     else{
//         return "Not"
//     }

// }
// console.log(palindrome("racecar"));




// let a="madam"
// let b=""
// let c=a.length
// for (let i=0;i<c;i++){
//     if(!b.includes(a.charAt(i))){
//         b=b+a.charAt(i)
//     }

// }
// console.log(b);








// let a="madam"
// let b=""
// let c=a.length
// for (let i=0;c>0;i++){
//     if(!b.includes(a.charAt(i))){
//         b=a.charAt(i)
//     }
// }

// console.log(b);




// let a=5
// let count=0
// for(let i=2;a>=i;i++){
//     if (a%i==0){
//         count=count+1
//     }
// if(count==2){
//     console.log("Prime");
    
// }
// }






// let a="madam"
// let b=""
// let c=a.length
// for(let i=c;i>=0;i--){
//     b=b+a.charAt(i)
// }
// console.log(b);



let a="madam"
let b=""
let c=a.length
for(let i=0;i>=0;i++){
    if(!b.includes(a.charAt(i))){
        b=b+a.charAt(i)
    }
}
console.log(b);





let a1=5
let count=0
for(let i=2;a1>0;i++){
    if(n%i==0){
        count=count+1
    }
if(count==1){
    console.log("Prime");
    
}
}























