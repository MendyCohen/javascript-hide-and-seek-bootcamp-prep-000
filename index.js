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
 var deep = document.querySelectorAll('#grand-node > div');
 for(var i = 0; i < deep.length; i++) {
     if(i === deep.length-1){
      return deep[i]; 
       
     }
  }
}

function findchildren(node){
  //findchildren
  //if children
       //foreach child findchildren(child)
  //else return node
}