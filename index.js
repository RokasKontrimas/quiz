// quiz one
var quizAnswers1 = 0;

let question11Correct = false;
let question12Correct = false;

let question11 = "Kokios spalvos yra morka?";
let question12 = "Ar apelsinas yra oranzinis?";

let question11Answer = "oranzine";
let question12Answer = "taip";

let userAnswer11 = "oranzine";
let userAnswer12 = "taip";

// quiz two
var quizAnswers2 = 0;

let question21Correct = false;
let question22Correct = false;

let question21 = "Ar duona yra skanesne uz batona?";
let question22 = "Ar bandele skaitosi kaip duonos kepinys?";

let question21Answer = "ne";
let question22Answer = "taip";

let userAnswer21 = "ne";
let userAnswer22 = "taip";

// quiz three
var quizAnswers3 = 0;

let question31Correct = false;
let question32Correct = false;
let question33Correct = false;

let question31 = "Ar jautienos kepsnys yra skanesnis uz kiaulienos kepsny?";
let question32 = "Ar kiaulienos kepsnys yra skanesnis uz vistienos kepsny?";
let question33 = "ar vistienos kepsnys yra skanesnis uz jautienos kepsny?";

let question31Answer = "ne";
let question32Answer = "ne";
let question33Answer = "ne";

let userAnswer31 = "taip";
let userAnswer32 = "asdas";
let userAnswer33 = "ne";


// Pirmas lygis
if (question11Answer === userAnswer11) {
    console.log(++quizAnswers1);
    question21Correct = true;
}
if (question12Answer === userAnswer12) {
    console.log(++quizAnswers1);
    question22Correct = true;

}
if (quizAnswers1 > 1) {
    console.log('1 Lygis: i abu klausimus atsakei teisingai ir patekai i kita lygi!');
} else if (quizAnswers1 > 0 && question11Correct === false) {
    console.log(`1Lygis: Patekai i kita lygi, bet blogai atsakei i \'${question11}\' klausima`)
} else if (quizAnswers1 > 0 && question12Correct === false) {
    console.log(`1Lygis: Patekai i kita lygi, bet blogai atsakei i \'${question12}\' klausima`)
} else if (quizAnswers1 === 0) {
    console.log('1 Lygis: abu atsakymus pateikei klaidingus ir nepatekai i kita lygi..');
}
// Antras lygis
if (question21Answer === userAnswer21) {
    console.log(++quizAnswers2);
    question1Correct = true;
}
if (question22Answer === userAnswer22) {
    console.log(++quizAnswers2);
    question2Correct = true;

}

if (quizAnswers2 > 1) {
    console.log(`2 Lygis: atsakei i ${quizAnswers2}/2 klausimus ir patekai i kita lygi!`);
} else if (quizAnswers2 > 0 && question21Correct === false) {
    console.log(`2Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question21}\' klausima`)
} else if (quizAnswers2 > 0 && question22Correct === false) {
    console.log(`2Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question22}\' klausima`)
} else if (quizAnswers2 === 0) {
    console.log('2 Lygis: abu atsakymus pateikei klaidingus ir nepatekai i kita lygi..');
}

// trecias lygis
if (question31Answer === userAnswer31) {
    console.log(++quizAnswers3);
    question31Correct = true;
}
if (question32Answer === userAnswer32) {
    console.log(++quizAnswers3);
    question32Correct = true;

}
if (question33Answer === userAnswer33) {
    console.log(++quizAnswers3);
    question33Correct = true;
}
if (quizAnswers3 > 2) {
    console.log(`3 Lygis: atsakei i ${quizAnswers3}/3 klausimus teisingai ir patekai i kita lygi!`);
} else if (quizAnswers3 > 1 && question31Correct && question32Correct && !question33Correct) {
    console.log(`3 Lygis: Patekai i kita lygi, bet blogai atsakei i \'${question31} \' klausima`)
} else if (quizAnswers3 > 1 && question31Correct && !question32Correct && question33Correct) {
    console.log(`3 Lygis: Patekai i kita lygi, bet blogai atsakei i \'${question32} \' klausima`)
} else if (quizAnswers3 > 1 && !question31Correct && question32Correct && question33Correct) {
    console.log(`3 Lygis: Patekai i kita lygi, bet blogai atsakei i \'${question31} \' klausima`)
} else if (quizAnswers3 > 0 && question31Correct && !question32Correct && !question33Correct) {
    console.log(`3 Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question32}\' ir \'${question33} \' klausimus`)
} else if (quizAnswers3 > 0 && !question31Correct && question32Correct && !question33Correct) {
    console.log(`3 Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question32}\' ir \'${question33} \' klausimus`)
} else if (quizAnswers3 > 0 && !question31Correct && !question32Correct && question33Correct) {
    console.log(`3 Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question32}\' ir \'${question33} \' klausimus`)
} else if (quizAnswers3 < 1) {
    console.log(`3 Lygis: ${quizAnswers3} atsakymus pateikei klaidingus ir nepatekai i kita lygi..`);
}