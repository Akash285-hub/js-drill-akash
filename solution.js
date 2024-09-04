 
  const person  = require('./person');

// Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function problem1(){
    let emails=[]
    for(let i=0 ; i < person.length ; i++){
        emails.push(person[i].email)
    }
    return `Emails are: ${emails}\n`;
}

// Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function problem2(age){
  let hobbies=[]
  for(let i =0 ; i < person.length ; i++){
      if(person[i].age===age){
          hobbies.push(person[i].hobbies)
      }
  }
  return `Hobbies are: ${hobbies}\n`;
}

// Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.


function problem3(){
  let name=[]
  for(let i =0 ; i < person.length ; i++){
      if(person[i].isStudent===true && person[i].country==='Australia'){
          name.push(person[i].name)
      }
  }
  return `Name of the student is: ${name}\n`;
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function problem4(index){
  let name=[]
  let city=[]

  for(let i =0 ; i < person.length ; i++){
      if(person[i].id===index ){
        name.push(person[i].name);
        city.push(person[i].city);  
      }
  }
  return `Name :${name}\nCity :${city}\n`

}

// Implement a loop to access and print the ages of all individuals in the dataset.
function problem5(){
   let ages=[];
   for(let i=0  ; i<person.length ; i++){
      ages.push(person[i].age)
   }
   return `Ages are: ${ages}\n`;
}

// Create a function to retrieve and display the first hobby of each individual in the dataset.

function problem6(){
  let hobby=[]
  for(let i=0; i<person.length ; i++){
    hobby.push(person[i].hobbies[0]);
  }
  return `First hobbies are : ${hobby}\n`;
}

// Write a function that accesses and prints the names and email addresses of individuals aged 25.

function problem7(age){
 let  name=[];
 let email=[];
  for(let i=0 ; i< person.length ; i++){
    if(person[i].age==age){
    name.push(person[i].name);
    email.push(person[i].email);    
    }
  }
  return `Name :${name}\nEmail :${email}\n`
}

// Implement a loop to access and log the city and country of each individual in the dataset.
function problem8(){
  city=[];
  country=[];

  for(let i=0 ; i < person.length ; i++){
    city.push(person[i].city);
    country.push(person[i].country);
  
  }
   return `Cities are :${city}\nCountries are :${country}\n`
  }

module.exports={problem1,problem2,problem3,problem4,problem5,problem6,problem7,problem8}
