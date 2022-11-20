console.log('Js');

$(document).ready(onReady);

function onReady(){
    console.log('JQ');
    // response responds to user's replay attempt
    $('body').on('click', '#reply-btn', replyClick);
    $('body').on('click', '.counter button', helpfulCounter);
}

function replyClick(){
    console.log('reply clicked');
    // create and append a reply box to message above
}

function helpfulCounter(){
    console.log('Helpful?');
    // add (+) or subtract (-)
    let operator = $(this).text();
    // sets object counter to variable 'count'
    let countObj = $(this).parents('.counter').children("#helpful-counter");

    if(operator === '+'){
        //gets current visual value and adds 1
        let number = Number(countObj.text());
        number += 1;
        countObj.text(number);
    } else if(operator === '-'){
        //gets current visual value and subtract 1
        let number = Number(countObj.text());
        number -= 1;
        countObj.text(number);
    }
    // would post update to counter in DB
}