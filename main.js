let number = 0 ;

document.getElementById('increase').onclick = function () {
  
  number += 1 ;
  number = Number(number) ;
  
  document.getElementById('number').innerHTML = number ;
}

document.getElementById('reset').onclick = function () {
  
  number = 0 ;
  number = Number(number) ;
  
  document.getElementById('number').innerHTML = number ;
}

document.getElementById('decrease').onclick = function () {
  
  number -= 1 ;
  number = Number(number) ;
  
  document.getElementById('number').innerHTML = number ;
}