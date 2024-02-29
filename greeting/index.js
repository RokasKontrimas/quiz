let userName = 'Rokas';
let isLoggedIn = true;

let currentDate = new Date();
let currentTime = new Date();

currentTime = currentTime.getHours()
let userBirthday = new Date('2024-02-28');

let morning = new Date();
morning.setHours(5);
morning = morning.getHours()

let afternoon = new Date();
afternoon.setHours(13);
afternoon = afternoon.getHours()

let evening = new Date();
evening.setHours(19);
evening.getHours()

if (currentTime < 0 || currentTime > 24) {
    console.error('Invalid time: Time must be between 0 and 24.');
} else {
    let currentDayZone;
    if (currentTime >= morning && currentTime < afternoon) {
        currentDayZone = 'Good Morning';
    } else if (currentTime >= afternoon && currentTime < evening) {
        currentDayZone = 'Good Afternoon';
    } else {
        currentDayZone = 'Good Evening';
    }
    if (isLoggedIn) {
        if (currentDate.getMonth() === userBirthday.getMonth() && currentDate.getDay() === userBirthday.getDay()) {
            console.log(`${currentDayZone}, ${userName}, and have a great birthday!`);
        } else {
            console.log(`${currentDayZone}, ${userName}.`);
        }
    } else {
        console.log(`${currentDayZone}`);
    }
}