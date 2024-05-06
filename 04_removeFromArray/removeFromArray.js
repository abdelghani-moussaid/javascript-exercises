const removeFromArray = function(array, ...elements) {
    for(let i = 0; i < elements.length; i++) {
        let index = array.indexOf(elements[i]);
        while(index != -1){
            array.splice(index, 1);
            index = array.indexOf(elements[i]);
        }
    }
    return array;
    
};

// Do not edit below this line
module.exports = removeFromArray;
