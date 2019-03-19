let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegistration = true;

let runnerAge = 52;

if (earlyRegistration == true && runnerAge > 18) {
  raceNumber = raceNumber + 1000;
  console.log(`Your race is at 9:30am. You're race number is ${raceNumber}.` );
}
else if (earlyRegistration == false && runnerAge > 18) {
  console.log(`Late adults run at 11:00am. Your race number is ${raceNumber}. `);
}
else if (runnerAge < 18) {
  console.log(`Youth registrants run at 12:30pm. Your race number is ${raceNumber}.` );
}
else {
  console.log("Please see the registration desk for further information. ");
}