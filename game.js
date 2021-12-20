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
  ];

  let health = 0;
  let oppHealth = 0;
  let numbSel = 0;
  let randSel = Charas.length - 1;
  $("#charSelect").append(
    "<div class='charasDiv'>" +
      "<p class='pokeName'>" +
      Charas[numbSel].pokeName +
      "</p>" +
      "<img class='pokeImg' src=" +
      Charas[numbSel].img +
      ">" +
      "</div>"
  );

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
    $(".displayHealth").text(Charas[numbSel].health);
    $(".displayOppHealth").text(Charas[randSel].health);

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
    moveSet1 = Math.floor(Math.random() * Charas[numbSel].power + 1);
    oppMoveSet1 = Math.floor(Math.random() * Charas[randSel].power + 1);
    oppHealth = oppHealth - moveSet1;
    health = health - oppMoveSet1;

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
    $(".displayOppHealth").text(oppHealth);

    // setTimeout(function(){
    //     $(".instructions").text(Charas[randSel].pokeName + " used " + Charas[randSel].move1 + " on " + Charas[numbSel].pokeName + "it did " + oppMoveSet1 + " damage")
    //     $(".displayHealth").text(health)
    // },1000)

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
        $(".displayHealth").text(health);
      }, 1000);
    } else if (health <= 0 && oppHealth > 0) {
      console.log("you lose");
    } else if (health > 0 && oppHealth <= 0) {
      console.log("you win");
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
    $(".displayOppHealth").text(oppHealth);

    // setTimeout(function(){
    //     $(".instructions").text(Charas[randSel].pokeName + " used " + Charas[randSel].move1 + " on " + Charas[numbSel].pokeName + "it did " + oppMoveSet1 + " damage")
    //     $(".displayHealth").text(health)
    // },1000)

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
        $(".displayHealth").text(health);
      }, 1000);
    } else if (health <= 0 && oppHealth > 0) {
      console.log("you lose");
    } else if (health > 0 && oppHealth <= 0) {
      console.log("you win");
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
    $(".displayOppHealth").text(oppHealth);

    // setTimeout(function(){
    //     $(".instructions").text(Charas[randSel].pokeName + " used " + Charas[randSel].move1 + " on " + Charas[numbSel].pokeName + "it did " + oppMoveSet1 + " damage")
    //     $(".displayHealth").text(health)
    // },1000)

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
        $(".displayHealth").text(health);
      }, 1000);
    } else if (health <= 0 && oppHealth > 0) {
      console.log("you lose");
    } else if (health > 0 && oppHealth <= 0) {
      console.log("you win");
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
    $(".displayOppHealth").text(oppHealth);

    // setTimeout(function(){
    //     $(".instructions").text(Charas[randSel].pokeName + " used " + Charas[randSel].move1 + " on " + Charas[numbSel].pokeName + "it did " + oppMoveSet1 + " damage")
    //     $(".displayHealth").text(health)
    // },1000)

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
        $(".displayHealth").text(health);
      }, 1000);
    } else if (health <= 0 && oppHealth > 0) {
      console.log("you lose");
    } else if (health > 0 && oppHealth <= 0) {
      console.log("you win");
    }
    return oppHealth, health;
  });
});
