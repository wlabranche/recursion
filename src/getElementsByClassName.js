// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(target){
  var result = [];

  var search = function(node){
    if (node.classList && node.classList.contains(target)){
      console.log(node.classList);
      console.log(node.classList.contains(target));
      result.push(node);
    }
    if (node.childNodes){
      for (var i = 0; i < node.childNodes.length; i++){
        search(node.childNodes[i]);
      }
    }
  };
  search(document.body);
  console.log(result);
  return result;
};
