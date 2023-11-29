let score= JSON.parse(localStorage.getItem('score'))||{
  wins:0,
  losses:0,
  ties:0
};


//  if(!score){
//   score={
//     wins:0,
//     losses:0,
//     ties:0
//   };
//  }

//  getItem method  get a value out of localStorage

  updateScoreElement();

 
  // console.log(document.querySelector('.js-result').innerHTML=(`${result}`));
 function playGame(playerMove){
  const computerMove= pickComputerMove();
  document.querySelector('.js-moves')
  .innerHTML=`you
  <img src="images/${playerMove}-emoji.png" 
  class="move-icon">
  <img src="images/${computerMove}-emoji.png"
   class="move-icon">
  computer`;
    let result='';
    if(playerMove==='scissor'){
      if(computerMove === 'rock'){
        result='you loose';
      
    }else if(computerMove==='paper'){
      result='you win';

    }else if(computerMove==='scissor'){
      result='Tie';
    }
  
   
    }else if(playerMove==='paper'){
     
        if(computerMove=== 'rock'){
            result='you win';
          
        }else if(computerMove==='paper'){
          result='Tie';

        }else if(computerMove==='scissor'){
          result='you loose';
        }
        // console.log(result);
       
    }else if(playerMove==='rock'){
    
      if(computerMove === 'rock'){
          result='Tie';
        
      }else if(computerMove==='paper'){
        result='you loose';

      }else if(computerMove==='scissor'){
        result='you win';
      }
     
     
    }
   
    if(result==='you win'){
        score.wins += 1;
      }else if(result==='you loose'){
        score.losses+=1;
      }else if(result==='Tie'){
        score.ties+=1;
      }

      localStorage.setItem('score',JSON.stringify(score));
      updateScoreElement();

    // console.log(result);
    console.log(document.querySelector('.js-result').innerHTML=(`${result}.`));
   
   
 }
 function updateScoreElement(){
  document.querySelector('.js-score')
.innerHTML=`wins:${score.wins},losses:${score.losses},Ties:${score.ties}`;
 }
function pickComputerMove(){

  const randomNumber=Math.random();
  let computerMove= '';
 
  if(randomNumber>=0&&randomNumber<1/3){
    
    computerMove ='rock';

  }else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove ='paper';
  }else if(randomNumber>=2/3 && randomNumber<1){
    computerMove ='scissor';
  }
  return computerMove;
  console.log(computerMove);
}
  
