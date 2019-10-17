$(document).ready(function () {

    const audioElement = document.getElementById("myaudio");
    const audioPika = document.getElementById("audiopika");

    const pk = $("#pikaSelect");
    const sq = $("#squirtSelect");
    const ch = $("#charSelect");
    const bb = $("#bulbSelect");

    const pikachu = $(".pikaDiv");
   

    const squirtle = $('.squirtDiv');
    

    const char = $(".charDiv");
    

    const bulb = $(".bulbDiv");
  

    
    // let printToScreen = () => {
    //     charmander.health.text 
    // }


    player = [
            { name: 'Pikachu',
            health: 130,
            power: 40   },


            { name: 'Squirtle',
            health: 120,
            power: 45 
            },

            {name: 'Charmander',
            health: 110,
            power: 45 
            },

            { name: 'Bulbasaur',
            health: 140,
            power: 35
            }
        

        ]


//    let  pika = {
//         type: "lighting",
//         health: 130,
//         power: 40
//     }

//    let squirt = {
//         type: "water",
//         health: 120,
//         power: 45
//     }
//     let charmander = {
//         type: "fire",
//         health: 110,
//         power: 50
//     }
//     let bulbasaur = {
//         type: "grass",
//         health: 140,
//         power: 35
//     }

     $("#squirtSelect").on('click', function () {alert("not available coming soon");  location.reload(); });
     $("#charSelect").on('click', function () {alert("not available coming soon");  location.reload();});
    $("#bulbSelect").on('click', function () {alert("not available coming soon");  location.reload();});



    $('.pikaHealth').text("Health " + player[0].health);
    $('.bHealth').text("Health " + player[3].health);
    $('.sHealth').text("Health " + player[1].health);
    $('.cHealth').text("Health " + player[2].health);

    $('.pPower').text("Poke-Power " + player[0].power);
    $('.cPower').text("Poke-Power " + player[2].power);
    $('.sPower').text("Poke-Power " + player[1].power);
    $('.bPower').text("Poke-Power " + player[3].power);

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


     //this stop the user from selecting another character
     setTimeout(function(){
        $('.character').off('click');
    }, 500);


    
   switch (select){

        case 'pika':

            console.log("pikaaaa");
            $('.pikaBtn').addClass('player1');
            $('.charBtn').addClass('player2')
            $('.squirtleBtn').addClass('player2')
            $('.bulbBtn').addClass('player2')
            $('.pikaBtn').text("THUNDER")
            $('.charBtn').show();
            $('.bulbBtn').show();
           
            $('.squirtleBtn').show();
            break;

        case 'squirtle':
             
            console.log("squirt");
            $('.squirtleBtn').addClass('player1');
            $('.charBtn').addClass('player2')
            $('.pikaBtn').addClass('player2')
            $('.bulbBtn').addClass('player2')
            $('.squirtleBtn').text("WATER GUN")
            $('.charBtn').show();
            $('.bulbBtn').show();
            $('.pikaBtn').show();
            
            break;

        case 'char':
                
            console.log("char");
            $('.pikaBtn').addClass('player2')
            $('.squirtleBtn').addClass('player2')
            $('.bulbBtn').addClass('player2')
            $('.charBtn').text("EMBER")
            $('.charBtn').addClass('player1');
            $('.bulbBtn').show();
            $('.pikaBtn').show();
            $('.squirtleBtn').show();
            break;

        case 'bulb':
            // 
            console.log("bulb");
            $('.bulbBtn').addClass('player1');
            $('.charBtn').addClass('player2')
            $('.squirtleBtn').addClass('player2')
            $('.pikaBtn').addClass('player2')
            $('.bulbBtn').text("VINE WHIP")
            $('.charBtn').show();
            $('.pikaBtn').show();
            $('.squirtleBtn').show();
            break;

   }

             

    });

   

    $('.btn').on('click', function (){
        const fight = $(this).attr("id");
        audioElement.play();
       
        $(this).css({
            border: "solid gold"

        });
        

        

        // setTimeout(function(){
        //     $('.btn').off('click');
        // }, 500)


        switch (fight){

            case 'squirtleBtn':
                console.log("yaaayy");
                $('.startBattle').show();
                $('.startBattle').on(); 
                $('.player1').show();
                $('.player2').hide();

                
            
               

               $('.pikaBtn').on('click', function (){

             
            

                pikastrike = Math.floor(Math.random() * player[0].power +1 );
        
                   player[1].health -= pikastrike;
                   $('.sHealth').text("Health " + player[1].health);
                  
                   $('.instructions').text("Pikachu used Thunder and took " + player[0].power)
//-----------------------------------------------------------------------------------------------

                    setTimeout(function(){

                        sStrike = Math.floor(Math.random() * player[1].power +1 );
        
                        player[0].health -= sStrike;
                        $('.pikaHealth').text("Health " + player[0].health);
    
                        $('.instructions').text("Squirtle  used Water Gun and took " + player[1].power)
                                
                            }, 1000)
                        

                            if (player[0].health < 0 ){
                                $('.instructions').text("You Lost");
                                confirm("you lost play again?");
                                location.reload();

                            } else{} ;
                            
                            if (player[1].health < 0) {
                                $('#squirtSelect').hide;
                            } else {};
                            

                            
                       
                               

                        

                   
                                



               });




                
                 break;

            case 'pikaBtn':
                    console.log("bbooo")
                    $('.startBattle').show();
                    $('.startBattle').on(); 
                    $('.player1').show();
                    $('.player2').hide();
                    break;

             case 'charBtn3':
                    console.log("chhhooo")
                    $('.startBattle').show();
                    $('.startBattle').on(); 
                    $('.player1').show();
                    $('.player2').hide();
                    $('.pikaBtn').on('click', function (){
                        pikastrike = Math.floor(Math.random() * player[0].power +1 );
            
                        player[2].health -= pikastrike;
                        $('.cHealth').text("Health " + player[2].health);
                       
                        $('.instructions').text("Pikachu used Thunder and took " + player[0].power)
     //-----------------------------------------------------------------------------------------------
     
                         setTimeout(function(){
     
                             sStrike = Math.floor(Math.random() * player[2].power +1 );
             
                             player[0].health -= sStrike;
                             $('.pikaHealth').text("Health " + player[0].health);
         
                             $('.instructions').text("Charmander used Ember and took " + player[2].power)
                                     
                                 }, 1000)
                             
     
                                 if (player[0].health < 0 ){
                                     $('.instructions').text("You Lost");
                                     confirm("you lost play again?");
                                     location.reload();
     
                                 } else{} ;
                                 
                                 if (player[2].health < 0) {
                                     $('#charSelect').hide;
                                 } else {};
                                 
     
                                });
                    






                    
                break;


             case 'bulbBtn':
                    console.log("cbooo")
                    $('.startBattle').show();
                    $('.startBattle').on(); 
                    $('.player1').show();
                    $('.player2').hide();


                    $('.pikaBtn').on('click', function (){
                    pikastrike = Math.floor(Math.random() * player[0].power +1 );
        
                    player[3].health -= pikastrike;
                    $('.bHealth').text("Health " + player[3].health);
                   
                    $('.instructions').text("Pikachu used Thunder and took " + player[0].power)
 //-----------------------------------------------------------------------------------------------
 
                     setTimeout(function(){
 
                         sStrike = Math.floor(Math.random() * player[3].power +1 );
         
                         player[0].health -= sStrike;
                         $('.pikaHealth').text("Health " + player[0].health);
     
                         $('.instructions').text("Bulbasaur used Vine Whip and took " + player[3].power)
                                 
                             }, 1000)
                         
 
                             if (player[0].health < 0 ){
                                 $('.instructions').text("You Lost");
                                 confirm("you lost play again?");
                                 location.reload();
 
                             } else{} ;
                             
                             if (player[3].health < 0) {
                                 $('#bulbSelect').hide;
                             } else {};
                             
 
                            });
                        
                                
 
                         
 
                    
                                 
 
 
 
                
 

                    
                    break;


        };


        




    });

        


    
    

    
});
   


   
       
//when the character is clicked all other players should be disabled



     
       
       
       
        // audioPika.play();
        // audioElement.play();
      
    


    

    // function pikaStart(){
    //    pks ++
    //    // $('.startBattle').show();
    //     //console.log(pks, sqs,bbs,chs);

    //     $('.startBattle').on("click", function(){
            
            
    //     });

    //     $('#bulbSelect').off();
    //     $('#charSelect').off();
    //     $('#squirtSelect').off();
    //     $('.instructions').text("Choose you Opponent!");
    //     $('.charBtn').show;

       
        

        
    // };
    
    // function squirtStart(){
    //      sqs ++
    //     console.log(pks, sqs,bbs,chs);
    //   //  $('.startBattle').show();
    //     //console.log('sq');
    //     $('.startBattle').on("click", function(){
    //         //console.log("texsq");
         
    //     });
    //     $('#bulbSelect').off();
    //     $('#pikaSelect').off();
    //     $('#charSelect').off();
    //     $('.instructions').text("Choose you Opponent!");
    // };

    // function charStart(){
    //      chs ++
    //    // console.log(pks, sqs,bbs,chs);
    //     // $('.startBattle').show();
    //     //console.log('char');
    //     $('.startBattle').on("click", function(){
    //        // console.log("char");
    //     });

    //     $('#bulbSelect').off();
    //     $('#pikaSelect').off();
    //     $('#squirtSelect').off();
    //     $('.instructions').text("Choose you Opponent!");

    // };
    // function bulbStart(){
    //      bbs ++
    //     console.log(pks, sqs,bbs,chs);
    //     // $('.startBattle').show();
    //     console.log('sbulb');
    //     $('.startBattle').on("click", function(){
    //      //   console.log("bulb");
    //     });

    //     $('#pikaSelect').off();
    //     $('#charSelect').off();
    //     $('#squirtSelect').off();
    //     $('.instructions').text("Choose you Opponent!");

    // };

    // $(".charBtn").click(function(){
    //     if( buttonclicked = true ) {
    //        ch.css({
               
    //         border: "solid red"
    //        })
    //        $('.startBattle').show();
    //        $('.squirtBtn').off();
    //         $('.pikaBtn').off();
    //         $('.bulbBtn').off();
    //         $('.instructions').text("BATTLE!");
    //          chs ++;
    //        // console.log(pks, sqs,bbs,chs);
            
    //     }
    // });

    // $(".bulbBtn").click(function(){
    //     if( buttonclicked = true ) {
    //         bb.css({
               
    //             border: "solid green"
    //            })
    //            $('.startBattle').show();
    //            $('.squirtBtn').off();
    //              $('.charBtn').off();
    //              $('.pikaBtn').off();
    //              $('.instructions').text("BATTLE!");
    //         bbs ++;
    //     }
    // });

    // $(".squirtleBtn").click(function(){
    //     if( buttonclicked = true ) {
           
    //         sq.css({
               
    //             border: "solid aqua"
    //            })
    //            $('.startBattle').show();
    //            $('.pikaBtn').off();
    //              $('.charBtn').off();
    //              $('.bulbBtn').off();
    //              $('.instructions').text("BATTLE!");
    //              sqs++;
    //     }
    // });
        
    // $(".pikaBtn").click(function(){
    //     if( buttonclicked = true ) {
           
    //         pk.css({
               
    //             border: "solid brown"
    //            })
    //            $('.startBattle').show();
    //            $('.squirtBtn').off();
    //              $('.charBtn').off();
    //              $('.bulbBtn').off();
    //              $('.instructions').text("BATTLE!");
    //            pks ++;

    //     }
    // });



    // //This start of this code is set up for the different match up scenarios that can occur
    //     $(".startBattle").click(function(){
    //        // console.log(pks,bbs)
          

    //        switch (pks){

    //             case 1:
    //                 if(chs === 1){
    //                     console.log('sq vs pk')
    //                     $ ('.pikaBtn').show();
                        
    //                     pkVsCH();
    //                 } else if (bbs === 1) {
    //                     console.log('bb vs pk')
    //                     $ ('.pikaBtn').show();

    //                     pkVsBb();
    //                 } else if (sqs ===1) {
    //                     console.log('ch vs pk')
    //                     $ ('.pikaBtn').show();
    //                     pkVsSq();
    //                 } else {};

        
                    
    //             break;}

                






    //          switch(sqs){

    //             case 1:
    //                     if(pks === 1){
    //                         $ ('.squirtleBtn').show();
    //                         console.log('sq vs pk')
    //                     } else if (bbs === 1) {
    //                         $ ('.squirtleBtn').show();
    //                         console.log('bb vs sq')
    //                     } else {
    //                         $ ('.squirtleBtn').show();
    //                         console.log('ch vs sq')
    //                     };
    //                     break;
    //                 }

               
                    
    //                 switch(bbs){

    //                     case 1:
    //                             if(pks === 1){
    //                                 $('.bulbBtn').show();
    //                                 console.log('bb vs pk')
    //                             } else if (sqs === 1) {
    //                                 $('.bulbBtn').show();
    //                                 console.log('bb vs sq')
    //                             } else {
    //                                 $('.bulbBtn').show();
    //                                 console.log('ch vs sq')
    //                             };
    //                             break;
    //                         }
                        
    //              switch(chs){

    //                 case 1:
    //                      if(pks === 1){
    //                          console.log('chs vs pk')
    //                          } else if (sqs === 1) {
    //                         console.log('chs vs sq')
    //                         } else {
    //                          console.log('ch vs bb')
    //                                     };
    //                      };

                                

                        
                     
           



    //  });
    
    // function pkVsCH(){
    // //    $ ('.pikaBtn').show;
    // //    $('.pikaBtn').text("Thunder Attack");
    // $('.pikaBtn').text("Thunder Attack");
    //    $('.pikaBtn').click(function(){
        
    //     if(pika.health > 0){



    //    let pikaStrike = Math.floor(Math.random() * pika.power );
        
    //    charmander.health -= pikaStrike;
    //    cHealth.text("Health " + charmander.health);
    //    $ ('.pikaBtn').hide;
    //    $('.instructions').text("Pikachu used Thunder and took " + pikaStrike)
    //    $ ('.pikaBtn').off;
    //    setTimeout(function(){
     
    //     let CharStrike = Math.floor(Math.random() * charmander.power );
    //     pika.health -= CharStrike;
    //     pHealth.text("Health " + pika.health);
    //     $('.instructions').text("Charmander used Ember and took " + CharStrike)
        
    //    } ,1000)
    //    $ ('.pikaBtn').on;


    // } else if (pika.health < 0){
    //     $('.instructions').text("YOU LOST! PLAY AGAIN?");


    // } else{}
    
    // if (charmander.health < 0 ) {
    //     $('.instructions').text("win");
    //     char.hide();
    //     $('.squirtBtn').on();
    //     $('.bulbBtn').on();
    //     $('.pikaBtn').off();

    //     $('.instructions').text("Choose another Opponent")
    //     return;

    // } else{

    // }


      

    //    })};

    //    function pkVsSq(){
    //     //    $ ('.pikaBtn').show;
    //     //    $('.pikaBtn').text("Thunder Attack");
    //     $('.pikaBtn').text("Thunder Attack");
    //        $('.pikaBtn').click(function(){
            
    //         if(pika.health > 0){



    //        let pikaStrike = Math.floor(Math.random() * pika.power );
            
    //        squirt.health -= pikaStrike;
    //        sHealth.text("Health " + squirt.health);
    //        $ ('.pikaBtn').hide;
    //        $('.instructions').text("Pikachu used Thunder and took " + pikaStrike)
    //        $ ('.pikaBtn').off;
    //        setTimeout(function(){
            
            
        

    //         let squirtStrike = Math.floor(Math.random() * squirt.power );
    //         pika.health -= squirtStrike;
    //         pHealth.text("Health " + pika.health);
    //         $('.instructions').text("Squirtle used WaterGun and took " + squirtStrike)
            
    //        } ,1000)
    //        $ ('.pikaBtn').on;


    //     } else if (pika.health < 0){
    //         $('.instructions').text("loser");


    //     } else{}
        
    //     if (squirt.health < 0 ) {
    //         $('.instructions').text("win");
    //         squirtle.hide();
    //         $('.charBtn').on();
    //         $('.bulbBtn').on();
    //         $('.pikaBtn').off();
            

    //         $('.instructions').text("Choose another Opponent")
    //         return;

    //     } else{

    //     }


          

    //        })};


    //        function pkVsBb(){
    //         //    $ ('.pikaBtn').show;
    //         //    $('.pikaBtn').text("Thunder Attack");
    //         $('.pikaBtn').text("Thunder Attack");
    //            $('.pikaBtn').click(function(){
                
    //             if(pika.health > 0){



    //            let pikaStrike = Math.floor(Math.random() * pika.power );
                
    //            bulbasaur.health -= pikaStrike;
    //            bHealth.text("Health " + bulbasaur.health);
    //            $ ('.pikaBtn').hide;
    //            $('.instructions').text("Pikachu used Thunder and took " + pikaStrike)
    //            $ ('.pikaBtn').off;
    //            setTimeout(function(){
                
                
            

    //             let BulbStrike = Math.floor(Math.random() * bulbasaur.power );
    //             pika.health -= BulbStrike;
    //             pHealth.text("Health " + pika.health);
    //             $('.instructions').text("Bulbasaur used Vine Whip and took " + BulbStrike)
                
    //            } ,1000)
    //            $ ('.pikaBtn').on;


    //         } else if (pika.health < 0){
    //             $('.instructions').text("loser");


    //         } else{}
            
    //         if (bulbasaur.health < 0 ) {
    //             $('.instructions').text("win");
    //             bulb.hide();
    //             $('.squirtBtn').on();
    //             $('.charBtn').on();
    //             $('.pikaBtn').off();

    //             $('.instructions').text("Choose another Opponent")
    //             return;

    //         } else{

    //         }


              

    //            })};

   

                //* The player must then defeat all of the remaining fighters. Enemies should be moved to a different area of the screen.



                // The player chooses an opponent by clicking on an enemy's picture.



                //* Once the player selects an opponent, that enemy is moved to a `defender area`.



                //* The player will now be able to click the `attack` button.


                //* Whenever the player clicks `attack`, their character damages the defender. The opponent will lose `HP` (health points). These points are displayed at the bottom of the defender's picture. 


                //* The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their `HP`. These points are shown at the bottom of the player character's picture.

                //3. The player will keep hitting the attack button in an effort to defeat their opponent.

                //* When the defender's `HP` is reduced to zero or below, remove the enemy from the `defender area`. The player character can now choose a new opponent.

                //4. The player wins the game by defeating all enemy characters. The player loses the game the game if their character's `HP` falls to zero or below.
            