class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
    console.log("error1");
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   async start(){
    if(gameState === 0){
      console.log("error");
      question = new Question()
      question.display();
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      
      
    }
  }

  play(){
    //write code here to hide question elements
    title.hide();
    input1.hide();
    input2.hide();
    button.hide();
    


    //write code to change the background color here

    background("yellow");


   
    

    //write code to show a heading for showing the result of Quiz
    textSize(30);
    text("Result of the Quiz",350,0);

    //call getContestantInfo( ) here
      Contestant.getContestantInfo();

    if(allContestants!=undefined){
      fill("blue");
      textSife(20);
      text("NOTE: The contestant who answered correct their name is highlighted in green color",130,230);

      var displayAns=250;

      for(plr in allContestants){
        var correctAnswer="2";
        if(correctAnswer === allContestants[plr].answer){
          fill("Green");
        }
        else {
          fill("red");
        }
        displayAns+=30;
        textSize(25);
        text(allContestants[plr].name+ ":"+ allContestants[plr].answer,50, displayAns);
      }

    }


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
    
  }

}
