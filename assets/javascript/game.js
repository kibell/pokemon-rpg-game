$(document).ready(function () {

            const audioElement = document.getElementById("myaudio");
            const audioPika = document.getElementById("audiopika");

            const pk = $("#pikaSelect");
            const sq = $("#squirtSelect");
            const ch = $("#charSelect");
            const bb = $("#bulbSelect");

            const pikachu = $(".pikaDiv");
            const pHealth = $('.pikaHealth');
            const pPower = $('.pikaPower');

            const squirtle = $('.squirtDiv');
            const sHealth = $('.squirtHealth');
            const sPower = $('.squirtPower')

            const char = $(".charDiv");
            const cHealth = $('.charHealth');
            const cPower = $('.charPower');

            const bulb = $(".bulbDiv");
            const bHealth = $('.bulbHealth');
            const bPower = $('.bulbPower');

            let pks = 0;
            let sqs = 0;
            let chs = 0;
            let bbs = 0;

            // let printToScreen = () => {
            //     charmander.health.text 
            // }


  

           let  pika = {
                type: "lighting",
                health: 130,
                power: 40
            }

           let squirt = {
                type: "water",
                health: 120,
                power: 45
            }
            let charmander = {
                type: "fire",
                health: 110,
                power: 50
            }
            let bulbasaur = {
                type: "grass",
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
            $('.charBtn').hide();
            $('.bulbBtn').hide();
            $('.pikaBtn').hide();
            $('.squirtleBtn').hide();
            $('.startBattle').hide();

            $('.active').on('click', function () {
                audioElement.play();
            });

            $('.pause').on('click', function () {
                audioElement.pause();
            });
            //When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as that character for the rest of the game.
            $('.character').on('click', function () {

               const select =  $(this).attr("data-id")
               console.log(select);


               $(this).css({
                float: "right",
                clear: "both"
            });

            });


            // $("#pikaSelect").on('click', function () {



            //     pikachu.css({
            //         float: "right",
            //         clear: "both"
            //     });
            //     bulb.css({
            //         float: "left",
            //         clear: "both"
            //     });
            //     char.css({
            //         float: "left",
            //         clear: "both",
            //     });
            //     squirtle.css({
            //         float: "left",  
            //         clear: "both"
            //     });
            //     document.getElementById("pikaSelect").src = "./assets/images/PikaBattle.png";
            //     $('.charBtn').show();
            //     $('.bulbBtn').show();
            //     $('.squirtleBtn').show();
               
            //     //$('.startBattle').show();
            //     //document.getElementById("myBtn").disabled = true;
            //     //document.getElementById("myBtn").disabled = true;
            //     audioPika.play();
            //     audioElement.play();
            //     pikaStart();
            // });





            // $("#squirtSelect").click(function () {
               
            //     pikachu.css({
            //         float: "left",
            //         clear: "both"
            //     })
            //     bulb.css({
            //         float: "left",
            //         clear: "both"
            //     });
            //     char.css({
            //         float: "left",
            //         clear: "both",
            //     });
            //     squirtle.css({
            //         float: "right",
            //         clear: "both"
            //     });
            //     document.getElementById("squirtSelect").src = "./assets/images/SqirtleBattle.png";
            //     $('.charBtn').show();
            //     $('.bulbBtn').show();
            //     $('.pikaBtn').show();
               
            //     $('.startBattle').hide();
            //     audioElement.play();
            //     squirtStart();
            // });



            // $("#charSelect").click(function () {
            //     pikachu.css({
            //         float: "left",
            //         clear: "both"
            //     })
            //     bulb.css({
            //         float: "left",
            //         clear: "both"
            //     });
            //     char.css({
            //         float: "right",
            //         clear: "both",
            //     });
            //     squirtle.css({
            //         float: "left",
            //         clear: "both"
            //     });
            //     document.getElementById("charSelect").src = "./assets/images/CharBattle.png";
            //     $('.pikaBtn').hide();
            //     $('.bulbBtn').hide();
            //     $('.squirtleBtn').hide();
            //     $('.charBtn').text("Ember!");
                
            //     audioElement.play();
            //     $('.pikaBtn').show();
            //     $('.bulbBtn').show();
            //     $('.squirtleBtn').show();
            //     charStart()

            // });
            // $("#bulbSelect").click(function () {
            //     pikachu.css({
            //         float: "left",
            //         clear: "both"
            //     })
            //     bulb.css({
            //         float: "right",
            //         clear: "both"
            //     });
            //     char.css({
            //         float: "left",
            //         clear: "both",
            //     });
            //     squirtle.css({
            //         float: "left",
            //         clear: "both"
            //     });

            //     document.getElementById("bulbSelect").src = "./assets/images/Bulbasaurbattle.png";
            //     $('.charBtn').show();
            //     $('.pikaBtn').show();
            //     $('.squirtleBtn').show();
                
               
            //     audioElement.play();
            //     bulbStart()
            // });

            function pikaStart(){
               pks ++
               // $('.startBattle').show();
                //console.log(pks, sqs,bbs,chs);

                $('.startBattle').on("click", function(){
                    
                    
                });

                $('#bulbSelect').off();
                $('#charSelect').off();
                $('#squirtSelect').off();
                $('.instructions').text("Choose you Opponent!");
                $('.charBtn').show;

               
                

                
            };
            
            function squirtStart(){
                 sqs ++
                console.log(pks, sqs,bbs,chs);
              //  $('.startBattle').show();
                //console.log('sq');
                $('.startBattle').on("click", function(){
                    //console.log("texsq");
                 
                });
                $('#bulbSelect').off();
                $('#pikaSelect').off();
                $('#charSelect').off();
                $('.instructions').text("Choose you Opponent!");
            };

            function charStart(){
                 chs ++
               // console.log(pks, sqs,bbs,chs);
                // $('.startBattle').show();
                //console.log('char');
                $('.startBattle').on("click", function(){
                   // console.log("char");
                });

                $('#bulbSelect').off();
                $('#pikaSelect').off();
                $('#squirtSelect').off();
                $('.instructions').text("Choose you Opponent!");

            };
            function bulbStart(){
                 bbs ++
                console.log(pks, sqs,bbs,chs);
                // $('.startBattle').show();
                console.log('sbulb');
                $('.startBattle').on("click", function(){
                 //   console.log("bulb");
                });

                $('#pikaSelect').off();
                $('#charSelect').off();
                $('#squirtSelect').off();
                $('.instructions').text("Choose you Opponent!");

            };

            $(".charBtn").click(function(){
                if( buttonclicked = true ) {
                   ch.css({
                       
                    border: "solid red"
                   })
                   $('.startBattle').show();
                   $('.squirtBtn').off();
                    $('.pikaBtn').off();
                    $('.bulbBtn').off();
                    $('.instructions').text("BATTLE!");
                     chs ++;
                   // console.log(pks, sqs,bbs,chs);
                    
                }
            });

            $(".bulbBtn").click(function(){
                if( buttonclicked = true ) {
                    bb.css({
                       
                        border: "solid green"
                       })
                       $('.startBattle').show();
                       $('.squirtBtn').off();
                         $('.charBtn').off();
                         $('.pikaBtn').off();
                         $('.instructions').text("BATTLE!");
                    bbs ++;
                }
            });

            $(".squirtleBtn").click(function(){
                if( buttonclicked = true ) {
                   
                    sq.css({
                       
                        border: "solid aqua"
                       })
                       $('.startBattle').show();
                       $('.pikaBtn').off();
                         $('.charBtn').off();
                         $('.bulbBtn').off();
                         $('.instructions').text("BATTLE!");
                         sqs++;
                }
            });
                
            $(".pikaBtn").click(function(){
                if( buttonclicked = true ) {
                   
                    pk.css({
                       
                        border: "solid brown"
                       })
                       $('.startBattle').show();
                       $('.squirtBtn').off();
                         $('.charBtn').off();
                         $('.bulbBtn').off();
                         $('.instructions').text("BATTLE!");
                       pks ++;

                }
            });



            //This start of this code is set up for the different match up scenarios that can occur
                $(".startBattle").click(function(){
                   // console.log(pks,bbs)
                  

                   switch (pks){

                        case 1:
                            if(chs === 1){
                                console.log('sq vs pk')
                                $ ('.pikaBtn').show();
                                
                                pkVsCH();
                            } else if (bbs === 1) {
                                console.log('bb vs pk')
                                $ ('.pikaBtn').show();

                                pkVsBb();
                            } else if (sqs ===1) {
                                console.log('ch vs pk')
                                $ ('.pikaBtn').show();
                                pkVsSq();
                            } else {};

                
                            
                        break;}

                        






                     switch(sqs){

                        case 1:
                                if(pks === 1){
                                    $ ('.squirtleBtn').show();
                                    console.log('sq vs pk')
                                } else if (bbs === 1) {
                                    $ ('.squirtleBtn').show();
                                    console.log('bb vs sq')
                                } else {
                                    $ ('.squirtleBtn').show();
                                    console.log('ch vs sq')
                                };
                                break;
                            }

                       
                            
                            switch(bbs){

                                case 1:
                                        if(pks === 1){
                                            $('.bulbBtn').show();
                                            console.log('bb vs pk')
                                        } else if (sqs === 1) {
                                            $('.bulbBtn').show();
                                            console.log('bb vs sq')
                                        } else {
                                            $('.bulbBtn').show();
                                            console.log('ch vs sq')
                                        };
                                        break;
                                    }
                                
                         switch(chs){

                            case 1:
                                 if(pks === 1){
                                     console.log('chs vs pk')
                                     } else if (sqs === 1) {
                                    console.log('chs vs sq')
                                    } else {
                                     console.log('ch vs bb')
                                                };
                                 };

                                        

                                
                             
                   



             });
            
            function pkVsCH(){
            //    $ ('.pikaBtn').show;
            //    $('.pikaBtn').text("Thunder Attack");
            $('.pikaBtn').text("Thunder Attack");
               $('.pikaBtn').click(function(){
                
                if(pika.health > 0){



               let pikaStrike = Math.floor(Math.random() * pika.power );
                
               charmander.health -= pikaStrike;
               cHealth.text("Health " + charmander.health);
               $ ('.pikaBtn').hide;
               $('.instructions').text("Pikachu used Thunder and took " + pikaStrike)
               $ ('.pikaBtn').off;
               setTimeout(function(){
             
                let CharStrike = Math.floor(Math.random() * charmander.power );
                pika.health -= CharStrike;
                pHealth.text("Health " + pika.health);
                $('.instructions').text("Charmander used Ember and took " + CharStrike)
                
               } ,1000)
               $ ('.pikaBtn').on;


            } else if (pika.health < 0){
                $('.instructions').text("YOU LOST! PLAY AGAIN?");


            } else{}
            
            if (charmander.health < 0 ) {
                $('.instructions').text("win");
                char.hide();
                $('.squirtBtn').on();
                $('.bulbBtn').on();
                $('.pikaBtn').off();

                $('.instructions').text("Choose another Opponent")
                return;

            } else{

            }


              

               })};

               function pkVsSq(){
                //    $ ('.pikaBtn').show;
                //    $('.pikaBtn').text("Thunder Attack");
                $('.pikaBtn').text("Thunder Attack");
                   $('.pikaBtn').click(function(){
                    
                    if(pika.health > 0){
    
    
    
                   let pikaStrike = Math.floor(Math.random() * pika.power );
                    
                   squirt.health -= pikaStrike;
                   sHealth.text("Health " + squirt.health);
                   $ ('.pikaBtn').hide;
                   $('.instructions').text("Pikachu used Thunder and took " + pikaStrike)
                   $ ('.pikaBtn').off;
                   setTimeout(function(){
                    
                    
                
    
                    let squirtStrike = Math.floor(Math.random() * squirt.power );
                    pika.health -= squirtStrike;
                    pHealth.text("Health " + pika.health);
                    $('.instructions').text("Squirtle used WaterGun and took " + squirtStrike)
                    
                   } ,1000)
                   $ ('.pikaBtn').on;
    
    
                } else if (pika.health < 0){
                    $('.instructions').text("loser");
    
    
                } else{}
                
                if (squirt.health < 0 ) {
                    $('.instructions').text("win");
                    squirtle.hide();
                    $('.charBtn').on();
                    $('.bulbBtn').on();
                    $('.pikaBtn').off();
                    
    
                    $('.instructions').text("Choose another Opponent")
                    return;
    
                } else{
    
                }
    
    
                  
    
                   })};


                   function pkVsBb(){
                    //    $ ('.pikaBtn').show;
                    //    $('.pikaBtn').text("Thunder Attack");
                    $('.pikaBtn').text("Thunder Attack");
                       $('.pikaBtn').click(function(){
                        
                        if(pika.health > 0){
        
        
        
                       let pikaStrike = Math.floor(Math.random() * pika.power );
                        
                       bulbasaur.health -= pikaStrike;
                       bHealth.text("Health " + bulbasaur.health);
                       $ ('.pikaBtn').hide;
                       $('.instructions').text("Pikachu used Thunder and took " + pikaStrike)
                       $ ('.pikaBtn').off;
                       setTimeout(function(){
                        
                        
                    
        
                        let BulbStrike = Math.floor(Math.random() * bulbasaur.power );
                        pika.health -= BulbStrike;
                        pHealth.text("Health " + pika.health);
                        $('.instructions').text("Bulbasaur used Vine Whip and took " + BulbStrike)
                        
                       } ,1000)
                       $ ('.pikaBtn').on;
        
        
                    } else if (pika.health < 0){
                        $('.instructions').text("loser");
        
        
                    } else{}
                    
                    if (bulbasaur.health < 0 ) {
                        $('.instructions').text("win");
                        bulb.hide();
                        $('.squirtBtn').on();
                        $('.charBtn').on();
                        $('.pikaBtn').off();
        
                        $('.instructions').text("Choose another Opponent")
                        return;
        
                    } else{
        
                    }
        
        
                      
        
                       })};

           

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