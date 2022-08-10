// Create a function to generate a quiz.

// Your function will need these inputs:

// Name

// Class

// Subject

// Date

// And these inputs to the function and output it as a fully-formed quiz.




// function quiz(name,class_name,subject,date){
// let name_one = `Write down your name: ${name}`;
// let group = `Write down you class: ${class_name}`;
// let course = `Write down your subject of choice: ${subject}`;
// let quiz_date = `Write down the date: ${date}`;
// console.log(quiz_date);
// console.log(course);
// console.log(name_one);
// console.log(group);

// }
// quiz("Haley Rose","B.Lab","Python","8/8/22")



// function one1(){

//     return {
  
//         bar: "hello"
  
//     };
 
//   }
//   one1();
//     function two2(){
  
//         return  {
      
//             bar: "hello"
      
//         };
      
//       }
//     two2();
 


// Write a function that takes two values, say a and b, as arguments
// Return true if the two values are equal and of the same type

function checkValues(a,b) {
  if(a==b & typeof(a)===typeof(b)){
   console.log(true);
  }
  else{
    console.log(false);
  }
}
checkValues(58,98);


// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'

function returnChar(a,n) {
  let output = a[n];
  console.log(output);;
  }
returnChar("Champion",2) 

// for(char in a){
//   if(char[n] in a){
   
//   }
//   console.log(char);
// }

// returnChar("Champion",3);

//   for(char in a){
    
//   }
//   if (a[n] in a){
//     console.log(a);
//   }
// else{
//   console.log("nothing");
// }


// returnChar("Champion",3);
// sudo
// a="Balloon"
// if n was 6 then the answer should return the 6th character of a n was 6  then the answer should return the 6th character of and if the number specified is not in the string print something.


// Write a function that takes a value as argument
// Return the type of the value

function returnType(value) {
  let type = typeof(value);
  console.log(type);
}
returnType(88);


// Write a function that takes a string as an argument
// Extract the last 3 characters from the string
// Return the result

function returnLastThree (word) {
 let letter = word.substring(word.length -3)
 console.log(letter);
}
returnLastThree ("Challenge");

// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function returnProperty(obj){
  if ('country' in obj){
    console.log(obj['country']);
  }
  
}
returnProperty({name:"Shirleen",country:"Sweden"});


// Write a function that takes two numbers (a and b) as argument
// Sum a and b
// Return the result
function sum (num1,num2){
  let result = num1 + num2 ;
  console.log(result);
}
sum(99 ,43);