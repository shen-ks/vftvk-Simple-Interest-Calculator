
function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal<=0) { //checks for value greater than 0, and resets focus if not a positive number
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
//getfullyear gets the fullyear and then parseint converts text to int for further processing
    var year = new Date().getFullYear() + parseInt(years); 

//displays the calculated results and span tag is used to highlight specific values
        document.getElementById("result").innerHTML = "<b>If</b> you deposit <span style=\"background-color: #FFFF00\">" + principal + " </span>, <br> <b>at</b> an interest rate of <span style=\"background-color: #FFFF00\">" + rate +"% </span> <br> <b>You</b> will receive an amount of <span style=\"background-color: #FFFF00\">" + interest + "</span>,<br> <b>in </b> the year <span style=\"background-color: #FFFF00\">" + year + "</span>";
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}