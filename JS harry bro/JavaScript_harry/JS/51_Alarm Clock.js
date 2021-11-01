console.log("This is tutorial 54");
const alarmSubmit = document.getElementById('alarmSubmit');

// 2021-04-20 19:41:00

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('C:\\Users\\Syed Numan Rehman\\Music\\Phrase Prant - josh pan.mp3');


// function to play the alarm ring tone
function ringBell() {
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault();   // prevent page reload  
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;   //  give remmaining time in seconds
    console.log("timeToAlarm :",timeToAlarm);
    if (timeToAlarm >= 0) {  //  if alarm is in future , then set alarm
        setTimeout(() => {
            console.log("Ringing now")
            ringBell();
        }, timeToAlarm);
    }
}
