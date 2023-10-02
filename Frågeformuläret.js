const prompt = require('prompt-sync')({ sigint: true });
const question = require('./questions.json');
const result = require('../results.json');
//console.log(result);

const fs = require('fs'); //fs ger oss möjlighet att skriva till filer

let name = (prompt("Skriv in ditt namn: "));
console.log(`${name}`);


const animalQuestions = [question[0].Question1, question[0].Question2, question[0].Question3, question[0].Question4, question[0].Question5, question[0].Question6, question[0].Question7, question[0].Question8, question[0].Question9, question[0].Question10, question[0].Question11, question[0].Question12, question[0].Question13, question[0].Question14, question[0].Question15, question[0].Question16];

const userData =
{
  Namn: name,
  Date: Date(),
};

const AnimalScore =

{
  "Katt": 0, //sätter till noll för att nyckeln ska vara en siffra
  "Hund": 0,
  "Fisk": 0,
  "Kanin": 0
};

for (let i = 0; i < animalQuestions.length; i++) {
  console.log(`${animalQuestions[i].MyQuestion}` + "\nSvara 1 eller 2: " + "\n 1 = Ja" + "\n 2 = Nej"); //hämta fråga i json"

  let svar = Number(prompt().trim())
  if (svar == 1) {
    AnimalScore.Katt += animalQuestions[i].Ja.Katt;
    AnimalScore.Hund += animalQuestions[i].Ja.Hund;
    AnimalScore.Fisk += animalQuestions[i].Ja.Fisk;
    AnimalScore.Kanin += animalQuestions[i].Ja.Kanin;
  }

  //console.log(animalQuestions[i].Ja.Katt, animalQuestions[i].Ja.Hund, animalQuestions[i].Ja.Fisk, animalQuestions[i].Ja.Kanin);

  else if (svar == 2)
  //(svar.toLowerCase().trim() == "nej")
  {
    AnimalScore.Katt += animalQuestions[i].Nej.Katt;
    AnimalScore.Hund += animalQuestions[i].Nej.Hund;
    AnimalScore.Fisk += animalQuestions[i].Nej.Fisk;
    AnimalScore.Kanin += animalQuestions[i].Nej.Kanin;
    //console.log(animalQuestions[i].Nej.Katt, animalQuestions[i].Nej.Hund, animalQuestions[i].Nej.Fisk, animalQuestions[i].Nej.Kanin);
  }
  else {
    (svar = isNaN)
    i-- //för att stanna kvar på samma fråga, i minskas med 1
    console.log("Du måste skriva in 1 för Ja eller 2 för Nej!")
  }
}

const totalPoints = AnimalScore.Katt + AnimalScore.Hund + AnimalScore.Fisk + AnimalScore.Kanin;


AnimalScore.Katt = (AnimalScore.Katt / totalPoints * 100);
AnimalScore.Hund = (AnimalScore.Hund / totalPoints * 100);
AnimalScore.Fisk = (AnimalScore.Fisk / totalPoints * 100);
AnimalScore.Kanin = (AnimalScore.Kanin / totalPoints * 100);

//console.log(AnimalScore.Katt + "%");
//AnimalScore.Katt += "%"; //för att slippa skriva in userData.Katt två ggr
AnimalScore.Katt = AnimalScore.Katt + "%"; //konkatenering dvs. omvandla ett tal till en sträng
AnimalScore.Hund = AnimalScore.Hund + "%";
AnimalScore.Fisk = AnimalScore.Fisk + "%";
AnimalScore.Kanin = AnimalScore.Kanin + "%";

/*function compareNumbers(a, b) {
  return a - b;
}*/

const SorteraArray = [AnimalScore.Katt, AnimalScore.Hund, AnimalScore.Fisk, AnimalScore.Kanin];
for (let i = 0; i < SorteraArray.length; i++);
{
  SorteraArray.sort(); // [1, 5, 40, 200]
  SorteraArray.reverse();
}

//Sortera.unshift(userData.Namn) //först i listan
//Sortera.push(userData.Date) //sist i listan
//console.log(SorteraArray);
//}


const ResultArray = [result, userData, AnimalScore, SorteraArray]; //hämtar det som finns i result.json och userData och sparar i resultatArrayen
//console.log(ResultArray);


fs.writeFile('./results.json', JSON.stringify(ResultArray, null, 2), (err) => {
  if (err) throw err;
  //bytte ut userData mot ResultArray i stringify ovan för att kunna spara in de olika resultaten.
  console.log('Data written to file')
});