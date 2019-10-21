/*
Creator: Jeffrey Townsend
Date created: 10/15/2019
Date last modified: 10/21/2019
*/
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["numberFun"].elements.length; 
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 
function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
}
function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
	if (num1 <= 0)
	{
		alert("please enter a positive integer.");
		return false;
	}
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
	 document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("addResult").innerText = Number(num1);
var firstRoll = 0;
var secondRoll = 0;
var sum = 0; 
var counter = 0;
var rollMax = 0;
var maximum = 0;
var startingBet =  num1;
var totalMoney = startingBet;
var maximum = startingBet;
while (totalMoney > 0)
{
	firstRoll=rollDice();
	secondRoll=rollDice();
	
	if(firstRoll+secondRoll == 7)
		{totalMoney = totalMoney + 4;
	}
	else 
		{ totalMoney == totalMoney--; }
	counter++;
	if (maximum <= totalMoney)
	{
		maximum = totalMoney;
		rollMax = counter;
	}
	else 
		{maximum = maximum;}
}
if(rollMax == 0)
	{rollMax++;}
document.getElementById("rolls").innerText = Number(counter);
document.getElementById("maxMoney").innerText = Number(maximum);
document.getElementById("maxRoll").innerText = Number(rollMax);
return false;

}