$(document).ready(function () {
  class Pokemon {
    constructor(
      pokeName,
      type,
      health,
      power,
      move1,
      move2,
      move3,
      move4,
      img,
      pokeID,
      fightImg
    ) {
      this.pokeName = pokeName;
      this.type = type;
      this.health = health;
      this.power = power;
      this.move1 = move1;
      this.move2 = move2;
      this.move3 = move3;
      this.move4 = move4;
      this.img = img;
      this.pokeID = pokeID;
      this.fightImg = fightImg;
    }
  }

  let Charas = [
    (pikachu = new Pokemon(
      "Pikachu",
      "Thunder",
      140,
      40,
      "ThunderBolt",
      "Quick Attack",
      "Shock",
      "Growl",
      "./assets/images/pikaSelect.png",
      "0",
      "./assets/images/PikaBattle.png"
    )),
    (squirtle = new Pokemon(
      "Squirtle",
      "Water",
      110,
      45,
      "Water Gun",
      "Scratch",
      "Bubble Beam",
      "Tail whip",
      "./assets/images/sSelect.png",
      "1",
      "./assets/images/SqirtleBattle.png"
    )),
    (Bulbasaur = new Pokemon(
      "Bulbasaur",
      "Leaf",
      150,
      35,
      "Razor Leaf",
      "Vine Whip",
      "Bite",
      "Leech Seed",
      "./assets/images/BulbSelect.png",
      "1",
      "./assets/images/BulbasaurBattle.png"
    )),
    (charmander = new Pokemon(
      "Charmander",
      "Fire",
      160,
      45,
      "Ember",
      "Fire spin",
      "Scratch",
      "Bite",
      "./assets/images/CharmanderSelect.png",
      "1",
      "./assets/images/CharBattle.png"
    )),
  ];



  let health = 0;
  let oppHealth = 0;
  let numbSel = 0;
  let randSel = Charas.length - 1;


  $(".rightClick").on("click", function () {
    console.log("hello");
    if (numbSel < Charas.length - 1) {
      numbSel++;
      console.log(Charas.length);
      $(".pokeImg").attr("src", Charas[numbSel].img);
      $(".pokeName").text(Charas[numbSel].pokeName);
      $(".displayName").text(Charas[numbSel].pokeName);
      $(".moveSet1").text(Charas[numbSel].move1);
      $(".moveSet2").text(Charas[numbSel].move2);
      $(".moveSet3").text(Charas[numbSel].move3);
      $(".moveSet4").text(Charas[numbSel].move4);
    } else {
      numbSel = 0;
      $(".pokeImg").attr("src", Charas[numbSel].img);
      $(".pokeName").text(Charas[numbSel].pokeName);
      $(".displayName").text(Charas[numbSel].pokeName);
      $(".moveSet1").text(Charas[numbSel].move1);
      $(".moveSet2").text(Charas[numbSel].move2);
      $(".moveSet3").text(Charas[numbSel].move3);
      $(".moveSet4").text(Charas[numbSel].move4);
    }
    return numbSel;
  });

  $(".leftClick").on("click", function () {
    console.log("hello");
    if (numbSel <= 0) {
      numbSel = Charas.length - 1;
      console.log(Charas.length - 1);
      $(".pokeImg").attr("src", Charas[numbSel].img);
      $(".pokeName").text(Charas[numbSel].pokeName);
      $(".displayName").text(Charas[numbSel].pokeName);
      $(".moveSet1").text(Charas[numbSel].move1);
      $(".moveSet2").text(Charas[numbSel].move2);
      $(".moveSet3").text(Charas[numbSel].move3);
      $(".moveSet4").text(Charas[numbSel].move4);
    } else {
      numbSel--;
      $(".pokeImg").attr("src", Charas[numbSel].img);
      $(".pokeName").text(Charas[numbSel].pokeName);
      $(".displayName").text(Charas[numbSel].pokeName);
      $(".moveSet1").text(Charas[numbSel].move1);
      $(".moveSet2").text(Charas[numbSel].move2);
      $(".moveSet3").text(Charas[numbSel].move3);
      $(".moveSet4").text(Charas[numbSel].move4);
    }
    return numbSel;
  });

  $(".chosebtn").on("click", function () {
    randSel = Math.floor(Math.random(randSel) * Charas.length);
    health = Charas[numbSel].health;
    oppHealth = Charas[randSel].health;
    $(".pokeBatImg").attr("src", Charas[numbSel].fightImg);
    $(".oppBatImg").attr("src", Charas[randSel].fightImg);
    $(".moveSet1").text(Charas[numbSel].move1);
    $(".moveSet2").text(Charas[numbSel].move2);
    $(".moveSet3").text(Charas[numbSel].move3);
    $(".moveSet4").text(Charas[numbSel].move4);
    $(".opppokeImg").attr("src", Charas[randSel].img);
    $(".displayHealth").text(
      "My " + Charas[numbSel].pokeName + " Health: " + Charas[numbSel].health
    );
    $(".displayOppHealth").text(
      "Enemy " + Charas[randSel].pokeName + " Health: " + Charas[randSel].health
    );
    $(".oppdisplayName").text(Charas[randSel].pokeName);
    $(".oppdisplayType").text("Type: " + Charas[randSel].type);
    $(".oppmoveSet1").text(Charas[randSel].move1);
    $(".oppmoveSet2").text(Charas[randSel].move2);
    $(".oppmoveSet3").text(Charas[randSel].move3);
    $(".oppmoveSet4").text(Charas[randSel].move4);
    document.getElementById("chosebtn").style.display = "none";
    document.getElementById("faslong").style.display = "none";
    document.getElementById("fasRight").style.display = "none";
    document.getElementById("lowStart").style.display = "block";
    document.getElementById("oppStart").style.display = "block";
    document.getElementById("oppBatImg").style.display = "block";
    document.getElementById("pokeBatImg").style.display = "block";
    $(".instructions").text(
      Charas[numbSel].pokeName + " VS " + Charas[randSel].pokeName
    );
    console.log(oppHealth);
  });

 
  

  $(".moveSet1").on("click", function () {
   
    let moveSet1 = Math.floor(Math.random() * Charas[numbSel].power + 1);
    let oppMoveSet1 = Math.floor(Math.random() * Charas[randSel].power + 1);
     oppHealth = oppHealth - moveSet1;
    health = health - oppMoveSet1;
    let progress = (health / Charas[numbSel].health) * 100;
    let oppprogress = (health / Charas[randSel].health) * 100;
   
    if(progress <= 0){
        document.getElementById("myprogress-bar").style.width = "0%";
    }
    document.getElementById("myprogress-bar").style.width = progress + "%";
    document.getElementById("oppprogress-bar").style.width = oppprogress + "%";
    

    $(".instructions").text(
      Charas[numbSel].pokeName +
        " used " +
        Charas[numbSel].move1 +
        " on " +
        Charas[randSel].pokeName +
        " it did " +
        moveSet1 +
        " Damage"
    );

    $(".displayOppHealth").text(
      "Enemy Health:" + oppHealth + "/" + Charas[randSel].health
    );

    // setTimeout(function(){
    //     $(".instructions").text(Charas[randSel].pokeName + " used " + Charas[randSel].move1 + " on " + Charas[numbSel].pokeName + "it did " + oppMoveSet1 + " damage")
    //     $(".displayHealth").text(health)
    // },500)

    if (health >= 1 && oppHealth >= 1) {
      setTimeout(function () {
        $(".instructions").text(
          Charas[randSel].pokeName +
            " used " +
            Charas[randSel].move2 +
            " on " +
            Charas[numbSel].pokeName +
            " it did " +
            oppMoveSet1 +
            " damage"
        );
        $(".displayHealth").text(
          "My Health: " + health + "/" + Charas[numbSel].health
        );
      }, 500);
    } else if (health <= 0 && oppHealth > 0) {
      console.log("you lose");
      $(".instructions").text("You Lost! Play again?");
      document.getElementById("playAgain").style.display = "block";
    } else if (health > 0 && oppHealth <= 0) {
      console.log("you win");
      $(".instructions").text("You Won! Play again?");
      document.getElementById("playAgain").style.display = "block";
    }
    return oppHealth, health;
  });

  $(".moveSet2").on("click", function () {
    moveSet1 = Math.floor(Math.random() * Charas[numbSel].power + 1);
    oppMoveSet1 = Math.floor(Math.random() * Charas[randSel].power + 1);
    oppHealth = oppHealth - moveSet1;
    health = health - oppMoveSet1;

    $(".instructions").text(
      Charas[numbSel].pokeName +
        " used " +
        Charas[numbSel].move3 +
        " on " +
        Charas[randSel].pokeName +
        " it did " +
        moveSet1 +
        " Damage"
    );
    $(".displayOppHealth").text(
      "Enemy Health:" + oppHealth + "/" + Charas[randSel].health
    );

    // setTimeout(function(){
    //     $(".instructions").text(Charas[randSel].pokeName + " used " + Charas[randSel].move1 + " on " + Charas[numbSel].pokeName + "it did " + oppMoveSet1 + " damage")
    //     $(".displayHealth").text(health)
    // },500)

    if (health >= 1 && oppHealth >= 1) {
      setTimeout(function () {
        $(".instructions").text(
          Charas[randSel].pokeName +
            " used " +
            Charas[randSel].move2 +
            " on " +
            Charas[numbSel].pokeName +
            " it did " +
            oppMoveSet1 +
            " damage"
        );
        $(".displayHealth").text(
          "My Health: " + health + "/" + Charas[numbSel].health
        );
      }, 500);
    } else if (health <= 0 && oppHealth > 0) {
      console.log("you lose");
      $(".instructions").text("You Lost! Play again?");

      document.getElementById("playAgain").style.display = "block";
    } else if (health > 0 && oppHealth <= 0) {
      console.log("you win");
      $(".instructions").text("You Won! Play again?");
      document.getElementById("playAgain").style.display = "block";
    }
    return oppHealth, health;
  });

  $(".moveSet3").on("click", function () {
    moveSet1 = Math.floor(Math.random() * Charas[numbSel].power + 1);
    oppMoveSet1 = Math.floor(Math.random() * Charas[randSel].power + 1);
    oppHealth = oppHealth - moveSet1;
    health = health - oppMoveSet1;

    $(".instructions").text(
      Charas[numbSel].pokeName +
        " used " +
        Charas[numbSel].move3 +
        " on " +
        Charas[randSel].pokeName +
        " it did " +
        moveSet1 +
        " Damage"
    );
    $(".displayOppHealth").text(
      "Enemy Health:" + oppHealth + "/" + Charas[randSel].health
    );

    // setTimeout(function(){
    //     $(".instructions").text(Charas[randSel].pokeName + " used " + Charas[randSel].move1 + " on " + Charas[numbSel].pokeName + "it did " + oppMoveSet1 + " damage")
    //     $(".displayHealth").text(health)
    // },500)

    if (health >= 1 && oppHealth >= 1) {
      setTimeout(function () {
        $(".instructions").text(
          Charas[randSel].pokeName +
            " used " +
            Charas[randSel].move2 +
            " on " +
            Charas[numbSel].pokeName +
            " it did " +
            oppMoveSet1 +
            " damage"
        );
        $(".displayHealth").text(
          "My Health: " + health + "/" + Charas[numbSel].health
        );
      }, 500);
    } else if (health <= 0 && oppHealth > 0) {
      console.log("you lose");
      $(".instructions").text("You Lost! Play again?");

      document.getElementById("playAgain").style.display = "block";
    } else if (health > 0 && oppHealth <= 0) {
      console.log("you win");
      $(".instructions").text("You Won! Play again?");
      document.getElementById("playAgain").style.display = "block";
    }
    return oppHealth, health;
  });

  $(".moveSet4").on("click", function () {
    moveSet1 = Math.floor(Math.random() * Charas[numbSel].power + 1);
    oppMoveSet1 = Math.floor(Math.random() * Charas[randSel].power + 1);
    oppHealth = oppHealth - moveSet1;
    health = health - oppMoveSet1;

    $(".instructions").text(
      Charas[numbSel].pokeName +
        " used " +
        Charas[numbSel].move4 +
        " on " +
        Charas[randSel].pokeName +
        " it did " +
        moveSet1 +
        " Damage"
    );
    $(".displayOppHealth").text(
      "Enemy Health:" + oppHealth + "/" + Charas[randSel].health
    );

    // setTimeout(function(){
    //     $(".instructions").text(Charas[randSel].pokeName + " used " + Charas[randSel].move1 + " on " + Charas[numbSel].pokeName + "it did " + oppMoveSet1 + " damage")
    //     $(".displayHealth").text(health)
    // },500)

    if (health >= 1 && oppHealth >= 1) {
      setTimeout(function () {
        $(".instructions").text(
          Charas[randSel].pokeName +
            " used " +
            Charas[randSel].move2 +
            " on " +
            Charas[numbSel].pokeName +
            "it did " +
            oppMoveSet1 +
            " damage"
        );
        $(".displayHealth").text(
          "My Health: " + health + "/" + Charas[numbSel].health
        );
      }, 500);
    } else if (health <= 0 && oppHealth > 0) {
      console.log("you lose");
      $(".instructions").text("You Lost! Play again?");

      document.getElementById("playAgain").style.display = "block";
    } else if (health > 0 && oppHealth <= 0) {
      console.log("you win");
      $(".instructions").text("You Won! Play again?");

      document.getElementById("playAgain").style.display = "block";
    }
    return oppHealth, health;
  });
});
