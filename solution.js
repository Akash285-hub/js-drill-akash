 
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

module.exports={problem1,problem2}
