// Question 28

let age = 18
if(age >= 1 && age < 10 ){
    console.log("You Are Kid");
}else if(age >= 11 && age < 20 ){
    console.log("You Are Young ");
    
}else if(age >= 21 && age <30 ){
    console.log("You Are Adult ");
    
}else{
    console.log("You Are old age")
}

// Question 29

let fruitsName:string[] = ["Apple","Banana","Pear"]
if(fruitsName.includes("Apple") ){
    console.log("I like Apple");  
}
else if(fruitsName.includes("Banana")){
    console.log("I like Banana");  
}
else if(fruitsName.includes("Pear")){
    console.log("I like Pear");  
} else{
    console.log("I dont like Fruits");
    
}

// Question 30

let userNames:string[] = ["saad","admin","bashar"]
console.log(`Hello`,userNames[0]);
console.log(`Hello`,userNames[1]);
console.log(`Hello`,userNames[2]);

// OR

let userName:string[] = ["admin","user1","user2"]
userName.forEach( userName =>{
if(userName==="admin"){
    console.log("Hello admin would you like to check report");  
}else {
    console.log(`hello ${userName} thank you for logging in again`);
    
}
})




