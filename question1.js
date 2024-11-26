// 1. Trängselskatt (3p)
// Skriv en funktion totalTax som räknar ut den totala trängselskatten som ska betalas
// för en array av bil-objekt. Varje bil-objekt har ett registreringsnummer och ett
// klockslag då de passerade betalstationen.

// Här är kostnader för olika tider:
// 6:00 - 6:59: 30 kr
// 7:00 - 7:59: 45 kr
// 8:00 - 8:59: 30 kr
// 9:00 - 18:59: 20 kr
// Övriga tider är gratis.

if (hours >= 7 && hours < 8) {
  return "pris: 45kr"
} else if (hours >= 6 && hours =< 8) {
  return "pris: 30kr"
} else (hours >= 9 && )

7-8 = 45
6-7 && 8-9 = 30
9-19 = 20





// Använd funktionen getHour för att plocka ut timmen ur ett klockslag.
// T.ex. "17:45" ger resultatet 17.

function getHour(input) {
  return parseInt(input.split(":")[0]);
}

// Arrayen av bilar följer denna struktur:
const taxedCars = [
  { registrationNumber: "TUU893", time: "6:30" },
  { registrationNumber: "YNK023", time: "7:10" },
  { registrationNumber: "BHN113", time: "8:30" },
  { registrationNumber: "LOP733", time: "18:02" },
  { registrationNumber: "MGY803", time: "23:30" },
];


function totalTax(item) {
  

  
 let newHours = item.forEach(getHour(time));
 

 if (newHours > 19 && <   )

  
}

module.exports = totalTax;
