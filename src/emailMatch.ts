interface Person {
  name: string;
  age: number;
  email: string;
}

const persons: Person[] = [
  { name: "Masud", age: 23, email: "abdullainfo30@gmail.com" },
  { name: "Sorif", age: 24, email: "sorif@gmail.com" },
  { name: "Monir", age: 25, email: "monir@gmail.com" },
];

function findEmailPerson(
  persons: Person[],
  email: string
): Person | null | undefined {
  for (const person of persons) {
    if (person.email === email) {
      return person;
    } else {
      return null;
    }
  }
}

const findToEmail: string = "abdullainfo30@gmai.com";

const foundPerson = findEmailPerson(persons, findToEmail);

if(foundPerson){
    console.log("Person Found: ", foundPerson);
    
}else{
    console.log("No person found with email : ", findToEmail);
    
}
// console.log(foundPerson);
