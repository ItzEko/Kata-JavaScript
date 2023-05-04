//NECESITAMOS OBTENER LOS ELEMENTOS HTML DESPUES DE QUE SE CARGARA EL DOM 
//EL DOMContentLoaded es para que cuando este cagado el Dom leer primero los nodos si se va a ocupar los nodos 
document.addEventListener("DOMContentLoaded", function(){
    //guessInput es adivina el input en ingles, va a traer el elemento que tenga la palabra "guess"
    //a ese elemento le agregamos el id 
    let guessInput = document.getElementById("guess");
    //agregamos el id al boton de adivinar
    let submitButton = document.getElementById("submit");
    //creamos otra variable para que nos regrese en texto del resultado
    let feetbackText = document.getElementById("feetback");
    //variable para reinicar el juego
    let playAgainButton = document.getElementById("playAgain");
    //variable de numero a adivinar, esta variable va a tener una funcion y ponemos el nombre de la funcion que 
    //esta contendra, genera numero aleatorio entre 1 y 100 
    let numberToGuess = generateNumberToGuess();


    //LANZAR EN LA CONSOLA EL NUMERO ALEATORIO (SE PUEDE QUITAR ESTA PARTE DEL CODIGO)
    console.log(numberToGuess);


    //Deinir la funcion que compara la respuesta del usuario con el numero generado
    function checkGuess(){
        //el numero que introdujo el usuario va a ser igual a la
        //trae el valor guessinput y lo valida en la variable userGuess
        let userGuess = Number(guessInput.value);
        //userGuess que traiga el valor de la variable y no toda la informacion de la variable
        if (userGuess === numberToGuess) {
            feetbackText.textContent = "Muy bien GANASTE!!!";
            submitButton.disabled = true;
            //para que nos permita reinicar el juego, el block se bloque y se desbloquea el boton 
            playAgainButton.style.display = "block";
        }else if (userGuess > numberToGuess){
            feetbackText.textContent = "Demasiado alto intenta de nuevo!";
        }else{
            feetbackText.textContent = "Demasiado bajo intenta de nuevo!";
        }
    }


    //reiniciamos el contenido del html y no la pagina
    function restart() {
        numberToGuess = generateNumberToGuess();

        //LANZAR EN LA CONSOLA EL NUMERO ALEATORIO (SE PUEDE QUITAR ESTA PARTE DEL CODIGO)
        console.log(numberToGuess);

        guessInput.value = "";
        feetbackText.textContent = "";
        submitButton.disabled= false;
        playAgainButton.style.display = "none";
    }
    //funcion de generar el numero aleatorio
    function  generateNumberToGuess() {
        let randomNumber = Math.floor(Math.random()*100)+1;
        return randomNumber;
    }
    
    //VAMOS A AGREGAR EVENTOS AL HACER CLICK AL BOTON DE ADIVINAR
    //cuando se haga click en seguida se ejecuta la funcion checkGuess
    submitButton.addEventListener("click", checkGuess);

    //agregar un evento al hacer click al bton de reiniciar y ponemos la funcion que se encarga de reinicar el juego
    playAgainButton.addEventListener("click", restart);
});