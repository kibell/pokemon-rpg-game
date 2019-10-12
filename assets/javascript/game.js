$(document).ready(function() {

const pikachu = $("#pikaSelect");
const pHealth = $('.pikaHealth');
const pPower = $('.pikaPower');

const squirtle = $('#squirtSelect');
const sHealth = $('.squirtHealth');
const sPower = $('.squirtPower')

const char = $("#charSelect");
const cHealth = $('.charHealth');
const cPower = $('.charPower');

const bulb = $("#bulbSelect");
const bHealth = $('.bulbHealth');
const bPower = $('.bulbPower');

let pika = {
    health: 130,
    power: 40
}
let squirt = {
    health: 120,
    power: 45
}
let charmander = {
    health: 110,
    power: 50
}
let bulbasaur = {
    health: 140,
    power: 35
}

pHealth.text("Health " + pika.health);
sHealth.text("Health " + squirt.health);
cHealth.text("Health " + charmander.health);
bHealth.text("Health " + bulbasaur.health);

pPower.text("Poke-Power " + pika.power);
cPower.text("Poke-Power " + charmander.power);
bPower.text("Poke-Power " + bulbasaur.power);
sPower.text("Poke-Power " + squirt.power);



//When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.



//* The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.



// The player chooses an opponent by clicking on an enemy's picture.



//* Once the player selects an opponent, that enemy is moved to a `defender area`.



//* The player will now be able to click the `attack` button.


  //* Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 


  //* The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.

//3. The player will keep hitting the attack button in an effort to defeat their opponent.

//* When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

//4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.
});