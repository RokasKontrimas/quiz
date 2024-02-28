var quizAnswers1 = 0;
var quizAnswers2 = 0;
var quizAnswers3 = 0;

let question1Correct = false;
let question2Correct = false;
let question3Correct = false;

let level1 = 1;
let level2 = 2;
let level3 = 3;

let question1 = "Kokios spalvos yra morka?";
let question2 = "Ar apelsinas yra oranzinis?";
let question3 = "Ar citrina yra rugstesne uz laima?";

let question1Answer = "oranzine";
let question2Answer = "taip";
let question3Answer = "nezinau";

let userAnswer1 = "oranzine";
let userAnswer2 = "taip";
let userAnswer3 = "nezinau";
// Pirmas lygis
if (level1) {
    if (question1 && question1Answer === userAnswer1) {
        console.log(++quizAnswers1);
        question1Correct = true;
    }
    if (question2 && question2Answer === userAnswer2) {
        console.log(++quizAnswers1);
        question2Correct = true;

    }
    if (quizAnswers1 > 1) {
        console.log('1 Lygis: i abu klausimus atsakei teisingai ir patekai i kita lygi!');
    } else if (quizAnswers1 > 0 && question1Correct === false) {
        console.log(`1Lygis: Patekai i kita lygi, bet blogai atsakei i \'${question1}\' klausima`)
    } else if (quizAnswers1 > 0 && question2Correct === false) {
        console.log(`1Lygis: Patekai i kita lygi, bet blogai atsakei i \'${question2}\' klausima`)
    } else if (quizAnswers1 === 0) {
        console.log('1 Lygis: abu atsakymus pateikei klaidingus ir nepatekai i kita lygi..');
    }
}
// Antras lygis
if (level2) {
    if (question1 && question1Answer === userAnswer1) {
        console.log(++quizAnswers2);
        question1Correct = true;
    }
    if (question2 && question2Answer === userAnswer2) {
        console.log(++quizAnswers2);
        question2Correct = true;

    }

    if (quizAnswers2 > 1) {
        console.log(`2 Lygis: atsakei i ${quizAnswers2}/2 klausimus ir patekai i kita lygi!`);
    } else if (quizAnswers2 > 0 && question1Correct === false) {
        console.log(`2Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question1}\' klausima`)
    } else if (quizAnswers2 > 0 && question2Correct === false) {
        console.log(`2Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question2}\' klausima`)
    } else if (quizAnswers2 === 0) {
        console.log('2 Lygis: abu atsakymus pateikei klaidingus ir nepatekai i kita lygi..');
    }
}
// Trecias lygis
if (level3) {
    if (question1 && question1Answer === userAnswer1) {
        console.log(++quizAnswers3);
        question1Correct = true;
    }
    if (question2 && question2Answer === userAnswer2) {
        console.log(++quizAnswers3);
        question2Correct = true;

    }
    if (question3 && question3Answer === userAnswer3) {
        console.log(++quizAnswers3);
        question3Correct = true;
    }
    if (quizAnswers3 > 2) {
        console.log(`3 Lygis: atsakei i ${quizAnswers3}/3 klausimus teisingai ir patekai i kita lygi!`);
    } else if (quizAnswers3 > 0 && question1Correct === false) {
        console.log(`3 Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question1}\' klausima`)
    } else if (quizAnswers3 > 0 && question2Correct === false) {
        console.log(`3 Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question2}\' klausima`)
    } else if (quizAnswers3 > 0 && question3Correct === false) {
        console.log(`3 Lygis: nepatekai i kita lygi nes blogai atsakei i \'${question3}\' klausima`)
    } else if (quizAnswers3 > 1) {
        console.log('3 Lygis: abu atsakymus pateikei klaidingus ir nepatekai i kita lygi..');
    }
}