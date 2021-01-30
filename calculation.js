
    document.getElementById('plus-btn').addEventListener('click', function(){
        clickAction(true);
    })
    document.getElementById('minus-btn').addEventListener('click', function(){
        clickAction(false);
    })

function clickAction(increase) {
    var captureTicket = document.getElementById('firstClass-ticket').value;
        var captureTicketNumbers = parseFloat(captureTicket);
        var newTicketNumbers = captureTicketNumbers;
        if(increase == false && newTicketNumbers>0){
            var newTicketNumbers = captureTicketNumbers - 1;
        }
        else if(increase == true){
            var newTicketNumbers = captureTicketNumbers + 1;
        }
        document.getElementById('firstClass-ticket').value = newTicketNumbers;
    }
document.getElementById('plus-btn').addEventListener('click', function(){
    var captureTicket = document.getElementById('firstClass-ticket').value;
    var captureTicketNumbers = parseFloat(captureTicket);
    var newTicketNumbers = captureTicketNumbers + 1;
    document.getElementById('firstClass-ticket').value = newTicketNumbers;
})
document.getElementById('minus-btn').addEventListener('click', function(){
    var captureTicket = document.getElementById('firstClass-ticket').value;
    var captureTicketNumbers = parseFloat(captureTicket);
    var newTicketNumbers = captureTicketNumbers - 1;
    document.getElementById('firstClass-ticket').value = newTicketNumbers;
})