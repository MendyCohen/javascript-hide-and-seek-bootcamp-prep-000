function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target');

}

function increaseRankBy(n) {
  var increase = document.getElementsByClassName('ranked-list');
   for(var i = 0; i < increase.length; i++) {
    increase[i].innerHTML = parseInt(i + n); 
    
  } 
}

function deepestChild() {
 var deep = document.querySelectorAll('#grand-node');
 for(var i = 0; i < deep.length; i++) {
     return deep[i].length-1; 
   
 }
}

