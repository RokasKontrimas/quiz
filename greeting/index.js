let userName = 'Rokas';
let isLoggedIn = false;
let currentTime = new Date();
let userBirthday = new Date('2024-02-28');
let morning = new Date();
morning.setHours(5);
let afternoon = new Date();
afternoon.setHours(13);
let evening = new Date();
evening.setHours(19);
let currentDayZone = '';

if (currentTime.getHours() >= morning.getHours() && currentTime.getHours() < afternoon.getHours()) {
    currentDayZone = 'Good Morning';
} else if (currentTime.getHours() >= afternoon.getHours() && currentTime.getHours() < evening.getHours()) {
    currentDayZone = 'Good Afternoon';
} else {
    currentDayZone = 'Good Evening';
}
if (isLoggedIn) {
    if (currentTime.getMonth() === userBirthday.getMonth() && currentTime.getDate() === userBirthday.getDate()) {
        console.log(`${currentDayZone}, ${userName}, and have a great birthday!`);
    } else {
        console.log(`${currentDayZone}, ${userName}.`);
    }
} else {
    console.log(`${currentDayZone}`);
}
