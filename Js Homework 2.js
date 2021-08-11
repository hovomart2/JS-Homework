function task1(array, value){
    output = []
	output = array.filter(e => e > value)
    return output.length === 0? "Such values do not exist." : output
}

function task2(value1 ,value2){
    let output = ""
    for(let i = value1 + 1 ; i<= value2; i++){
        if(isAllEven(i)){
            output += i + ','
        }
    }
    return output === "" ? "Such numbers does not exist." : output.slice(0,-1)
}

function isAllEven(value){
    while(true){
        if(value%2===1){
            return false
        }
        if(value.toString().length === 1){
            break
        }
        value = Math.floor(value / 10)
    }
    return true
}

function task3(value){
    let stop = false
    if(value.toString().length === 1){
        stop = true
    }
    if(value%2 === 0){
        return false
    }
    if(stop === false){
        return task3(Math.floor(value/10))
    }
    return true
}

let minPositive = Infinity
function task4(array){
    if(array.length === 0){
        if(minPositive === Infinity){
            return -1
        }
        return minPositive
    }
    if(minPositive > array[0] && array[0] > 0){
        minPositive = array[0]
    }
    array.shift()
    return task4(array)
}

