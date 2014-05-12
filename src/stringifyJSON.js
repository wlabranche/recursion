// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var result = '';
  var parse = function(item){
    var count = 0;
    if (Array.isArray(item)){
      result += '[';
      for (var i = 0; i < item.length; i++){
        if (count >= 1) {result += ',';}
        parse(item[i]);
        count++;
      }
      result += ']';
    }else if (typeof item === 'string'){
      result += '"' + item + '"';
    }else if (item === null){
      result += null;
    }else if(typeof item === 'object'){
      result += '{';
      for (var key in item){
        if (typeof item[key] !== 'undefined' && typeof item[key] !== 'function'){
          if (count >= 1) {result += ',';}
          result += '"' + key + '":';
          parse(item[key]);
        }
        count++;
      }
      result += '}';
    }else{
      result += item;
    }
    count++;
  };
  parse(obj);
  return result;
};
