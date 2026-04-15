//=========================================
// File name: page_NNNNN.js
//-----------------------------------------
// Project : QuizFaber 4.0.20
// Licence : GNU General Public License v3.0
// Author  : Luca Galli
// Email   : info@quizfaber.com
//-----------------------------------------
// Script for NNNNN-th question
//=========================================

var allInitQuestionFunctions = new Array (
    InitQuestion1,
    InitQuestion2,
    InitQuestion3,
    InitQuestion4,
    InitQuestion5,
    InitQuestion6,
    InitQuestion7,
    InitQuestion8,
    InitQuestion9,
    InitQuestion10,
    InitQuestion11,
    InitQuestion12,
    InitQuestion13,
    InitQuestion14,
    InitQuestion15,
    InitQuestion16,
    InitQuestion17,
    InitQuestion18,
    InitQuestion19,
    InitQuestion20,
    InitQuestion21,
    InitQuestion22,
    InitQuestion23,
    InitQuestion24,
    InitQuestion25,
);



$(document).ready(function ()
{
	const questionIndex = 0;
	const questionTime = 0;

	PageLoad(questionIndex, questionTime);

	
});

$(window).on("beforeunload", function ()
{
	PageUnload();
});

$(window).on("scroll", function ()
{
	PageOnScroll();
});


/* Code generated function */
function InitQuestion1()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 0;
    var weight = DecodeNumber('DJMpo+GXd/8=', 906, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap1_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('L+7SFMp9/sw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap1_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('kZYu3ovVXKM='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion2()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 1;
    var weight = DecodeNumber('CgPa/7XEIqM=', 752, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap2_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('i59eMJRunuk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap2_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('4GxX3Ba/WAg='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion3()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 2;
    var weight = DecodeNumber('U6G569kfQsc=', 762, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap3_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('hehvIB+Qxlg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap3_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('R+MUg2NZyuU='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion4()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 3;
    var weight = DecodeNumber('mOvNAAnm5Io=', 772, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap4_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('NoHXs8em+BM='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap4_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('K+TdVW5elKI='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion5()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 4;
    var weight = DecodeNumber('gOwThfVW8rI=', 141, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap5_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('PrxF/LH7Cyg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap5_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('PcNrp2cD+BM='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion6()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 5;
    var weight = DecodeNumber('hSjGjhVd3EA=', 151, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap6_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('1/J6aMPh2Nw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap6_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('WD++k93q/ng='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion7()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 6;
    var weight = DecodeNumber('M2GFk3kKfMQ=', 997, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap7_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('i4QJ0pIluEo='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap7_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('7twkHwWE7z4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion8()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 7;
    var weight = DecodeNumber('wPim20my16A=', 1007, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap8_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('nQIhhL3mKOA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap8_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wq2rmdBAZWQ='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion9()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 8;
    var weight = DecodeNumber('x3TrkzDtUT4=', 1017, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap9_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Pbz7EnuzVUI='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap9_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('85htcB7WE7A='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion10()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 9;
    var weight = DecodeNumber('l8srnwFfd0c=', 386, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap10_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('+7We2U2iD5Y='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap10_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Qn9LV3eGT7c='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion11()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 10;
    var weight = DecodeNumber('TJQjXcWZiew=', 396, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap11_0').val();
    valuation = new Array(2);
    valuation[0] = unescape(DecodeString('Sy6KBTbRfug='));
    valuation[1] = unescape(DecodeString('VB9lTGZyJjA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap11_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('lwrqxshkPPo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion12()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 11;
    var weight = DecodeNumber('BWBI/kESCqg=', 406, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap12_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('m734EsE0omGl5ryF'));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap12_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('0e3TcP13mYPOku8x'));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion13()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 12;
    var weight = DecodeNumber('aBdVvz799Y4=', 416, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap13_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('THs+fpuq7nk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap13_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('J7hmZBG+yzs='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion14()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 13;
    var weight = DecodeNumber('/AjKsJ+EFQA=', 785, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap14_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('P9B/TYfZaWg='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap14_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('yBCMS76ujuk='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion15()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 14;
    var weight = DecodeNumber('5vgoKr7RnIs=', 795, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap15_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('4iaLnIbPIpA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap15_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('5jo9EjmSHaQ='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion16()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 15;
    var weight = DecodeNumber('95jarXrGK/c=', 805, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap16_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('VDw0bEy7Lrw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap16_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('GIGgYkKwAWo='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion17()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 16;
    var weight = DecodeNumber('nZKzoWxw5kE=', 815, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap17_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wBqnKu5rtyo='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap17_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('Xlavw75rs7s='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion18()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 17;
    var weight = DecodeNumber('PlAJBpbdGtM=', 661, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap18_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('CGsSy3AkzzA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap18_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('RKt3T/Nfad4='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion19()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 18;
    var weight = DecodeNumber('FKBln0xFgB0=', 1030, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap19_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('zapT0b8DsFA='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap19_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('k8oeSCAlKik='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion20()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 19;
    var weight = DecodeNumber('sU6MHeJarWA=', 1040, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap20_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('X8RDNRcBPew='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap20_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('eqLzQq2dM+s='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion21()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 20;
    var weight = DecodeNumber('X6MaPzepafw=', 1050, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap21_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('wXJ6f5uoyRQ='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap21_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('02x8dHIx/N8='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion22()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 21;
    var weight = DecodeNumber('k8+ZEzw5tWg=', 1060, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap22_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('dhAsJsmYmwk='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap22_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('33X6DcbE2XU='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion23()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 22;
    var weight = DecodeNumber('KuNUqMnWymE=', 429, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap23_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('D/D3sAB+hLw='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap23_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('8Q/uvKEBj5A='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion24()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 23;
    var weight = DecodeNumber('QedFKjCxQg0=', 439, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap24_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('h43FQoI2jNE='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap24_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('bCaZ+Z56H6Q='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}
/* Code generated function */
function InitQuestion25()
{
    var choice, valuation;
    const type = QMAKE_FILLGAP;
    const questionIndex = 24;
    var weight = DecodeNumber('kMyGMyGb9R4=', 449, 0, 99999);
    var numOfAnswers = 2;
    var question = new Question(type, weight, numOfAnswers);
    question.answers.length = 0;
    question.shortTextQuestion = "FILL THE GAPS";
    choice = $('#idGap25_0').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('vYKGOn+eZ/o='));
    var answer0 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer0);
    choice = $('#idGap25_1').val();
    valuation = new Array(1);
    valuation[0] = unescape(DecodeString('4WRZuoG/39o='));
    var answer1 = new Answer(choice,valuation,1,0,'');
    question.answers.push(answer1);
    return question;

}






