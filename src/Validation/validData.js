export function isValidDate(val){
    let arr = val.split(':')
    if(arr.length !== 3){
        arr = val.split('-')
    }
    arr = arr.map(a=>Number(a))
    const [year , month , date]  = arr
    
    const currDate = new Date().getDate()
    const currMonth = new Date().getMonth() + 1
    const currYear = new Date().getFullYear()
    
    if(year < currYear) return false
    if(year == currYear && Number(month) < currMonth) return false
    if(year == currYear && month == currMonth && currDate > date) return false

    const isStr = /^[a-zA-Z]*$/
    
    if(isStr.test(val)) return false
    return true
    
}






export function isToday(val){
    let arr = val.split(':')
    if(arr.length !== 3){
        arr = val.split('-')
    }
    console.log(arr);
    const [year , month , date]  = arr
    const currDate = new Date().getDate()
    const currMonth = new Date().getMonth() + 1
    const currYear = new Date().getFullYear()

    if(year == currYear && month == currMonth && currDate == date) return true

    return false

}




export function isValidTime(start , end){
    let arr1 = start.split(':')
    if(arr1.length == 1){
        arr1 = start.split('-')
    }
    
    let arr2 = end.split(':')
    if(arr2.length == 1){
        arr2 = end.split('-')
    }
    arr1 = arr1.map(a=>Number(a))
    arr2 = arr2.map(a=>Number(a))
    console.log(arr1, arr2);
    let [startHour , startMin , startSecond]  = arr1
    let [endHour , endMin , endSecond]  = arr2

    if(startHour > endHour && startHour <= 12) return false
    if(startHour > 12 ){
        let ans = startHour - 12
        if(ans > endHour && endHour < 12) return false
        if (ans > endHour && endHour > 12 && ans > endHour - 12) return false

    }
    if(startHour == endHour && startMin >= endMin)  return false    

    const currHor = new Date().getHours()
    console.log(currHor);
    const currMint = new Date().getMinutes()
    
    if(currHor > startHour) return false

    return true 
}

