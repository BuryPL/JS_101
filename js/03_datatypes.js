//zmienne nazywamy tzw notacją cammelCase, tzn pierwsze słowo z małej litery, a każde następne z dużej, bez podkreśleń czy myślników
'use strict';

/*zmienne liczbowe*/
var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);


/*zmienne string*/
var wyplataString = "5000";
var premiaString = "2500";
var calkowitaWyplataString;

calkowitaWyplataString = wyplataString + premiaString;

console.log(calkowitaWyplataString);

/*zmienna boolean*/
var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
    console.log("Jest SMOG");
}else{
    console.log("Nie ma SMOGa");
}

/*zmienne null/undefined*/
var niezdefiniowanaZmienna;
var nullZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullZmienna);


var imieStudenta = "Michał";
console.log(imieStudenta.indexOf('c'));

var stringusPodwojnyCudzyslow = "string '";
var stringusPojedynczyCudzyslow =  'string "'