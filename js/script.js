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
    const daysLeft = Math.floor(dateDifference / msToDays);
    console.log('days ' + daysLeft);
    const hoursLeft = Math.floor((dateDifference % msToDays) / msToHours);
    console.log('hours ' + hoursLeft);
    const minutesLeft = Math.floor((dateDifference % msToHours) / msToMinutes);
    console.log('minutes ' + minutesLeft);
    const secondsLeft = Math.floor((dateDifference % msToMinutes) / msToSeconds);
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

