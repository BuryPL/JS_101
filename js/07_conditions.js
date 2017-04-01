'use strict';

var wzrostMateusz = 190;
var wzrostKaja = 190;

/*warunek if*/
if (wzrostMateusz > wzrostKaja) {
    console.log("Mateusz jest wyższy!");
}

/*warunek if else*/
if (wzrostMateusz < wzrostKaja) {
    console.log("Kaja jest wyższa!")
}else{
    console.log("Mateusz jest wyższy!")
}

/*warunek else if*/
if (wzrostMateusz < wzrostKaja) {
    console.log("Kaja jest wyższa!")
}else if (wzrostMateusz > wzrostKaja){
    console.log("Mateusz jest wyższy!")
}else{
    console.log("Są jednakowi")
}

/*switch*/
var kolor = 'zielony';
switch (kolor) {
    case 'czewony':
            console.log("Kolor czerwony");
            break;
    case 'niebieski':
            console.log("Kolor niebieski");
            break;
    case 'zielony':
            console.log("Kolor zielony");
            break;
    default:
            console.log("Kolor inny niż czerwony,zielony lub niebieski");                      
}