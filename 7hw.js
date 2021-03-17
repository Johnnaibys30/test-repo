let numArray = [9,12,3,0,8,50,101,8,4,15,3,2];

function multiply10(arr){
    let multipliedArray = []
    for(let i = 0; i < arr.length; i ++){
        multipliedArray.push(arr[i] * 10);
    }
    return multipliedArray;
    }
    console.log(multiply10(nymArray));
}

console.log(multiply10(numArray));
