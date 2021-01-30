
document.getElementById('firstClass-plus-btn').addEventListener('click', function () {
    clickAction(true, 'firstClass-ticket');
})
document.getElementById('firstClass-minus-btn').addEventListener('click', function () {
    clickAction(false, 'firstClass-ticket');
})
document.getElementById('economy-plus-btn').addEventListener('click', function () {
    clickAction(true, 'economy-ticket');
})
document.getElementById('economy-minus-btn').addEventListener('click', function () {
    clickAction(false, 'economy-ticket');
})

function clickAction(increase, inputId) {
    var captureTicket = document.getElementById(inputId).value;
    var captureTicketNumbers = parseFloat(captureTicket);
    var newTicketNumbers = captureTicketNumbers;
    if (increase == false && newTicketNumbers > 0) {
        var newTicketNumbers = captureTicketNumbers - 1;
    }
    else if (increase == true) {
        var newTicketNumbers = captureTicketNumbers + 1;
    }
    document.getElementById(inputId).value = newTicketNumbers;
}

