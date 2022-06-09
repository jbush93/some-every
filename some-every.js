// hasOddNumber
function hasOddNumber(arr){
    return arr.some(function(m){
        return m % 2 !== 0;
    })
}

// hasAZero
function hasAZero(arr){
    return arr.some(function(m){
        return m === 0;
    })
}

// hasOnlyOddNumbers
function hasOnlyOddNumbers(arr){
    return arr.every(function(m){
        return m % 2 !== 0;
    })
}

function hasNoDuplicates(arr){
    return arr.every(function(m){
      return arr.indexOf(m) === arr.lastIndexOf(m);
    });
  }
  
  function hasCertainKey(arr, key){
    return arr.every(function(m){
      return key in m;
    })
  }
  
  function hasCertainValue(arr, key, searchVal){
    return arr.every(function(m){
      return m[key] === searchVal;
    })
  }

