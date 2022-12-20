/*------------------------------------TRACCIA---------------------------------------------

In pieno tema natalizio sfruttiamo le timing functions per  fare il conto alla rovescia per il Natale!  Ogni secondo il nostro countdown dovrà scalare fino alla mezzanotte del 25 dicembre!

----------------------------------------------------------------------------------------*/


//Pick target elements
const targetDays = document.getElementById('days');
const targetHours = document.getElementById('hours');
const targetMinutes = document.getElementById('minutes');
const targetSeconds = document.getElementById('seconds');

//Pick end date

const finalDateInMs = new Date('December 25 2022').getTime();
console.log(finalDateInMs);


//Conversion rates

const msToSeconds = 1000;
const msToMinutes = msToSeconds * 60;
const msToHours = msToMinutes * 60;
const msToDays = msToHours * 24;

//Countdown function

const timer = setInterval(() => {

    //Pick actual date
    const actualDateInMs = new Date().getTime();
    console.log(actualDateInMs);

    //Calculate difference between now and end date in MS
    const dateDifference = finalDateInMs - actualDateInMs;
    console.log(dateDifference);

    //Convert date in time units
    let daysLeft = Math.floor(dateDifference / msToDays);
    daysLeft = daysLeft < 10 ? "0" + daysLeft : daysLeft;
    console.log('days ' + daysLeft);
    let hoursLeft = Math.floor((dateDifference % msToDays) / msToHours);
    hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    console.log('hours ' + hoursLeft);
    let minutesLeft = Math.floor((dateDifference % msToHours) / msToMinutes);
    minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    console.log('minutes ' + minutesLeft);
    let secondsLeft = Math.floor((dateDifference % msToMinutes) / msToSeconds);
    secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
    console.log('seconds ' + secondsLeft);

    //Set clear interval
    if (daysLeft < 0) {
        clearInterval(timer);
    }

    //Print in page
    targetDays.innerText = daysLeft;
    targetHours.innerText = hoursLeft;
    targetMinutes.innerText = minutesLeft;
    targetSeconds.innerText = secondsLeft;
    


}, 1000)

