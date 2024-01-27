let number = 0 ;

document.getElementById('increase').onclick = function () {
  
  number += 1 ;
  number = Number(number) ;
  
  document.getElementById('number').innerHTML = number ;
}