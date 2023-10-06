const prompt = require('prompt-sync')({ sigint: true });
const question = require('./questions.json');
const result = require('./results.json');

const fs = require('fs');

let name = (prompt("Skriv in ditt namn: "));
console.log(`${name}`);


const animalQuestions = [question[0].Question1, question[0].Question2, question[0].Question3, question[0].Question4, question[0].Question5, question[0].Question6, question[0].Question7, question[0].Question8, question[0].Question9, question[0].Question10, question[0].Question11, question[0].Question12, question[0].Question13, question[0].Question14, question[0].Question15, question[0].Question16];

const userData =
{
  Namn: name,
  Date: Date(),

  Result: [
    {
      Animal: "Katt",
      Score: 0
    },
    {
      Animal: "Hund",
      Score: 0
    },
    {
      Animal: "Fisk",
      Score: 0
    },
    {
      Animal: "Kanin",
      Score: 0
    }
  ]
}


for (let i = 0; i < animalQuestions.length; i++) {
  console.log(`${animalQuestions[i].MyQuestion}` + "\nSvara 1 eller 2: " + "\n 1 = Ja" + "\n 2 = Nej");

  let svar = Number(prompt().trim())
  if (svar == 1) {
    userData.Result[0].Score += animalQuestions[i].Ja.Katt;
    userData.Result[1].Score += animalQuestions[i].Ja.Hund;
    userData.Result[2].Score += animalQuestions[i].Ja.Fisk;
    userData.Result[3].Score += animalQuestions[i].Ja.Kanin;
  }

  else if (svar == 2) {
    userData.Result[0].Score += animalQuestions[i].Nej.Katt;
    userData.Result[1].Score += animalQuestions[i].Nej.Hund;
    userData.Result[2].Score += animalQuestions[i].Nej.Fisk;
    userData.Result[3].Score += animalQuestions[i].Nej.Kanin;

  }
  else {
    (svar = isNaN)
    i--
    console.log("Du måste skriva in 1 för Ja eller 2 för Nej!")
  }
}

const totalPoints = userData.Result[0].Score + userData.Result[1].Score + userData.Result[2].Score + userData.Result[3].Score;


userData.Result[0].Score = (userData.Result[0].Score / totalPoints * 100);
userData.Result[1].Score = (userData.Result[1].Score / totalPoints * 100);
userData.Result[2].Score = (userData.Result[2].Score / totalPoints * 100);
userData.Result[3].Score = (userData.Result[3].Score / totalPoints * 100);

{
  userData.Result.sort((a, b) => a.Score - b.Score);
  userData.Result.reverse();
}

userData.Result[0].Score = userData.Result[0].Score + "%";
userData.Result[1].Score = userData.Result[1].Score + "%";
userData.Result[2].Score = userData.Result[2].Score + "%";
userData.Result[3].Score = userData.Result[3].Score + "%";

const ResultArray = [result, userData];

fs.writeFile('./results.json', JSON.stringify(ResultArray, null, 2), (err) => {
  if (err) throw err;
  console.log('Data written to file')
});