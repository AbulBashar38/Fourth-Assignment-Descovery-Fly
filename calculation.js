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

document.getElementById('booking-btn').addEventListener('click', function(){
    document.getElementById('bookingInformation').style.display = 'none';
    document.getElementById('information-summary').style.display = 'block';
    summaryInformation('takeOff-id', 'replace-takeOff');
    summaryInformation('destination-id', 'replace-destination');
    summaryInformation('departure-date', 'replace-departure');
    summaryInformation('return-date', 'replace-return');
    summaryInformation('firstClass-ticket', 'replace-firstClass');
    summaryInformation('economy-ticket', 'replace-economy');
    summaryInformationAmount('subtotal-id', 'replace-subtotal');
    summaryInformationAmount('vat-id', 'replace-vat');
    summaryInformationAmount('total-id', 'replace-total');

})
function summaryInformation(bookingId, summaryId) {
    var currentLocation = document.getElementById(bookingId).value;
   document.getElementById(summaryId).innerText = currentLocation;
}
function summaryInformationAmount(bookingId, summaryId) {
    var currentLocation = document.getElementById(bookingId).innerText;
   document.getElementById(summaryId).innerText = currentLocation;
}
