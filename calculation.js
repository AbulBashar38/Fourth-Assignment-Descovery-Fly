
document.getElementById('firstClass-plus-btn').addEventListener('click', function () {
    clickAction(true, captureAndConvertNum('firstClass-ticket'), 'firstClass-ticket');
    
})
document.getElementById('firstClass-minus-btn').addEventListener('click', function () {
    clickAction(false, captureAndConvertNum('firstClass-ticket'), 'firstClass-ticket');
})
document.getElementById('economy-plus-btn').addEventListener('click', function () {
    clickAction(true, captureAndConvertNum('economy-ticket'), 'economy-ticket');
})
document.getElementById('economy-minus-btn').addEventListener('click', function () {
    clickAction(false, captureAndConvertNum('economy-ticket'), 'economy-ticket');
})

function clickAction(increase, CaptureInput, inputId) {
    var newTicketNumbers = CaptureInput;
    if (increase == false && newTicketNumbers > 0) {
        var newTicketNumbers = CaptureInput - 1;
    }
    else if (increase == true) {
        var newTicketNumbers = CaptureInput + 1;
    }
    document.getElementById(inputId).value = newTicketNumbers;

    var TotalFirstClassTicket = captureAndConvertNum('firstClass-ticket');
    var costForFirstClassTicket = TotalFirstClassTicket * 150;
    
    var TotalEconomyTicket = captureAndConvertNum('economy-ticket');
    var costForEconomyTicket = TotalEconomyTicket * 100;
    var subtotalAmount = costForFirstClassTicket + costForEconomyTicket;
    document.getElementById('subtotal-id').innerText = subtotalAmount;

    var VAT = subtotalAmount * 10/100;
    document.getElementById('vat-id').innerText = VAT;

    var TotalAmount = subtotalAmount + VAT;
    document.getElementById('total-id').innerText = TotalAmount;
}
function captureAndConvertNum(id) {
    var captureValue = document.getElementById(id).value;
    var convertValueNumber = parseInt(captureValue);
    return convertValueNumber;
}