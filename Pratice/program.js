// let a=5
// res=true
// b=2
// for (let i=b;a>0;i++)
// {
//     if(a%b==0)
//     {
//         res=false
//     }
// if (res==true)
// {
//     console.log('Prime');
    
// }
// }





// function prime(n){
//     let count=0
//     for(let i=0;i<=n;i++){
//         if (n%i==0){
//             count=count+1
//         }
//     }
// if (count==2){
//     console.log("it is prime ");
    
// }
// else{
//     console.log("Not");
    
// }
// }.

// let a="madam"
// let b=""
// let c=a.length
// for(let i=0;c>0;i++){
//     if (!b.includes(a.charAt(i))){
//         b=a.charAt(i)
//     }
// }
// console.log(b);



// for(let i=1;i<=20;i++){

//     let res=true;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             res=false;
//             break

//         }
//     }
//     if(res){
//         console.log(i);
        
//     }
        
    
// }







// n=20
// for(let i=1;i<=n;i++){
//     res=true;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             res=false;
//             break
//         }
//     }
//     if (res==true){
//         console.log(i);
        
//     }
// }



// n=20

// for(let i=1;i<=n+1;i++){
//     b=""
//     res=true;
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             res=false;
//             break
//         }
//     }
//     if (res==true){
//         b=b+i
//         console.log(b);
        
//     }
// }




// function prime(n){
//     for(let i=1;i<=n+1;i++){
//         res=true;
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false;
//                 break
//             }
//         }
//         if (res==true){
//             console.log(i);
            

//         }
        
//     }
// }
// prime(20)






// let prime=(n)=>{
//     for(let i=1;i<=n;i++){
//         res=true;
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false;
//                 break
//             }
//         }
//         if(res==true){
//             console.log(i);
            
//         }
//     }
// }
// prime(20)







// let prime=function(n){
//     for (let i=1;i<=n;i++){
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
// prime(50)



// function prime(n){
//     for(let i=1;i<=n;i++){
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











// let arr1=[2,9,12,18]
// let arr2=[3,5,11,20]
// let arr3=[]
// let a=arr1.length
// let b=arr2.length
// let i=0,j=0
// while (i<a && j<b){
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
// let a1=arr1.length
// let b=arr2.length
// let i=0
// let j=0
// while (i<a1 && j<b){
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







// ! Palindrome


// let palindrome=(n)=>{
//     a=n
//     b=""
//     c=a.length
//     for (let i=c;i>=0;i--){
//         b=b+a.charAt(i)
//     }
//     console.log(b);
    
// }
// palindrome("racecar")






// let remove= (n)=>{
//     a=n
//     b=""
//     c=a.length
//     for(let i=0;i<=c;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
// }
// remove("madam")


// !primenumber


// let prime =(n)=>{
//     count=0
//     for (let i=1;i<=n;i++){
//         if(n%i==0){
//             count=count+1
//         }
//     }
//     if(count==2){
//         console.log("Prime");
        
//     }
//     else{
//         console.log("Not Prime");
        
//     }

// }

// prime(50)

//! range of prime number 




// let prime1 = (n)=>{
//     for(let i=2;i<=n;i++){
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
// prime1(20)



// let arr1=[2,3,5,6]
// let arr2=[9,8,7,10]
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






// ! palindrome



// let palindrome=(n)=>{
//     let a=n
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





// a=12121
// b=a
// c=""
// while(a>=0){
//     rem=a%10
//     c=c*10+rem
//     a=a/10
// }
// console.log(c);




// !remove duplicates



// let remove=(n)=>{
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=0;i<=c;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
// }
// remove("racecar")





// let remove=(n)=>{
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=0;i<=c;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
// }
// remove("malayalam")




// let remove = (n)=>{
//     let a=n
//     let b=""
//     let c=a.length
//     for(let i=0;i<=c;i++){
//         if(!b.includes(a.charAt(i))){
//             b=b+a.charAt(i)
//         }
//     }
//     console.log(b);
    
// }
// remove("racecar")





// let prime = (n)=>{
//     count=0
//     for (i=2;i<=n;i++){
//         if(n%i==0){
//             count=count+1
//         }
//     }
//     if(count==1){
//         console.log("prime");
        
//     }
//     else{
//         console.log("Not Prime");
        
//     }


// }
// prime(23)



// let prime = (n)=>{
//     let b=""
//     for(let i=2;i<=n;i++){
//         res=true
//         for(let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break
//             }
            
//         }
//         if(res==true){
//             // b=b+i
//             console.log(i);
            
            
//         }
//     }

// }
// prime(20)






// let prime=(n)=>{
//     for(let i=2;i<=n;i++){
//         res=true
//         for ( let j=2;j<i;j++){
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
// prime(40)





// let prime = (n)=>{
//     b=[]
//     for(let i=2;i<=n;i++){
//         res=true
//         for ( let j=2;j<i;j++){
//             if(i%j==0){
//                 res=false
//                 break

//             }
//         }
        
//         if(res==true){
//             b.push(i)
            
            
            
            
            
//         }
//     }
//     console.log(b);
// }
// prime(20)



// let arr1=[2,9,12,18]
// let arr2=[3,5,11,20]
// let arr3=[]
// let i=0
// let j=0
// let a=arr1.length
// let b=arr2.length

// while (i<a && j<b){
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

// !Error

var a
console.log(a);



console.log(a);

var a
a=20
console.log(a);







console.log(a1);

let a1
a1=20
console.log(a1);























