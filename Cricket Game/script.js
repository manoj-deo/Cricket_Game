
document.onkeydown= function(e){
  console.log("key code is: ",e.keyCode);
  bowl=document.querySelector('.bowl');
  player=document.querySelector('.player1');
  gameOver=document.querySelector('.gameOver');
  gameWin=document.querySelector('.gameWin');
  hitbowl=document.querySelector('.hitbowl');
  hitbowlAnimate=document.querySelector('.hitbowlAnimate');
  dx=parseInt(window.getComputedStyle(bowl, null).getPropertyValue('left'));
  ox=parseInt(window.getComputedStyle(player, null).getPropertyValue('left'));
  diff=Math.abs(dx-ox);
  if(e.keyCode==32){
    console.log(dx);
    console.log(ox);
    console.log(diff);
    if(diff>=160){
      console.log("yes");
      gameOver.style.visibility='visible';
      bowl.style.visibility='hidden';
    }
    else if(diff<100){
      gameOver.style.visibility='visible';
      bowl.style.visibility='hidden';
    }
    else{
      bowl.style.visibility='hidden';
      hitbowl.style.visibility='visible';
      hitbowl.classList.add('hitbowlAnimate');
      gameWin.style.visibility='visible';
    }
  }
  else if(e.keyCode==13){
    hitbowl=document.querySelector('.hitbowl');
    hitbowl.style.visibility='hidden';
  }
  else{
    gameOver.style.visibility='visible';
    bowl.style.visibility='hidden';
  }
}
