var current_score, global_score, game_on_play, active_player;

document.querySelector('.roll_dice').addEventListener('click', function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    var Domtotal = randomNumber1 + randomNumber2;

    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


    document.querySelector(' dice, h2').innerHTML = Domtotal;


});