
        let score=JSON.parse(localStorage.getItem('score')); 

        if(!score){//Checks if score object is non-existent and assigns zeros to its keys if it is non-existent
          score={
            wins:0,
            losses:0,
            ties:0
          }
        }

        function updateScore(){
          document.querySelector(".js-score").innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        updateScore();
         
        let computerMove='';

        function pickComputerMove(){
          const randomNumber=Math.random();
          if(randomNumber>=0 && randomNumber < 1/3){
           computerMove='rock';
          }else if(randomNumber>=1/3 && randomNumber < 2/3){
            computerMove='paper';
          }else{
            computerMove='scissors';
          }
        }

        let result='';
        function compareMoves(playerMove){ 
          if(playerMove==='scissors'){
           if(computerMove=='rock'){
            result='You lose';
           }else if(computerMove=='paper'){
            result='You win';
           }else if(computerMove=='scissors'){
            result='It is a tie';
           }
          }
          if(playerMove==='paper'){
            if(computerMove=='rock'){
             result='You win';
            }else if(computerMove=='paper'){
             result='It is a tie';
            }else if(computerMove=='scissors'){
             result='You lose';
            }
          }
          if(playerMove==='rock'){
            if(computerMove=='rock'){
             result='It is a tie';
            }else if(computerMove=='paper'){
             result='You lose';
            }else if(computerMove=='scissors'){
             result='You win';
            }
          }
          if(result==='You win'){
            score.wins++;
          }else if(result==='You lose'){
            score.losses++;
          }else if(result==='It is a tie'){
            score.ties++;
          }
          
          localStorage.setItem('score', JSON.stringify(score));

          updateScore();    
        }

        function showMoves(playerMove){
          if(playerMove==='rock'){
           document.querySelector(".js-moves").innerHTML=`You picked <img src='./Images/rock-emoji.png' class='move-emoji'> - Computer picked <img src='./Images/${computerMove}-emoji.png' class='move-emoji'>`;
          }else if(playerMove==='paper'){
            document.querySelector(".js-moves").innerHTML=`You picked <img src='./Images/paper-emoji.png' class='move-emoji'> - Computer picked <img src='./Images/${computerMove}-emoji.png' class='move-emoji'>`; 
          }else if(playerMove==='scissors'){
            document.querySelector(".js-moves").innerHTML=`You picked <img src='./Images/scissors-emoji.png' class='move-emoji'> - Computer picked <img src='./Images/${computerMove}-emoji.png' class='move-emoji'>`;  
          }  
        }

        function showResults(){
          document.querySelector(".js-result").innerHTML=`${result}`;
        }

