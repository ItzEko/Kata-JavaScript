// 3. Definir un arreglo de objetos peliculas donde tengan una propiedad isFree, el usuario debe ingresar el nombre de
// una pelicula y el sistema le respondera si puede ver la pelicula o sino puede, decirles el precio.

marioBros=['Mario Bros','Nintendo', '2023', 'No Free'];
johnWick =['John Wick', ' Derek Kolstad', '2023', 'No Free'];
coraline=['Coraline','Henry Selick', '2009', 'Is Free'];
YourName=['Your Name', 'Makoto Shinkai', '2016', 'Is Free'];

var nombre = prompt('ingresa el titulo de la pelicula');

switch (nombre) {
    case 'Mario Bros':
        if ('Is Free'==marioBros[3]) {
            var verPeli='La pelicula se encuentra disponible '
        }else{
            var verPeli='La pelicula no esta disponible paga $150'
        }
    window.alert ('El nombre de la pelicula es: '+marioBros[0]+'\n'+'El autor de esta pelicula es: '+marioBros[1]+'\n'+
    'La fecha de publicación es : '+marioBros[2]+ '\n'+verPeli);
        break;
    case 'John Wick ':
        if ('Is Free'==johnWick[3]) {
            var verPeli='La pelicula se encuentra disponible '
        }else{
            var verPeli='La pelicula no esta disponible paga $150'
        }
    window.alert ('El nombre de la pelicula es: '+johnWick[0]+'\n'+'El autor de esta pelicula es: '+johnWick[1]+'\n'+
    'La fecha de publicación es : '+johnWick[2]+'\n'+verPeli);
        break;
    case 'Coraline':
        if ('Is Free'==coraline[3]) {
            var verPeli='La pelicula se encuentra disponible '
        }else{
            var verPeli='La pelicula no esta disponible paga $150'
        }
    window.alert ('El nombre de la pelicula es: '+coraline[0]+'\n'+'El autor de esta pelicula es: '+coraline[1]+'\n'+
    'La fecha de publicación es : '+coraline[2]+ '\n'+verPeli);
        break;
    case 'Your Name':
        if ('Is Free'==YourName[3]) {
            var verPeli='La pelicula se encuentra disponible '
        }else{
            var verPeli='La pelicula no esta disponible paga $150'
        }
    window.alert ('El nombre de la pelicula es: '+YourName[0]+'\n'+'El autor de esta pelicula es: '+YourName[1]+'\n'+
    'La fecha de publicación es : '+YourName[2]+ '\n'+verPeli);
        break;
}
