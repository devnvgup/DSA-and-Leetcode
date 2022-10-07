/**
 * @param {number[]} arr
 * @return {string}
 */
 var largestTimeFromDigits = function(arr) {
    let isCondition=false
    let isCondition1=false
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            isCondition=true
        }else{
            isCondition=false
        }
    }
    if(isCondition1){
        return ""
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=3){
            isCondition=true
        }else{
            isCondition=false
        }
    }
    if(isCondition){
        return "00:00"
    }
    let res=[]
    let final=[]
    let k=arr.length-1
    for(let i=0;i<arr.length;i++){
       if(arr.includes(2)){
            have2=true
           res.push(2)
           arr.splice(arr.indexOf(2),1)
           k--
           while(k>=0){
            if(arr[k]<4){
                res.push(arr[k])
                arr.splice(k,1)
                break
            }else{
                k--
            }
           }
           arr.sort((a,b)=>b-a)
           final=[...res,":",...arr] 
           return final.join("")
       }else if(arr.includes(1)){
        console.log(113)
            res.push(1)
            arr.splice(arr.indexOf(1),1)
            while(k>=0){
                if(arr[k]<3){
                    res.push(arr[k])
                    arr.splice(k,1)
                    break
                }else{
                    k--
                }
               }
               arr.sort((a,b)=>b-a)
               final=[...res,":",...arr] 
               return (final.join(""))
       }
    }
};

largestTimeFromDigits([1,2,3,4])