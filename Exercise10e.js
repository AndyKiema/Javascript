let gamingButton;
function toggleGamingButton(){
   gamingButton=document.querySelector('.gaming-button');
   if(gamingButton.classList.contains('isToggled')){
      gamingButton.classList.remove('isToggled');
   }else{
      gamingButton.classList.add('isToggled');
   } 
}

let musicButton;
function toggleMusicButton(){
   musicButton=document.querySelector('.music-button');
   if(musicButton.classList.contains('isToggled')){
      musicButton.classList.remove('isToggled');
   }else{
    musicButton.classList.add('isToggled');
  }
}

let techButton;
function toggleTechButton(){
  techButton=document.querySelector('.tech-button');
  if(techButton.classList.contains('isToggled')){
    techButton.classList.remove('isToggled');
  }else{
    techButton.classList.add('isToggled');
  } 
}   

function disableGamingTech(){
  if(gamingButton.classList.contains('isToggled')||techButton.classList.contains('isToggled')){
    gamingButton.classList.remove('isToggled');
    techButton.classList.remove('isToggled')
  }
}

function disableMusicTech(){
  if(musicButton.classList.contains('isToggled')||techButton.classList.contains('isToggled')){
    musicButton.classList.remove('isToggled');
    techButton.classList.remove('isToggled')
  }
}

function disableGamingMusic(){
  if(gamingButton.classList.contains('isToggled')||musicButton.classList.contains('isToggled')){
    gamingButton.classList.remove('isToggled');
    musicButton.classList.remove('isToggled')
  }
}