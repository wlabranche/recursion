// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj){
    //non-recursive cases
    if (typeof obj === 'number' || typeof obj === 'boolean'){
        return obj + '';
    }else if (typeof obj === 'string'){
        return '"' + obj + '"';
    }else if (obj === null){
        return null + '';
    }
    
    var result = [];
    
    if (typeof obj === 'object'){
        if (Array.isArray(obj)){
            for (var i = 0 ; i < obj.length; i++){
                if (typeof obj[i] !== 'function' && typeof obj[i] !== 'undefined'){
                    result.push(stringifyJSON(obj[i]));
                }
            }
            return '[' + result.join(',') + ']';
        }else{
            for (var key in obj){
                if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
                result.push(
                '"' +key + '":' + stringifyJSON(obj[key]) + '');
                }
            }
            return '{' + result.join(',') + '}';
        }
    }
};
