function hashCode(s) {
    for(var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
}

function checkAnswer(answerBox, rightAnswer, checkAnswer){
    let answer = hashCode((document.getElementById(answerBox).value).toLowerCase());
    if (answer === rightAnswer) {
        console.log('right answer');
        document.getElementById(checkAnswer).innerHTML = 'check';
    } else{
        console.log('wrong answer');
        document.getElementById(checkAnswer).innerHTML = 'close';
    }
}

function checkExercise1(exercise){
    let citation = `“Process.” Merriam-Webster.com Dictionary, Merriam-Webster, https://www.merriam-webster.com/dictionary/process.`;
    let citEntry = document.getElementById(exercise).value;
    if (citEntry.includes(citation)) {
        console.log('true');
        document.getElementById('flag_1').innerHTML = makeid(30);
    } else{
        console.log('false');
        document.getElementById('flag_1').innerHTML = 'Error. Please try again.'
    }
}

function checkExercise2(exercise){
    const idNumber = 'Q1146685';
    let idEntry = document.getElementById(exercise).value;
    if (idEntry === idNumber) {
        console.log('true');
        document.getElementById('flag_2').innerHTML = makeid(30);
    } else{
        console.log('false');
        document.getElementById('flag_2').innerHTML = 'Error. Please try again.'
    }
}

function checkExercise3(exercise){
    let bookCitation = 'Heitmann, John Alfred. The Automobile and American Life. McFarland & Co., 2009.';
    let citEntry = document.getElementById(exercise).value;
    if (citEntry.includes(bookCitation)) {
        console.log('true');
        document.getElementById('flag_3').innerHTML = makeid(30);
    } else{
        console.log('false');
        document.getElementById('flag_3').innerHTML = 'Error. Please try again.'
    }
}

function checkExercise4(exercise){
    let dbCitation = 'Larson, Levon, and Sudesh Woodiga. “Aerodynamic Investigation of Cooling Drag of a Production Pickup Truck Part 1: Test Results.” SAE International Journal of Passenger Cars: Mechanical Systems, vol. 11, no. 5, Oct. 2018, pp. 477–91. EBSCOhost, https://doi.org/10.4271/2018-01-0740.';
    let citEntry = document.getElementById(exercise).value;
    if (citEntry.includes(dbCitation)) {
        console.log('true');
        document.getElementById('flag_4').innerHTML = makeid(30);
    } else{
        console.log('false');
        document.getElementById('flag_4').innerHTML = 'Error. Please try again.'
    }
}

function checkExercise5(exercise){
    let webCitation = 'Kollmeyer, Phillip J., et al. "Design of an electric powertrain for a Ford F150 crew cab truck utilizing a lithium battery pack and an interior PM synchronous machine drive." 2012 IEEE Transportation Electrification Conference and Expo (ITEC). IEEE, 2012.';
    let citEntry = document.getElementById(exercise).value;
    if (citEntry.includes(webCitation)) {
        console.log('true');
        document.getElementById('flag_5').innerHTML = makeid(30);
    } else{
        console.log('false');
        document.getElementById('flag_5').innerHTML = 'Error. Please try again.'
    }
}

function captureFlag(pasteFlag, flagCapt){
    let flag = document.getElementById(pasteFlag).value;
    if (flag.length === 30) {
        console.log("flag captured");
        document.getElementById(flagCapt).innerHTML = "You captured the flag!";
        if (flagCapt === 'flag_capt_5') {
            document.getElementById('end_game').innerHTML = '<strong>Game Over. Congratulations! One last thing: Copy the last flag and send it to your instructor in an email to let her know you completed the game.</strong>';
        }
    } else {
        document.getElementById(flagCapt).innerHTML = "Oops! something went wrong. Try again.";
    }
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

function showSectionBody(section){
    x = document.getElementById(section);
    x.style.display = 'block';
}