document.addEventListener('DOMContentLoaded', (event) => {
  let light = document.getElementById('circle');
  let eject = document.getElementById('photo');
  let button = document.getElementById('button');

  button.addEventListener('click', () => {
      light.classList.remove('flash-animation');
      eject.classList.remove('eject-photo');
      setTimeout(function(){
          light.classList.add('flash-animation');
          eject.classList.add('eject-photo');
      }, 100);
  });
});
