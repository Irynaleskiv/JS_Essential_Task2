var rateDollar = 26.43340;
var rateEuro = 29.23270;
var euroToDollar = 0.9201;
var ammountDollar = prompt("How much dollars?", "777");
var ammountEuro = prompt("How much euro", "777");
var ammountGRN1 = rateDollar * ammountDollar;
var ammountGRN2 = rateEuro * ammountEuro;
alert(ammountEuro + " euros are equal " + Math.round(ammountGRN2) + " grns, " + ammountDollar + " dollars are equal " + Math.round(ammountGRN1) + " , one euro is equal " + euroToDollar + " dollars.");


