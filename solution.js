 
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
module.exports={problem1,problem2,problem3}
