
// 2. El usuario va a ingresar por teclado (prompt) el nombre de una pelicula, decirle quien es el director (alert).


//VOY A UTILIZAR LA CANDICIONAL SWITCH

marioBros=['Mario Bros','Nintendo', '2023'];
johnWick =['John Wick', ' Derek Kolstad', '2023'];
coraline=['Coraline','Henry Selick', '2009'];
YourName=['Your Name', 'Makoto Shinkai', '2016'];

var nombre = prompt('ingresa el titulo de la pelicula');

switch (nombre) {
    case 'Mario Bros':
    window.alert ('El nombre de la pelicula es: '+marioBros[0]+'\n'+'El autor de esta pelicula es: '+marioBros[1]+'\n'+
    'La fecha de publicación es : '+marioBros[2]);
        break;
    case 'John Wick ':
    window.alert ('El nombre de la pelicula es: '+johnWick[0]+'\n'+'El autor de esta pelicula es: '+johnWick[1]+'\n'+
    'La fecha de publicación es : '+johnWick[2]);
        break;
    case 'Coraline':
    window.alert ('El nombre de la pelicula es: '+coraline[0]+'\n'+'El autor de esta pelicula es: '+coraline[1]+'\n'+
    'La fecha de publicación es : '+coraline[2]);
        break;
    case 'Your Name':
    window.alert ('El nombre de la pelicula es: '+YourName[0]+'\n'+'El autor de esta pelicula es: '+YourName[1]+'\n'+
    'La fecha de publicación es : '+YourName[2]);
        break;
}
