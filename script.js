'use strict'
function maxSide(sticks,polygonNumber){
    let dividedSticks=[];
    sticks.forEach(stick => {
        for(let i=1;i<=polygonNumber;i++){
        dividedSticks.push(stick/i)
        }
    });
    function sort(array){
        for(let j=0;j<array.length-1;j++){
        for(let i=0;i<array.length-1;i++){
            if(array[i]<array[i+1]){
                [array[i],array[i+1]]=[array[i+1],array[i]]
            }
        }
    }
    }
    sort(dividedSticks)
    console.log(dividedSticks)
    let answer=0
        let j=0
        while(j<dividedSticks.length){
        let dividedStick=dividedSticks[j]
        let makeSticksNumber=0
        let i=0
        while(i<sticks.length){
            let stick=sticks[i]
            console.log(dividedStick)
                makeSticksNumber += Math.floor(stick/dividedStick)    
            if(makeSticksNumber>=polygonNumber){
                answer=dividedStick
                break;
            }
            i++
        }
        if(answer!=0){
            break;
        }
        j++
    };
    return answer;
}

let sticks=[10,9,8,7,6,5]
let polygonNumber=8
console.log(maxSide(sticks,polygonNumber))