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



// let a="madam"
// let b=""
// let c=a.length
// for(let i=0;i>=0;i++){
//     if(!b.includes(a.charAt(i))){
//         b=b+a.charAt(i)
//     }
// }
// console.log(b);





// let a1=5
// let count=0
// for(let i=2;a1>0;i++){
//     if(n%i==0){
//         count=count+1
//     }
// if(count==1){
//     console.log("Prime");
    
// }
// }


// let arr=[10,20.10,true,"hello",[1,2,3,"hi"]]
// console.log(arr);


// let arr=[]
// console.log(arr);


// console.log(arr.length);





// !1.push

// let arr=[1,2,3,4]
// arr.push(5)
// console.log(arr);

// console.log(arr.push());



// ! 2.pop
// let arr=[1,2,3,4,5]
// // arr.pop()
// arr.pop(10)
// console.log(arr);


// console.log(arr.pop());



// let  arr=[2,3,4,5]
// // arr.unshift(1)
// arr.unshift(1)
// console.log(arr);



// console.log(arr.unshift());




// let arr1=[1,2,3,4,5]
// arr1.shift(5)
// console.log(arr1);


// console.log(arr1.shift());




// let arr=[1,2,3,4,5]
// console.log(arr.includes(2));
// console.log(arr.includes(19));
// let check = arr.includes(1)
// console.log(check);



// let arr=[1,2,3,4,5]
// console.log(arr.indexOf(3));
// console.log(arr.indexOf());



// let check=arr.indexOf(1)
// console.log(check);



// console.log("hello"+" hi");



// arr=[1,2,3,4]
// arr1=[10.0,true,"hello",[100,200]]
// console.log(arr.concat(arr1));




// let arr=["hello","bye",1,2]
// console.log(arr.reverse());
// console.log(arr);








// let arr="hello"
// console.log(arr.split());



// let arr1=["hello"]
// console.log(arr1.join());







// let a=["hello","hi"]
// console.log(a.join());
// console.log(a.join(""));
// // console.log(a.join(z));
// console.log(a.join("z"));
// console.log(a.join("-"));





// let b=['h','e','l','l','o']
// console.log(b.join());








// let arr=[1,2,3,4,5,6,7,8,9,10]
// console.log(arr.slice(2,8));
// console.log(arr.slice(1,-1));
// console.log(arr.slice(-10));
// console.log(arr);




// let arr=[1,2,3,4,5,6,7,8,9,10]
// // arr.spl \ice(2,2)
// console.log(arr);

// console.log(arr.splice(2,2));




// let arr1=[1,2,3,4,5,6,7,8,9,10]
// arr1.splice(3,3,"hello")
// console.log(arr1);





// let a=[1,2,3,5]
// a.splice(3,0,4)
// console.log(a);




// let arr=[4,3,2,1]
// arr.sort()
// console.log(arr);









// a="hello"
// b=""
// c=a.length
// for(let i=c;i>=0;i--){
//     b=b+a.charAt(i)
// }
// console.log(b);




// let reverse = (n)=>{
//     a=n
//     b=""
//     c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     console.log(b);
    

// }
// reverse()



// let palindrome=(n)=>{
//     let a= n
//     let b=""
//     let c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     if(a==b){
//         console.log("Palindrome");
        
//     }
//     else{
//         console.log("Not Palindrome");
        
//     }
    

// }
// palindrome("racecar")



// let reverse=(n)=>{
//     a=n
//     b=""
//     c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     console.log(b);
    
// }
// reverse("hello")





// let inbuild = (n)=>{
//     let str=n
//     let arr=str.split("")
//     let rev=arr.reverse()
//     let revstr=rev.join("")
//     console.log(revstr);
    


// }
// inbuild("hello")





// let prime = (n)=>{
//     count=0
//     for(i=2;i<=n;i++){
//         if(n%i==0){
//             count=count+1
//         }
//     }
//     if(count==1){
//         console.log("prime");
        
//     }
//     else{
//         console.log("not prime");
        
//     }

// }
// prime(232)




// let prime =(n)=>{
//     for(i=1;i<=n;i++){
//         res=true
//         for(j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break
//             }
//         }
//         if(res==true){
//             console.log(i);
            
//         }
//     }
// }
// prime(20)






// let arr1=[2,9,12,18]
// let arr2=[3,5,11,20]
// let arr3=[]
// let a=arr1.length
// let b=arr2.length
// let i=0
// let j=0
// while(i<a && j<b){
//     if(arr1[i]<arr2[j]){
//         arr3.push(arr1[i])
//         i++
//     }
//     else{
//         arr3.push(arr2[j])
//         j++
//     }
    
    
// }
// console.log(arr3);








// let arr1=[2,9,12,18]
// let arr2=[3,5,11,20]
// let arr3=[]
// let a=arr1.length
// let b=arr2.length
// let i=0
// let j=0
// while(i<a && j<b){
//     if(arr1[i]<arr2[j]){
//         arr3.push(arr1[i])
//         i++
// //     }
// //     else{
// //         arr3.push(arr2[j])
// //         j++
// //     }
// // }
// // console.log(arr3);










// // let arr1=[2,9,12,18]
// // let arr2=[3,5,11,20]

// // let arr3=[]
// // let a=arr1.length
// // let b=arr2.length
// // let i=0
// // let j=0
// // while(i<a && j<b){
// //     if(arr1[i]<arr2[j]){
// //         arr3.push(arr1[i])
// //         i++
// //     }
// //     else{
// //         arr3.push(arr2[j])
// //         j++
// //     }
// // }
// // console.log(arr3);








// // let remove=(n)=>{
// //     a=n
// //     b=""
// //     c=a.length
// //     for(i=0;i<=c;i++){
// //         if(!b.includes(a.charAt(i))){
// //             b=b+a.charAt(i)
// //         }

// //     }
// //     console.log(b);
    
// // }

// // remove("madam")






// let arr=[10,20,30,40,50,60]


// // // higher order array methods


// //1)forEach()
//  arr.forEach((ele,indx,arr1)=>{
//     console.log(ele,indx,arr1);
    
//  })



// let arr3=[10,20,30,40,50,60]

// let arr2=[]
// arr.forEach((a)=>
// {
//     if(a >30){
//         arr2.push(a)
        
        
//     }
// })
// console.log(arr2);


// // add 100 with all the elements and give the array 

// let arr4=[10,20,30,40,50,60]
// let ans=[]
// arr.forEach((a)=>{
    
//     ans.push(a+100)
    

// })
// console.log(ans);

// //add the elements of the array 

// let arr5=[10,20,30,40,50,60]
// let add=0
// arr.forEach((a)=>{
//     add=add+a
    
    
    

// })
// console.log(add);



// //for each method cannot return anything
// //undefined variable declared not initialized

// //2.filter method 
// // it will also take 3 parameter (element,index,array)
// // it will return array
// // what we write in if() confition condition we can write in filter method
// let arr6=[10,20,30,40,50,60]
// let filerarray=arr.filter((ele)=>{
//     return ele>30

// })
// console.log(filerarray);


// //anotherway of writting filer statement in one line 
// // no need of {} and return keyword here

// let filerarray2=arr.filter((ele)=> ele>30)
// console.log(filerarray2);

// //3)map() method 
// // it will work on arithemtic operation
// //it will return arr
// //it can also take 3 parameters


// let arr7=[10,20,30,40,50,60]
// arr.map((ele)=>{
//     return ele+100
// })


// //anotherway of writting filer statement in one line
// // no need of {} and return keyword here
// let maparr=arr.map((a)=> a+100) 
// console.log(maparr);


// //4) reduce
// // //it will also take 4 parameter (accumulator,eleemnt,index,array)
// //it will give AddedElementsInArray
// // let reducearr=arr.reduce((acc,ele)=>{ 
// //     return acc+ele

// // },here we give accumulator value)





// arr8=[10,20,30,40,50,60]

// let reducearr=arr.reduce((acc,ele)=>{ 
//     return acc+ele

// },0)
// console.log(reducearr);

// //5)sort
// let unsort=[4,1,7,2,9,3]
// let asc=unsort.sort((a,b) =>a-b)
// console.log(asc);


// let desc=unsort.sort((a,b) => b-a)
// console.log(desc);









// palindrome


// let palindrome = (n)=>{
//     a=n
//     b=""
//     c=a.length
//     for (let i=c;i<=0;i--){
//         b=b+a.charAt(i)
//     }
//     if(b==n){
//         console.log("Palindrome");
        
//     }
//     else{
//         console.log("Not");
        
//     }
    

// }
// palindrome("Racecar")




// Remove  duplicates


// let remove = (n)=>{
//     a=n
//     b=""
//     c=a.length
//     for(i=0;i<=c;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
// }
// remove("hello")





// let prime=(n)=>{
//     count=0
//     for(let i=2;i<=n;i++){
//         if(n%i==0){
//             count=count+1
//         }
//     }
//     if(count==1){
//         console.log("prime");
        
//     }
//     else{
//         console.log("Not");
        
//     }

// }
// prime(28)




// range prime number


// let prime=(n)=>{
//     for (let i=2;i<=n;i++){
//         res=true
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break
//             }

//         }
//         if(res==true){
//             console.log(i);
            
//         }

        
//     }
// }

// prime(30)




// let reverse = (n)=>{
//     a=n
//     b=""
//     c=a.length
//     for(let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     console.log(b);
    

// }
// reverse("madam")





// ! Object



// let ob={
//     name:"Dinga",
//     age:20,
//     skill:["Sql","python","web"],
//     do:()=>{
//         console.log("i am Object Method");
        

//     }
// }


// console.log(ob["name"]);
// console.log(ob["age"]);
// console.log(ob["skill"]);


// console.log(name);
// console.log(ob.name);
// console.log(ob.age);
// console.log(ob.skill);
// console.log(ob.skill[0]);
// console.log(ob.skill[1]);
// console.log(ob.skill[2]);


// console.log(ob.do);
// ob.do()





// ! modify



// ob.name="DINGA"
// console.log(ob.name);
// console.log(ob);


// console.log(ob.name="dinga");




// ob.age=100
// console.log(ob.age);
// console.log(ob);



// console.log(ob.age=200);
// console.log(ob);








// ! how to add new property




// ob.branch="Qspider"
// console.log(ob.branch);
// console.log(ob);



// console.log(ob.course="developer");
// console.log(ob);


// // ob.course="developer"
// // console.log(ob.course);
// // console.log(ob);



// console.log(ob.skill);

// ob.skill.push("Django")
// console.log(ob.skill);



// ! how to delete

// console.log(ob);


// delete ob.course
// console.log(ob.course);





// ! mwthods

// ! 1. Object.keys()


// let ob={
//     name:"Dinga",
//     age:20,
//     skill:["Sql","python","web"],
//     do:()=>{
//         console.log("i am Object Method");
        

//     }
// }


// let keys = Object.keys(ob)
// console.log(keys);



// console.log(Object.keys(ob));








let student = {
    sname:"Dinga",
    age:20,
    skill:["Sql","python","Javascript"],
    loc:"chennai",
    pin:600026
}




// console.log(student);






// let keys = Object.keys(student)
// console.log(keys);



// console.log(Object.keys(student));




// ! 2.Object.values


// let values = Object.values(student)
// console.log(values);


// console.log(Object.values(student));



// ! 3.Object.entries



// let entries = Object.entries(student)
// console.log(entries);




// console.log(Object.entries(student));




// Object.freeze(student)



// student.phno=1234567890

// student.age=20

// delete student.age



// console.log(student

// );





// !Object.seal()



// console.log(student);

// Object.seal(student)


// student.age=100

// student.course="developer"

// delete student.age

// console.log(student);





// ! Object.assign()



let ob1={
    name:"Dinga",
    age:20
}



let ob2={
    city:"chennai",
    pin:600026
}




console.log(Object.assign(ob1,ob2));
console.log(ob1);
console.log(ob2);





console.log(ob1.hasOwnProperty("named"));
































































