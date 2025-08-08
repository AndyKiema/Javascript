function toggleGamingButton(){
  const gamingButton=document.querySelector('.gaming-button');

  if(gamingButton.classList.contains('isToggled')){
    gamingButton.classList.remove('isToggled');
  }else{
    gamingButton.classList.add('isToggled');
  }
}

function toggleMusicButton(){
  const musicButton=document.querySelector('.music-button');

  if(musicButton.classList.contains('isToggled')){
    musicButton.classList.remove('isToggled');
  }else{
    musicButton.classList.add('isToggled');
  }
}
  
function toggleTechButton(){
  const techButton=document.querySelector('.tech-button');

  if(techButton.classList.contains('isToggled')){
    techButton.classList.remove('isToggled');
  }else{
    techButton.classList.add('isToggled');
  }
}   