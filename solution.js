 
  const person  = require('./person');

// Given the dataset of individuals, write a function that accesses and returns the email addresses of all individuals.

function problem1(){
    let emails=[]
    for(let i=0 ; i < person.length ; i++){
        emails.push(person[i].email)
    }
    return emails;
}

// Implement a function that retrieves and prints the hobbies of individuals with a specific age, say 30 years old.

function problem2(age){
  let hobbies=[]
  for(let i =0 ; i < person.length ; i++){
      if(person[i].age===age){
          hobbies.push(person[i].hobbies)
      }
  }
  return hobbies;
}

// Create a function that extracts and displays the names of individuals who are students (`isStudent: true`) and live in Australia.


function problem3(){
  let name=[]
  for(let i =0 ; i < person.length ; i++){
      if(person[i].isStudent===true && person[i].country==='Australia'){
          name.push(person[i].name)
      }
  }
  return name;
}

//    Write a function that accesses and logs the name and city of the individual at the index position 3 in the dataset.

function problem4(index){
  let access=[]
  for(let i =0 ; i < person.length ; i++){
      if(person[i].id===index ){
          access.push(person[i].name ,person[i].city)
      }
  }
  return access;
}

// Implement a loop to access and print the ages of all individuals in the dataset.
function problem5(){
   let ages=[];
   for(let i=0  ; i<person.length ; i++){
      ages.push(person[i].age)
   }
   return ages;
}

// Create a function to retrieve and display the first hobby of each individual in the dataset.

function problem6(){
  let hobby=[]
  for(let i=0; i<person.length ; i++){
    hobby.push(person[i].hobbies[0]);
  }
  return hobby;
}

// Write a function that accesses and prints the names and email addresses of individuals aged 25.

function problem7(age){
  namemail=[];
  for(let i=0 ; i< person.length ; i++){
    if(person[i].age==age){
    namemail.push(person[i].name,person[i].email);    
    }
  }
  return namemail;
}



module.exports={problem1,problem2,problem3,problem4,problem5,problem6,problem7}
